import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import SettingsVisibleSwitch from '../modules/settings/settings-visible-switch';
import Stats from "../stats";
import Http from '../modules/http';
import SettingsInput from '../modules/settings/settings-input';

export default class SuggestedSitesWidget extends Widget {
	constructor(manager) {
		super("CustomQuickLinks", manager, 'div');
		this.tourStepData = {
			target: 'custom-sites',
			placement: 'top',
			title: 'custom Sites',
			content: 'Check out these useful websites.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('#search').css('zIndex', 999999),
			onNext: () => $('#search').css('zIndex', '')
		}
	}

	init() {
		this.customListData = "CustomList";
		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites.png');
		this.initSetting(SettingsKeys.Visible, true, new SettingsVisibleSwitch());
		let localdata = this.getSettings(this.customListData);
		if (localdata) {
			this.initSetting(this.customListData, localdata, new SettingsInput(localdata));
		}
		else {
			this.initSetting(this.customListData, [], new SettingsInput());
		}

	}

	loadStaticLink() {
		return this.getSettings(this.customListData);
	};

	loadSiteLinkData() {
		return new Promise((resolve, reject) => {
			Http.getJson(`https://api.sendmepixel.com/suggest/tiles?c=1&sub=TBZ`, (tilesData) => {
				let arr = [];
				const pageSize = 10;
				if (arr.length != pageSize) {
					const leftlink = pageSize - arr.length;
					$.each(this.loadStaticLink().slice(0, leftlink), function (key, value) {
						arr.push({
							"name": value.name, "url": value.url, "img": value.img
						});
					});
				}
				resolve(arr);
			});
		});
	}
	SuggestedLinks() {
		this.widgetElement.id = "custom-sites";
		this.widgetElement.className = "widget custom-sites-widget";
		this.suggestedSites = [];
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'custom-sites-item';
				el.innerHTML = `<img class='custom-sites-item-icon' src='${siteData.img}' /><div class='custom-sites-item-label'>${siteData.name}</div>`;

				el.addEventListener('click', () => {
					Stats.event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank')
				});

				this.widgetElement.append(el);
			});

			$('.s-search').append(this.widgetElement);
		});
	}

	render() {
		const _this = this
		console.log("this is render function :-", _this.settings)
		this.widgetElement.id = "custom-sites";
		this.widgetElement.className = "widget custom-sites-widget";
		this.suggestedSites = [];
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'custom-sites-item';
				el.innerHTML = `<img class='custom-sites-item-icon' src='${siteData.img}' /><div class='custom-sites-item-label'>${siteData.name}</div>`;

				el.addEventListener('click', () => {
					Stats.event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank')
				});

				this.widgetElement.append(el);
			});

			$('.s-search').append(this.widgetElement);
		});
	}

	start() {
		// this.SuggestedLinks();
	}
}
