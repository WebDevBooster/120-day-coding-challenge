(function () {
    "use strict";
    
    var state = document.getElementById("s-state");
    var btnEstimate = document.getElementById("btn-estimate");

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('myCart').addEventListener('submit', estimateTotal);
        
        btnEstimate.setAttribute("disabled", "disabled");
        btnEstimate.value = "Please select your state first!";

        state.addEventListener("change", function () {
            if (state.value === "") {
                btnEstimate.setAttribute("disabled", "disabled");
                btnEstimate.value = "Please select your state first!";
            } else {
                btnEstimate.removeAttribute("disabled");
                btnEstimate.value = "Estimate Total";
            }
        });
        
    }, false);
    
    function estimateTotal(event) {
        event.preventDefault();
        
        var itemSneakers = parseInt(document.getElementById("txt-q-sneakers").value, 10) || 0,
            itemJersey = parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
            itemSupplements = parseInt(document.getElementById("txt-q-supplements").value, 10) || 0,
            itemWater = parseInt(document.getElementById("txt-q-water").value, 10) || 0,
            shippingState = state.value,
            shippingMethod = document.querySelector("[name=r_method]:checked").value || "";
        
        var totalQty = itemSneakers + itemJersey + itemSupplements + itemWater,
            shippingCostPer,
            taxFactor = 1,
            estimate;
        
        if (shippingState === "CA") {
            taxFactor = 1.075;
        } else if (shippingState === "WA") {
            taxFactor = 1.065;
        }
        
        var productTotal = 
            (90 * itemSneakers) + 
            (25 * itemJersey) + 
            (30 * itemSupplements) + 
            (5 * itemWater);
        
        estimate = productTotal * taxFactor; 
        
        switch (shippingMethod) {
            case "usps" :
                shippingCostPer = 2;
                break;
            case "ups" :
                shippingCostPer = 3;
                break;
            default :
                shippingCostPer = 0;
                break;
        }
        
        var shippingCost = totalQty * shippingCostPer;
        
        estimate = estimate + shippingCost;
        estimate = "$" + estimate.toFixed(2);
        document.getElementById("txt-estimate").value = estimate;
        
        var results = document.getElementById("results");
        
        results.innerHTML = "Total items: " + totalQty + "<br>";
        results.innerHTML += "Total shipping: $" + shippingCost.toFixed(2) + "<br>";
        results.innerHTML += "Tax: " + ((taxFactor - 1) * 100).toFixed(2) + "% (" + shippingState + ")";

    }

})();


//    var state = document.getElementById('s-state');
//    
//    document.addEventListener("load", function() {
//        document.getElementById('myCart').addEventListener('submit', estimateTotal);
//        
//        var btnEstimate = document.getElementById('btn-estimate');
//        var btnEstimateValue = document.getElementById('btn-estimate').value;
//        
//        btnEstimate.setAttribute('disabled', 'disabled');
//        
//        btnEstimateValue = "Please select your state!";
//        state.addEventListener('change', function() {
//            if (state.value === '') {
//                btnEstimateValue = "Please select your state!";
//            } else {
//                btnEstimateValue = "Estimate Total";
//            }
//        
////        state.addEventListener('change', function() {
////            if (state.value === '') {
////                btnEstimate.setAttribute('disabled', 'disabled');
////            } else {
////                btnEstimate.removeAttribute('disabled');
////            }
//        });
//        
//        
//        
//    }, false);
//    
//    
//    
//    function estimateTotal(event) {
//        event.preventDefault();
//        
//        
////        if (state.value === '') {
////            alert('Please choose your shipping state!');
////            state.focus();
////        }
//    }