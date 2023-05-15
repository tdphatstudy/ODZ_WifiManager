const scripts = {
    get_profiles:  `netsh wlan show profiles`,
    detail_profiles: (ssid)=> {return `netsh wlan show profile name="${ssid}" key=clear`}

}
module.exports = scripts;

