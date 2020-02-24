import SettingsObject from './settings-object';

export default class SettingsInput extends SettingsObject {
  constructor(options) {
    super();
    this.customLinks = options;
  }
  updateCustomList() {
    const fetchLink = this.customLinks;
    const customlist = $(`#content-1`);
    customlist.html("");
    $.each(fetchLink, (index, value) => {
      customlist.append(`<p title="Click to remove" id=${index}>${value}<span class="close1">&times;</span></p>`);
    });
    $('.close1').click((e) => this.remove(e));
  }
  render() {
    const _this = this
    const scroll = $(`<div id="examples">
    <div id="content-1" class="content">
    </div>
	</div>`)
    $.each(this.customLinks, function (index, value) {
      customlist.append(`<p title="Click to remove" id="${index}">${value} <span class="close1">&times;</span></p>`);
    });
    this.list = scroll;
    this.obj = $(`<div class="input"><label>URL</label><input id="inputdata" type="text" /></div>`);
    this.$button = $(`<div class="settings-input-button">Add</div>`).appendTo(this.obj)
      .click((e) => {
        _this.AddLinks(this.obj.find(`#inputdata`).val());
      });

    this.obj.prepend(this.list);
    $('.close1').click((e) => this.remove(e));
    this.obj.find(`#${this.id}`).val();
    return this.obj;
  }

  remove(event) {
    event.target.parentNode.parentNode.removeChild(e.target.parentNode)
    this.customLinks.splice(parseInt(event.target.parentNode.id), 1);
    this.updateCustom(this.customLinks);
    this.updateCustomList();
    this.updateCustomLink();
  }

  validateUrl(url) {
    let pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(pattern);
    if (url.match(regex)) {
      this.url = url.slice(url.search(/\.?[a-z]+\./i), url.search(/\./i))
      return true
    }
    return false
  }

  AddLinks(val) {
    const _this = this
    if (this.validateUrl(val) && this.url) {
      this.customLinks.push({ name: this.url, url: val, img: ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/suggested-sites/customlink.png' });
      this.updateCustom(this.customLinks);
      this.obj.find(`#inputdata`).val('');
      _this.updateCustomList();
      _this.updateCustomLink();
    }
    else {
      alert("Please enter valid Url !");
    }
  }

  updateCustomLink() {
    const savedLinks = this.customLinks;
    let check = document.querySelector("#custom-sites");
    if (check) { check.remove(check); }
    let prev = document.createElement("DIV");
    prev.id = "custom-sites";
    prev.className = "widget custom-sites-widget";
    savedLinks.map(data => {
      let el = document.createElement("DIV");
      el.className = 'custom-sites-item';
      el.innerHTML = `<img class='custom-sites-item-icon' src='${data.img}' /><div class='custom-sites-item-label'>${data.name}</div>`;
      el.addEventListener('click', () => {
        Stats.event('tbz_suggestsite_click', data.name, data.url);
        window.open(data.url, '_blank')
      })
      prev.appendChild(el)
    })
    $('.s-search').append(prev);
  }
}
