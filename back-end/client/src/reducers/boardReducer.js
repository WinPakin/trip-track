import { ADD_TRIP, JOIN_TRIP, LIST_TRIP } from '../actions/types';

const initialState = {
    trip_list: []
};

export default function(state = initialState, action){
    switch(action.type){
        case LIST_TRIP:
            return {
                ...state,
                trip_list: action.payload
            };
        default:
            return state;
    }
}