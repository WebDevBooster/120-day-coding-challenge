(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        var clock = document.getElementById("current-time");
        
        
        
        setInterval(updateTime, 1000);
        
        function updateTime() {
            var d = new Date();
            var hours = d.getHours(),
                ampm = " AM",
                minutes = d.getMinutes();

            if (hours > 12) {
                hours -= 12;
                ampm = " PM";
            } else if (hours === 0) {
                hours = 12;
            }
            
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            
            var sepClass = "";
            if (d.getSeconds() % 2 === 1) sepClass = "trans";
            
            var sep = '<span class="' + sepClass + '">:</span>';
             
            
            clock.innerHTML = hours + sep + minutes + ampm;
            
            var today = document.getElementById("current-date"),
                day = d.getDate(),
                month = d.getMonth(), 
                weekday = d.getDay();
            
            var wkdArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            var mArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            today.innerHTML = wkdArray[weekday] + ", " + mArray[month] + " " + day;
        }
        
        
    }, false);

})();

