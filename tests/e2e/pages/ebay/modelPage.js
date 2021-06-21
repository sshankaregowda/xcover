/**
 * modelPage.js is used to declare all the Web Elements and functions of xcover model page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Enter the model 
    *
    * @param {object} browser
    * @param {object} model
    */
   selectModel: function (browser, model) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Enter model *****\n');
 
     browser
     .clickElement(module.exports.elements.model, 'xpath')
     .setText(module.exports.elements.model, model)
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
    model:{
        selector: '//input[@name="model"]',
        locateStrategy: 'xpath'
      },
   }
 };
 