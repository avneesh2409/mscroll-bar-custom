import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import TourManager from '../modules/tour-manager';
import SettingsVisibleSwitch from "../modules/settings/settings-visible-switch";


export default class SettingsWidget extends Widget {
	constructor(manager) {
		super('Settings', manager, 'div');
		this.manager = manager;
		this.tourStepData = [
			{
				target: 'stn-general',
				placement: 'bottom',
				title: 'Settings',
				content: 'Customize your tab! Change your widgets and perform changes to your backgrounds.',
				xOffset: -276,
				arrowOffset: 272,
				onShow: () =>  $('.settings').css('zIndex', 999999),
				onNext: () =>  $('.settings').css('zIndex', 9999)
			},
			{
				target: 'stn-background',
				placement: 'bottom',
				title: 'Background Selection',
				content: 'Easily go back and forth between the images of your theme and enjoy!',
				xOffset: -256,
				arrowOffset: 252,
				onShow: () =>  $('.settings').css('zIndex', 999999),
				onNext: () =>  $('.settings').css('zIndex', 9999)
			}
		]
	}

	init() {
		this.initSetting(SettingsKeys.Visible, true);
	}

	render() {

		const _settings = this.settings.getAll();

		// run on sorted sections
		for (let section of Object.keys(_settings).sort()) {
			// check if section need to be rendered
			let show = false;
			for (let property in _settings[section]) {
				if (_settings[section][property].settings && _settings[section][property].settings.obj) {
					show = true;
					break;
				}
			}
			if (show)
			// render section
				this.renderSection(section, _settings[section]);
		}

		this.widgetElement.className = "settings-content";
		$('.setting-panel').append(this.widgetElement);
		const $settings = $('.settings');

		// handle settings button click
		$('#stn-general').click((e) => {
			e.stopPropagation();
			if ($settings.hasClass('background-open') && $settings.hasClass('settings-open')) {
				$settings.removeClass('background-open');
			} else {
				$settings.removeClass('background-open');
				$settings.toggleClass('settings-open');
			}
		});

		$('#stn-help').click((e) => {
			e.stopPropagation();
			TourManager.initTour(this.manager.widgets);
		});

		$('#stn-rate').click((e) => {
			var go_to_url = `https://chrome.google.com/webstore/detail/${window._config.params.extensionid}/reviews`;
			window.open(go_to_url, "_blank");
		});


		$('.setting-panel .close-btn').click((e) => {
			e.stopPropagation();
			$settings.removeClass('settings-open')
		});

		$(document).click((e) => {
			if ($(e.target).closest('.settings').length === 0) {
				$settings.removeClass('settings-open')
			}
		});
	}

	renderSection(section, properties) {
		let icon = '';
		if (properties[SettingsKeys.Icon]) {
			icon = `<img src='${properties[SettingsKeys.Icon].value}' />`;
		}
		let div = $(`<div class="settings-section"><h3>${icon}${section}</h3><div class="props"></div></div>`);
		if (properties[SettingsKeys.Visible] && properties[SettingsKeys.Visible].settings.obj) {
			div.prepend(properties[SettingsKeys.Visible].settings.obj.render());
		}

		for (let prop in properties) {
			if (prop === SettingsKeys.Visible || !properties[prop].settings.obj) continue;
			div.find('.props').append($('<div class="prop"></div>').append(properties[prop].settings.obj.render()));
		}

		$(this.widgetElement).append(div);
	}

	start() {
	}
}
