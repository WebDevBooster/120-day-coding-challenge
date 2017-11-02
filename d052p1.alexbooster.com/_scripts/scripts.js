var panelWidth = 0;
var startPanel = 2;

$(function(){
    
    $(".sp .tabs").css("display", "block");
    
    $(".sp .panelContainer .panels").css({
        "position": "absolute",
        "top": "0"
    });
    $(".sp .panelContainer .panel").css({
        "position": "absolute",
        "height": "400px"
    });
    
    
    window.panelWidth = $(".sp").width();
    
    $(".panelContainer .panel").each(function(index) {
        $(this).css({
            "width": window.panelWidth + "px",
            "left": (index * window.panelWidth) + "px"
        });
        
        $(".sp .panels").css("width", (index + 1) * window.panelWidth + "px");
        
    });
    
    $(".sp .tabs span").each(function() {
        $(this).on("click", function() {
            changePanels( $(this).index() );
        });
    });
    
    $(".sp .tabs span:nth-child("+ window.startPanel +")").trigger("click");
    
});

function changePanels(newIndex) {
    
    var newPanelPosition = (window.panelWidth * newIndex) * -1;
    var newPanelHeight = $(".sp .panel:nth-child("+ (newIndex+1) +")").find(".panelContent").height() + 15;
    
    $(".sp .panels").animate({left: newPanelPosition }, 1000);
    $(".sp .panelContainer").animate({height: newPanelHeight }, 1000);
    
    $(".sp .tabs span").removeClass("selected");
    $(".sp .tabs span:nth-child("+ (newIndex + 1) +")").addClass("selected");
    
}