import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import Http from '../modules/http';
import SettingsVisibleSwitch from '../modules/settings/settings-visible-switch';
import SettingsRadios from '../modules/settings/settings-radios';

export default class WeatherWidget extends Widget {
    constructor(manager) {
        super("Weather", manager, 'div');
		this.tourStepData = {
			target: 'weather',
			placement: 'top',
			title: 'Weather',
			content: 'There’s no such thing as a bad climate with this weather forecast for your location.',
			xOffset: 20,
			onShow: () =>  $('.bottom-widgets').css('zIndex', 999999),
			onNext: () =>  $('.bottom-widgets').css('zIndex', '')
		}
    }

    init() {
        this.weather_interval = null;
        this.unitsKey = "Unit";

		this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/weather.png');
        this.initSetting(SettingsKeys.Visible, true, new SettingsVisibleSwitch());
        this.initSetting(this.unitsKey, "C", new SettingsRadios({
            'F': "℉",
            'C': "℃"
        }), () => this.loadWeather());

        // get country for accurate weather units
        if (this.getSettings(this.unitsKey) === "undefined") {
            Http.getJson("//api.sendmepixel.com/geo/info", (geoData) => {
                const units = ["US", "LR", "BU", "PW", "MH", "FM", "WS"].indexOf(geoData.country) > -1 ? "F" : "C";
                this.setSettings(this.unitsKey, units);
            });
        }
    }

    render() {
        this.widgetElement.id = "weather";
        this.widgetElement.className = "widget";
        $('.bottom-widgets').append(this.widgetElement);

        $("#weather").on('click', (e) => {
            e.stopPropagation();

            if (this.getSettings(this.unitsKey) === "F") {
                this.setSettings(this.unitsKey, "C");
            } else {
                this.setSettings(this.unitsKey, "F");
            }
        });

    };

    start() {
        this.loadWeather();
    }

    convertKelvin(kelvinTemp, unitType) {
    	if(unitType === "F") {
    		return kelvinTemp*(9/5)-459.67;
		} else {
    		return kelvinTemp-273;
		}
	}

    updateWeather(geoData) {
        const $weather = $("#weather");
        fetch(`https://api.sendmepixel.com/weather/getcurrent/`)
			.then(res => res.json())
			.then(weatherData => {
				$weather.html(`
					<div class='widget-top'>
                      <div class='widget-content widget-content-left'>
                        <img alt='${weatherData.weather[0].main}' class='weather-icon icon-${weatherData.weather[0].main}' src='https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png' />
                      </div>
                      <div class='widget-content widget-content-right'>
                        <span class='temp'>${Math.round(this.convertKelvin(weatherData.main.temp, this.getSettings(this.unitsKey)))} <span class='small'>&deg;${this.getSettings(this.unitsKey)}</span><br/></span>
                      </div>
                    </div>
                    <div class='widget-bottom'>
                        ${weatherData.weather[0].main} at ${weatherData.name}, ${weatherData.sys.country}
                    </div>
				`)
			})
			.catch(err => {
				console.error('Error fetching weather data', err);
				$weather.html(`
					<div class='widget-top'>
                      <div class='widget-content widget-content-left'>
                        <!--<img alt='Error' class='weather-icon icon-error' />-->
                      </div>
                      <div class='widget-content widget-content-right'>
                        <span class='temp'><br/></span>
                      </div>
                    </div>
                    <div class='widget-bottom'>
                        Error fetching weather data
                    </div>
				`)
			});

        // $.simpleWeather({
        //     location: geoData,
        //     woeid: '',
        //     unit: this.getSettings(this.unitsKey) || "C",
        //     success: function(weather) {
        //         let html = `<div class='widget-top'>
        //               <div class='widget-content widget-content-left'>
        //                 <i class='icon-${weather.code}'></i>
        //               </div>
        //               <div class='widget-content widget-content-right'>
        //                 <span class='temp'>${weather.temp} <span class='small'>&deg;${weather.units.temp}</span><br/></span>
        //               </div>
        //             </div>
        //             <div class='widget-bottom'>
        //                 ${weather.currently} at ${weather.city}, ${weather.country}
        //             </div>`;
		//
        //         $weather.html(html);
        //     },
        //     error: function(error) {
        //         $weather.html(`<span>${error}</span>`);
        //     }
        // });
    }

    // getLocationByIP() {
    //     Http.getJson("//api.sendmepixel.com/geo/info", (geoData) => this.updateWeather(geoData.city || geoData.state + ', ' + geoData.country));
    // }

    loadWeather() {
        clearInterval(this.weather_interval);

        // if (navigator.geolocation && location.protocol === "https:") {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         //load weather using your lat/lng coordinates
        //         this.updateWeather(position.coords.latitude + ',' + position.coords.longitude);
        //     }, () => this.getLocationByIP());
        // } else {
        //     this.getLocationByIP();
        // }

		this.updateWeather();

        this.weather_interval = setInterval(() => this.loadWeather(), 60000);
    }
}
