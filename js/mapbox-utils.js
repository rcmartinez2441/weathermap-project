'use strict';

// OVERALL BASIC  LAYOUT

//SET GLOBAL VARIABLES
let mapboxKey = MAPBOX_TOKEN;
mapboxgl.accessToken = mapboxKey

let map = createMapbox();
let centerCoordinates = [-96.283496, 37.230328];
let marker = createMarker();
let currentCoordinates;
//Create Geocoder and store in variable
let geoCoder = createGeocoder()
//Adding GeoCoder to HTML - #geocoder-container
addGeocoder(geoCoder);
//Adding geoCoder Event that provides some data on result
geoCoderEventOnResult(geoCoder);

//Adding Marker Event so click will give you data
userClicksOnMapEvent(marker)



//CREATE MAP AND ADD TO CORRECT DIV
function createMapbox() {
	return new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/dark-v10', // style URL
		center: [-96.283496, 37.230328], // starting position [lng, lat]
		zoom: 3.5// starting zoom
	});
}
//===============================================================================================
//CREATE MARKER FUNCTION AND CLICK EVENT
//It is given coordinates and returns a marker where coordinates are located
function createMarker(coordinates = centerCoordinates) {
	return new mapboxgl.Marker({
		draggable: true
	})
		.setLngLat(coordinates)
}

function userClicksOnMapEvent (){
	map.on('click',function (data){
		let lonlat = [data.lngLat.lng, data.lngLat.lat];
		currentCoordinates = lonlat
		marker.setLngLat(lonlat)
			.addTo(map);
		//CALL WEATHERMAP FUNCTION HERE AFTERWARDS
		console.log(data);
		reverseGeocode(lonlat);
		weatherMapUtils(lonlat);

	})
}
//===============================================================================================
//CREATE GEOCODER, ADD TO HTML AND CREATE 'RESULT EVENT'
function createGeocoder() {
	return new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl,
		marker: false
	});
}

function addGeocoder() {
	geoCoder.onAdd(map);
	geoCoder.addTo('#geocoder-container')
}

function geoCoderEventOnResult (geoCoderResult) {
	geoCoderResult.on('result',function (data){
		let coordinates = data.result.geometry.coordinates
		marker.setLngLat(coordinates)
			.addTo(map);
		weatherMapUtils(coordinates);
	})
}

//REVERSE GEOCODE FOR PLACE NAME AND STUFF
function reverseGeocode (point){
	$.ajax({
		url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${point[0]},${point[1]}.json?access_token=${mapboxgl.accessToken}`,
		success: function (data) {
			console.log(data);

		}
	});
}

//===============================================================================================