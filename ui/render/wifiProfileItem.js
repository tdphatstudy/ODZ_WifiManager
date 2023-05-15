const wifi_item = function(wifiname, id){

    return  `
<div class="wifi-profile-item" id="${id}">
                <div class="wifi-profile-view">
                        ${wifiname}
                </div>
                <div class="wifi-detail-button">
                </div>
            </div>
    `;
};
module.exports = wifi_item