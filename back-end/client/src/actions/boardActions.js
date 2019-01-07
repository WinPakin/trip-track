import axios from 'axios';
import { GET_ERRORS, CLEAR_ERRORS, GET_LIST_TRIP, GET_TRIP_LIST_LOADING } from './types';

//Add Trip
// Input: tripname, tripDesc
export const addTrip = tripItem => dispatch => {
    axios
        .post('http://localhost:5000/api/trips/add-trip',tripItem)
        .then( res => {
            alert("Success: Your trip has been added.");
            dispatch({
                type: CLEAR_ERRORS
            });
            dispatch({
                type: GET_LIST_TRIP,
                payload: res.data.tripList
            });
        })
        .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          );
};

//Join Trip
// Input: tripname (with Appended ID)
export const joinTrip = tripName => dispatch => {
    axios
        .post('http://localhost:5000/api/trips/join-trip',tripName)
        .then( res => {
            alert("Success: You have joinded the trip.");
            dispatch({
                type: CLEAR_ERRORS
            });
            dispatch({
                type: GET_LIST_TRIP,
                payload: res.data.tripList
            });
        })   
        .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          );
};

//List Trip
export const listTripAction = () => dispatch => {
    dispatch(setTripListLoading());
    axios
        .post('http://localhost:5000/api/trips/trips-list',null)
        .then( res => {
            dispatch({
                type: GET_LIST_TRIP,
                payload: res.data.tripList
            });
        })   
        .catch(err => {console.log(err);});
};

//Delete Trip
export const deleteTripAction = (deleteItem) => dispatch => {
    axios
        .post('http://localhost:5000/api/trips/delete-trip', deleteItem)
        .then( res => {
            dispatch({
                type: GET_LIST_TRIP,
                payload: res.data.tripList
            });
        })   
        .catch(err => {console.log(err);});
};

// Set loading trip list
export const setTripListLoading = () => {
    return {
      type: GET_TRIP_LIST_LOADING
    };
  };