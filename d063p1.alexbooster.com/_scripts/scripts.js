$(function(){
    
    var theList = document.getElementById("theList");
    
    $("#saveAll").click(function(e) {
        e.preventDefault();
        localStorage.setItem("todoList", theList.innerHTML);
    });
    $("#clearAll").click(function(e) {
        e.preventDefault();
        localStorage.clear();
        location.reload();
    });
    
    loadToDo();
    
    function loadToDo() {
        if (localStorage.getItem("todoList")) {
            theList.innerHTML = localStorage.getItem("todoList");
        }
    }
    
});
