const Page = require ('./page');

class SavedPage extends Page { 

    //page locators:
    get bashLink() { return $('//a[contains(text(),"Bash")]')}
    get codeCheck() {return $('.li1')}
    get successMessage() {return $('.page')}
    


    async waitingForSavedPasteLoaded() {
    await browser.waitUntil(async () => await this.successMessage.isDisplayed(),
      {
        timeout: 5000,
        timeoutMsg: 'expected success message to be displayed after 5s'
      }
    );
  }
}

module.exports = new SavedPage();

