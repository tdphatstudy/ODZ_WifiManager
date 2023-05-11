'use strict'
const titleBar = require('../ui/render/titleBar.js');
let content = require('../ui/render/content.js');
const wifiList = require('../ui/render/wifiList.js');
const infoScreen = require('../ui/render/inforSrceen.js');
const wifi = require('node-wifi');
const  event_window = require('./event_windows.js');
const wifi_item = require('../ui/render/wifiScanItem.js');



// event titlebar
const enventWindow = () => {
    const closeBtn = document.getElementById('close-btn');
    const hideBtn = document.getElementById('hide-btn');
    const zoomBtn = document.getElementById('zoom-btn');

    closeBtn.addEventListener('click', () => {
        event_window.close();
      });
    hideBtn.addEventListener('click', ()=> {
        event_window.hide();
    })
    zoomBtn.addEventListener('click', ()=>{
        event_window.zoom();
    })
}

const renderWifiList = ()=>{
    const wifilist = document.getElementsByClassName('wifi-list-body')[0];
    wifilist.innerHTML =  wifi_item('Phat Tran', 'WPA 1', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 2', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 3', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 4', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 5', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 6', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 7', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 8', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 9', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 10', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 11', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 12', 'wifi-strong', 'wifi1')
    wifilist.innerHTML +=  wifi_item('Phat Tran', 'WPA 13', 'wifi-strong', 'wifi1')
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // render
    var contentHTML = new DOMParser().parseFromString(content, "text/xml");
    const wrapperContent = contentHTML.getElementsByClassName('content')[0];
    wrapperContent.innerHTML = wifiList + infoScreen;
    root.innerHTML = titleBar + wrapperContent.outerHTML;

    enventWindow();
    renderWifiList();
    
  
    
});