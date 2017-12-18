

function click(e) {
    chrome.tabs.executeScript(null,
//      {code:"document.body.style.backgroundColor='green'"});
      {file:"pausevideo.js"});
//    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById("myButton");
    btn.addEventListener('click', click);
});

