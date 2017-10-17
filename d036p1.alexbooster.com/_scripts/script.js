$(function() {
"use strict";
    
    var $li = $("#cboxContent li");
    var $thumb = $("#cboxContent img");
    $($thumb).each(function( i ) {
        var tnSrc = $(this).attr("src");
        var largeSrc = tnSrc.substr(0, tnSrc.length - 7) + ".jpg";
        $( this ).wrap( '<a href="' + largeSrc + '"></a>' );
    });
    
    
    $("#cboxContent a").colorbox({
        rel:'gal',
        'opacity' : 0.85,
        'slideshow' : true,
        'slideshowSpeed' : 5000,
        'current' : 'artwork {current} of {total}'
    });
    
    // The following code is designed to make it responsive. 
    // Info: https://github.com/jackmoore/colorbox/issues/158#issuecomment-34767812
    $.colorbox.settings.maxWidth  = '90%';
    $.colorbox.settings.maxHeight = '90%';

    $(window).resize(function(){
        // Resize Colorbox when resizing window or changing mobile device orientation
        resizeColorBox();
        window.addEventListener("orientationchange", resizeColorBox, false);
    });

    var resizeTimer;
    function resizeColorBox() {
        if (resizeTimer) {
            clearTimeout(resizeTimer);
        }
        resizeTimer = setTimeout(function() {
            if ($('#cboxOverlay').is(':visible')) {
                $.colorbox.reload();
            }
        }, 300);
    }
    
});