(function() {
"use strict";
    var ibox = document.getElementById("ibox");
    var bodyHeight = document.documentElement.scrollHeight;
    
    window.addEventListener("scroll", function() {
        
        if (window.pageYOffset >= (bodyHeight - window.innerHeight - 120)) {
            ibox.className = "show";
        } else {
            ibox.className = "hide";
        }
        
    }, false);
    

})();