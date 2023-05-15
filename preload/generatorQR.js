const { QRCodeStyling } = require("qr-code-styling/lib/qr-code-styling.common.js");

const qrCode = new QRCodeStyling({
    width: 200,
    height: 200,
    type: "svg",
    data: "https://www.facebook.com/",
    image: "../ui/icon/wi-fi_logo_100px.png",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

module.exports = qrCode;