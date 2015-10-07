var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.1686, lng: -86.5174},
    zoom: 15
  });
}
