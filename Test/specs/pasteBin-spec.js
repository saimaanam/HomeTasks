
const newPastePage = require('../pages/new-paste.page');
const savedPastePage = require('../pages/saved-paste.page');


describe('create a new paste with given details', ()=>{
    it('it should open the main URL and verify the title', async() =>{

        await newPastePage.open();
        await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });
    

    it('it should enter code, paste duration and title then create new paste', async ()=>{
        await newPastePage.open();
        await newPastePage.createPaste('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n git push origin master --force','how to gain dominance among developers');
        await savedPastePage.waitingForSavedPasteLoaded();
  
    });

    it('it should verify new paste is created,Syntax is suspended for bash', async ()=>{
        await expect(await savedPastePage.bashLink).toBeDisplayed();

    });

    it('it should verify code matches the one entered in paragraph 2', async ()=>{
        await expect(await savedPastePage.codeCheck).toHaveText('git config --global user.name "New Sheriff in Town"');
      });
});