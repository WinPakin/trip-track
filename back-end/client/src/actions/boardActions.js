import axios from 'axios';
import { GET_ERRORS, CLEAR_ERRORS, LIST_TRIP } from './types';

//Add Trip
// Input: tripname, tripDesc
export const addTrip = tripItem => dispatch => {
    axios
        .post('http://localhost:5000/api/trips/add-trip',tripItem)
        .then( () => {
            alert("Success: Your trip has been added.");
            dispatch({
                type: CLEAR_ERRORS
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
        .then( () => {
            alert("Success: You have joinded the trip.");})
        .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
          );
};

//List Trip