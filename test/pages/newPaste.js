//creating a new paste

const Page = require ('./page');

class NewPaste extends Page{

    //page locators:
    get textArea() { return $('#postform-text')}
    get syntaxHighlighting() {return $('#select2-postform-format-container')}
    get syntax() {return $('//li[contains(text(),"Bash")]')}
    get expDuration() {return $('#select2-postform-expiration-container') }
    get expiration() {return $('//li[contains(text(),"10 Minutes")]')}
    get postName() {return $('#postform-name')}
    get btn() {return $('.btn')}

    //page actions:
        //to open URL
        async open () {
            await super.open('/')
            
        }

    //to enter code, paste name and create paste
    async createPaste (code,title) {
        await $('.active-path').waitForClickable();
        await $('.active-path').click();
        await this.textArea.setValue(code);
        await this.syntaxHighlighting.click();
        await this.syntax.waitForClickable();
        await this.syntax.click();
        await this.expDuration.waitForClickable();
        await this.expDuration.click();
        await this.expiration.waitForClickable();
        await this.expiration.click();
        await this.postName.setValue(title);
        await this.btn.waitForClickable();
        await this.btn.click();
    }
}

module.exports = new NewPaste();