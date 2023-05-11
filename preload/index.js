'use strict'
const titleBar = require('../ui/render/titleBar.js');
let content = require('../ui/render/content.js');
const wifiList = require('../ui/render/wifiList.js');
const infoScreen = require('../ui/render/inforSrceen.js');
const wifi = require('node-wifi');
const  event_window = require('./event_windows.js');
const wifi_item = require('../ui/render/wifiScanItem.js');
let mode = 'profile';
let scanwifi = {
    title: 'Wi-Fi Scan',
    list: []
}
let profileWifi = {
    title: 'Wi-Fi Profile',
    list: []
}


// event titlebar
const enventWindow = () => {
    const closeBtn = document.getElementById('close-btn');
    const hideBtn = document.getElementById('hide-btn');
    const zoomBtn = document.getElementById('zoom-btn');
    const changeModeBtn = document.getElementById('change-mode-btn')

    closeBtn.addEventListener('click', () => {
        event_window.close();
      });
    hideBtn.addEventListener('click', ()=> {
        event_window.hide();
    })
    zoomBtn.addEventListener('click', ()=>{
        event_window.zoom();
    });
    changeModeBtn.addEventListener('click', ()=> {
        console.log(mode)
        if (mode === 'profile') {
            mode = 'scan';
        } else {
            mode = 'profile';
        }
        renderWifiListTitle();
    })
}

const renderWifiListTitle = ()=>{
    const wifiTitle = document.getElementsByClassName('wifi-list-title')[0];
    if (mode === 'profile') {
        wifiTitle.innerHTML = profileWifi.title;
        clearTimeout(renderWifiListScan);
        renderWifiListProfile();
        setTimeout(renderWifiListProfile, 10000);
    } else {
        wifiTitle.innerHTML = scanwifi.title;
        clearTimeout(renderWifiListProfile);
        renderWifiListScan();
        setTimeout(renderWifiListScan, 10000);
    }
}
const renderWifiListScan = () => {
    const wifilist = document.getElementsByClassName('wifi-list-body')[0];
    wifi.scan((error, networks) => {
        if (error) {
          console.log(error);
        } else {
            console.log(networks);
          scanwifi.list = networks.map((value)=> {
            if (value.ssid.length != 0) {
                return value;
            }
          });
          if (scanwifi.list.length === 0) {
            wifilist.innerHTML = 'NONE WIFI';
        } else {
            scanwifi.list.sort((a, b) => {return b.signal_level - a.signal_level});
            wifilist.innerHTML = '';
            scanwifi.list.forEach((value, index)=> {
                let signal = '';
                if (value.signal_level <= 0 && value.signal_level >= -50) {
                    signal = 'wifi-strong';
                } else if (value.signal_level < -50 && value.signal_level >= -70) {
                    signal = 'wifi-normal';
                } else if (value.signal_level < -70 && value.signal_level >= -90) {
                    signal = 'wifi-weak';
                } else if (value.signal_level < -90) {
                    signal = 'wifi-very-weak';
                }
                wifilist.innerHTML+= wifi_item(value.ssid, value.security, signal, index);
            })
        }
        }
      });
    
    
}
const renderWifiListProfile = () => {
    const wifilist = document.getElementsByClassName('wifi-list-body')[0];
    if (profileWifi.list.length === 0) {
        wifilist.innerHTML = 'NONE WIFI';
    } else {
        wifilist.innerHTML = '';
        profileWifi.list.forEach((value, index)=> {
            const signal = '';
            if (value.signal_level <= 0 && value.signal_level >= -50) {
                signal = 'wifi-strong';
            } else if (value.signal_level < -50 && value.signal_level >= -70) {
                signal = 'wifi-normal';
            } else if (value.signal_level < -70 && value.signal_level >= -90) {
                signal = 'wifi-weak';
            } else if (value.signal_level < -90) {
                signal = 'wifi-very-weak';
            }
            wifilist.innerHTML+= wifi_item(value.ssid, value.security, signal, index);
        })
    }
    
}

const initWifi = () => {
    wifi.init({
        iface: null
      })};


window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // render
    var contentHTML = new DOMParser().parseFromString(content, "text/xml");
    const wrapperContent = contentHTML.getElementsByClassName('content')[0];
    wrapperContent.innerHTML = wifiList + infoScreen;
    root.innerHTML = titleBar + wrapperContent.outerHTML;

    initWifi();
    enventWindow();
    renderWifiListTitle();

    
    
    
    
  
    
});