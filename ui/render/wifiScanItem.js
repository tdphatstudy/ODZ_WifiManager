const wifi_item = function(wifiname, wifi_sercurity,wifi_signal, id){

    return  `
<div class="wifi-scan-item" id="${id}">
                <div class="${wifi_signal}">
                </div>
                <div class="wifi-view">
                    <div class="wifi-name">
                        ${wifiname}
                    </div>
                    <div class="wifi-sercurity">
                        ${wifi_sercurity}
                    </div>
                </div>
                <div class="wifi-detail-button">
                </div>
            </div>
    `;
};
module.exports = wifi_item