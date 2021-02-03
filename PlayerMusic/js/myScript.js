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

// Agregamos los eventos a timer
timer.onmouseover = resalta;
timer.onmouseout = resalta;
timer.onclick = resalta;

// elEvento es un objeto Event y tiene property type
function resalta(elEvento) {
	
	switch(elEvento.type){
		case 'mouseout':
			console.log("Me fuie de timmer")
			break;
		case 'mouseover':
			console.log("Pase por arriba de timmer")
			break;
		case 'click':
			console.log("Le hice click a timmer")
			break;
		default:
			console.log(elEvento.type);
			break;
	}
	
}