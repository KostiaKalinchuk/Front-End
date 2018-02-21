navigator.geolocation.getCurrentPosition(initialize);
var map;
var geocoder;
var marker;

function initialize(pos) {

    var position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
    var myOptions = {
        zoom: 15,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);
    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: "It you!"
    });
}

function searchAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            marker.setOptions({
                visible: true,
                title: address,
                position: results[0].geometry.location
            });
            var infowindow = new google.maps.InfoWindow;
            infowindow.setContent(results[0].formatted_address);
            infowindow.open(map, marker);
            map.setZoom(14);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Виведення інфо
navigator.geolocation.getCurrentPosition(detalInfo);

function detalInfo(pos) {
    var info = function (id) {
        return document.getElementById(id);
    };
    info('lat').innerHTML = pos.coords.latitude;
    info('lon').innerHTML = pos.coords.longitude;
}