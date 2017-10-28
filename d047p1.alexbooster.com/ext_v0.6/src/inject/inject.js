chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This following code will run when page is done loading
		// ----------------------------------------------------------
        
        var intervalId = setInterval (function() {

            var inputField = document.getElementsByTagName("input");

            for (var i = inputField.length - 1; i >= 0; i--) {
                if( inputField[i] === document.activeElement ){
                    console.log("Scroll jail detected.\nBreaking you free... Done!\nYou are free to scroll!");
                    inputField[i].blur();
                    clearInterval(intervalId);
                    // it finds the input field that currently has focus (activeElement) 
                    // and then removes that focus (blur()) and gets out of the way
                }
            }
        }, 10);

        
	}
	}, 10);
});