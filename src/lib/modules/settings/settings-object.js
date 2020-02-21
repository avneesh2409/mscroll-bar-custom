export default class SettingsObject {
  setSettingsKey(settings, key) {
    this.settings = settings;
    this.key = key;
    this.value = this.settings.get(this.key);
  }

  updateCustom(value) {
    const current = this.settings.get(this.key);
    if (current !== value.url)
      this.settings.set(this.key, [...value]);
    this.value = value;
    if (this.updateUI)
      this.updateUI();
  }

  getCustom() {
    return this.settings.get(this.key);
  }

  updateValue(value) {
    const current = this.settings.get(this.key);
    if (current !== value)
      this.settings.set(this.key, value);
    this.value = value;

    if (this.updateUI)
      this.updateUI();
  }

  render() {
    return '** REMOVE **' + this.value;
  }
}
