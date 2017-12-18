
document.addEventListener('DOMContentLoaded', function () {
    var pauseBtn = document.getElementById("pauseBtn");
    var resumeBtn = document.getElementById("resumeBtn");
    
    pauseBtn.addEventListener('click', pause);
    resumeBtn.addEventListener('click', resume);
});

function pause(e) {
    chrome.tabs.executeScript(null, {file:"pausevideo.js"} );
}

function resume(e) {
    chrome.tabs.executeScript(null, {file:"pausevideo.js"} );
    window.close();
}
