// OVERALL BASIC  LAYOUT
function weatherMapUtils(coordinatesGiven) {
	console.log(coordinatesGiven)
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/forecast`,
		type: 'GET',
		data:{
			APPID: WEATHERMAP_TOKEN,
			lat: coordinatesGiven[1],
			lon: coordinatesGiven[0],
			units: 'imperial'
		},
		success: function (data) {
			console.log('AJAX WAS SUCCESSFUL')
			console.log('Weatherbox Data:')
			console.log(data);
			filterData(data)

		}
	});
}

function filterData (weatherData) {
	//TO Narrow down to forecast results:
	// weatherData.list
	let weatherList = weatherData.list;
	let fiveDayForecast = [
		//Index Intervals of 7 will give you daily forcast per 3 hours
		//Weather Indexes needed for 5 day forecast
		// Current Day [0]
		{
			date: weatherList[0].dt_txt,
			highTemp: weatherList[0].main.temp_max,
			lowTemp: weatherList[0].main.temp_min,
			tempIcon: weatherList[0].weather[0].icon,
			tempDescription: weatherList[0].weather[0].description,
			humidity: weatherList[0].main.humidity,
			wind: weatherList[0].wind.speed,
			pressure:weatherList[0].main.pressure
		},
		// 2nd Day [5]
		{
			date: weatherList[5].dt_txt,
			highTemp: weatherList[5].main.temp_max,
			lowTemp: weatherList[5].main.temp_min,
			tempIcon: weatherList[5].weather[0].icon,
			tempDescription: weatherList[5].weather[0].description,
			humidity: weatherList[5].main.humidity,
			wind: weatherList[5].wind.speed,
			pressure:weatherList[5].main.pressure
		},
		// 3rd Day [13]
		{
			date: weatherList[13].dt_txt,
			highTemp: weatherList[13].main.temp_max,
			lowTemp: weatherList[13].main.temp_min,
			tempIcon: weatherList[13].weather[0].icon,
			tempDescription: weatherList[13].weather[0].description,
			humidity: weatherList[13].main.humidity,
			wind: weatherList[13].wind.speed,
			pressure:weatherList[13].main.pressure
		},
		//4th Day [21]
		{
			date: weatherList[21].dt_txt,
			highTemp: weatherList[21].main.temp_max,
			lowTemp: weatherList[21].main.temp_min,
			tempIcon: weatherList[21].weather[0].icon,
			tempDescription: weatherList[0].weather[0].description,
			humidity: weatherList[21].main.humidity,
			wind: weatherList[21].wind.speed,
			pressure:weatherList[21].main.pressure
		},
		//5th Day [29]
		{
			date: weatherList[29].dt_txt,
			highTemp: weatherList[29].main.temp_max,
			lowTemp: weatherList[29].main.temp_min,
			tempIcon: weatherList[29].weather[0].icon,
			tempDescription: weatherList[29].weather[0].description,
			humidity: weatherList[29].main.humidity,
			wind: weatherList[29].wind.speed,
			pressure:weatherList[29].main.pressure
		}
	]

	//Call fiveDayForecast on Dom-Weather.JS to Manipulate data into HTML using DOM
	createDivStructureForForecast(fiveDayForecast)
}
