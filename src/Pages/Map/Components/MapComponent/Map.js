import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import {connect} from "react-redux";
import Control from 'react-leaflet-control';

import ControlInfoModal from '../ControlInfoModal';
import Restaurants from './Places/Restaurants';
import BikeShelters from './Places/Bike-shelters';
import { addMarker } from "../../../../Reducers";
import { geoIcon, markerIcon } from '../../../../Static/Icons';

class MapComponent extends Component {

  componentDidMount() {
    const leafletMap = this.leafletMap.leafletElement;
    leafletMap.on('click', (e) => {
      this.props.addMarker({latitude: e.latlng.lat, longitude: e.latlng.lng});
    });
  };

  render() {
    const { currentLocation, markers, showMarkers, showRestaurants, showBikes } = this.props;
    return(
      <div>
        <Map
          ref={m => { this.leafletMap = m; }}
          center={currentLocation || [40.730610, -73.935242]}
          zoom={12}
        >
          <TileLayer
            url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
          />

          <Control position="topleft">
            <ControlInfoModal />
          </Control>
          {
            currentLocation ? (
              <Marker position={currentLocation} icon={geoIcon}>
                <Popup>
              <span>
                <p>You are here</p>
              </span>
                </Popup>
              </Marker>
            ) : null
          }
          {
            markers && showMarkers ?
            markers.map(marker => (
              <Marker key={marker.longitude} position={[marker.latitude, marker.longitude]} icon={markerIcon} />
            )) : null
          }
          {
            showRestaurants ? <Restaurants /> : null
          }
          {
            showBikes ? <BikeShelters /> : null
          }
        </Map>
      </div>
    )
  }
}

export default connect(store => ({
  currentLocation: store.currentLocation,
  markers: store.markers,
  showMarkers: store.showMarkers,
  showRestaurants: store.showRestaurants,
  showBikes: store.showBikes,
}), { addMarker })(MapComponent);