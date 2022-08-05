//Verifying details of saved paste
const assert = require('assert');
const Page = require ('./page');


class SavedPage extends Page { 

    //page locators:
    get bashLink() { return $('//a[contains(text(),"Bash")]')}
    get codeCheck1() {return $('.de1')}
    get codeCheck2() {return $('.textarea -raw js-paste-raw')}
    
    //page action: 
    async verifyPasteName() {
        await browser.pause(5000);
        const pasteTitle = await browser.getTitle();
        return await assert.equal(pasteTitle,'how to gain dominance among developers - Pastebin.com')
    }

    async verifySyntax() {
        await this.bashLink.waitForClickable();
        return await assert.equal(this.bashLink,'Bash');
    }

    async verifyCode() {
        return await assert.strictEqual(this.codeCheck1,this.codeCheck2);
    }
}

module.exports = new SavedPage();
