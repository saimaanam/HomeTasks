const Page = require ('./page');

class homePage extends Page{
    get searchBtn(){
        return $('input[placeholder=\'Search\']');
    } 
    get searchTxtBox(){
        return $('//input[@aria-label="Search"]');
    }
    
    async open() {
        super.open('https://cloud.google.com/');
        await browser.maximizeWindow();
    }

    async googleCloudSearch() {
        await this.searchBtn.click();
        await this.searchTxtBox.setValue("Google Cloud Platform Pricing Calculator");
        await browser.keys("Enter");
    
    }
}

module.exports = new homePage();
