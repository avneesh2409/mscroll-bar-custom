import Logger from '../logger';
import StorageManager from './storage-manager';

export default class TabzmaniaData {
    static init(callback) {
        Logger.log("TabzmaniaData::init() called");
        if (callback) callback();
    }

    get deviceId() {
        if (!this._deviceId) {
            this._deviceId = StorageManager.get(StorageManager.keys.deviceId);
        }
        return this._deviceId;
    }

    get country() {
        if (!this._country) {
            this._country = StorageManager.get(StorageManager.keys.country) || 'TJ';
        }
        return this._country;
    }

    get installDate() {
        if (!this._installDate) {
            this._installDate = StorageManager.get(StorageManager.keys.installDate);
        }
        return this._installDate;
    }

    get barcodeId() {
        if (!this._barcodeId) {
            this._barcodeId = StorageManager.get(StorageManager.keys.barcodeId);
        }
        return this._barcodeId;
    }

    get publisherId() {
        if (!this._publisherId) {
            this._publisherId = StorageManager.get(StorageManager.keys.publisherId)
        }
        return this._publisherId;
    }

    get subId() {
        if (!this._subId) {
            this._subId = StorageManager.get(StorageManager.keys.subId);
        }
        return this._subId;
    }
}
