const Puppeteer = require( 'puppeteer' )

const { getLinks } = require( './functions' )

const {
  CSS_SELECTOR__SEARCH_INPUT,
  CSS_SELECTOR__SHOW_RESULTS_ALL,
  CSS_SELECTOR__SHOW_RESULTS_ITEM,
  WEB_URI
} = require( './constants' )

class WebSearcher {
  

  constructor( searchQuery ) {
    this.setup().then(
      async () => {
        await this.searchWebFor( searchQuery )
        await this.page.close()
      }
    )
  }

  async setup() {
    await this.setupBrowser()
    await this.setupPage()
  }
  

  async searchWebFor( searchQuery ) {
    await this.loadWebpage( WEB_URI )
    await this.type_searchQuery( searchQuery )
    
    await this.click_showResults( CSS_SELECTOR__SHOW_RESULTS_ALL )

    await this.waitForVisibleItem( CSS_SELECTOR__SHOW_RESULTS_ITEM )
    
    const links = await this.extractLinksThatMatch( CSS_SELECTOR__SHOW_RESULTS_ITEM )
    this.logLinksToPage( links )
  }

  async loadWebpage( websiteURI ) {
    await this.page.goto( websiteURI )
  }
  
  async type_searchQuery( searchQuery ) {
    await this.page.type(
      CSS_SELECTOR__SEARCH_INPUT,
      searchQuery
    )}
  
  async click_showResults( cssSelector ) {
    await this.page.waitForSelector( cssSelector )
    await this.page.click( cssSelector )
  }
  
  async waitForVisibleItem( cssSelector ) {
    await this.page.waitForSelector( cssSelector )
  }
  
  async extractLinksThatMatch_THIS_METHOD_IS_BROKEN_CAN_YOU_FIX_IT( cssSelector ) {
    throw new Error( "This method is not implemented properly" )
    return await this.page.evaluate(
      ({ cssSelector, getLinks }) => getLinks( cssSelector ),
      { cssSelector, getLinks }
    )
  }

  async extractLinksThatMatch( cssSelector ) {
    return await this.page.evaluate(
      ( cssSelector ) => {
        const anchors = Array.from( document.querySelectorAll( cssSelector ) )

        return anchors.map(
          anchor => {
            const title = anchor.textContent.split('|')[0].trim();
            return `${title} - ${anchor.href}`;
          })
      },
      cssSelector
    )
  }
  
  async logLinksToPage( links ) {
    console.log( links.join( '\n' ) )
  }

  async setupBrowser() {
    this.browser = await Puppeteer.launch()
    return this.browser
  }

  async setupPage() {
    this.page = await this.browser.newPage()
    return this.page
  }
  
}

module.exports.WebSearcher = WebSearcher
