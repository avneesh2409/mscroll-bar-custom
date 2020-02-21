import Config from './config';
import Http from './modules/http';

export default class Stats {

    static event(eventName, data1, data2, data3) {
        if (eventName) {
            sendEvent({
                event: eventName,
                data1: data1 || "",
                data2: data2 || "",
                data3: data3 || ""
            });
        }
    }
};

function sendEvent(data) {
    const extName = Config.theme.name || Config.extension.name;
    Http.GET(`https://${Config.stats.pixelDomain}/Pixel.aspx?name=${extName}&type=${data.event}&data1=${data.data1}&data2=${data.data2}&data3=${data.data3}&co=${Config.stats.co}&installdate=${Config.stats.installday}&barcode=${Config.stats.barcode}&userid=${Config.stats.uid}&entity=26&`);
}
