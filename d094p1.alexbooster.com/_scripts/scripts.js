(function () {
    "use strict";

    var list = document.getElementById('list1');

    document.getElementById('addToList1').onclick = function () {
        var newLI = document.createElement('li');
        newLI.innerHTML = 'A new list item!';
        list.appendChild(newLI);
        setTimeout(function () {
            newLI.className = "show";
        }, 10);
    };
    
    
    list.addEventListener("click", function(e) {
        
        var currentLI = e.target;
        
        if ( currentLI.className === "show" ) {
            currentLI.classList.remove("show");
        }

    }, false);
    
    
    var list2 = document.getElementById('list2');

    document.getElementById('addToList2').onclick = function () {
        var newLI2 = document.createElement('li');
        newLI2.innerHTML = 'A new list item!';
        list2.appendChild(newLI2);
        setTimeout(function () {
            newLI2.className = "show2";
        }, 10);
    };


    list2.addEventListener("click", function(e) {

        var currentLI = e.target;

        if ( currentLI.className === "show2" ) {
            currentLI.classList.remove("show2");
        }

    }, false);
    

})();