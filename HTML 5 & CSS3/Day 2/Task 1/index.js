const mapDiv = document.getElementById("map");
const locationBtn = document.getElementById("locationBtn");
const locationText = document.getElementById("locationText");
var userCoords;

locationBtn.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(success, error);
});

function success(pos) {
    userCoords = pos.coords;
    console.log(userCoords);

    locationText.innerText = `Your Location is: ${userCoords.latitude} in latitude, ${userCoords.longitude} in longitude`;
    console.log("Your current position is:");
    console.log(`Latitude : ${userCoords.latitude}`);
    console.log(`Longitude: ${userCoords.longitude}`);
    console.log(`More or less ${userCoords.accuracy} meters.`);
    showMap();
}

function error(err) {
    alert(`ERROR(${err.code}): ${err.message}`);
}

function showMap(coords) {
    let options = {
        center: new google.maps.LatLng(userCoords.latitude, userCoords.longitude),
        zoom: 20,
    };
    var map = new google.maps.Map(mapDiv, options);

    new google.maps.Marker({
        position: { lat: userCoords.latitude, lng: userCoords.longitude },
        map,
        title: "Hello World!",
    });
    console.log("map shown");
}
