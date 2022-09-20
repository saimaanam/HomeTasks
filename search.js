//import homePage from "../pages/homePage";

const homePage = require('../pages/homePage');
const searchResults = require('../pages/searchResults');
const calculator = require("../pages/calculator");


describe ('googleCloudSearch',()=>{
    it ('SearchCloud',async()=>{
        await homePage.open('https://cloud.google.com/');
        await browser.maximizeWindow();
        await browser.pause(3000);
        await homePage.googleCloudSearch();
        await browser.pause(3000);
        await searchResults.selectCloudLink();
        await calculator.selectComputeEngine();
        await calculator.fillData();
        

    })
}) 