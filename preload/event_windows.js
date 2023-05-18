const { ipcRenderer } = require('electron');

const event_window = {
    close: function(){
        ipcRenderer.invoke('window-all-closed');
    },
    hide: function(){
        ipcRenderer.invoke('hide');
    }, 
    zoom: function(){
        ipcRenderer.invoke('zoom');
    }, 
    show_success_connect: function(ssid) {
        ipcRenderer.invoke('succes_connection', ssid);
    },
    show_warning_connect: function() {
        ipcRenderer.invoke('warning_connection');
    }
}
module.exports = event_window;
