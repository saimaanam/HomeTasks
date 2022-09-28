const Page = require('./page');

var saveEmail = null;
class tenMinuteMail extends Page{

    get emailAddress(){return $('#copy_address');}
    get emailAddressToSave(){return $('#mail_address');}
    get textAreaToEnterEmail(){return $('//input[@ng-model="emailQuote.user.email"]');}
    get sendEmailBtn(){return $('[aria-label="Send Email"]');}
    get scrollCheck(){return $('#main_content');}
    get openEmail(){return $('.small_message_icon_box');}
    
    
    
    async openBrowserForEmail() {
        browser.newWindow('https://10minutemail.com');
    }

    async selectEmailAddress(){
        await this.emailAddress.waitForClickable();
        await this.emailAddress.click();
    }

    async selectEmailAddressAndSaveInVar(){
        await this.emailAddressToSave.waitForClickable();
        saveEmail = await this.emailAddressToSave.getValue();
        return saveEmail;
    }
    
     async switchBrowser(){
        browser.switchWindow('cloud.google');
        
    }
    
    async pasteEmailAddress(){
        await this.textAreaToEnterEmail.waitForClickable();
        await this.textAreaToEnterEmail.click();
        await this.textAreaToEnterEmail.setValue(saveEmail);
        console.log("Email", saveEmail);
        await browser.pause(3000);
        
    }

    async clickOnSendEmailBtn(){
        await this.sendEmailBtn.waitForClickable();
        await this.sendEmailBtn.click();
    }

    async switchBrowserToCheckInbox(){
        browser.switchWindow('10minutemail');
        
    }

    getPrice(){
        const estimation = "Estimated Component Cost: USD 1,143.83 per 1 month";
        const priceArray= estimation.split(" ");
        console.log('Estimated amount is', priceArray[4]);

     }

    async clickToOpenEmail(){
        await this.scrollCheck.scrollIntoView();
        await browser.waitUntil(async ()=>await this.openEmail.isDisplayed(),
        {
            timeOut:6000,
            timeOutmsg:"email not recieved even after 5 seconds"
        });
        await this.openEmail.isDisplayed();
        await this.openEmail.click();
        console.log("email recieved")
    }
}



module.exports = new tenMinuteMail();
