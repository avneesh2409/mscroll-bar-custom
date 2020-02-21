import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import Config from '../config';
import SettingsRadios from "../modules/settings/settings-radios";

export default class InstaBackgroundPickerWidget extends Widget {
  constructor(manager) {
      super('Background', manager, 'div');
  }

  init() {
    const $body = $('body');
    this.currentBackgroundIndex = "bgidx";
    this.bgChangeKey = "gbchnge";
    this.instaNameKey = "instatag";
    this.instaImagesKey = "instaimages";
    this.$overlayLoader = $(`<div class="overlay-loader"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`);
    this.$bigImage = $(`<img class="big-image" />`).prependTo($body);
    this.$smolImage = $(`<img class="smol-image" />`).prependTo($body);
    this.$baseResourceUrl = (typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource;
    this.$instaInputDialog = $(`
            <div class="insta-input-dialog">
                <div class="insta-input-dialog-title"><span class="highlight-text">Social</span> Theme</div>
                <div class="insta-input-subtitle">Enter a <span class="highlight-text">@profilename</span> or a <span class="highlight-text">#hashtag</span> below to set a social background.</div>
                <div class="insta-input-container" > 
                    <input type="text" class="insta-input" placeholder="E.g. @AdamLevine or #popmusic2018" />
                    <div class="insta-input-button">Set</div>
                </div>
                <div class="helper-text">Click the (<img src="${this.$baseResourceUrl}/images/ig_btn.png" class="helper-icon"/>) icon to refresh the images or use the backgrounds panel (<img src="${this.$baseResourceUrl}/images/bg_btn_2.png" class="helper-icon" />) to choose a new background</div>
                <div class="insta-input-close">Close</div>
            </div>
    `).appendTo($body);
    this.serviceUrl = 'https://social.tabzmania.com';
    //this.serviceUrl = 'http://localhost:49704';
    $body.append(this.$overlayLoader);
  	this.initSetting(SettingsKeys.Icon, this.$baseResourceUrl + '/images/background.png');
    this.initSetting(this.currentBackgroundIndex, 0, undefined, () => this.start());
    this.initSetting(this.instaImagesKey, [], undefined, () => this.start());
    this.initSetting(this.bgChangeKey, "1", new SettingsRadios({'0': "No Change", '1': "Every New Tab"}));
    $('.insta-input-close').click(() => this.$instaInputDialog.hide());
    $('.insta-input-button').click(() => {
        const $instaInput  = $('.insta-input');
        const value = $instaInput.val();
        if (value.length > 0) {
            if (value.indexOf("@") === 0) {
                this.$instaInputDialog.hide();
                this.getImagesDataByAccount(value.slice(1))
                    .then(imagesArr => {
                        if (imagesArr.length > 0) {
                            this.setSettings(this.instaImagesKey, imagesArr);
                            this.setSettings(this.instaNameKey, value.slice(1));
                            this.updateImageComponents(imagesArr, true)
                        } else {
							this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true)
                        }
                    })
					.catch(() => this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true))
            } else if (value.indexOf("#") === 0) {
                this.$instaInputDialog.hide();
                this.getImagesDataByTag(value.slice(1))
                    .then(imagesArr => {
                        if (imagesArr.length > 0) {
                            this.setSettings(this.instaImagesKey, imagesArr);
                            this.setSettings(this.instaNameKey, value.slice(1));
                            this.updateImageComponents(imagesArr, true)
                        } else {
							this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true)
                        }
                    })
					.catch(() => this.updateImageComponents([this.$baseResourceUrl + "/images/wallpapers/generic-text.jpg"], true))
            } else {
                //TODO: handle error notifcation
            }
        }
    });
  }

  render() {
    // render bg picker
      const _this = this;
      if(this.getSettings(this.instaImagesKey) && this.getSettings(this.instaImagesKey).length > 0) {
            renderCallback(this.getSettings(this.instaImagesKey));
      } else {
          this.$instaInputDialog.show();
          renderCallback([this.$baseResourceUrl + "/images/wallpapers/generic.jpg"]);
      }


      function renderCallback(imagesArr) {
          _this.start();
          _this.widgetElement.className = "background-picker-content widget-scroll";

          _this.updateImageComponents(imagesArr, false);

          $('.setting-panel').append(_this.widgetElement);

          $('.stn-background').click((e)=>{
              e.stopPropagation();
              const $settings = $('.settings');
              if ($settings.hasClass('settings-open') && $settings.hasClass('background-open')) {
                  $settings.removeClass('settings-open');
              } else {
                  $settings.addClass('background-open');
                  $settings.addClass('settings-open');
              }
          });

          $('.stn-insta').click((e)=>{
              e.stopPropagation();
              _this.$instaInputDialog.toggle();
          });
      }
  }

  start() {
    if (Config.theme.images.length === 0) return;

    let index = this.getSettings(this.currentBackgroundIndex);
    if (!Config.theme.images[index]) {
      this.setSettings(this.currentBackgroundIndex, 0);
    } else {
      //$('body').css('background-image', `url('${Config.theme.images[index]}')`);
      this.$bigImage.attr('src', Config.theme.images[index]);
      this.$smolImage.attr('src', Config.theme.images[index]);
    }
  }

    getImagesDataByAccount(value) {
        this.$overlayLoader.show();
        const $settings = $('.settings');
        $settings.removeClass('settings-open');
        return fetch(`${this.serviceUrl}/Images/Fetch?type=1&query=${value}&count=30`)
            .then(response => response.json())
            .then(imagesArr => imagesArr)
            .finally(()=>this.$overlayLoader.hide());
    }

    getImagesDataByTag(value) {
        this.$overlayLoader.show();
        const $settings = $('.settings');
        $settings.removeClass('settings-open');
        return fetch(`${this.serviceUrl}/Images/Fetch?type=0&query=${value}&count=30`)
            .then(response => response.json())
            .then(imagesArr => imagesArr)
            .finally(()=>this.$overlayLoader.hide());
    }

    populateConfigData(imagesArr) {
        window._config.images = imagesArr;
        Config.theme.images = imagesArr;
    }

    updateImageComponents(imagesArr, immediate) {
        this.populateConfigData(imagesArr);
        const $widgetElement = $(this.widgetElement);
        $widgetElement.empty();
        for (let i in Config.theme.images) {
            $widgetElement.append($(`<div class="thumb"><img src="${Config.theme.images[i]}" index='${i}' alt="Image"></div>`));
        }
        $widgetElement.find('img').click((e) => {
            this.setSettings(this.currentBackgroundIndex, $(e.target).attr('index'));
        });
        let index = this.getSettings(this.currentBackgroundIndex);
        if (this.getSettings(this.bgChangeKey) === "1" || immediate === true) {
            this.setSettings(this.currentBackgroundIndex, index ? 0 : Math.floor(Math.random() * Config.theme.images.length) );
            this.setSettings('lastBg', Config.theme.images[index]);
            //getImageLightness(Config.theme.images[index], result => alert(result));
        }
    }
}

//TODO: implement to detect background brightness
// function getImageLightness(imageSrc,callback) {
//     var img = document.createElement("img");
//     img.crossOrigin = "Anonymous";
//     img.src = imageSrc;
//     img.style.display = "none";
//     document.body.appendChild(img);
//
//     var colorSum = 0;
//
//     img.onload = function() {
//         // create canvas
//         var canvas = document.createElement("canvas");
//         canvas.width = this.width;
//         canvas.height = this.height;
//
//         var ctx = canvas.getContext("2d");
//         ctx.drawImage(this,0,0);
//
//         var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
//         var data = imageData.data;
//         var r,g,b,avg;
//
//         for(var x = 0, len = data.length; x < len; x+=4) {
//             r = data[x];
//             g = data[x+1];
//             b = data[x+2];
//
//             avg = Math.floor((r+g+b)/3);
//             colorSum += avg;
//         }
//
//         var brightness = Math.floor(colorSum / (this.width*this.height));
//         callback(brightness);
//     }
// }