import SettingsKeys from './modules/settings/settings-keys';

export default class Widget {
  constructor(name, manager, elementType) {
    this.name = name;
    this.manager = manager;
    this.data = this.manager.data;
    this.settings = this.manager.settings;
    this.widgetElement = document.createElement(elementType || 'div');

    if (this.init) {
      this.init();
    }
    this._render();

    if (this.start) {
      this.start();
    }

    this.handleVisability(this.settings.get(`${this.name}.${SettingsKeys.Visible}`));
  }

  initSetting(key, defaultValue, settingsObject, onChangeCallback) {
    let callbacks = [];
    if (onChangeCallback) callbacks.push(onChangeCallback);
    if (settingsObject) callbacks.push((property, value) => settingsObject.updateValue(value));
    this.settings.register(this.name, key, defaultValue, settingsObject, (name, property, value) => this._settingsChanged(name, property, value, callbacks));
  }

  getSettings(key) {
    return this.settings.get(`${this.name}.${key}`);
  }

  setSettings(key, value) {
    this.settings.set(`${this.name}.${key}`, value);
  }

  _render() {
    if (!this.widgetElement) return;
    if (this.render)
		this.render();
  }

  _settingsChanged(name, property, value, callbacks) {

    if (property === SettingsKeys.Visible) {
      this.handleVisability(value);
    }

    for (let callback of callbacks) {
      if (callback)
        callback(property, value);
    }
  }

  handleVisability(value) { // handle visability
    if (typeof value === 'undefined' || value === true) {
      this.showWidget('');
    } else {
      this.showWidget('none');
    }
  }

  showWidget(style) {
    if (this.widgetElement) this.widgetElement.style.display = style;
  }
}
