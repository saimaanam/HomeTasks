const Page = require('./page');



class GoogleCalcPage extends Page {

    get computeEngine(){
        return $('div[title="Compute Engine"]');
    }
    
    get googleCloudCalcFrame(){
        return $('#cloud-site iframe');
    }

    get myFrame(){
        return $('#myFrame');
    }

    get instance(){return $('#input_90');}
    get oprSys(){return $('#select_value_label_82');}
    get selectOS(){return $('#select_option_92');}
    get series(){return $('#select_115');}
    get selectN1(){return $('#select_option_201');}
    get machineType(){return $('#select_117');}
    get selectMachine(){return $('#select_option_422');}
    get addGpu(){return $('[aria-label="Add GPUs"]');}
    get gpuType(){return $('[aria-label="GPU type"]');}
    get selectGpuType(){return $('#select_option_466');}
    get numberOfGpu(){return $('#select_value_label_457');}
    get selectNumberOfGpu(){return $('#select_option_469');}
    get localSsd(){return $('#select_value_label_419');}
    get selectLocalSsd(){return $('#select_option_447');}
    get dataCentreLocation(){return $('#select_value_label_88');}
    get selectDataCentre(){return $('#select_option_228');}
    get committedUsage(){return $('#select_value_label_89');}
    get selectCommittedUsage(){return $('#select_option_128');}
    get estimateBtn(){return $('[aria-label="Add to Estimate"]');}
    get email(){return $('[title="Email Estimate"] '');}
   
    
    
    async switchToLastFrame(){
        await this.googleCloudCalcFrame.waitForDisplayed();
        await browser.switchToFrame(await this.googleCloudCalcFrame);
        await this.myFrame.waitForDisplayed();
        await browser.switchToFrame(await this.myFrame);
        
    }

    async clickinsidetheFrame(){
        await this.computeEngine.waitForClickable();
        await this.computeEngine.click();
        
    }

    async passNumberOfInstance(number){
        await this.instance.waitForClickable();
        await this.instance.setValue(number);
        
    }

    async osSelection(){
        await this.oprSys.waitForClickable();
        await this.oprSys.click();
        await this.selectOS.waitForClickable();
        await this.selectOS.click();
        
    }

    async seriesSelection(){
        await this.series.waitForClickable();
        await this.series.click();
        await this.selectN1.waitForClickable();
        await this.selectN1.click();
        
    }

    async machineTypeSelection(){
        await this.machineType.waitForClickable();
        await this.machineType.click();
        await this.selectMachine.waitForClickable();
        await this.selectMachine.click();
    }

    async addGpuSelection(){
        await this.addGpu.waitForClickable();
        await this.addGpu.click();
    }

    async gpuTypeSelection(){
        await this.gpuType.waitForClickable();
        await this.gpuType.click();
        await this.selectGpuType.waitForClickable();
        await this.selectGpuType.click();
    }

    async numberOfGpuSelection(){
        await this.numberOfGpu.waitForClickable();
        await this.numberOfGpu.click();
        await this.selectNumberOfGpu.waitForClickable();
        await this.selectNumberOfGpu.click();
    
    }

    async SSDselection(){
        await this.localSsd.waitForClickable();
        await this.localSsd.click();
        await this.selectLocalSsd.waitForClickable();
        await this.selectLocalSsd.click();
        
    }

    async dataCentreLocationSelection(){
        await this.dataCentreLocation.waitForClickable();
        await this.dataCentreLocation.click();
        await this.selectDataCentre.waitForClickable();
        await this.selectDataCentre.click();
        
    }

    async committedUsageSelection(){
        await this.committedUsage.waitForClickable();
        await this.committedUsage.click();
        await this.selectCommittedUsage.waitForClickable();
        await this.selectCommittedUsage.click();
        
    }

    async estimate(){
        await this.estimateBtn.waitForClickable();
        await this.estimateBtn.click();
        await browser.pause(5000);
        
    }


    async selectEmail(){
        await this.email.waitForClickable();
        await this.email.click();
       
        
    }

   
               };

module.exports = new GoogleCalcPage();
