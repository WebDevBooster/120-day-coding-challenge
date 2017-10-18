$(function() {
"use strict";
    var thisYear = new Date().getFullYear();
    
    $(".myCountdown").countdown({
        until: $.countdown.UTCDate(
        // format: 
        // timezone, year, month, day, hours, mins, secs, ms
            +1, thisYear + 1, 1 - 1, 0
        )
    });
    
});