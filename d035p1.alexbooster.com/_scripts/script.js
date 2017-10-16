$(document).ready(function() {
    injectMarkup();
});

function injectMarkup() {
    $(".expandingPanel").each(function() {
        var linkText = $(this).attr("data-link-text");
        var content = $(this).html();
        
        $(this).html('<div class="expandingPanelContentContainer" style="height:0;"><div class="expandingPanelContent">' + content + '</div></div>');
        
        $(this).append('<div class="expandingPanelTrigger">' + linkText + '</div>');
        
    });
    
    activatePanels();
}

function activatePanels() {
    $(".expandingPanel .expandingPanelTrigger").on("click", function() {
        var newHeight = null;
        
        var selectedPanel = $(this).closest(".expandingPanel");
        var selectedContent = selectedPanel.find(".expandingPanelContentContainer");
        
        selectedPanel.toggleClass("open");
        
        if ( selectedPanel.hasClass("open") ) {
            newHeight = selectedPanel.find(".expandingPanelContent").outerHeight(true);
        } else {
            newHeight = 0;
        }
        
        selectedContent.animate({"height": newHeight + "px"}, 1000, function() {
            if ( newHeight != 0 ) {
                $(this).removeAttr("style");
            }
        });
    });
}






