import SettingsObject from './settings-object';

export default class SettingsCheckbox extends SettingsObject {
  constructor(option) {
    super();
    this.option = option;
  }

  render() {
    this.obj = $('<form> </form>');
  	this.obj.append($(`<div class="checkbox"><label class="checkmark-label" for="${this.key}">${this.option.name} <input type="checkbox" name="${this.key}" id="${this.key}"> <span class="checkmark"></span></label></div>`));
    this.updateUI();

    // handle clickthis.
    this.obj.find('input[type=checkbox]').click((e) => this.updateValue($(e.target).prop('checked')));

    return this.obj;
  }

  updateUI() {
      if (this.obj) {
      	this.obj.find('input').prop('checked', this.value);
      	this.obj.find('.checkmark-label').css('color', (this.value ? '#0DFF92' : ''))
	  }
  }
}
