$(function() {
    "use strict";
    
    var $cart = $('#cart-toys');
    
    $cart
    	.find('.tt')
    	.hide();
    	
    $cart
    	.find('.item')
    	.on('mouseenter mouseleave', function(){
    		$(this).find('.tt').fadeToggle();
    	});
});