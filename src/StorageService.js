let instance = null;
let requiresSync = false;

const emptyStyle = {
  id: 'empty',
  css: '',
  name: 'empty'
};

class StorageService {
  constructor() {
    requiresSync = true;
    if (!instance) {
      instance = this;

      this.styles = [];
      this.matches = [];
    }

    return instance;
  }

  async getStyles(forceUpdate) {
    if(requiresSync || forceUpdate) {
      return storageGet('styles').then(styles => {
        requiresSync = false;
        return this.styles = styles;
      });
    } else {
      return Promise.resolve(this.styles);
    }
  }

  async setStyles(styles) {
    requiresSync = true;
    return storageSet({ styles: styles }).then(() => {
      requiresSync = false;
      return this.styles = styles;
    });
  }

  async getMatches(forceUpdate) {
    if(requiresSync || forceUpdate) {
      return storageGet('matches').then(matches => {
        requiresSync = false;
        return this.matches = matches;
      });
    } else {
      return Promise.resolve(this.matches);
    }
  }

  async setMatches(matches) {
    requiresSync = true;
    return storageSet({ matches: matches }).then(() => {
      requiresSync = false;
      return this.matches = matches;
    });
  }

  async getActiveMatches(forceUpdate) {
    return this.getMatches(forceUpdate)
      .then(matches => matches.filter(match => match.active));
  }

  async getStyleById(id, forceUpdate) {
    return this.getStyles(forceUpdate)
      .then(styles => styles.find(style => style.id === id) || emptyStyle);
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

async function storageGet(key) {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], function(result) {
      resolve(result[key] || []);
    })
  })
}

async function storageSet(obj) {
  return new Promise((resolve) => {
    chrome.storage.sync.set(obj, function() {
      resolve();
    });
  });
}

export default StorageService;
