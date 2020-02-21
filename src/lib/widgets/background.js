import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import Config from '../config';
import SettingsRadios from '../modules/settings/settings-radios';

export default class BackgroundPickerWidget extends Widget {
	constructor(manager) {
		super('Background', manager, 'div');
	}

	init() {
		this.currentBackgroundIndex = "bgidx";
		this.bgChangeKey = "gbchnge";
		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/background.png');
		this.initSetting(this.currentBackgroundIndex, 0, undefined, () => this.start());
		this.initSetting(this.bgChangeKey, "1", new SettingsRadios({ '0': "No Change", '1': "Every New Tab" }));
	}

	render() {
		// render bg picker
		this.widgetElement.className = "background-picker-content widget-scroll";
        this.widgetElement.id = "bg-images";
		$('.setting-panel').append(this.widgetElement);

		$('.stn-background').click((e) => {
			e.stopPropagation();

			if(!$('#bg-images').children().length > 0)
			{
				for (let i in Config.theme.images) {
					const $thumbContainer = $('<div class="thumb loading"></div>').appendTo($(this.widgetElement));
					const thumbImage = new Image();
					thumbImage.onload = () => $thumbContainer.removeClass('loading');
					thumbImage.src = Config.theme.images[i];
					$(thumbImage).attr('index', i).click((e) => {
						this.setSettings(this.currentBackgroundIndex, $(e.target).attr('index'))
					}).appendTo($thumbContainer);
					//$(this.widgetElement).append($(`<div class="thumb"><img src="${Config.theme.images[i]}" index='${i}' alt="Image"></div>`))
				}
			}
			const $settings = $('.settings');
			if ($settings.hasClass('settings-open') && $settings.hasClass('background-open')) {
				$settings.removeClass('settings-open');
			} else {
				$settings.addClass('background-open');
				$settings.addClass('settings-open');
			}
		});

		let index = this.getSettings(this.currentBackgroundIndex);
		if (this.getSettings(this.bgChangeKey) === "1") {
			this.setSettings(this.currentBackgroundIndex, index + 1);
		}
	}

	start() {
		if (Config.theme.images.length === 0) return;

		let index = this.getSettings(this.currentBackgroundIndex);
		if (!Config.theme.images[index]) {
			this.setSettings(this.currentBackgroundIndex, 0);
		} else {
			$('body').css('background-image', ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/test-bg.png');
			const img = new Image();
			img.onload = () => $('body').css('background-image', `url('${Config.theme.images[index]}')`);
			img.src = Config.theme.images[index];

		}
	}
}