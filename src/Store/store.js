import { createStore } from "redux";

import reducer from '../Reducers';

const preloadedStore = {
  authorized: false,
  user: {
    name: null,
    photo: null,
  },
  currentLocation: null,
  markers: JSON.parse(localStorage.getItem('markers')) || [],
  showMarkers: true,
  showRestaurants: false,
  showBikes: false,
};

const store = createStore(
  reducer,
  preloadedStore,
);

export default store;