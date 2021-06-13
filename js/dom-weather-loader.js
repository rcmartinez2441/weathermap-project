// OVERALL BASIC  LAYOUT

//CREATE FUNCTIONS TO TAKE IN DATA FROM WEATHERMAP.JS
//Function will take Location Name data from geocode and reverseGeocode
function addLocationNameDiv(dataFromMapbox) {
	let locationNameContainer = $('#location-container');
	locationNameContainer.html('');
	locationNameContainer
		.addClass('p-2')
		.append(
			`<div class="text-center col-12">${dataFromMapbox.location}</div>`
		);
}

function createDivStructureForForecast(filteredWeatherData) {
	//parameter will be array of object per each day forecast
	let forecastContainer = $('#forecast-container');
	forecastContainer.html('');
	for (let i = 0; i < 5; i++) {
		forecastContainer
			.append(
				`<div class="col-2 card mx-auto border p-0">
					<div class="card-header">${filteredWeatherData[i].date}</div>
					<img src="assets/${filteredWeatherData[i].tempIcon}.png" alt="weather-icon">
					<ul class="list-group list-group-flush">
						<li class="list-group-item">${filteredWeatherData[i].tempDescription.toUpperCase()}</li>
						<li class="list-group-item">
							<strong>High:</strong> ${filteredWeatherData[i].highTemp} &#8457 /
							<br> 
							<strong>Low:</strong> ${filteredWeatherData[i].lowTemp} &#8457
						</li>
						<li class="list-group-item">Humidity: ${filteredWeatherData[i].humidity}</li>
						<li class="list-group-item">Wind: ${filteredWeatherData[i].wind}</li>
						<li class="list-group-item">Pressure: ${filteredWeatherData[i].pressure}</li>
					</ul>
				</div>`
			)
	}
}

//RETRIEVE DATA FROM WEATHERMAP AND ADD IT TO HTML USING DOM