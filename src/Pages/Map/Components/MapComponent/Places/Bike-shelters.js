import React from 'react';
import { Marker, Popup } from "react-leaflet";

import features from '../../../../../Static/placesJSON/bike-shelters';
import { bikeIcon } from '../../../../../Static/Icons';

const BikeShelters = () => (
  features.features.map((feature) => (
    <Marker key={feature.geometry.coordinates[0]} position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]} icon={bikeIcon}>
      <Popup>
        <span>
          <p>{feature.properties.name}</p>
        </span>
      </Popup>
    </Marker>
  ))
);

export default BikeShelters;