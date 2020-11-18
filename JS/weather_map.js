"use strict";
// (function () {

    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lY3V0aGJlcnQiLCJhIjoiY2tobWFhdjYxMDRscTJ1bjdsMWdzOXJwZiJ9.MN6qs_r2_6xyW_5mRTFOAg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: weatherMapAPIKey,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial",
        exclude: "minutely,hourly,alerts"
    }).done(function(data){
        console.log(data);
    });

    var currentMarkers = [];

    function dropPin(coordinates){
        var marker = new mapboxgl.Marker()
        currentMarkers.push(marker);
        currentMarkers[0].setLngLat(coordinates)
        currentMarkers[0].addTo(map);
    }

    function enablePins() {
        map.on('click', function (e) {
            dropPin(e.lngLat.wrap());
            console.log(e.lngLat);
            // retrieveWeather(e.lngLat.lng, e.lngLat.lat);
        });
    }

    // function retrieveWeather(longitude, latitude){
    //     $.get("https://api.openweathermap.org/data/2.5/onecall", {
    //         APPID: weatherMapAPIKey,
    //         lat: latitude,
    //         lon: longitude,
    //         units: "imperial",
    //         exclude: "minutely,hourly,alerts"
    //     }).done(function(data){
    //         console.log(data);
    //     });
    // }


//create an event listener that places a pin when a user clicks the map and logs the coordinates
//Then take those coordinates and plug them in to get info back from thw weather map API
//Request and log the info you need from the API and then eventually show that info in the UI









// mapboxgl.accessToken = newMapboxToken;
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    //     center: [-98.4916, 29.4252], // starting position [lng, lat]
    //     zoom: 4 // starting zoom
    // });

    // var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


    // var favoriteRestaurants =[
    //     {
    //         name: "oui Banh Mi",
    //         address: "1601 Richmond Ave Houston, Texas 77006"
    //     },
    //     {
    //         name: "Cooking Girl",
    //         address: "2400 W Holcombe Blvd Houston, TX 77030"
    //     },
    //     {
    //         name: "Two Guys Pizzeria",
    //         address: "2250 W Holcombe Blvd Houston, TX 77030"
    //     }]
    //
    // favoriteRestaurants.forEach(function(restaurant){
    //     geocode(restaurant.address, mapboxToken).then(function(coordinates){
    //         var marker = new mapboxgl.Marker()
    //             .setLngLat(coordinates)
    //             .addTo(map);
    //         var popUp = new mapboxgl.Popup()
    //             .setHTML(restaurant.name)
    //             .addTo(map)
    //
    //         marker.setPopup(popUp)
    //     })
    // })



// })();