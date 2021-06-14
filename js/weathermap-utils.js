// OVERALL BASIC  LAYOUT
function weatherMapUtils(coordinatesGiven) {
	let fiveDayForecast;
	let currentForecast;
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/forecast`,
		type: 'GET',
		data: {
			APPID: WEATHERMAP_TOKEN,
			lat: coordinatesGiven[1],
			lon: coordinatesGiven[0],
			units: 'imperial'
		},
		success: function (data) {
			console.log('WeatherMap Data')
			console.log(data);
			filterWeatherData(data);
		}
	});
}

function currentWeather(coordinatesGiven) {
	console.log(coordinatesGiven)
	$.ajax({
		url: `http://api.openweathermap.org/data/2.5/weather`,
		type: 'GET',
		data: {
			APPID: WEATHERMAP_TOKEN,
			lat: coordinatesGiven[1],
			lon: coordinatesGiven[0],
			units: 'imperial'
		},
		success: function (data) {
			console.log('Current WeatherMap Data')
			console.log(data);
			filterCurrentWeatherData(data)

		}
	});
}

function filterWeatherData(weatherData) {
	//TO Narrow down to forecast results:
	// weatherData.list
	let weatherList = weatherData.list;
	let fiveDayForecast = [
		//Index Intervals of 7 will give you daily forecast per 3 hours
		//Weather Indexes needed for 5 day forecast
		//Day 1 [5]
		{
			date: weatherList[5].dt_txt,
			highTemp: weatherList[5].main.temp_max,
			lowTemp: weatherList[7].main.temp_min,
			tempIcon: weatherList[5].weather[0].icon,
			tempDescription: weatherList[5].weather[0].description,
			humidity: weatherList[5].main.humidity,
			wind: weatherList[5].wind.speed,
			pressure: weatherList[5].main.pressure
		},
		// 2nd Day [13]
		{
			date: weatherList[13].dt_txt,
			highTemp: weatherList[13].main.temp_max,
			lowTemp: weatherList[15].main.temp_min,
			tempIcon: weatherList[13].weather[0].icon,
			tempDescription: weatherList[13].weather[0].description,
			humidity: weatherList[13].main.humidity,
			wind: weatherList[13].wind.speed,
			pressure: weatherList[13].main.pressure
		},
		// 3rd Day [21]
		{
			date: weatherList[21].dt_txt,
			highTemp: weatherList[21].main.temp_max,
			lowTemp: weatherList[23].main.temp_min,
			tempIcon: weatherList[21].weather[0].icon,
			tempDescription: weatherList[0].weather[0].description,
			humidity: weatherList[21].main.humidity,
			wind: weatherList[21].wind.speed,
			pressure: weatherList[21].main.pressure
		},
		//4th Day [29]
		{
			date: weatherList[29].dt_txt,
			highTemp: weatherList[29].main.temp_max,
			lowTemp: weatherList[31].main.temp_min,
			tempIcon: weatherList[29].weather[0].icon,
			tempDescription: weatherList[29].weather[0].description,
			humidity: weatherList[29].main.humidity,
			wind: weatherList[29].wind.speed,
			pressure: weatherList[29].main.pressure
		},
		//5th Day [37]
		{
			date: weatherList[37].dt_txt,
			highTemp: weatherList[37].main.temp_max,
			lowTemp: weatherList[39].main.temp_min,
			tempIcon: weatherList[37].weather[0].icon,
			tempDescription: weatherList[37].weather[0].description,
			humidity: weatherList[37].main.humidity,
			wind: weatherList[37].wind.speed,
			pressure: weatherList[37].main.pressure
		}
	]
	//Call fiveDayForecast on Dom-Weather.JS to Manipulate data into HTML using DOM
	createDivStructureForForecast(fiveDayForecast);
}

function filterCurrentWeatherData (currentWeatherData) {
	let dateConversion = new Date (currentWeatherData.dt * 1000)
	dateConversion = dateConversion.toDateString()
	console.log('Converted Date Test')
	console.log(dateConversion);
	let currentWeatherObject = {
		date: dateConversion,
		temp: currentWeatherData.main.temp,
		highTemp: currentWeatherData.main.temp_max,
		lowTemp: currentWeatherData.main.temp_min,
		tempIcon: currentWeatherData.weather[0].icon,
		tempDescription: currentWeatherData.weather[0].description,
		humidity: currentWeatherData.main.humidity,
		wind: currentWeatherData.wind.speed,
		pressure: currentWeatherData.main.pressure
	}
	console.log(currentWeatherObject)
	addCurrentWeather(currentWeatherObject);
}
