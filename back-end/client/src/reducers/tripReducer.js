import {SET_CURR_TRIP_NAME, CLEAR_CURR_TRIP_NAME} from '../actions/types';

const initialState = {
    tripName: null
};

export default function(state = initialState, action){
    switch(action.type){
        case SET_CURR_TRIP_NAME:
            return {
                ...state,
                tripName: action.payload
            }
        case CLEAR_CURR_TRIP_NAME:
            return {
                ...state,
                tripName: null
            }

        default:
            return state;

    }
}