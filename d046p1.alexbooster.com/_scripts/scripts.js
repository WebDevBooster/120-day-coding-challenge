$(function(){
    
    $.tablesorter.addParser({
        id : "getDateAttr",
        is : function(sort) { return false; },
        format : function(sort, table, cell, cellIndex) { return $(cell).attr("data-date"); },
        type : "text"
    });
    
    $("table#courses").tablesorter({
        sortList : [[ 2, 0 ]], // first number = index of the column; second number = sorting order (0 = ascending; 1 = descending )
        cssAsc : "sorted asc",
        cssDesc : "sorted desc",
        headers : { 3 : { sorter : "getDateAttr" } }
    });
});