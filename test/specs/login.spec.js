const assert = require ('assert');
const LoginPage = require ('../pages/login.page');
const HomePage = require ('../pages/home.page');

describe('My Login application', () => {
    it ('open main url and verify the title', async() =>{
        await browser.url('');
        const title = await browser.getTitle();
        await assert.strictEqual(title,'OrangeHRM');
    });

    it ('enter valid username and password and login sucessfully', async ()=>{
        await LoginPage.open();
        await LoginPage.login('Admin','admin123');
        await assert.equal(true, await HomePage.isDashboardHeaderExist());
    });

});