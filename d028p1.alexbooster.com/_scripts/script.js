(function() {
"use strict";
    var url = window.location.href;
    new QRCode(document.getElementById("qrcode"), {
        text: url, 
        width: 120, 
        height: 120, 
        colorDark : "#000000",
        colorLight : "#4CA1F7"
    });

})();