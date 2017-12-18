
pauseVideo();

function pauseVideo() {
    var el = document.getElementsByTagName("video");
    console.log(el[0]);
    //    el[0].pause();
    if( el[0] && el[0].paused === true)
        el[0].play();
    else if( el[0] )
        el[0].pause();
}

