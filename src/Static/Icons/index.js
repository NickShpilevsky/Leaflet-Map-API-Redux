import L from "leaflet";

const geoUrl = require('../images/geoIcon.png');
const markerUrl = require('../images/marker.png');
const restUrl = require('../images/restaurant marker.png');
const bikeUrl = require('../images/bicycle marker.png');


const geoIcon = new L.Icon({
  iconUrl: geoUrl,
  iconRetinaUrl: geoUrl,
  iconSize: new L.Point(40,40),
});

const markerIcon = new L.Icon({
  iconUrl: markerUrl,
  iconRetinaUrl: markerUrl,
  iconSize: new L.Point(40,40),
});

const restaurantIcon = new L.Icon({
  iconUrl: restUrl,
  iconRetinaUrl: restUrl,
  iconSize: new L.Point(60,60),
});

const bikeIcon = new L.Icon({
  iconUrl: bikeUrl,
  iconRetinaUrl: bikeUrl,
  iconSize: new L.Point(60,60),
});

export { geoIcon, markerIcon, restaurantIcon, bikeIcon };