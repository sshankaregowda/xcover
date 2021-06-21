/**
 * purchasePage.js is used to declare all the Web Elements and functions of xcover purchase page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Select purchase from the list
    *
    * @param {object} browser
    * @param {object} purchase
    */
   enterPurchase: function (browser) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Enter the purchase *****\n');
 
     browser
      .clickElement(module.exports.elements.purchase, 'xpath')
      .setText(module.exports.elements.purchase, 'new')
      .pause(5000)
      .clickElement(module.exports.elements.selectPurchase, 'xpath')
      .clickElement(module.exports.elements.nextBtn, 'xpath')
      .pause(5000)
 
 
     
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
     nextBtn:{
      selector: '//button[@type="submit"]',
      locateStrategy: 'xpath'
    },
    purchase:{
        selector: '//div[@class="react-select__value-container css-1hwfws3"]',
        locateStrategy: 'xpath'
      },
      selectPurchase:{
        selector: '//div[@id="react-select-2-option-0"]',
        locateStrategy: 'xpath'
      },
      quoteAmount:{
          selector: '//span[@class="styled__StyledQuotePriceAmount-ksk4g6-6 jzGBJl"]',
          locateStrategy: 'xpath'
      }
   }
 };
 