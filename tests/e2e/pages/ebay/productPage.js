/**
 * productPage.js is used to declare all the Web Elements and functions of xcover product page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Enter the brand 
    *
    * @param {object} browser
    * @param {object} brand
    */
   selectProduct: function (browser, brand) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Enter brand *****\n');
 
     browser
     .clickElement(module.exports.elements.brand, 'xpath')
     .setText(module.exports.elements.brand, brand)
     .pause(5000)
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
    brand:{
        selector: '//input[@name="brand"]',
        locateStrategy: 'xpath'
      }
   }
 };
 