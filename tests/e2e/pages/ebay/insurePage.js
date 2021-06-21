/**
 * insurePage.js is used to declare all the Web Elements and functions of xcover insure page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Select insure from the list
    *
    * @param {object} browser
    */
   selectInsure: function (browser) {
     const appliances = module.exports.elements.appliancesBtn;
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Select insure from the list *****\n');
 
     browser
     .clickElement(module.exports.elements.appliancesBtn, 'xpath')
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
     appliancesBtn: {
      selector: '//button[@id="appliances-insurance"]'
     },
     nextBtn:{
      selector: '//button[@type="submit"]',
      locateStrategy: 'xpath'
    },
   }
 };
 