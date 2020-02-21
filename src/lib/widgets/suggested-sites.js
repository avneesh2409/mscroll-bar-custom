import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import SettingsVisibleSwitch from '../modules/settings/settings-visible-switch';
import Stats from "../stats";
import Config from "../config";
import { isPrimitive } from 'util';
import Http from '../modules/http';
import { strict } from 'assert';

export default class SuggestedSitesWidget extends Widget {
	constructor(manager) {
		super("Suggested Sites", manager, 'div');
		this.tourStepData = {
			target: 'suggested-sites',
			placement: 'top',
			title: 'Suggested Sites',
			content: 'Check out these useful websites.',
			xOffset: -152,
			arrowOffset: 236,
			onShow: () => $('#search').css('zIndex', 999999),
			onNext: () => $('#search').css('zIndex', '')
		}
	}

	init() {
		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites.png');
		this.initSetting(SettingsKeys.Visible, true, new SettingsVisibleSwitch());
	}

	loadStaticLink() {
		return [
			{ name: 'gmail', url: 'http://gmail.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/gmail.png' },
			{ name: 'facebook', url: 'http://facebook.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/facebook.png' },
			{ name: 'tripadvisor', url: 'http://tripadvisor.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/tripadvisor.png' },
			{ name: 'netflix', url: 'https://www.netflix.com/', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/netflix.png' },
			{ name: 'instagram', url: 'http://instagram.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/instagram.png' },
			{ name: 'youtube', url: 'http://youtube.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/youtube.png' },
			{ name: 'twitter', url: 'http://twitter.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/twitter.png' },
			{ name: 'ebay', url: '//rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338426358&mpre=www.ebay.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/ebay.png' },
			{ name: 'reddit', url: 'https://www.reddit.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/reddit.png' },
			//{ name: 'blogger', url: 'http://blogger.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/blogger.png' },
			{ name: 'pinterest', url: 'http://pinterest.com', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/pinterest.png' },
		];
	};

	getLocationByIP() {
		return new Promise((resolve, reject) => {
			Http.getJson(`https://api.sendmepixel.com/geo/country`, (ipAddress) => {
				resolve(ipAddress);
			});
		});
	}

	loadSiteLinkData() {
		return new Promise((resolve, reject) => {
			Http.getJson(`https://api.sendmepixel.com/suggest/tiles?c=9&sub=TBZ`, (tilesData) => {
				let arr = [];
				arr.push(
					{ name: 'aliexpress', url: '//s.click.aliexpress.com/e/3Ny1bCyY', img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/aliexpress.png' }
				);
				const pageSize = 10;
				const isTilesDataExist = Object.entries(tilesData).length === 0;
				if (!isTilesDataExist) {
					if (tilesData.tiles.length > 0) {
						$.map(tilesData.tiles, function (elem, index) {
							arr.push({
								"name": elem.name, "url": elem.click_url, "img": elem.image_url
							});
						});
					}
				}

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

	render() {
		this.widgetElement.id = "suggested-sites";
		this.widgetElement.className = "widget suggested-sites-widget";
		this.suggestedSites = [];
		//this.getLocationByIP().then(currentip => {
		this.loadSiteLinkData().then(suggestedSites => {
			suggestedSites.map(siteData => {
				const el = document.createElement("DIV");
				el.className = 'suggested-sites-item';
				el.innerHTML = `<img class='suggested-sites-item-icon' src='${siteData.img}' /><div class='suggested-sites-item-label'>${siteData.name}</div>`;
				el.addEventListener('click', () => {
					Stats.event('tbz_suggestsite_click', siteData.name, siteData.url);
					window.open(siteData.url, '_blank')
				});
				this.widgetElement.append(el);
			});
			$('.s-search').append(this.widgetElement);
		});
		//});
	}
}
