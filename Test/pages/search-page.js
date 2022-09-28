const Page = require ('./page');

class search extends Page{
    get cloudLink(){
        return $('//div[@class=\'gs-title\']//b[contains(text(),\'Google Cloud Pricing Calculator\')]');
    } 
    
    
    async selectCloudLink() {
       
        await this.cloudLink.click();

    }
}


module.exports = new search();
