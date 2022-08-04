//creating a new paste

const Page = require ('./page');

class NewPaste extends Page{

    //page locators:
    get textArea() { return $('#postform-text')}
   // get postExpiration() {return $('#select2-postform-format-container')}
    //get dropdown () { return $('#select2-postform-status-container')} 
    get postName() {return $('#postform-name')}
    get btn() {return $('.btn')}

    //page actions:
        //to open URL
        async open () {
            await super.open('/')
        }

    //to enter code, paste name and create paste
    async createPaste (code,title) {
        await this.textArea.setValue(code);
        //await this.postExpiration.selectByIndex(duration);
        //await this.dropdown.selectByIndex(text);
        await this.postName.setValue(title);
        await this.btn.click();
    }
}

module.exports = new NewPaste();