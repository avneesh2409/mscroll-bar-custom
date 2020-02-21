import Logger from '../logger';
import Config from '../config';
import SearchWidget from '../widgets/search';
import ClockWidget from '../widgets/clock';
import WeatherWidget from '../widgets/weather';
import TodoWidget from '../widgets/todo';
import BackgroundPickerWidget from '../widgets/background';
import SettingsWidget from '../widgets/settings-ui';
import InstaBackgroundPickerWidget from "../widgets/insta-background";
import SuggestedSitesWidget from '../widgets/suggested-sites';
import CustomSitesWidget from '../widgets/custom-sites';

const widgetsMapping = {
	'search': SearchWidget,
	'clock': ClockWidget,
	'weather': WeatherWidget,
	'todo': TodoWidget,
	'background-picker': BackgroundPickerWidget,
	'insta-background-picker': InstaBackgroundPickerWidget,
	'suggested-sites': SuggestedSitesWidget,
	'custom-sites': CustomSitesWidget,
	'settings-ui': SettingsWidget
};

export default class WidgetsManager {
	constructor(data, settings) {
		this.data = data;
		this.settings = settings;
		this.widgets = [];
	}

	init() {
		Logger.log('WidgetsManager::init() called');

		for (let widget of Config.theme.loadWidgets) {
			if (widgetsMapping[widget]) {
				this.widgets.push(new widgetsMapping[widget](this));
			}
		}
	}
}
