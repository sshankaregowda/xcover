/**
 * addressPage.js is used to declare all the Web Elements and functions of xcover address page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Select address from the list
    *
    * @param {object} browser
    * @param {object} address
    */
   selectAddress: function (browser, address) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Select insure from the list *****\n');
 
     browser
      .clickElement(module.exports.elements.address, 'xpath')
      .setText(module.exports.elements.address, address)
      .clickElement(module.exports.elements.geoSuggest, 'xpath')
      .pause(1000)
      .clickElement(module.exports.elements.nextBtn, 'xpath')  
 
     
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
    address: {
        selector: '//input[@name="address"]',
        locateStrategy: 'xpath'
      },
      geoSuggest: {
        selector: '//li[@class="geosuggest__item"]',
        locateStrategy: 'xpath'
      },
   }
 };
 