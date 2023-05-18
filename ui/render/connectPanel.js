const htmlContent = (ssid, signal, channel, sercurity, mac) => {
    return  `
    <div class="connection-wrapper">
        <div class='label-part-connection'>
            <div class='label-connection'>SSID</div>
            <div class='label-connection'>Signal</div>
            <div class='label-connection'>Password</div>
            <div class='label-connection'>Channel</div>
            <div class='label-connection'>Sercurity</div>
            <div class='label-connection'>Mac</div>
        </div>
        <div class='value-part-connection'>
            <div id='value-ssid-connection'>${ssid}</div>
            <div id='value-signal-connection'>${signal}</div>
            <input type='password' id='password-text' placeholder="Password" />
            <div id='value-channel-connection'>${channel}</div>
            <div id='value-sercurity-connection'>${sercurity}</div>
            <div id='value-mac-connection'>${mac}</div>
            <input type="button" value="Connect" id='connection-button' />
        </div>
    </div>
    `;
} 
   



module.exports = htmlContent;