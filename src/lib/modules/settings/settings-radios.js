import SettingsObject from './settings-object';

export default class SettingsRadios extends SettingsObject {
  constructor(options) {
    super();
    this.options = options;
  }

  render() {
    this.obj = $('<form> </form>');
    for (let option in this.options) {
      this.obj.append($(`<div class="radio"><input type="radio" name="${this.key}" id="${option}" value="${option}"><label for="${option}">${this.options[option]}</label></div>`))
    }
    this.updateUI();

    // handle click
    this.obj.find('input[type=radio]').click((e) => this.updateValue($(e.target).val()));

    return this.obj;
  }

  updateUI() {
      if (this.obj) this.obj.find(`input#${this.value}`).prop('checked', true);
  }
}
