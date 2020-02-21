import Config from "../config";
import Stats from "../stats";
import SettingsKeys from "./settings/settings-keys";

export default class TourManager {
	static initTour(widgets) {
		if(JSON.parse(localStorage.getItem('tour-running'))) return;
		localStorage.setItem('tour-running', 'true');
		function endTour(el, message) {
			Stats.event(message, Config.theme.name);
			el.parentNode.removeChild(el);
			localStorage.setItem('tour', 'true');
			localStorage.setItem('tour-running', 'false');
		}

		const tourStepsArray = [];

		for (let widgetName of Config.tourStepsOrder) {
			const widget = widgets.find(widget => widget.name === widgetName);
			try {
				if (widget.getSettings(SettingsKeys.Visible)) {
					if (Array.isArray(widget.tourStepData)) {
						for (let item of widget.tourStepData) {
							tourStepsArray.push(item);
						}
					} else {
						tourStepsArray.push(widget.tourStepData);
					}
				}
			} catch (e) {
				localStorage.setItem('tour-running', 'false');
			}
		}

		if (tourStepsArray.length > 0) {
			const $tourOverlay = document.createElement('DIV');
			$tourOverlay.classList.add('tour-overlay');
			$tourOverlay.style.zIndex = '999998';
			$tourOverlay.style.position = 'fixed';
			$tourOverlay.style.width = '100%';
			$tourOverlay.style.height = '100%';
			$tourOverlay.style.background = 'rgba(0,0,0,0.6)';
			const tour = {
				id: "tabzmaniaTour",
				steps: tourStepsArray,
				onEnd: () => {
					endTour($tourOverlay, 'tbz_tour_done');
				},
				onClose: () => {
					endTour($tourOverlay, 'tbz_tour_skipped');
				}
			};
			document.body.appendChild($tourOverlay);
			hopscotch.startTour(tour);
		}
		else {
			localStorage.setItem('tour-running', 'false');
		}
	}
}