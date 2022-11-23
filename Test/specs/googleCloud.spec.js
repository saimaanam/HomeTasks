

const homepage = require('../pages/home-page');
const searchpage = require('../pages/search-page');
const calculatorPage = require("../pages/calculator-page");
const emailpage = require('../pages/email-page');
const { getPrice } = require('../pages/email-page');

describe ('googleCloudSearch',()=>{
    it ('it should search Google Cloud Platform', async()=>{
        homepage.open();
        await browser.maximizeWindow();
    })

    it('it should search Google Cloud Platform Pricing Calculator', async()=>{
        await homepage.googleCloudSearch();
    }) 
    
    it('it should click on Google Cloud Platform Pricing Calculator link', async()=>{
        await searchpage.selectCloudLink();
    }) 
    
    it('it should select frame for Compute Engine', async()=>{
        await calculatorPage.switchToLastFrame();
    }) 

    it('it should select data for Compute Engine', async ()=>{
        await calculatorPage.passNumberOfInstance(4);
        await calculatorPage.osSelection();
        await calculatorPage.seriesSelection();
        await calculatorPage.machineTypeSelection();
        await calculatorPage.addGpuSelection();
        await calculatorPage.gpuTypeSelection();
        await calculatorPage.numberOfGpuSelection();
        await calculatorPage.SSDselection();
        await calculatorPage.dataCentreLocationSelection();
        await calculatorPage.committedUsageSelection();
        
    }) 

    it('it should estimate the price for the selected configuration', async()=>{
        await calculatorPage.estimate();
    }) 

    it('it should share the estimation on provided email address', async()=>{
        await getPrice();
        await calculatorPage.selectEmail();
        await emailpage.openBrowserForEmail();
    await browser.pause(5000);
        await emailpage.selectEmailAddressAndSaveInVar();

        await emailpage.switchBrowser();
        await calculatorPage.switchToLastFrame();
        await emailpage.pasteEmailAddress();
        await emailpage.clickOnSendEmailBtn();
        await emailpage.switchBrowserToCheckInbox();
        //await emailpage.clickToOpenEmail();
    }) 

}) 
