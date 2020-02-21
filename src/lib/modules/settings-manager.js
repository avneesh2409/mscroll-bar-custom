import StorageManager from './storage-manager';
import Stats from '../stats';

export default class SettingsManager {
  constructor() {
    this.settings = JSON.parse(StorageManager.get(StorageManager.keys.settings) || '{}');
  }

  register(section, property, defaultvalue, settingsObject, callback) {
    this.registerSection(section);
    this.registerProperty(section, property, {default: defaultvalue, obj: settingsObject, callback: callback});

    if (settingsObject)
      settingsObject.setSettingsKey(this, `${section}.${property}`);
  }

  registerSection(section) {
    if (!this.settings[section]) {
      this.settings[section] = {};
      this.store();
    }
  }

  registerProperty(section, property, settings) {
    if (!this.settings[section][property]) {
      this.settings[section][property] = {
        value: typeof settings.default === 'undefined' ? "" : settings.default,
        settings: settings
      };
    } else {
      this.settings[section][property].settings = settings;
    }

    // TODO: validate value

    this.store();
  }

  store() {
    StorageManager.set(StorageManager.keys.settings, this.purifySettings());
  }

  purifySettings() {
    let copy = {};
    for (let section in this.settings) {
      copy[section] = {};
      for (let property in this.settings[section]) {
        copy[section][property] = {value: this.settings[section][property].value};
      }
    }
    return JSON.stringify(copy)
  }

  getAll() {
    return this.settings;
  }

  get(key) {
    if (key.indexOf('.') === -1) {
      return undefined;
    }
    let section = key.split('.')[0];
    if (!this.settings[section]) {
      return undefined;
    }

    let property = key.split('.')[1];
    if (!this.settings[section][property]) {
      return undefined;
    }

    return this.settings[section][property].value;
  }

  set(key, value) {
    if (key.indexOf('.') === -1) {
      return undefined;
    }
    let section = key.split('.')[0];
    if (!this.settings[section]) {
      return undefined;
    }

    let property = key.split('.')[1];
    if (!this.settings[section][property]) {
      return undefined;
    }

    this.settings[section][property].value = value;

    Stats.event("tbz_settingchanged", section, property, value);

    this.store();
    if (this.settings[section][property].settings.callback) {
      this.settings[section][property].settings.callback(section, property, value);
    }
    return value;
  }
}
