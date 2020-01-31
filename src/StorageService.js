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

      this._styles = [];
      this._matches = [];

      //this.getSavedData();
      //this.overrideFoodData();
      this.overrideGoogleData();

       this.getStorage('styles').then(styles => {
        this._styles = styles;
        return this.getStorage('matches').then(matches => {
          requiresSync = false;
          this._matches = matches;
          return instance;
        });
      }).then(() => {
        document.dispatchEvent(
          new CustomEvent('storage-initialized', {
            detail: {
              styles: this._styles,
              matches: this._matches
            },
          })
        );
      });
    }
  }

  getSavedData() {
    this._styles = BaseData.styles;
    this._matches = BaseData.matches;
  }

  overrideFoodData() {
    this.styles = FoodData.styles;
    this.matches = FoodData.matches;
  }

  overrideGoogleData() {
    this.styles = GoogleData.styles;
    this.matches = GoogleData.matches;
  }

  syncData() {
    console.log('sync data with chrome');
  }

  get styles() {
    return this._styles;
  }

  set styles(data) {
    requiresSync = true;
    this.setStorage({ styles: data }).then(() => {
      requiresSync = false;
      console.log('styles updated');
      this._styles = data;
    });
  }

  get matches() {
    return this._matches;
  }

  set matches(data) {
    requiresSync = true;
    this.setStorage({ matches: data }).then(() => {
      requiresSync = false;
      console.log('matches updated');
      this._matches = data;
    });
  }

  getStyles() {
    return new Promise((resolve) => {
      if (requiresSync) {
        chrome.storage.sync.get(['styles'], function(result) {
          resolve(result['styles']);
        });
      }
      else {
        resolve(this._styles);
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
        resolve(this._matches.filter(match => match.active));
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
        resolve(this._styles.find(style => style.name === name));
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
      new CustomEvent('storage-changed', {
        detail: {
          key,
          value: storageChange.newValue,
        },
      })
    );
  }
});

export default StorageService;
