class Translation{constructor(){this.Utils=new Config}save(){chrome.storage.local.set({tl:$("#languages").val(),vm:$("#view-mode").val()}),$("#notification").attr("class","notification is-warning"),$("#message").html(chrome.i18n.getMessage("automatic_save")),setTimeout((function(){$("#message").html(),$("#notification").attr("class","hide")}),2e3)}getTranslateToLanguage(){return this.Utils.config.tl?this.Utils.config.tl:this.normalizeLanguageCode(window.navigator.language)}supportedLocale(e){return-1!==["ar","bg","ca","cs","da","de","el","en","en-GB","en-US","es","es-419","et","fi","fil","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nl","no","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tl","tr","uk","vi","zh-CN","zh-TW"].indexOf(e)}normalizeLanguageCode(e){return"zh-tw"===e.toLowerCase()?"zh-TW":"zh-cn"===e.toLowerCase()?"zh-CN":e.length>=2&&this.supportedLocale(e)?e.substr(0,2):"en"}loadSupportedViewModes(){let e=document.querySelector("#view-mode"),t={ont:chrome.i18n.getMessage("view_mode_ont"),ognt:chrome.i18n.getMessage("view_mode_ognt")};this.populateSelect(e,t),chrome.storage.local.get("vm",function(t){this.setSelectedValue(e,t.vm)}.bind(this))}createContextMenu(){chrome.contextMenus.create({title:chrome.i18n.getMessage("translate")+" '%s'",contexts:["selection"],onclick:this.translate.bind(this)})}openUrl(e,t){chrome.tabs.create({url:e,selected:t})}setSelectedValue(e,t){for(let n=0;n<e.children.length;n++){let a=e.children[n];if(a.value===t){a.selected=!0;break}}}populateSelect(e,t){for(let n in t){let a=document.createElement("option");a.value=n,a.textContent=t[n],e.appendChild(a)}return e}changeElementsVisibility(){let e=document.getElementsByTagName("select"),t=document.getElementsByTagName("label");for(let t=0;t<e.length;t++)e[t].className="visible";for(let e=0;e<t.length;e++)t[e].className="visible"}translate(e){let t=e.selectionText,n=Utils.config.vm,a=t.toLowerCase()!==chrome.i18n.getMessage("name").toLowerCase()?"auto":"la";if("tt"!==n){let e="http://translate.google.com/#"+a+"|"+this.getTranslateToLanguage()+"|"+encodeURIComponent(t);chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{action:"translate",dir:e,lens:"ognt"===n})}))}}}