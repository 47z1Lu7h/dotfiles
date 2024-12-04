const fbUrl = 'https://m.facebook.com/';

class Background {
    constructor() {
        this.appTabId    = null;
        this.appWindowId = null;
       
        this.clickShowFb();
      
    }

    clickShowFb() {
        chrome.browserAction.onClicked.addListener(() => {
            if(this.appWindowId) {
                chrome.windows.update(this.appWindowId, {focused: true});

            } else {
                chrome.windows.create({
                    type     : 'popup',
                    url      : fbUrl,
                    width    : 550,
                    height   : screen.height,
                    left     : screen.width - 400,
                }, window => {
                    this.appWindowId = window.id;
                    this.appTabId    = window.tabs[0].id;
                });
            }
        });
    }
}

const b = new Background();
