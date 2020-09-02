import React from 'react';
import { Marker, Popup } from "react-leaflet";

import restaurants from '../../../../../Static/placesJSON/restaurants';
import { restaurantIcon } from '../../../../../Static/Icons';

const Restaurants = () => (
  restaurants.restaurants.map((rest) => (
    <Marker key={rest.id} position={[rest.latlng.lat, rest.latlng.lng]} icon={restaurantIcon}>
      <Popup>
        <span>
          <p><b>{rest.name}</b><br />{rest.address}</p>
        </span>
      </Popup>
    </Marker>
  ))
);

export default Restaurants;