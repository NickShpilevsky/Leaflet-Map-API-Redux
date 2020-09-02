import { createAction, createReducer } from "redux-act";

export const authorized = createAction();
export const setUser = createAction();
export const setCurrentLocation = createAction();
export const addMarker = createAction();
export const showMarkers = createAction();
export const showRestaurants = createAction();
export const showBikes = createAction();

const reducer = createReducer({
  [authorized]: store => ({
    ...store,
    authorized: true,
  }),
  [setUser]: (store, payload) => ({
    ...store,
    user: {
      name: payload.name || null,
      photo: payload.picture.data.url || null,
    }
  }),
  [setCurrentLocation]: (store, payload) => ({
    ...store,
    currentLocation: payload,
  }),
  [addMarker]: (store, payload) => ({
    ...store,
    markers: [...store.markers, payload],
  }),
  [showMarkers]: store => ({
    ...store,
    showMarkers: !store.showMarkers,
  }),
  [showRestaurants]: store => ({
    ...store,
    showRestaurants: !store.showRestaurants,
  }),
  [showBikes]: store => ({
    ...store,
    showBikes: !store.showBikes,
  }),
});

export default reducer;