document.addEventListener("DOMContentLoaded", function () {

	if (navigator.geolocation) {
		var params = {
			enableHighAccuracy: false,
			timeout: 3600,
			maximumAge: 60000
		};
		navigator.geolocation.getCurrentPosition(reportPosition, gpsError, params);
	} else {
		alert("Sorry, but your browser does not support location based awesomeness.")
	}
});

function reportPosition(position) {
	//h1 Tag
	var h1 = document.createElement("h1");
	h1.innerHTML = "Geolocation";
	
	//Canvas
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = "400";
	canvas.height = "400";
	
	//Google Maps
	var googleMaps = new Image();
	googleMaps.src = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x400&markers=color:red|label:A|" + position.coords.latitude + ',' + position.coords.longitude + "&key=AIzaSyAz7Iyeh7-W40IkOh7do_kf-Gbc8T52r5s";
	
	//Draw image and append all
	googleMaps.onload = function () {
		context.drawImage(googleMaps, 0, 0);
		document.querySelector("body").appendChild(h1);
		document.querySelector("body").appendChild(canvas);
	}
}

function gpsError(error) {
	var errors = {
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);
}