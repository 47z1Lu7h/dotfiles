/*
##
##  Enhancer for YouTube™
##  =====================
##
##  Author: Maxime RF <https://www.mrfdev.com>
##
##  This file is protected by copyright laws and international copyright
##  treaties, as well as other intellectual property laws and treaties.
##
##  All rights not expressly granted to you are retained by the author.
##  Read the license.txt file for more details.
##
##  © MRFDEV.com - All Rights Reserved
##
*/
((c,C)=>{function f(){var a={};this.name?a[this.name]=this.value:a[this.id]=this.checked;chrome.storage.local.set(a)}function Fa(){for(var a=[],d=0;d<r.length;d++)r[d].checked&&a.push(r[d].id);chrome.storage.local.set({controls:a})}function qa(){for(var a={},d=0;d<m.length;d++)a[m[d].name]=m[d].value;chrome.storage.local.set({customcolors:a})}function M(){for(var a="youtube-deep-dark-custom"===c.querySelector('input[name="theme"]:checked').value?!1:!0,d=0;d<m.length;d++)m[d].disabled=
a;N.disabled=a}function ra(){fetch(chrome.runtime.getURL(`_locales/${p}/messages.json`)).then(a=>a.json()).then(a=>{O=a.locale_dir.message;c.documentElement.lang=p.replace("_","-");c.body.dir=O;for(var d=y.length-1;0<=d;d--)y[d].textContent=a[y[d].dataset.text].message;for(d=n.length-1;0<=d;d--)n[d].dataset.tooltip=a[n[d].dataset.message].message;c.querySelector("#customcss").setAttribute("placeholder",a.custom_theme_instructions.message);c.querySelector("#customscript").setAttribute("placeholder",
a.custom_script_instructions.message);chrome.storage.local.set({localecode:p,localedir:O})})}function ia(a){c.body.classList.add("overflow-hidden");D.style.display="block";a.style.display="block";a.scrollTop=0;D.classList.add("in");setTimeout(()=>{c.body.classList.add("modal-open");a.querySelector("button.close-modal").focus()},50)}function sa(a){c.body.classList.remove("modal-open");setTimeout(()=>{a.style.display="none";D.classList.add("fade");D.classList.remove("in");setTimeout(()=>{D.style.display=
"none";c.body.classList.remove("overflow-hidden");"donate-modal"===a.id?c.querySelector("nav .donate a").focus():"backup-modal"===a.id&&c.querySelector("fieldset.backup button").focus()},300)},300)}function ta(){var a=c.querySelector("main"),d=c.createElement("style");d.textContent=`:root{--main-inset-shadow-top:${a.offsetTop}px;--main-inset-shadow-width:${a.clientWidth}px}`;c.head.appendChild(d)}var p=chrome.i18n.getMessage("locale_code"),O=chrome.i18n.getMessage("locale_dir"),y=c.querySelectorAll(".i18n"),
t=c.querySelector("main"),q=c.querySelector(".tooltip"),D=c.querySelector("#modal-backdrop"),m=c.querySelectorAll('#customcolors input[type="color"]'),N=c.querySelector("#reset-custom-colors"),n=c.querySelectorAll(".player-control .info"),r;chrome.storage.onChanged.addListener((a,d)=>{for(const k in a)void 0!==a[k].newValue&&("darktheme"===k&&a[k].newValue!==c.querySelector("#darktheme").checked?c.querySelector("#darktheme").click():"theme"===k&&a[k].newValue!==c.querySelector('input[name="theme"]:checked').value?
(c.querySelector(`input[name="theme"][value="${a[k].newValue}"]`).checked=!0,c.querySelector("#themevariant").disabled="enhanced-dark"===a[k].newValue?!1:!0,c.querySelector("#vendorthemevariant").disabled="youtube-deep-dark"===a[k].newValue?!1:!0,M()):"customtheme"===k&&(d=c.querySelector("#customtheme"),d.checked!==a[k].newValue&&(d.checked=a[k].newValue),c.querySelector("#customcss").disabled=!d.checked,c.querySelector("#customcss-btn").disabled=!d.checked))});chrome.storage.local.get(C,a=>{if(p===
a.localecode){c.documentElement.lang=p.replace("_","-");c.body.dir=O;for(var d=y.length-1;0<=d;d--)y[d].textContent=chrome.i18n.getMessage(y[d].dataset.text);for(d=n.length-1;0<=d;d--)n[d].dataset.tooltip=chrome.i18n.getMessage(n[d].dataset.message);c.querySelector("#customcss").setAttribute("placeholder",chrome.i18n.getMessage("custom_theme_instructions"));c.querySelector("#customscript").setAttribute("placeholder",chrome.i18n.getMessage("custom_script_instructions"))}else p=a.localecode,ra();d=
c.querySelectorAll("nav a, aside a");d.forEach(b=>{b.addEventListener("focus",function(){this.parentNode.classList.add("focus")});b.addEventListener("blur",function(){this.parentNode.classList.remove("focus")})});d[0].addEventListener("click",b=>{b.preventDefault();t.scrollTo(0,0)});var k=c.querySelector("nav .donate a"),z=c.querySelector("#donate-modal"),ua=z.querySelector(".close-modal");k.addEventListener("click",b=>{b.preventDefault();b=0>"bg ca cs da de el es et fi fr hr hu it lt lv nl pl pt_PT ro sk sl sv".indexOf(p)?
"USD":"EUR";z.querySelector(".donate-buttons").dataset.currencyCode=b;ia(z)});z.querySelectorAll(".donate-buttons button").forEach(b=>{b.addEventListener("click",function(){var e=0>"bg ca cs da de el es et fi fr hr hu it lt lv nl pl pt_PT ro sk sl sv".indexOf(p)?"USD":"EUR";e=k.dataset.paypal.replace(/AMOUNT/,this.dataset.amount).replace(/CURRENCY_CODE/,e);chrome.tabs.create({url:e,active:!0})})});ua.addEventListener("click",()=>{sa(z)});d=c.querySelector("#locale");d.value=p;d.addEventListener("change",
function(){p=this.value;ra()});d.addEventListener("focus",function(){this.parentNode.classList.add("focus")});d.addEventListener("blur",function(){this.parentNode.classList.remove("focus")});c.querySelectorAll("aside a").forEach(b=>{b.addEventListener("click",e=>{e.preventDefault();var g=c.querySelector("fieldset."+e.target.dataset.target);t.scrollTop=0===t.scrollTop?1:t.scrollTop-1;t.addEventListener("scrollend",function Ga(){t.removeEventListener("scrollend",Ga);g.classList.add("highlighted");g.querySelector("input, textarea, select:not(.hidden), button").focus()});
g.scrollIntoView()})});"#applyvideofilters #blackbars #blockhfrformats #blockwebmformats #boostvolume #cinemamode #cinemamodewideplayer #convertshorts #executescript #expanddescription #hidecardsendscreens #hidechat #hidecomments #hiderelated #hideshorts #newestcomments #reversemousewheeldirection #theatermode #wideplayer #wideplayerviewport".split(" ").forEach(b=>{b=c.querySelector(b);b.checked=a[b.id];b.addEventListener("click",f)});c.querySelector("#keyboard-shortcuts-btn").addEventListener("click",
()=>{chrome.runtime.sendMessage({request:"configure-keyboard-shortcuts"})});r=c.querySelectorAll('.player-control input[type="checkbox"]');for(d=0;d<r.length;d++)r[d].checked=-1<a.controls.indexOf(r[d].id)?!0:!1,r[d].addEventListener("click",Fa);n=c.querySelectorAll(".player-control .info");for(d=n.length-1;0<=d;d--)n[d].addEventListener("click",b=>{b.preventDefault()}),n[d].addEventListener("mouseenter",b=>{b=b.target;var e=b.getBoundingClientRect();q.textContent=b.dataset.tooltip;q.style.setProperty("top",
"calc("+e.top+"px - .5rem)");q.style.setProperty("left",e.left+"px");q.classList.add("visible")}),n[d].addEventListener("mouseleave",()=>{q.classList.remove("visible")});var h=c.querySelectorAll('input[name="controlbaractive"]'),E=c.querySelector("#controlsvisible"),F=c.querySelector("#controlbarposition"),va=c.querySelector("#control-bar-centering"),G=c.querySelector("#controlbarcentered"),wa=c.querySelector("#control-bar-visibility"),H=c.querySelector("#controlbarautohide");for(d=0;d<h.length;d++)h[d].value===
String(a.controlbar.active)&&(h[d].checked=!0),h[d].addEventListener("click",function(){"false"===this.value?(a.controlbar.active=!1,E.disabled=!1,F.disabled=!0,G.disabled=!0,H.disabled=!0):(a.controlbar.active=!0,E.disabled=!0,F.disabled=!1,G.disabled=!1,H.disabled=!1);chrome.storage.local.set({controlbar:a.controlbar})});E.checked=a.controlsvisible;E.disabled=a.controlbar.active;E.addEventListener("click",f);F.value=a.controlbar.position;F.disabled=!a.controlbar.active;F.addEventListener("change",
function(){va.classList["absolute"===this.value?"remove":"add"]("hidden");wa.classList["fixed"===this.value?"remove":"add"]("hidden");a.controlbar.position=this.value;chrome.storage.local.set({controlbar:a.controlbar})});va.classList["absolute"===a.controlbar.position?"remove":"add"]("hidden");G.checked=a.controlbar.centered;G.disabled=!a.controlbar.active;G.addEventListener("click",function(){a.controlbar.centered=this.checked;chrome.storage.local.set({controlbar:a.controlbar})});wa.classList["fixed"===
a.controlbar.position?"remove":"add"]("hidden");H.checked=a.controlbar.autohide;H.disabled=!a.controlbar.active;H.addEventListener("click",function(){a.controlbar.autohide=this.checked;chrome.storage.local.set({controlbar:a.controlbar})});d=c.querySelector("#backdropcolor");h=c.querySelector("#backdropopacity");var Ha=c.querySelector("#opacity"),Ia=c.querySelector("#cinemamode-backdrop"),ja=()=>{var b=a.backdropcolor.replace("#",""),e=parseInt(b.substring(0,2),16),g=parseInt(b.substring(2,4),16);
b=parseInt(b.substring(4,6),16);Ha.textContent=a.backdropopacity+"%";Ia.style.backgroundColor=`rgba(${e}, ${g}, ${b}, ${a.backdropopacity/100})`};d.value=a.backdropcolor;d.addEventListener("input",function(){a.backdropcolor=this.value;ja();chrome.storage.local.set({backdropcolor:this.value})});d.addEventListener("change",f);h.value=a.backdropopacity;h.addEventListener("input",function(){a.backdropopacity=Number(this.value);ja();chrome.storage.local.set({backdropopacity:a.backdropopacity})});ja();
var I=c.querySelector("#playback-speed"),J=c.querySelector("#custom-playback-speed");d=c.querySelector("#overridespeeds");var P=c.querySelector("#speedvariation");h=c.querySelector("#defaultvolume");var Q=c.querySelector("#volume"),xa=c.querySelector("#volume-preview"),u=c.querySelector("#volumemultiplier"),R=c.querySelector("#controlspeed"),S=c.querySelector("#controlspeedmousebutton"),ya=c.querySelector("#controlvolume"),T=c.querySelector("#controlvolumemousebutton"),U=c.querySelector("#volumevariation"),
za=c.querySelector("#miniplayer"),V=c.querySelector("#miniplayersize"),W=c.querySelector("#miniplayerposition");I.value=a.overridespeeds?1:a.speed;I.addEventListener("change",function(){chrome.storage.local.set({speed:parseFloat(this.value)})});J.value=a.overridespeeds?a.speed:1;J.addEventListener("change",function(){chrome.storage.local.set({speed:parseFloat(this.value)})});a.overridespeeds&&(I.classList.add("hidden"),J.classList.remove("hidden"));d.checked=a.overridespeeds;d.addEventListener("click",
function(){P.disabled=!this.checked;var b=c.querySelector("#playback-speed-label");b.classList.add("animated","blink");setTimeout(()=>{b.classList.remove("animated","blink")},2400);I.classList.toggle("hidden");J.classList.toggle("hidden");chrome.storage.local.set({overridespeeds:this.checked,speed:parseFloat(this.checked?J.value:I.value)})});P.value=a.speedvariation;P.disabled=!a.overridespeeds;P.addEventListener("change",function(){chrome.storage.local.set({speedvariation:parseFloat(this.value)})});
R.checked=a.controlspeed;R.addEventListener("click",function(){S.disabled=!this.checked;chrome.storage.local.set({controlspeed:this.checked})});S.checked=a.controlspeedmousebutton;S.disabled=!a.controlspeed;S.addEventListener("click",f);h.checked=a.defaultvolume;h.addEventListener("click",function(){Q.disabled=!this.checked;chrome.storage.local.set({defaultvolume:this.checked})});Q.value=a.volume;Q.disabled=!a.defaultvolume;Q.addEventListener("input",function(){a.volume=Number(this.value);xa.textContent=
a.volume;chrome.storage.local.set({volume:a.volume})});xa.textContent=a.volume;u.value=a.volumemultiplier;u.addEventListener("change",function(){chrome.storage.local.set({volumemultiplier:Number(this.value)})});ya.checked=a.controlvolume;ya.addEventListener("click",function(){T.disabled=!this.checked;U.disabled=!this.checked;chrome.storage.local.set({controlvolume:this.checked})});T.checked=a.controlvolumemousebutton;T.disabled=!a.controlvolume;T.addEventListener("click",f);U.value=a.volumevariation;
U.disabled=!a.controlvolume;U.addEventListener("change",function(){chrome.storage.local.set({volumevariation:Number(this.value)})});u.value=a.volumemultiplier;u.addEventListener("change",function(){chrome.storage.local.set({volumemultiplier:Number(this.value)})});za.checked=a.miniplayer;za.addEventListener("click",function(){V.disabled=!this.checked;W.disabled=!this.checked;chrome.storage.local.set({miniplayer:this.checked})});V.value=a.miniplayersize;V.disabled=!a.miniplayer;V.addEventListener("change",
f);W.value=a.miniplayerposition;W.disabled=!a.miniplayer;W.addEventListener("change",f);d=c.querySelector("#blockautoplay");var X=c.querySelector("#pauseforegroundtab"),Y=c.querySelector("#ignoreplaylists"),Z=c.querySelector("#stopvideos");d.checked=a.blockautoplay;d.addEventListener("click",function(){X.disabled=!this.checked;Y.disabled=!this.checked;Z.disabled=!this.checked;chrome.storage.local.set({blockautoplay:this.checked})});X.checked=a.pauseforegroundtab;X.disabled=!a.blockautoplay;X.addEventListener("click",
f);Y.checked=a.ignoreplaylists;Y.disabled=!a.blockautoplay;Y.addEventListener("click",f);Z.checked=a.stopvideos;Z.disabled=!a.blockautoplay;Z.addEventListener("click",f);d=c.querySelector("#pausevideos");var aa=c.querySelector("#ignorepopupplayer");d.checked=a.pausevideos;d.addEventListener("click",function(){aa.disabled=!this.checked;chrome.storage.local.set({pausevideos:this.checked})});aa.checked=a.ignorepopupplayer;aa.disabled=!a.pausevideos;aa.addEventListener("click",f);d=c.querySelector("#disableautoplay");
var Aa=c.querySelector(".autoplay-toggle-button");d.checked=a.disableautoplay;Aa.setAttribute("aria-checked",!a.disableautoplay);d.addEventListener("click",function(){Aa.setAttribute("aria-checked",!this.checked);chrome.storage.local.set({disableautoplay:this.checked})});var ka=c.querySelector("#selectquality"),v=c.querySelector("#selectqualityfullscreenon"),K=c.querySelector("#selectqualityfullscreenoff"),ba=["#qualityvideos","#qualityplaylists","#qualityembeds"],ca=["#qualityvideosfullscreen","#qualityplaylistsfullscreen",
"#qualityembedsfullscreen"];ka.checked=a.selectquality;ka.addEventListener("click",function(){ba.forEach(b=>{c.querySelector(b).disabled=!ka.checked});v.disabled=!this.checked;this.checked?(ba.forEach(b=>{c.querySelector(b).disabled=!1}),v.disabled=!1,v.checked&&(ca.forEach(b=>{c.querySelector(b).disabled=!1}),K.disabled=!1)):(ba.forEach(b=>{c.querySelector(b).disabled=!0}),v.disabled=!0,ca.forEach(b=>{c.querySelector(b).disabled=!0}),K.disabled=!0);chrome.storage.local.set({selectquality:this.checked})});
ba.forEach(b=>{b=c.querySelector(b);b.value=a[b.id];b.disabled=!a.selectquality;b.addEventListener("change",f)});v.checked=a.selectqualityfullscreenon;v.addEventListener("click",function(){ca.forEach(b=>{c.querySelector(b).disabled=!v.checked});K.disabled=!this.checked;chrome.storage.local.set({selectqualityfullscreenon:this.checked})});ca.forEach(b=>{b=c.querySelector(b);b.value=a[b.id];b.disabled=!a.selectqualityfullscreenon;b.addEventListener("change",f)});K.checked=a.selectqualityfullscreenoff;
K.addEventListener("click",f);d=c.querySelector("#popuplayersize");d.value=a.popuplayersize;d.addEventListener("change",f);var la=c.querySelector("#darktheme"),w=c.querySelectorAll('input[name="theme"]'),A=c.querySelector("#themevariant"),B=c.querySelector("#vendorthemevariant");h=c.querySelector("#customtheme");var da=c.querySelector("#customcss");u=c.querySelector("#customcss-btn");var ea=c.querySelector("#customcss-checkmark");d=w.length-1;la.checked=a.darktheme;for(la.addEventListener("click",
function(){w.forEach(b=>{b.disabled=!la.checked});this.checked?(A.disabled="enhanced-dark"===c.querySelector('input[name="theme"]:checked').value?!1:!0,B.disabled="youtube-deep-dark"===c.querySelector('input[name="theme"]:checked').value?!1:!0,M()):(A.disabled=!0,B.disabled=!0,m.forEach(b=>{b.disabled=!0}),N.disabled=!0);chrome.storage.local.set({darktheme:this.checked})});0<=d;d--)w[d].value===a.theme&&(w[d].checked=!0),w[d].disabled=!a.darktheme,w[d].addEventListener("click",f),w[d].addEventListener("click",
function(){A.disabled="enhanced-dark"===this.value?!1:!0;B.disabled="youtube-deep-dark"===this.value?!1:!0;M()});A.value=a.themevariant;A.disabled=a.darktheme?"enhanced-dark"===a.theme?!1:!0:!0;A.addEventListener("change",f);B.value=a.vendorthemevariant;B.disabled=a.darktheme?"youtube-deep-dark"===a.theme?!1:!0:!0;B.addEventListener("change",f);R=a.customcolors;for(d=m.length-1;0<=d;d--)m[d].disabled=!a.darktheme,m[d].value=R[m[d].name],m[d].addEventListener("change",qa);N.disabled=!a.darktheme;N.addEventListener("click",
()=>{var b=C.customcolors;m.forEach(e=>{e.value=b[e.name]});qa()});M();h.checked=a.customtheme;h.addEventListener("click",function(){chrome.storage.local.set({customtheme:this.checked})});da.disabled=!a.customtheme;da.value=a.customcss;da.addEventListener("focus",()=>{ea.classList.remove("show")});u.disabled=!a.customtheme;u.addEventListener("click",()=>{ea.classList.add("show");chrome.storage.local.set({customcss:da.value})});ea.addEventListener("animationend",b=>{"checkmark-scale"===b.animationName&&
setTimeout(()=>{ea.classList.remove("show")},1200)});var ma=c.querySelector("#customscript");d=c.querySelector("#customscript-btn");var fa=c.querySelector("#customscript-checkmark");ma.value=a.customscript;ma.addEventListener("focus",()=>{fa.classList.remove("show")});d.addEventListener("click",()=>{fa.classList.add("show");chrome.storage.local.set({customscript:ma.value})});fa.addEventListener("animationend",b=>{"checkmark-scale"===b.animationName&&setTimeout(()=>{fa.classList.remove("show")},1200)});
d=c.querySelector("#export-modal-btn");h=c.querySelector("#import-modal-btn");var l=c.querySelector("#backup-modal"),Ba=l.querySelector(".close-modal"),Ca=l.querySelector("#export-modal-content"),Da=l.querySelector("#export-textarea"),Ea=l.querySelector("#import-modal-content"),na=l.querySelector("#import-error"),ha=l.querySelector("#import-textarea"),oa=l.querySelector("#import-btn"),pa=l.querySelector("#copy-to-clipboard-btn"),L=l.querySelector("#copy-to-clipboard-checkmark");d.addEventListener("click",
()=>{Ca.classList.remove("hidden");pa.classList.remove("hidden");L.classList.remove("hidden");ia(l);chrome.storage.local.get(null,b=>{var e={};e.version=chrome.runtime.getManifest().version;e.settings={};Object.keys(C).forEach(g=>{e.settings[g]=void 0===b[g]?C[g]:b[g]});Da.value=JSON.stringify(e,null,2)})});h.addEventListener("click",()=>{Ea.classList.remove("hidden");oa.classList.remove("hidden");ia(l)});Ba.addEventListener("click",()=>{sa(l);setTimeout(()=>{Ca.classList.add("hidden");Ea.classList.add("hidden");
na.classList.add("hidden");oa.classList.add("hidden");pa.classList.add("hidden");L.classList.add("hidden");ha.value=""},600)});pa.addEventListener("click",async()=>{await navigator.clipboard.writeText(Da.value);L.classList.add("show")});L.addEventListener("animationend",b=>{"checkmark-scale"===b.animationName&&setTimeout(()=>{L.classList.remove("show")},1200)});oa.addEventListener("click",async()=>{var b=ha.value.trim();if(""!==b){try{b=JSON.parse(b)}catch(g){na.classList.remove("hidden");ha.value=
g;return}if("object"===typeof b.settings&&b.version&&(/^3\.\d+\.\d+/.test(b.version)||/^2\.0\.1(0[2-9]|[1-2][0-9])/.test(b.version))){Array.isArray(b.settings.controls)&&(b.settings.controls=b.settings.controls.filter(x=>"whitelist"!==x&&"not-interested"!==x));b.settings.backgroundcolor&&(b.settings.backdropcolor=b.settings.backgroundcolor,delete b.settings.backgroundcolor);b.settings.backgroundopacity&&(b.settings.backdropopacity=b.settings.backgroundopacity,delete b.settings.backgroundopacity);
b.settings.customcssrules&&(b.settings.customcss=b.settings.customcssrules,delete b.settings.customcssrules);b.settings.miniplayersize&&(b.settings.miniplayersize=b.settings.miniplayersize.replace("_",""));b.settings.miniplayerposition&&(b.settings.miniplayerposition=b.settings.miniplayerposition.replace("_",""));"default-light"===b.settings.theme&&(b.settings.theme="default-dark");let g;if(null==(g=b.settings.themevariant)?0:g.includes("youtube-deep-dark"))b.settings.vendorthemevariant=b.settings.themevariant.replace("-youtube-light",
""),delete b.settings.themevariant;var e={};Object.keys(b.settings).forEach(x=>{typeof C[x]===typeof b.settings[x]&&(e[x]=b.settings[x])});await chrome.storage.local.clear();chrome.storage.local.set(e,()=>{t.scrollTo(0,0);c.location.reload()})}else na.classList.remove("hidden"),!b.version||/^3\.\d+\.\d+/.test(b.version)&&/^2\.0\.1(0[2-9]|[1-2][0-9])/.test(b.version)||(ha.value="Outdated backup...")}});c.addEventListener("keydown",b=>{"Escape"===b.key&&("block"===l.style.display?Ba.click():"block"===
z.style.display&&ua.click())})});window.addEventListener("resize",ta);ta();c.addEventListener("transitionend",a=>{a=a.target;a===q?(a=q.getBoundingClientRect(),0>=a.left?q.style.setProperty("left","calc("+a.width/2+"px + .5rem)"):a.right>c.documentElement.clientWidth&&q.style.setProperty("left","calc("+(c.documentElement.clientWidth-a.width/2)+"px - .5rem)")):"FIELDSET"===a.nodeName&&a.classList.remove("highlighted")})})(document,config);