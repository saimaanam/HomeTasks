describe ("code suite", () => {
    it("PasteBin Advance",async() =>{

        //Opening https://pastebin.com in chrome browser
        await browser.url("https://pastebin.com");


        //*Code:
        const pasteCode = await $("//textarea[@id='postform-text']")
        await pasteCode.setValue('git config --global user.name "New Sheriff in Town"\n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n git push origin master --force')
        console.log(await pasteCode.getValue());
        browser.pause(5000);
        
        //* Syntax Highlighting: "Bash"
        // const syntaxHighlighting = await $("#postform-format");
        // console.log(await syntaxHighlighting.getValue());
        // await syntaxHighlighting.selectByAttribute('value', '8');
        // console.log(await syntaxHighlighting.getValue())
        // Alert: This element is not interactable through selenium(automation) as it is not visible in UI. Try any near by element


        //*Paste Expiration: "10 Minutes"
        // const pasteExpiration =await $("#postform-format");
        // console.log(await pasteExpiration.getValue()); 
        // await pasteExpiration.selectByIndex(2);
        // console.log(await pasteExpiration.getValue());
        //element not interactable: Element is not currently visible and may not be manipulated

        //*Paste Name / Title: "how to gain dominance among developers"
        const PasteName = await $("#postform-name")
        await PasteName.addValue("how to gain dominance among developers")
        console.log(await PasteName.getValue());
        browser.pause(3000);

        //Creating a New Paste 
        const button = await $("button[type='submit']")
        await button.click();
        
        //Checking browser page title matches Paste Name / Title
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining('how to gain dominance among developers')

        
    });
})
