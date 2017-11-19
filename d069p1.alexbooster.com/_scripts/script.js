$(function(){
    var $gallery = $('.gallery').isotope({
        // options
        itemSelector: '.photo',
        layoutMode: 'masonry'
    });
    
    // layout Isotope after each image loads
    $gallery.imagesLoaded().progress( function() {
        $gallery.isotope('layout');
    });
    
});