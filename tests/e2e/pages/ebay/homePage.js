/**
 * homePage.js is used to declare all the Web Elements and functions of xcover Home page.
 */

'use strict';

import log4js from '../../../../log4js/log4jsConfig';
import nightwatchhelper from '../../helpers/nightwatchhelper';
import util from '../../helpers/util';


const loginCommands = {
  /**
   * Navigate to xcover home page and get quote
   *
   * @param {object} browser
   */
  getQuote: function (browser) {
    const args = process.argv;
    const acceptBtn = module.exports.elements.acceptBtn;

    browser
      .resizeWindow(1580, 1000)
      .waitForPageLoad()
      .waitForElementVisibility(acceptBtn);

    nightwatchhelper.getCookies(browser).then(function (cookies) {
      nightwatchhelper.deleteCookie(browser, ...[cookies]);
    });

    browser
      .clickElement(acceptBtn, 'xpath')
      .waitForElementVisibility(module.exports.elements.getQuoteBtn);
    browser.pause(5000)
    log4js.logging().info(' ***** Search for Mazda cars *****\n');

    browser
      .clickElement(module.exports.elements.getQuoteBtn, 'xpath')
      








      
  }

};

/**
 * Declare the Web Elements.
 */
module.exports = {
  commands: [loginCommands],
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    title: {
      selector: 'title'
    },
    acceptBtn: {
      selector: '//button[@id="rcc-confirm-button"]',
      locateStrategy: 'xpath'
    },
    appliancesBtn: {
      selector: '//button[@id="appliances-insurance"]'
    },
    getQuoteBtn: {
      selector: '//a[@id="nav-get-quote-button"]',
      locateStrategy: 'xpath'
    },
    nextBtn:{
      selector: '//button[@type="submit"]',
      locateStrategy: 'xpath'
    },
    address: {
      selector: '//input[@name="address"]',
      locateStrategy: 'xpath'
    },
    geoSuggest: {
      selector: '//li[@class="geosuggest__item"]',
      locateStrategy: 'xpath'
    },
    brand:{
      selector: '//input[@name="brand"]',
      locateStrategy: 'xpath'
    },
    model:{
      selector: '//input[@name="model"]',
      locateStrategy: 'xpath'
    },
    retailValue:{
      selector: '//input[@name="retail_value"]',
      locateStrategy: 'xpath'
    },
    datePicker:{
      selector: '//button[@class="SingleDatePickerInput_calendarIcon SingleDatePickerInput_calendarIcon_1"]',
      locateStrategy: 'xpath'
    },
    date:{
      selector: '//div[@class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]/div/table/tbody/tr/td[@class="CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2"]',
      locateStrategy: 'xpath'
    },
    purchase:{
      selector: '//div[@class="react-select__value-container css-1hwfws3"]',
      locateStrategy: 'xpath'
    },
    selectPurchase:{
      selector: '//div[@id="react-select-2-option-0"]',
      locateStrategy: 'xpath'
    }
  }
};
