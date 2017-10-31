(function() {
"use strict";
    
    var txt1 = new SplitText("#myAd_txt1", {type: "chars"}),
        txt1CharNum = txt1.chars.length,
        tl1 = new TimelineMax();
    
    tl1.to("#myAd", .4, { opacity: 1 })
    .from("#myAd_txt2", 1.3, { top: -100, ease: Power2.easeOut })
    //.to("#myAd_txt1", 1.3, { top: 210, ease: Power2.easeOut }, "-=.9")
    // the cycle method used below and the randomization functions are explained here: 
    // https://www.youtube.com/watch?v=0HhjSPVuRHA
    .staggerTo(txt1.chars, 1.3, { top: 210, 
    cycle:{
        left: function(i) {
            return -70 + (i * 10);
        },
        rotation: function() {
            return Math.floor(Math.random() * 601) - 300;
        }
    }, 
    ease: Power2.easeOut }, 0, "txt-=.9")
    .from("#myAd_marker", 1.2, { top: -110, ease: Bounce.easeOut }, "-=.9")
    .from("#myAd_shadow", 1.2, { opacity: 0, ease: Bounce.easeOut }, "-=1.2")
    .from("#myAd_txt3", 1.2, { scale: .2, opacity: 0, ease: Power2.easeOut }, "-=.9")
    .from("#myAd_surfboard", 1.3, { top: 260, rotation: -130, left: 300, ease: Back.easeOut }, "cta")
    .to("#myAd_surfboard", .3, { rotation: -13, ease: Power2.easeOut }, "+=2.9")
    .to("#myAd_surfboard", .3, { rotation: 13, ease: Power2.easeOut }, )
    .to("#myAd_surfboard", .3, { rotation: 0, ease: Back.easeOut }, );
    
//    tl1.seek("cta");
    var tl2 = new TimelineMax({repeat: -1});
    tl2.to("#myAd_clouds", 66, { backgroundPositionX: 649, ease: Power0.easeOut });
    
})();




