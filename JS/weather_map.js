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
    }).done(function(){
        enablePins();
        console.log(currentMarker);
    });

    var currentMarker = null;

    var currentDate = new Date();

    var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    function dropPin(coordinates){
        if(currentMarker == null){
        var marker = new mapboxgl.Marker();
        currentMarker = marker;
        }
        currentMarker.setLngLat(coordinates)
        currentMarker.addTo(map);
    }

    function enablePins() {
        map.on('click', function (e) {
            dropPin(e.lngLat);
            console.log(e.lngLat);
            retrieveWeather(e.lngLat.lng, e.lngLat.lat);
        });
    }

    function retrieveWeather(longitude, latitude){
        $.ajax("https://api.openweathermap.org/data/2.5/onecall", {
            data: {
                APPID: weatherMapAPIKey,
                lat: latitude,
                lon: longitude,
                units: "imperial",
                exclude: "minutely,hourly,alerts"
            }
        }).done(function(data, status, jqXhr){
            console.log(data);
            fiveDayForecast(data);
        });
    }

    function fiveDayForecast(data){
        for(var i = 0;i<5;i++){
            var day = (currentDate.getDay() + i) % (daysOfTheWeek.length);
            console.log(data.daily[i].weather[0].main);
            console.log(day);
            $(".forecast-day:eq(0)").css("background-color", "red")
        }
    }




//create an event listener that places a pin when a user clicks the map and logs the coordinates
//Then take those coordinates and plug them in to get info back from thw weather map API
//Request and log the info you need from the API and then eventually show that info in the UI

// })();