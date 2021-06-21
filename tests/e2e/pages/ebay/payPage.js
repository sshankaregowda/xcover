/**
 * payPage.js is used to declare all the Web Elements and functions of xcover pay page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Enter the pay amount 
    *
    * @param {object} browser
    * @param {object} amount
    */
   enterAmount: function (browser, amount) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Enter amount *****\n');
 
     browser
     .clickElement(module.exports.elements.retailValue, 'xpath')
     .setText(module.exports.elements.retailValue, amount)
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
    retailValue:{
        selector: '//input[@name="retail_value"]',
        locateStrategy: 'xpath'
      },
   }
 };
 