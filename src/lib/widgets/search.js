import SettingsKeys from '../modules/settings/settings-keys';
import Widget from '../widget';
import Config from '../config';
import SettingsRadios from '../modules/settings/settings-radios';
import SearchUtils from '../modules/search-utils';
import Stats from '../stats';

import SettingsCheckbox from "../modules/settings/settings-checkbox";
import SettingsVisibleSwitch from "../modules/settings/settings-visible-switch";

export default class SearchWidget extends Widget {
  constructor(manager) {
    super("Search", manager, 'div');

	this.tourStepData = {
	  target: 'srch-frm',
	  placement: 'bottom',
	  title: 'Search bar',
	  content: 'What are you looking for? Just type here and enjoy!',
	  onShow: () => $('#search').css('zIndex', 999999),
	  onNext: () => $('#search').css('zIndex', '')
	}
  }

  init() {
    this.searchVer = 1.1;
    this.chooseEngineKey = "ChooseEngine";
    this.searchInNewTabKey = "SearchInNewTab";
    this.searchVersionKey = "SearchVer";
    this.searchUrl = SearchUtils.buildSearchUrl(Config.search.schema, Config.search.searchDomain, Config.search.searchParams, {
      // DeviceID: this.data.deviceId,
      // Country: this.data.country,
      // SID: this.data.subId,
      // Barcode: this.data.barcodeId,
      // InstallDate: this.data.installDate,
      PID: Config.defaults.publisherId,
      Publisher: Config.defaults.publisherName,
      SearchType: Config.search.searchType
    });

    this.initAutocomplete();

    this.customFeed = this.getSettings(this.chooseEngineKey) || "yahoo";

    this.searchInNewTab = this.getSettings(this.searchInNewTabKey) || "true";

    this.initSetting(this.searchVersionKey, 0.1);
  	this.initSetting(SettingsKeys.Icon, ((typeof baseResource === "undefined" || baseResource === "[base-resource]") ? "" : baseResource) + '/images/search.png');
    this.initSetting(this.chooseEngineKey, "google", new SettingsRadios({ "google": "Google", "yahoo": "Yahoo", "bing": "Bing" }), (value) => this.onEngineChange(value));
  	this.initSetting(this.searchInNewTabKey, true, new SettingsCheckbox({name: "Search in a new tab"}), (value) => this.onSearchInNewTabChange(value));
  	this.initSetting(SettingsKeys.Visible, true);
  }

  onEngineChange(value) {
    if (value === "ChooseEngine") {
        this.customFeed = this.getSettings(this.chooseEngineKey);
    }
  }

	onSearchInNewTabChange(value) {
		if (value === "SearchInNewTab") {
			this.searchInNewTab = this.getSettings(this.searchInNewTabKey);
		}
	}

  render() {
    // render element
    this.widgetElement.className = "s-search";
    this.widgetElement.id = "search";
    this.widgetElement.innerHTML = `
            <form id="srch-frm" class="field" name="search-form">
              <input type="text" name="q" id="search-term" placeholder=" " autofocus autocomplete="off" />
              <div class="floater"></div>
              <div class="field-click"></div>
              <div id="search-autocomplete" class="search-autocomplete">
                <ul id="search-autocomplete-list" selected-index="-1"></ul>
              </div>
            </form>`;

    // bind action
    $(this.widgetElement).find('form').submit((e) => {
      e.stopPropagation();
      this.submitSearch();
      return false;
    });

    // add to dom
    document.body.insertBefore(this.widgetElement, document.body.firstChild);

    // handle autocomplete
    this.autocomplete = $("#search-autocomplete");
    $("#search-term")
      .on('focus', (e) => {
        if ($(e.target).val().length > 0) {
          this.autocomplete.slideDown('fast');
        }
      })
      .on('input propertychange paste', (e) => {
        //this will handle pasting text and clearing text with browser built in clear button
        $(e.target).trigger('keyup');
      })
      .on('keydown', (e) => {
        clearTimeout(this.searchTimer);
        if ($(e.target).val().length <= 0) {
          $("#search-autocomplete-list").html("");
        }
      })
      .on('keyup', (e) => {
        const j = e.keyCode;
        const $autocompleteListItem =  $("#search-autocomplete-list li");
        if (j === 38 || j === 40) {
          this.autocomplete.slideDown('fast');
          clearTimeout(this.searchTimer);
          const $autocompleteList = $("#search-autocomplete-list");
          let selectedIndex = Number($autocompleteList.attr("selected-index"));
          const maxItems = $autocompleteListItem.length - 1;

          $(".selected").removeClass("selected");
          if (j === 38) {
            selectedIndex = selectedIndex === -1 ? maxItems : ((selectedIndex - 1) < 0 ? maxItems : (selectedIndex - 1));
          } else if (j === 40) {
            selectedIndex = selectedIndex === -1 ? 0 : ((selectedIndex + 1) > maxItems ? 0 : (selectedIndex + 1));
          }
          $autocompleteList.attr("selected-index", selectedIndex.toString());
          $('#search-term')[0].value = $($autocompleteListItem[selectedIndex]).text();
          $($autocompleteListItem[selectedIndex]).addClass("selected");
        } else {
          if ($(e.target).val().length > 0) {
            clearTimeout(this.searchTimer);
            this.searchTimer = setTimeout(this.loadAutocompleteData, this.searchTimeout * 1000);
            this.autocomplete.slideDown('fast');
          } else {
            clearTimeout(this.searchTimer);
            this.autocomplete.slideUp('fast');
          }
        }

        });

    const ver = Number(this.getSettings(this.searchVersionKey) || 0.1);
    if (this.searchVer > ver) {
        this.setSettings(this.chooseEngineKey, "yahoo");
        this.setSettings(this.searchVersionKey, this.searchVer);
    }
  }

  submitSearch() {
    const query = $('#search-term').val();
    if (query !== "") {
      try {
          Stats.event('tbz_search', this.customFeed, query);
          if(this.searchInNewTab === true) {
			  window.open(`${this.searchUrl}&q=${encodeURIComponent(query)}&searchp=${this.customFeed}`, "_blank");
		  } else {
			  window.location = `${this.searchUrl}&q=${encodeURIComponent(query)}&searchp=${this.customFeed}`;
		  }

      } catch (e) {
        location.reload();
      }
    }
    return false;
  }

  initAutocomplete() {

    this.searchTimer = null;
    this.searchTimeout = 0.4;

    // register autocomplete jsonp callback
    window.aCallback = (result) => {
      if (result && result.length > 1) {
        const suggestions = result[1];

        const total = [];
        for (let i = 0; i < suggestions.length && i < 5; ++i) {
          const results = $(`<li class="search-result">${suggestions[i]}</li>`);
          results.on('click', (e) => {
            $('#search-term')[0].value = $(e.target).text();
            this.submitSearch();
          });
          total.push(results);
        }
        $('#search-autocomplete-list').html(total);
      }
    };

    // handle click to close autocomplete
    $(document).on('click', (e) => {
      //click anywhere outside searchbox to close
      if (!$(e.target).closest('#search-autocomplete').length && !$(e.target).closest('#search-term').length) {
        if (this.autocomplete.is(':visible')) {
          this.autocomplete.slideUp('fast');
          clearTimeout(this.searchTimer);
        }
      }
    });
  }

  loadAutocompleteData() {
    const query = $('#search-term').val();
    const baseUrl = `//suggestqueries.google.com/complete/search?output=chrome&hl=en&q=${query}&jsonp=aCallback`;

    $.ajax({
      url: baseUrl,
      dataType: "jsonp"
    });
  }
}
