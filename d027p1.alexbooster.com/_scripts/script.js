(function() {
"use strict";
    var myNode = document.querySelector(".imgGrid");
    
    myNode.addEventListener("click", function(e) {
        
        if (e.target.tagName === "IMG") {
            var lightbox = document.createElement("div");
            lightbox.id = "box";
            document.body.appendChild(lightbox);
            
            lightbox.style.position = "absolute";
            lightbox.style.top = 0;
            lightbox.style.backgroundColor = "rgba(0, 0, 0, .6)";
            lightbox.style.width = window.innerWidth + "px";
            lightbox.style.height = window.innerHeight + "px";
            lightbox.style.cursor = "pointer";
            lightbox.style.top = window.pageYOffset + "px";
            lightbox.style.left = window.pageXOffset + "px";
            
            // showing a preloader before a large image loads: 
            var preloader = document.createElement("div");
            preloader.id = "preloader"
            lightbox.appendChild(preloader);
            
            var imgSource = e.target.src;
            var largeImg = document.createElement("img");
            largeImg.id = "largeImg";
            // remove "_tn.jpg" from the end and add ".jpg" back in 
            // to get the source of the large image
            largeImg.src = imgSource.substr(0, imgSource.length - 7) + ".jpg";
            largeImg.style.display = "block";
            largeImg.style.position = "absolute";
            // lightbox.appendChild(largeImg);
            
            // before we can resize the large image, 
            // we need to wait until it's been loaded: 
            largeImg.addEventListener("load", function() {
                // first, remove preloader:
                preloader.parentNode.removeChild(preloader);
                
                // adjust image size if taller than current window: 
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }
                // if wider than current window: 
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }
                
                centerImage(this);
                lightbox.appendChild(largeImg);
                
            }, false); 
            
            largeImg.addEventListener("click", function() {
                if (lightbox) {
                    window.removeEventListener("resize", window, false);
                    window.removeEventListener("scroll", window, false);
                    lightbox.parentNode.removeChild(lightbox);
                }
            }, false);
            
            window.addEventListener("scroll", function() {
                if (lightbox) {
                    lightbox.style.top = window.pageYOffset + "px";
                    lightbox.style.left = window.pageXOffset + "px";
                }
            }, false);
            
            window.addEventListener("resize", function() {
                if (lightbox) {
                    lightbox.style.width = window.innerWidth + "px";
                    lightbox.style.height = window.innerHeight + "px";
                    lightbox.style.top = window.pageYOffset + "px";
                    lightbox.style.left = window.pageXOffset + "px";
                    
                    centerImage(largeImg);
                }
            }, false);
        }
        
    }, false);
    
    function centerImage(img) {
        var diffX = (window.innerWidth - img.width) / 2;
        var diffY = (window.innerHeight - img.height) / 2;
        
        img.style.top = diffY + "px";
        img.style.left = diffX + "px";
        
        return img;
    }

})();