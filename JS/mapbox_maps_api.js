"use strict";
(function () {
    mapboxgl.accessToken = mapboxToken
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

var favoriteRestaurants =[
    {
    name: "oui Banh Mi",
    address: "1601 Richmond Ave Houston, Texas 77006"
    },
    {
    name: "Cooking Girl",
    address: "2400 W Holcombe Blvd Houston, TX 77030"
    },
    {
    name: "Two Guys Pizzeria",
    address: "2250 W Holcombe Blvd Houston, TX 77030"
    }]

favoriteRestaurants.forEach(function(restaurant){
    geocode(restaurant.address, mapboxToken).then(function(coordinates){
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        var popUp = new mapboxgl.Popup()
            .setHTML(restaurant.name)
            .addTo(map)

        marker.setPopup(popUp)
    })
})



})();