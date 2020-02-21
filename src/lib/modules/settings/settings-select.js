import SettingsObject from './settings-object';

export default class SettingsSelect extends SettingsObject {
  constructor(options) {
    super();
    this.options = options;
  }

  render() {

    this.obj = $('<form class="select"><select><option hidden>Choose a provider</option></select></form>');

    for (let option in this.options) {
      this.obj.find('select').append($(`<option value="${option}" id="${option}">${this.options[option]}</option>`));
    }
    this.updateUI();

    this.obj.find('select').change((e)=>this.updateValue($(e.target).val()));

    return this.obj;
  }

  updateUI() {
    this.obj.find(`option#${this.value}`).prop('selected', true);
  }
}
