import axios from 'axios';
import {SET_CURR_TRIP_NAME, CLEAR_CURR_TRIP_NAME} from './types';

// Set Name
export const setTripName = (tripName) => (dispatch) => {
    dispatch({
        type: SET_CURR_TRIP_NAME,
        payload: tripName
    })
};

//Clear Name
export const clearTripName = () => (dispatch) => {
    dispatch({
        type: CLEAR_CURR_TRIP_NAME
    })
};