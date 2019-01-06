import { LIST_TRIP, TRIP_LIST_LOADING } from '../actions/types';

const initialState = {
    trip_list: []
};

export default function(state = initialState, action){
    switch(action.type){
        case LIST_TRIP:
            return {
                ...state,
                trip_list: action.payload,
                loading: false
            };
        case TRIP_LIST_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}