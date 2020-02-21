import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import Utils from '../modules/utils';
import SettingsVisibleSwitch from '../modules/settings/settings-visible-switch';
import SettingsRadios from '../modules/settings/settings-radios';

export default class ClockWidget extends Widget {
	constructor(manager) {
		super("Clock", manager, 'div');
		this.tourStepData = {
			target: 'clock',
			placement: 'top',
			title: 'Clock',
			content: 'Accurate date and time based on your current location.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('.bottom-widgets').css('zIndex', 999999),
			onNext: () => $('.bottom-widgets').css('zIndex', '')
		}
	}

	init() {
		this.tick_interval = null;
		this.timeFormatKey = "TimeFormat";

		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/clock.png');
		this.initSetting(SettingsKeys.Visible, true, new SettingsVisibleSwitch());
		this.initSetting(this.timeFormatKey, "24", new SettingsRadios({
			'12': "12 hours",
			'24': "24 hours"
		}), () => this.tick());
	}

	render() {
		this.widgetElement.id = "clock";
		this.widgetElement.className = "widget";

		$('.bottom-widgets').append(this.widgetElement);

		$("#clock").on('click', (e) => {
			e.stopPropagation();
			if (this.getSettings(this.timeFormatKey) === "12") {
				this.setSettings(this.timeFormatKey, "24");
			} else {
				this.setSettings(this.timeFormatKey, "12");
			}
		});
	}

	start() {
		this.tick();
	}

	tick() {
		clearInterval(this.tick_interval);
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();

		let dd;
		if (this.getSettings(this.timeFormatKey) === "12") {
			dd = (hours >= 12) ? 'pm' : 'am';
			hours = (hours > 12) ? (hours - 12) : hours
		}
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		let year = date.getFullYear();
		let month = date.getMonth();
		let day = date.getDay();

		let _date = days[day] + ', ' + months[month] + ' ' + date.getDate() + ' ' + year;

		let clock = $("#clock");
		let dateformat = dd ? dd.toLocaleUpperCase() : "";
		let html = `
                <div class='widget-top clock-display'>
                  ${Utils.padLeft(hours, 2)}:${Utils.padLeft(minutes, 2)} <span class='small'>${dateformat}</span>
                </div>
                <div class='widget-bottom date-display'>
                    ${_date}
                </div>`;

		clock.html(html);
		this.tick_interval = setInterval(() => this.tick(), 2000);
	};
}
