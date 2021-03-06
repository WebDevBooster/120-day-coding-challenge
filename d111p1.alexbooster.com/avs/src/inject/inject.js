chrome.extension.sendMessage({}, function (o) {
    var p = {
        settings: {
            speed: 1.0,
            speedStep: 0.25,
            slowerKeyCode: '109,189',
            fasterKeyCode: '107,187',
            resetKeyCode: '106',
            displayOption: 'FadeInFadeOut',
            allowMouseWheel: true,
            rememberSpeed: false
        }
    };
    var q;
    chrome.storage.sync.get(p.settings, function (M) {
        p.settings.speed = Number(M.speed);
        p.settings.speedStep = Number(M.speedStep);
        p.settings.slowerKeyCode = M.slowerKeyCode;
        p.settings.fasterKeyCode = M.fasterKeyCode;
        p.settings.resetKeyCode = M.resetKeyCode;
        p.settings.displayOption = M.displayOption;
        p.settings.allowMouseWheel = Boolean(M.allowMouseWheel);
        p.settings.rememberSpeed = Boolean(M.rememberSpeed);
        q = setInterval(r, 10);
    });

    function r() {
        if (document.readyState === 'complete') {
            clearInterval(q);
            p.videoController = function (R) {
                this.video = R;
                if (!p.settings.rememberSpeed) {
                    p.settings.speed = 1.0;
                }
                this.initializeControls();
                R.addEventListener('play', function (V) {
                    R.playbackRate = p.settings.speed;
                });
                R.addEventListener('ratechange', function (V) {
                    if (R.readyState === 0) {
                        return;
                    }
                    var W = this.getSpeed();
                    this.speedIndicator.textContent = W;
                    p.settings.speed = W;
                    chrome.storage.sync.set({
                        'speed': W
                    });
                }.bind(this));
                R.playbackRate = p.settings.speed;
            };
            p.videoController.prototype.getSpeed = function () {
                return parseFloat(this.video.playbackRate).toFixed(2);
            };
            p.videoController.prototype.remove = function () {
                this.parentElement.removeChild(this);
            };
            p.videoController.prototype.initializeControls = function () {
                var R = document.createDocumentFragment();
                var S = document.createElement('div');
                S.setAttribute("id", "avscPlayBackPanel");
                S.className = "avscPlayBackPanel";
                var T = document.createElement('button');
                T.setAttribute("id", "PlayBackRate");
                T.className = "avscBtn";
                var U = document.createElement('button');
                U.setAttribute("id", "SpeedDown");
                U.className = "avscBtn avscBtn-left";
                U.textContent = '<<';
                var NR = document.createElement('button');
                NR.setAttribute("id", "SpeedUp");
                NR.className = "avscBtn avscBtn-right";
                NR.textContent = '>>';
                if (p.settings.displayOption == 'None') {
                    S.style.display = "none";
                } else if (p.settings.displayOption == 'Always') {
                    S.style.display = "inline";
                } else if (p.settings.displayOption == 'Simple') {
                    S.style.display = "inline";
                    NR.style.display = "none";
                    U.style.display = "none";
                    T.style.border = "none";
                    T.style.background = "transparent";
                } else if (p.settings.displayOption == 'FadeInFadeOut') {
                    S.style.display = "none";
                } else {
                    S.style.display = "inline";
                }
                S.appendChild(NR);
                S.appendChild(T);
                S.appendChild(U);
                R.appendChild(S);
                this.video.parentElement.parentElement.insertBefore(R, this.video.parentElement);
                this.video.parentElement.parentElement.addEventListener("mousemove", M);
                this.video.parentElement.parentElement.addEventListener("mouseout", N);
                var NS = parseFloat(p.settings.speed).toFixed(2);
                T.textContent = NS;
                this.speedIndicator = T;
                S.addEventListener('click', function (V) {
                    if (V.target === U) {
                        P('slower');
                    } else if (V.target === NR) {
                        P('faster');
                    } else if (V.target === T) {
                        P('reset');
                    }
                    V.preventDefault();
                    V.stopPropagation();
                }, true);
                S.addEventListener('dblclick', function (V) {
                    V.preventDefault();
                    V.stopPropagation();
                }, true);
            };

            function M() {
                var T = document.getElementById('avscPlayBackPanel');
                var U = T.style.display;
                if (U === "none") {
                    T.style.display = "inline";
                    setTimeout(function () {
                        T.style.display = U;
                    }, 1000);
                }
//                var R = document.getElementById('avscPlayBackPanel');
//                if (p.settings.displayOption == 'FadeInFadeOut') {
//                    R.style.display = "inline";
//                }
            };

            function N() {
                var R = document.getElementById('avscPlayBackPanel');
                if (p.settings.displayOption == 'FadeInFadeOut' && R.className != "avscPlayBackPanelFullScreen") {
                    R.style.display = "none";
                }
            };

            function O(R, S) {
                R.playbackRate = S;
            };

            function P(R) {
                var S = document.getElementsByTagName('video');
                S.forEach = Array.prototype.forEach;
                S.forEach(function (V) {
                    if (!V.classList.contains('vc-cancelled')) {
                        if (R === 'faster') {
                            var W = Math.min(V.playbackRate + p.settings.speedStep, 16);
                            O(V, W);
                        } else if (R === 'slower') {
                            var W = Math.max(V.playbackRate - p.settings.speedStep, 0);
                            O(V, W);
                        } else if (R === 'reset') {
                            var W = Math.max(1, 0);
                            O(V, W);
                        }
                    }
                });

                // display playback panel for 2000ms after user adjusts speed via keyboard
                var T = document.getElementById('avscPlayBackPanel');
                var U = T.style.display;
                if (U === "none") {
                    T.style.display = "inline";
                    setTimeout(function () {
                        T.style.display = U;
                    }, 2000);
                }
            };
            document.addEventListener('keydown', function (R) {
                var S = R.which;
                if (document.activeElement.nodeName === 'INPUT' && document.activeElement.getAttribute('type') === 'text') {
                    return false;
                }
                if (p.settings.fasterKeyCode.match(new RegExp("(?:^|,)" + S + "(?:,|$)"))) {
                    P('faster');
                } else if (p.settings.slowerKeyCode.match(new RegExp("(?:^|,)" + S + "(?:,|$)"))) {
                    P('slower');
                } else if (p.settings.resetKeyCode.match(new RegExp("(?:^|,)" + S + "(?:,|$)"))) {
                    P('reset');
                }
                return false;
            }, true);
            document.addEventListener('DOMNodeInserted', function (R) {
                var S = R.target || null;
                if (S && S.nodeName === 'VIDEO') {
                    new p.videoController(S);
                }
            });
            if (p.settings.allowMouseWheel) {
                document.addEventListener('mousewheel', function (R) {
                    if (R.shiftKey) {
                        if ('wheelDelta' in R) {
                            rolled = R.wheelDelta;
                            if (rolled > 0) P('faster');
                            else if (rolled < 0) P('slower');
                        }
                    }
                }, false);
            }
            document.addEventListener("webkitfullscreenchange", function () {
                var R = document.getElementById('avscPlayBackPanel');
                if (document.webkitIsFullScreen == true) {
                    R.className = "avscPlayBackPanelFullScreen";
                } else {
                    R.className = "avscPlayBackPanel";
                }
            }, false);
            var Q = document.getElementsByTagName('video');
            Q.forEach = Array.prototype.forEach;
            Q.forEach(function (R) {
                var S = new p.videoController(R);
            });
        }
    }
});
chrome.extension.sendRequest("show_page_action");
