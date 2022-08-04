//Page class that contain common functions

module.exports = class Page {

    //go to pastebin URL
    open (path) {
        return browser.url(path);
    }

}