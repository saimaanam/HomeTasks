

describe ("google cloud", ()=>{
    before(async ()=> {
        await browser.url('https://cloud.google.com/');
        await browser.maximizeWindow();

        await $('.devsite-searchbox').waitForClickable();
        await $('.devsite-searchbox').click();

        //await $('.devsite-search-field devsite-search-query').waitForClickable();
        await $('.devsite-search-container').setValue('Google Cloud Platform Pricing Calculator');
        //await $('.devsite-searchbox').click();

    })


    it('testing', async()=>{
        await browser.pause(2000);
    }); 
})