import SettingsObject from './settings-object';

export default class SettingsVisibleSwitch extends SettingsObject {
  render() {
    this.obj = $('<button class="visability-switch"> </button>');
    this.updateUI();

    // handle click
    this.obj.click(() => this.updateValue(!this.value));
    return this.obj;
  }

  updateUI() {
    if (this.value) {
      this.obj.addClass('on');
    } else {
      this.obj.removeClass('on');
    }
  }
}
