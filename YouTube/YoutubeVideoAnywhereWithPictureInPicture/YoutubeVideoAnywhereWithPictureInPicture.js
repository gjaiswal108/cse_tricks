document.getElementsByClassName('ytp-left-controls')[0].remove();
document.getElementsByClassName('ytp-right-controls')[0].remove();

var vid=document.getElementsByTagName('video')[0];
document.getElementsByClassName('ytp-progress-bar-padding')[0].remove();
document.getElementsByClassName('ytp-progress-list')[0].remove();
document.getElementsByClassName('ytp-chrome-controls')[0].remove();
document.getElementsByClassName('ytp-chrome-bottom')[0].remove();
document.getElementsByClassName('ytp-storyboard-framepreview')[0].remove();
document.getElementsByClassName('ytp-player-content')[0].remove();
var vidPlayer=document.getElementsByClassName('html5-video-player')[0];
vidPlayer.click();
document.getElementsByClassName('ytp-bezel-text-hide')[0].remove();
vidPlayer.onmouseover=function(){vid.setAttribute("controls","controls");}