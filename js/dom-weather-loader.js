// OVERALL BASIC  LAYOUT

function callingDOM(coordinates) {
	console.log(`From DOM.JS ${coordinates}`)
}

function displayCoordinatesInHTML(coordinates) {
	$('#forecast-container').html('')
		.append(`<div>${coordinates}</div>`);
}

//CREATE FUNCTIONS TO TAKE IN DATA FROM WEATHERMAP.JS

//RETRIEVE DATA FROM WEATHERMAP AND ADD IT TO HTML USING DOM