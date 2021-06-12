// OVERALL BASIC  LAYOUT
function weatherMapUtils(coordinatesTest) {
	console.log(coordinatesTest)
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/forecast`,
		type: 'GET',
		data:{
			APPID: WEATHERMAP_TOKEN,
			lat: coordinatesTest[1],
			lon: coordinatesTest[0]
		},
		success: function (data) {
			console.log('AJAX WAS SUCCESSFUL')
			console.log(data);
			// filterDataTo5Day()

		}
	});
}

function filterData (weatherData) {
	let weekForecasts = [
		{

		},

	]
}




// CALL WEATHERMAP USING AJAX

//READ DATA BEING RETURNED AND FIND WHAT TO USE

//RETRIEVE COORDINATES FROM GOECODER IN MAPBOX.JS

//USE COORDINATES IN AJAX TO FIND DATA AND THEN SEND THE DATA TO A FUNCTION IN DOM-WEATHER-LOADER.JS