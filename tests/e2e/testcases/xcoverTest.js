/**
 * xcoverTest.js contains tests to apply for insure and get quote
 */

'use strict';

let xcoverHomepage;
let xcoverInsurePage;
let xcoverAddressPage;
let xcoverProductPage;
let xcoverModelPage;
let xcoverPayPage;
let xcoverDatePage;
let xcoverPurchasePage;

module.exports = {
  /**
   * Runs before first test case to launch xcover and creating page reference to access the required pages.
   *
   * @param {object} browser
   */
  before: function (browser) {
    xcoverHomepage = browser.page.ebay.homePage();
    xcoverInsurePage = browser.page.ebay.insurePage();
    xcoverAddressPage = browser.page.ebay.addressPage();
    xcoverProductPage = browser.page.ebay.productPage();
    xcoverModelPage = browser.page.ebay.modelPage();
    xcoverPayPage = browser.page.ebay.payPage();
    xcoverDatePage = browser.page.ebay.datePage();
    xcoverPurchasePage = browser.page.ebay.purchasePage();
    xcoverHomepage.navigate();
  },

  /**
   * Navigate to xcover home page and Verify the xcover home page title.
   *
   */
  '@tags': ['login'],
  'Should have correct xcover page title': function () {
    xcoverHomepage.assert.checkTitle('XCover | Award-Winning & Global: Product Insurance, Travel Insurance, Auto Insurance, Shipping Insurance | XCover.com');
    xcoverHomepage.takeScreenshot('XCover | Award-Winning & Global: Product Insurance, Travel Insurance, Auto Insurance, Shipping Insurance | XCover.com');
  },

  /**
   * get the quote
   *
   * @param {object} browser
   */
  'Should be able to search for insure and verify if got the quote': function (browser) {
    xcoverHomepage.assert.checkElementPresent(xcoverHomepage.elements.acceptBtn);
    xcoverHomepage.getQuote(browser);
    xcoverInsurePage.selectInsure(browser);
    xcoverAddressPage.selectAddress(browser, '54A bridge street schofields');
    xcoverProductPage.selectProduct(browser, 'electrolux');
    xcoverModelPage.selectModel(browser, 'v2');
    xcoverPayPage.enterAmount(browser, '100');
    xcoverDatePage.selectDate(browser);
    xcoverPurchasePage.enterPurchase(browser);
    xcoverPurchasePage.assert.checkContainsText(xcoverPurchasePage.elements.quoteAmount, 'A$6.05');
  },

  /**
   * Runs after all test cases to close the Appnext.
   *
   * @param {object} browser
   */
  after: function (browser) {
    browser.end();
  }
};
