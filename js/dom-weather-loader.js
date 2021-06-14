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
	let fiveDayContainer = $('#five-day-container');
	fiveDayContainer.html('');
	for (let i = 0; i < 5; i++) {
		fiveDayContainer
			.append(
				`<div class="card-color col-5 col-md-2 card mx-auto border p-0 my-1">
					<div class="card-header">${dateStyle(filteredWeatherData[i].date)}</div>
					<img class="my-0" src="assets/${filteredWeatherData[i].tempIcon}.png" alt="weather-icon">
					<ul class="list-group list-group-flush">
						<li class="list-group-item p-0 py-2">${filteredWeatherData[i].tempDescription.toUpperCase()}</li>
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

function addCurrentWeather(currentData) {
	let currentWeatherContainer = $('#current-weather-container');
	currentWeatherContainer.html('');
	currentWeatherContainer
		.append(
			`<div class="current-weather col-6 card p-0 mx-auto">
				<div class="card-header">${currentData.date}</div>
				<img id='current-img d-flex justify-content-center' src="assets/${currentData.tempIcon}.png" alt="current-weather">
				<ul class="list-group list-group-flush"
					<li class="list-group-item"> ${currentData.tempDescription} </li>
					<li class="list-group-item"> ${currentData.temp} &#8457 </li>
					<li class="list-group-item">${currentData.highTemp} &#8457 /
						${currentData.lowTemp} &#8457
					</li>
				</ul>
			</div>`
		)
	$('#current-weather').html('')
}

function dateStyle(rawDate) {
	let date = rawDate.split(' ')[0] + 'T00:00:00';
	console.log(date);
	return new Date(date).toDateString()
}