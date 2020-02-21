export default class StorageManager {
  static get(key) {
    return localStorage.getItem(key);
  }

  static set(key, value) {
    localStorage.setItem(key, value);
  }

  static get keys() {
      return {
          deviceId: 'id',
          country: 'co',
          publisherId: 'pid',
          subId: 'subid',
          barcodeId: 'br',
          installDate: 'dt',

          settings: 'conf'
      }
  }
}
