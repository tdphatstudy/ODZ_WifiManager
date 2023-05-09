'use strict'
const titleBar = require('../ui/render/titleBar.js');
let content = require('../ui/render/content.js');
const wifiList = require('../ui/render/wifiList.js');
const infoScreen = require('../ui/render/inforSrceen.js');

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    var contentHTML = new DOMParser().parseFromString(content, "text/xml");
    const wrapperContent = contentHTML.getElementsByClassName('content')[0];
    wrapperContent.innerHTML = wifiList + infoScreen;
    console.log(wrapperContent.innerHTML)
    root.innerHTML = titleBar + wrapperContent.outerHTML;
})