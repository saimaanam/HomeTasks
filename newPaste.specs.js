const assert = require('assert');
const newPaste = require('../pages/newPaste');



describe('create a new paste with given details', ()=>{
    it('it should open the main URL and verify the title', async() =>{

        await browser.url('');
        const browserTitle = await browser.getTitle();
        await assert.strictEqual(browserTitle,'Pastebin.com - #1 paste tool since 2002!');
    });

    it('it should enter code, paste title and create new paste', async ()=>{
        await newPaste.open();
        await newPaste.createPaste('Hello from WebDriver','helloweb');
      
    });
});