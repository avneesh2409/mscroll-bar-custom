import Config from './config';
import SettingsManager from './modules/settings-manager';
import WidgetsManager from './modules/widgets-manager';
import LocalizationManager from './modules/localization-manager';
import TabzmaniaData from './modules/tabzmania-data';
import TourManager from './modules/tour-manager';
import Stats from './stats';
export default class Tabzmania {
	constructor(_config) {
		Config.set(_config || {});
		TabzmaniaData.init(() => {
			this.init();
		});
	}

	init() {
		if (this.isInitialised) return;

		this.data = new TabzmaniaData();
		this.settings = new SettingsManager();
		this.widgets = new WidgetsManager(this.data, this.settings);
		this.localization = new LocalizationManager();

		this.localization.init();
		this.widgets.init();

		let fadeInterval, moving = false;

		setTimeout(() => {
			$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '0');
		}, 3000);
		$(window).mousemove(fadeWidgets);
		$(window).keydown(fadeWidgets);

		localStorage.setItem('tour-running', 'false');

		if(!localStorage.getItem('tour')) {
			TourManager.initTour(this.widgets.widgets);
		}

		Stats.event('pageload_tbz', Config.theme.name);

		function fadeWidgets() {
			clearInterval(fadeInterval);
			moving = true;
			$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '');
			setTimeout(() => moving = false, 200);
			fadeInterval = setInterval(() => {
				if (!moving) {
					clearInterval(fadeInterval);
					$('.widget, .logo-img, .footer, .s-search, .settings').css('opacity', '0');
				}
			}, 3000);
		}
	}
}

const tabzmania = new Tabzmania(window._config);
