/**
 * datePage.js is used to declare all the Web Elements and functions of xcover date page.
 */

 'use strict';

 import log4js from '../../../../log4js/log4jsConfig';
 import nightwatchhelper from '../../helpers/nightwatchhelper';
 import util from '../../helpers/util';
 
 
 const loginCommands = {
   /**
    * Select date from the list
    *
    * @param {object} browser
    */
   selectDate: function (browser) {
 
     
     nightwatchhelper.getCookies(browser).then(function (cookies) {
       nightwatchhelper.deleteCookie(browser, ...[cookies]);
     });
 
 
     log4js.logging().info(' ***** Enter the date *****\n');
 
     browser
     .clickElement(module.exports.elements.datePicker, 'xpath')
     .pause(5000)
     .clickElement(module.exports.elements.date, 'xpath')
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
    datePicker:{
        selector: '//button[@class="SingleDatePickerInput_calendarIcon SingleDatePickerInput_calendarIcon_1"]',
        locateStrategy: 'xpath'
      },
      date:{
        selector: '//div[@class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]/div/table/tbody/tr/td[@class="CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2"]',
        locateStrategy: 'xpath'
      }
   }
 };
 