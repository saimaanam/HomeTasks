const assert = require('assert');
const newPaste = require('../pages/newPaste');
const savedPaste = require('../pages/savedPaste');


describe('create a new paste with given details', ()=>{
    it('it should open the main URL and verify the title', async() =>{

        await browser.url('');
        await browser.pause(2000);
        await browser.maximizeWindow();
        const browserTitle = await browser.getTitle();
        await assert.strictEqual(browserTitle,'Pastebin.com - #1 paste tool since 2002!');
    });

    it('it should enter code, paste duration and title then create new paste', async ()=>{
        await newPaste.open();
        await newPaste.createPaste('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n git push origin master --force','how to gain dominance among developers');
      
    });

    it('it should verify new paste is created,Syntax is suspended for bash and code matches the one entered in paragraph 2', async ()=>{
        
        await savedPaste.verifyPasteName();
        await savedPaste.verifySyntax();
        await savedPaste.verifyCode();

    });
});