function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}

window.onload = function() {
    printValue('slider', 'rangeValue');
}

// Set price data for paintings

$('#painting1').data({ id:1, price:250 });
$('#painting2').data({ id:2, price:400 });
$('#painting3').data({ id:3, price:75 });
$('#painting4').data({ id:4, price:150 });
$('#painting5').data({ id:5, price:200 });
$('#painting6').data({ id:6, price:350 });

// Link range to paintings
$(document).ready(function () {
    var theValue;

    $("#slider").change(function() {
        theValue = $("#rangeValue").val();
        filterItems(theValue) ;
    });
});

function filterItems(priceCriteria)
{
    $.each($('#gallery div'), function(i, item) {
        $item = $(item); 
        itemData = $item.data();
        if(itemData.price <= priceCriteria) 
        {
            $item.animate({opacity: 1});
            itemData.matching = true;
        }
        else
        {
            $item.animate({opacity: 0.25});
            itemData.matching = false;
        }
    });
}
