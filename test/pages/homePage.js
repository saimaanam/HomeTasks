const Page = require ('./page');

class homePage extends Page{
    get searchBtn(){
        return $('input[placeholder=\'Search\']');
    } 
    get searchTxtBox(){
        return $('//input[@aria-label="Search"]');
    }
    
    async googleCloudSearch() {
        await browser.maximizeWindow();
        await this.searchBtn.click();
        await this.searchTxtBox.setValue("Google Cloud Platform Pricing Calculator");
        await browser.keys("Enter");
        await browser.pause(3000);

    }
}



//export default new homePage();
module.exports = new homePage();
