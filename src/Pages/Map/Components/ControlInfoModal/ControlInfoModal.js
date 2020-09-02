import React from 'react';
import { connect } from 'react-redux';
import { Paper, Button, Typography } from "@material-ui/core";

import { setCurrentLocation, showMarkers, showRestaurants, showBikes } from "../../../../Reducers";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import RestaurantIcon from '@material-ui/icons/Restaurant';

import '../../../../Static/style.less';

const ControlInfoModal = (props) => {
  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition((data) => {
      props.setCurrentLocation([0, 0]);
      props.setCurrentLocation([data.coords.latitude, data.coords.longitude]);
    }, (error) => {
      console.log(`Error: ${error.message}`);
    }, {
      timeout: 5000,
      enableHighAccuracy: true,
    });
  };

  const handleShowMarkers = () => {
    props.showMarkers();
  };

  const saveMarkers = () => {
    let payload = JSON.stringify(props.markers);
    localStorage.setItem('markers', payload);
  };

  const { restBool, bikesBool, markersBool } = props;
  return(
    <div>
      <Paper className="controlInfoModal" elevation={5}>
        <Button variant="contained" color="primary" onClick={getCurrentLocation}>Go to your location!</Button>
        <Button variant="outlined" color="secondary" onClick={handleShowMarkers}>{`${markersBool ? 'Hide' : 'Show'} Markers`}</Button>
        <Button variant="outlined" color="primary" onClick={saveMarkers}>Save Markers</Button>
        <Typography variant="h6" noWrap>Places:</Typography>
        <Button variant="outlined" onClick={props.showRestaurants}>{`${restBool ? 'Hide' : 'Show'} restaurants | `}<span><RestaurantIcon /></span></Button>
        <Button variant="outlined" onClick={props.showBikes}>{`${bikesBool ? 'Hide' : 'Show'} bike-shelters | `}<span><DirectionsBikeIcon /></span></Button>
      </Paper>
    </div>
  )

};

export default connect(store => ({
    markersBool: store.showMarkers,
    restBool: store.showRestaurants,
    bikesBool: store.showBikes,
    markers: store.markers,
  }), {
    setCurrentLocation, showMarkers, showRestaurants, showBikes
  })(ControlInfoModal);