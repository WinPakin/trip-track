import { GET_LIST_TRIP, GET_TRIP_LIST_LOADING } from '../actions/types';

const initialState = {
    trip_list: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_LIST_TRIP:
            return {
                ...state,
                trip_list: action.payload,
                loading: false
            };
        case GET_TRIP_LIST_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}