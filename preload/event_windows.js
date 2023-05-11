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
    }
}
module.exports = event_window;
