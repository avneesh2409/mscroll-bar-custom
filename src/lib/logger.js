import Config from './config';

export default class Logger {
    static log(msg) {
        if (Config.settings.debug) {
            console.log(msg);
        }
    }
};
