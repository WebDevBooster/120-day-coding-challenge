(function() {
"use strict";
    var jukebox = document.querySelector("#jukebox > ul.player");

    jukebox.addEventListener("click", function(e) {
        e.preventDefault();
        var songPlaying = document.querySelector("#player");
        var songName = null;
        
        var li = e.target.parentNode;
        // the CSS buttons have 2 clickable elements (<span> and <a>), 
        // so we need to get to the right parentNode 
        // to get data-src
        if (li.getAttribute("data-src")) {
            li = li;
        } else {
            li = e.target.parentNode.parentNode;
        }
        
        if (li.getAttribute("data-src")) {
            songName = li.getAttribute("data-src");
        } // if the user clicks on an appropriate element, 
        // we'll get the data-src. 
        // Otherwise songName will remain null.
        
        var audioPlayer = document.createElement("audio");
        
        if (songPlaying) {
            if (songName === songPlaying.getAttribute("src")) {
                if (songPlaying.paused) {
                    songPlaying.play();
                    li.className = "playing";
                } else {
                    songPlaying.pause();
                }
            } else {
                songPlaying.src = songName;
                songPlaying.play();
                document.querySelector(".playing").classList.remove("playing");
                li.className = "playing";
            }
            
        } else {
            
            audioPlayer.id = "player";
            if (songName) {
                audioPlayer.src = songName;
                document.body.appendChild(audioPlayer);
                li.className = "playing";
                audioPlayer.play();

            }

            audioPlayer.addEventListener("ended", function() {
                audioPlayer.parentNode.removeChild(audioPlayer);
                li.classList.remove("playing");
            }, false);
        }
        
    }, false);

})();