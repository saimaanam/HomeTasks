const Page = require ('./page');

class searchResults extends Page{
    get cloudLink(){
        return $('//div[@class=\'gs-title\']//b[contains(text(),\'Google Cloud Pricing Calculator\')]');
    } 
    
    
    async selectCloudLink() {
       
        await this.cloudLink.click();
        await browser.pause(3000);

    }
}



//export default new homePage();
module.exports = new searchResults();
