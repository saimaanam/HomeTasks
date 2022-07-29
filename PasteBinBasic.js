describe ("code suite", () => {
    it("PasteBin Basic",async() =>{

        //1. Open https://pastebin.com or a similar service in any browser
        await browser.url("https://pastebin.com");

        //*Code: "Hello from WebDriver"
        const pasteCode = await $("//textarea[@id='postform-text']")
        await pasteCode.addValue("Hello from WebDriver")
        console.log(await pasteCode.getValue());
        browser.pause(3000);
        
        // //*Paste Expiration: "10 Minutes"
        // const pasteExpiration =await $("#postform-format");
        // console.log(await pasteExpiration.getValue()); 
        // await pasteExpiration.selectByIndex(2);
        // console.log(await pasteExpiration.getValue());
        //element not interactable: Element is not currently visible and may not be manipulated

        //*Paste Name / Title: "helloweb"
        const PasteName = await $("#postform-name")
        await PasteName.addValue("Hello Web")
        console.log(await PasteName.getValue());
        browser.pause(3000);

        //2. Create a New Paste 
        const button = await $("button[type='submit']")
        await button.click();
        

    });
})
