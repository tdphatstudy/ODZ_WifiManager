const htmlContent = (ssid, sercurity, pass) => {
    return  `
    <div class="profile-wrapper">
        <div class='label-part-profile'>
            <div class='label-profile'>SSID</div>
            <div class='label-profile'>Sercurity</div>
            <div class='label-profile'>Password</div>
            <div class='label-profile'>Wifi QR CODE</div>
        </div>
        <div class='value-part-profile'>
            <div id='value-ssid-profile'>${ssid}</div>
            <div id='value-sercurity-profile'>${sercurity}</div>
            <div id='value-password-profile'>${pass}</div>
            <canvas id='value-wifiqr-profile'></canvas>
            
        </div>
    </div>
    `;
} 
   



module.exports = htmlContent;