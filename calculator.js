const Page = require ('./page');

class pricingCalculator extends Page{
    get computeEngine(){
       // return $('//div[@class=\'gs-title\']//b[contains(text(),\'Google Cloud Pricing Calculator\')]');
       return $('//div[contains(text(),\'Compute Engine\')]');
    } 

    get numberOfInstance() { return $('#input_90')}
    get operatingSystem() {return $('md-select-value[id=\'select_value_label_82\'] div[class=\'md-text\']')}
    get vmClass() {return $('md-input-container[class=\'md-input-has-placeholder flex md-input-has-value md-input-focused\'] span:nth-child(1)')}
    get series() {return $('//md-input-container[@class=\'md-input-has-placeholder flex md-input-has-value md-input-focused\']//span[1]')}
    get instanceType() {return $('#select_value_label_86')}
    get addGpuschkbox() {return $('md-checkbox[class=\'ng-valid md-checked ng-not-empty ng-dirty ng-valid-parse ng-touched\'] div[class=\'md-container md-ink-ripple\']')}
    get gpuType() { return $('#select_465')}
    get numberOfGpu() {return $('#select_467')}
    get localSsd() {return $('md-select-value[id=\'select_value_label_421\'] div[class=\'md-text ng-binding\']')}
    get dataCenterLocation() {return $('md-select-value[id=\'select_value_label_88\'] div[class=\'md-text ng-binding\']') }
    get commitedUsage() {return $('md-select-value[id=\'select_value_label_89\'] div[class=\'md-text\']')}
    get estimateBtn() {return $('//button[@ng-disabled="ComputeEngineForm.$invalid || !listingCtrl.machineType[\'computeServer\']"]')}
    get iframe1() {return $('iframe[name=\'goog_1218760719\']')}
    
    async selectComputeEngine() {
        await console.log("in function select compute engine");
       await console.log("Frames,", await $$("//iframe").length);
        var allframes= await $$("//iframe");
        await console.log("Frames-,",allframes.length);
        // /allframes.forEach(element => {
            for(var i=1;i<await allframes.length;i++)
                {
                   await console.log("frame:", i+": "+ await allframes[i]);
                    await browser.switchToFrame(i);
                    await browser.pause(5000);
                   await console.log("ENGine:", await this.computeEngine.isDisplayed());
                }
           
        await browser.switchToFrame(2);
        await this.computeEngine.click();
        await browser.pause(2000);
        await console.log("compute engine selected");

    }

    async fillData() {
        await console.log("in function fill data");
        await this.numberOfInstance.click();
        await this.numberOfInstance.setValue('4');
        await console.log("number of instance 4 selected");
        await browser.pause(20000);
        
        // await this.operatingSystem.click();
        // await this.operatingSystem.setValue('Free:Debian');
        
        
        // await this.vmClass.click();
        // await this.vmClass.setValue('Regular');
        
        // await this.series.click();
        // await this.series.setValue('N1');
        
        // await this.instanceType.click();
        // await this.instanceType.setValue('n1-standard-8 (vCPUs: 8, RAM: 30 GB)');
        
        // await this.addGpuschkbox.click();
        
        // await this.gpuType.click();
        // await this.gpuType.setValue('NVIDIA Tesla V100');
        
        // await this.localSsd.click();
        // await this.localSsd.setValue('42x375 Gb');
        
        // await this.dataCenterLocation.click();
        // await this.dataCenterLocation.setValue('Frankfurt (europe-west3)');
        
        // await this.commitedUsage.click();
        // await this.commitedUsage.setValue('1 Year');
        
        // await browser.pause(3000);

        // await this.estimateBtn.click();
        // await browser.pause(3000);


}
    }

module.exports = new pricingCalculator();