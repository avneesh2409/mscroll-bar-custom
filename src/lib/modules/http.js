export default class Http {
  static GET(url, callback = () => {}) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        } else {
          // error
          callback();
        }
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  }

  static getJson(url, callback = () => {}) {
    Http.GET(url, (data) => {
      let obj = {};
      try {
        obj = JSON.parse(data)
      } catch (e) {}
      callback(obj);
    });
  }

  static POST(url, body = "", callback = () => {}) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        } else {
          // error
          callback();
        }
      }
    };
    xhr.open("POST", url, true);
    xhr.send(body);
  }
}
