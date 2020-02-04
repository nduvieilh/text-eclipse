import BaseData from './BaseData.json';
import FoodData from './FoodData.json';
import GoogleData from './GoogleData.json';
let instance = null;
let requiresSync = false;

class StorageService {
  constructor() {
    requiresSync = true;
    if (!instance) {
      instance = this;

      this.styles = [];
      this.matches = [];

      this.getData();
    }

    return instance;
  }

  getData() {
    let promise = Promise.all([
      this.getStorage('styles'),
      this.getStorage('matches')
    ]).then((results) => {
      requiresSync = false;

      this.styles = results[0];
      this.matches = results[1];
      
      document.dispatchEvent(
        new CustomEvent('storage-initialized', {
          detail: {
            styles: this.styles,
            matches: this.matches
          },
        })
      );
    });

    return promise;
  }

  // get styles() {
  //   return this.styles;
  // }

  // set styles(data) {
  //   requiresSync = true;
  //   this.setStorage({ styles: data }).then(() => {
  //     requiresSync = false;
  //     console.log('styles updated');
  //     this.styles = data;
  //   });
  // }

  // get matches() {
  //   return this.matches;
  // }

  // set matches(data) {
  //   requiresSync = true;
  //   this.setStorage({ matches: data }).then(() => {
  //     requiresSync = false;
  //     console.log('matches updated');
  //     this.matches = data;
  //   });
  // }
  setStyles(styles) {
    requiresSync = true;
    this.setStorage({ styles: styles }).then(() => {
      requiresSync = false;
      this.styles = styles;
    });
  }

  setMatches(matches) {
    requiresSync = true;
    this.setStorage({ matches: matches }).then(() => {
      requiresSync = false;
      this.matches = matches;
    });
  }

  getStyles() {
    return new Promise((resolve) => {
      if (requiresSync) {
        chrome.storage.sync.get(['styles'], (result) => {
          this.styles = result['styles'];
          resolve(this.styles);
        });
      }
      else {
        resolve(this.styles);
      }
    });
  }

  getMatches() {
    return new Promise((resolve) => {
      if (requiresSync) {
        chrome.storage.sync.get(['matches'], (result) => {
          this.matches = result['matches'];
          resolve(this.matches);
        });
      }
      else {
        resolve(this.matches);
      }
    });
  }

  getActiveMatches() {
    return new Promise((resolve) => {
      if (requiresSync) {
        chrome.storage.sync.get(['matches'], function(result) {
          resolve(result['matches'].filter(match => match.active));
        });
      }
      else {
        resolve(this.matches.filter(match => match.active));
      }
    });
  }

  getStyleByName(name) {
    return new Promise((resolve) => {
      if (requiresSync) {
        chrome.storage.sync.get(['styles'], function(result) {
          resolve(result['styles'].find(style => style.name === name));
        });
      }
      else {
        resolve(this.styles.find(style => style.name === name));
      }
    });
  }

  setStorage(keyValueObject) {
    return new Promise((resolve) => {
      chrome.storage.sync.set(keyValueObject, function() {
        resolve();
      });
    });
  }

  getStorage(key) {
    return new Promise((resolve) => {
      chrome.storage.sync.get([key], function(result) {
        resolve(result[key]);
      });
    });
  }
}

chrome.storage.onChanged.addListener(function(changes) {
  for (var key in changes) {
    var storageChange = changes[key];
    document.dispatchEvent(
      new CustomEvent(key+'-changed', storageChange)
    );
  }
});

export default StorageService;
