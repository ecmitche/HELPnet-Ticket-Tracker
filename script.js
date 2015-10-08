var map; //Google maps object
var marker; //position Marker object
//modification
//location presets for future use
var CIB = {lat: 39.172076, lng: -86.501560}; /* Cyberinfrastructure building */
var INRD = {lat: 39.167530, lng: -86.526956}; /* 201 N. Indiana */
var CORG = {lat: 39.167530, lng: -86.526956}; /* Center on Congretional Research, 201 N. Indiana*/
var INTS = {lat: 39.168182, lng: -86.528985}; /* International Services, Poplars */
var PENNY = {lat: 39.168713, lng: -86.525267}; /* GLBT Building - Penny */
var VSS = {lat: 39.167456, lng: -86.523565}; /* Veteran Student Services */
var DSS = {lat: 39.167772, lng: -86.522478}; /* Dean of Student Services */
var SADV = {lat: 39.170988, lng: -86.508695}; /* Student Advocates */
var GOOD = {lat: 39.170988, lng: -86.508695}; /* Dr. Goodman */
var SETH = {lat: 39.173803, lng: -86.515929}; /* Student Ethics */
var IUPD = {lat: 39.179279, lng: -86.513377}; /* IUPD */
var EMC = {lat: 39.179279, lng: -86.513377}; /* Emergency Management Center */
var CLAP = {lat: 39.179279, lng: -86.513377}; /* Terry Clapacs */
var DSA = {lat: 39.171006, lng: -86.516804}; /* Disabled Student Advocates */
var EHS = {lat: 39.163948, lng: -86.514545}; /* Environmental Health and Safety */
var NAGPRA = {lat: 39.167110, lng: -86.525484}; /* NAGPRA, Student Building */
var HEALTHY = {lat: 39.167772, lng: -86.522478}; /* Healthy IU */
var GISB = {lat: 39.169646, lng: -86.516171}; /* Global and International Studies Building, Patrick Omeara */
var RAD = {lat: 39.164341, lng: -86.521304}; /* Radiation Safety */

/*function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.1686, lng: -86.5174},
    zoom: 15
  });*/

//Check if supported browser
function getLocation() {
	if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//Get geolocation pass to Google
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, lng); //populated Position object

    var myOptions = {
    center:latlng,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP, //Default Google Maps type, and much clearer than the other options.
    mapTypeControl:false, //reduce screen clutter
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL} //reduce screen clutter
    }
    
    map = new google.maps.Map(document.getElementById("map"), myOptions); //make the map
    marker = new google.maps.Marker({position:latlng,map:map,title:"You are here!"}); //put a marker on screen
}

/*  var CIB_marker = new google.maps.Marker({
    position: navigator.geolocation.getCurrentPosition()
    map: map,
    title: 'Cyberinfrastructure Building'
  });*/

//geolocation error handling  
function showError(error) {
  switch(error.code) {
      case error.PERMISSION_DENIED:
          x.innerHTML = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          x.innerHTML = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          x.innerHTML = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred."
          break;
  }
}
