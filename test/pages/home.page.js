const Page = require ('./page');

class HomePage extends Page {
    //Page locators:
    get dashboardHeader() {return $('#menu_dashboard_index')}

    //page actions:
        //to verify user is in dashboard page
        async isDashboardHeaderExist () {
            return await (await this.dashboardHeader).isDisplayed();
        }

    }

module.exports = new HomePage();