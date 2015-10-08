var map; //Google maps object
var marker; //position Marker object
var id; //position event handler ID

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

/*
	Creates a map centered on the CIB
  Creates a marker on the CIB
*/
function initMap() {
  
/*  
     All of Bloomington is visible with this zoom level
     Default Google Maps type, and much clearer than the other options.
     reduce screen clutter
*/
  myOptions = new google.maps.MapOptions({center: {lat: 39.1686, lng: -86.5174},zoom: 15,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:false,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}});
  
  map = new google.maps.Map(document.getElementById('map'), myOptions)
    

  marker = new google.maps.Marker({position:CIB,map:map,title:"You are here!"});  
}

/* 
	Check if supported browser
 	Then get the current location with a callback function 
*/
function getLocation() {
	if (navigator.geolocation) {
    	var positionOptions = {enableHighAccuracy: true,timeout: 500,maximumAge: 100};
      id = navigator.geolocation.getCurrentPosition.watchPosition(showPosition, showError, positionOptions);
  } else { 
      alert("Geolocation is not supported by this browser.");
  }
}

//Get geolocation pass to Google
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    var latlng = new google.maps.LatLng(lat, lng); //populated LatLng object 
		map.setZoom(17); //Testing zoom function
		marker.setPosition(latlng); //moves the marker to current position
    
   // map = new google.maps.Map(document.getElementById("map"), myOptions); //make the map
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
          alert("User denied the request for Geolocation.")
          break;
      case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
      case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
      case error.UNKNOWN_ERROR:
         alert("An unknown error occurred.")
          break;
  }
}
