var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

// Cambio evento onclick por uno definido
playButton.onclick = function() {
	playButton.style.visibility = "hidden";
	pauseButton.style.visibility = "visible";
	music.play();
}

// Cambio evento onclick por uno definido
pauseButton.onclick = function() {
	playButton.style.visibility = "visible";
	pauseButton.style.visibility = "hidden";
	music.pause();
}