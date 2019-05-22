import style from "./styles/main.css";
import './styles/about.scss'
import './styles/appStyles.scss';



//map api 

import { Map } from './map';
document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
    Map.createMarker(Map.createMap(googleMaps,mapElement))
  });
 

});

      
