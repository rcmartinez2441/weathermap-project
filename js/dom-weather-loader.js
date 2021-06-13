// OVERALL BASIC  LAYOUT

function callingDOM(coordinates) {
	console.log(`From DOM.JS ${coordinates}`)
}

function displayCoordinatesInHTML(coordinates) {
	$('#forecast-container').html('')
		.append(`<div>${coordinates}</div>`);
}

//CREATE FUNCTIONS TO TAKE IN DATA FROM WEATHERMAP.JS
function createDivStructureForForecast(filteredWeatherData) {
	//parameter will be array of object per each day forecast
	let forecastContainer = $('#forecast-container');
	 forecastContainer.html('');
	for (let i = 0; i < 5; i++) {
		forecastContainer
			.append(
				`<div class="col-2">
					<div>${filteredWeatherData[i].date}</div>
					<div>High: ${filteredWeatherData[i].highTemp} / Low: ${filteredWeatherData[i].lowTemp}</div>
					<div>${filteredWeatherData[i].tempIcon}</div>
					<div>${filteredWeatherData[i].tempDescription}</div>
					<div>Humidity: ${filteredWeatherData[i].humidity}</div>
					<div>Wind: ${filteredWeatherData[i].wind}</div>
					<div>Pressure: ${filteredWeatherData[i].pressure}</div>
				</div>`
			)
	}
}

//RETRIEVE DATA FROM WEATHERMAP AND ADD IT TO HTML USING DOM