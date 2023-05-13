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
const descriptions = ['Ứng dụng quản lý wifi tiện lợi, dễ dàng sử dụng.',
'Kết nối wifi tự động một cách nhanh chóng và dễ dàng.',
'Quét và kết nối wifi chỉ với vài thao tác đơn giản, không mất thời gian.',
'Chia sẻ mật khẩu wifi với bạn bè qua mã QR tiện lợi và an toàn, không cần phải ghi chép lại.',
'Xem mật khẩu wifi đã kết nối trước đó để dễ dàng kết nối lại vào lần sau, không cần phải nhớ.'];
let indexDesciption = 0;

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

const animationDescription = () => {
    console.log('helo');
    const descriptionBackground =document.getElementsByClassName('description-background')[0];
    if (descriptionBackground!= undefined) {
        descriptionBackground.innerHTML = descriptions[indexDesciption];
        if (indexDesciption < descriptions.length - 1) {
            indexDesciption++;
        } else {
            indexDesciption = 0; 
        }
    }
}


const renderWifiListTitle = ()=>{
    const wifiTitle = document.getElementsByClassName('wifi-list-title')[0];
    if (mode === 'profile') {
        wifiTitle.innerHTML = profileWifi.title;
        clearInterval(renderWifiListScan);
        renderWifiListProfile();
        setInterval(renderWifiListProfile, 1000);
    } else {
        wifiTitle.innerHTML = scanwifi.title;
        clearInterval(renderWifiListProfile);
        renderWifiListScan();
        setInterval(renderWifiListScan, 1000);
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
                if (value !== undefined) {
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
                }
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
    setInterval(animationDescription, 10000)
    renderWifiListTitle();

});