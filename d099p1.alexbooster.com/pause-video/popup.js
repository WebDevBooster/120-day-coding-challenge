
document.addEventListener('DOMContentLoaded', function () {
    // this will pause the video when the popup opens:
    chrome.tabs.executeScript(null, {file:"pausevideo.js"} );
    
    var pauseBtn = document.getElementById("pauseBtn");
    var resumeBtn = document.getElementById("resumeBtn");
    
    pauseBtn.addEventListener('click', pause);
    resumeBtn.addEventListener('click', resume);
});

function pause(e) {
    // pause video or resume if it's already paused
    chrome.tabs.executeScript(null, {file:"pausevideo.js"} );
}

function resume(e) {
    // pause video or resume if it's already paused
    chrome.tabs.executeScript(null, {file:"pausevideo.js"} );
    // the "window" here is the extension popup
    window.close();
}
