class Config {
    static set(_config) {
        // protection
        _config.override = _config.override || {};
        _config.params = _config.params || {
            co: "", installday: "", uid: "", barcode: Config.defaults.publisherId + "0000000000",
            extensionid: ""
        };

        // Override config params
        if (_config.name) {
            Config.theme.name = _config.name;
        }

        if (_config.images) {
            Config.theme.images = _config.images;
        }

        if (_config.override.widgets) {
            Config.theme.loadWidgets = _config.override.widgets;
        }

        if (_config.params.uid) {
            Config.stats.uid = _config.params.uid;
        }

        if (_config.params.barcode) {
            Config.stats.barcode = _config.params.barcode;
        }

        if (_config.params.co) {
            Config.stats.co = _config.params.co;
        }

        if (_config.params.installday) {
            Config.stats.installday = _config.params.installday;
        }

        if (_config.params.name) {
            Config.extension.name = _config.params.name;
        }

        if (_config.params.extensionid) {
            Config.extension.extensionId = _config.params.extensionid;
        }
    };
}

Config.settings = {
    debug: true
};

Config.tourStepsOrder = [
    'Search',
    'Suggested Sites',
    'Custom Sites',
    'Clock',
    'Weather',
    'Todo',
    'Settings'
];

Config.theme = {
    name: "Tabzmania New Tab",
    images: ['https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg'],
    loadWidgets: ['search', 'background-picker', 'todo', 'clock', 'weather', 'suggested-sites', 'custom-sites', 'settings-ui']
};
Config.search = {
    schema: "https",
    searchDomain: "feed.tabzmania.com",
    searchParams: "publisherid={PID}&publisher={Publisher}&searchtype={SearchType}",
    searchType: "st"
};
Config.geo = {
    url: "https://api.sendmepixel.com/geo/country"
};
Config.stats = {
    googleAnalyticsUrl: 'https://www.google-analytics.com/collect',
    googleAnalyticsId: '',
    pixelDomain: '//pixel.pxcollect.com'
};
Config.extension = {
    name: "tbz_theme_default"
};
Config.defaults = {
    publisherName: 'tabzmania',
    publisherId: 52502
};

export default Config;
