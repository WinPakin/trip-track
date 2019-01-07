import {SET_CURR_TRIP_NAME, CLEAR_CURR_TRIP_NAME} from '../actions/types';
import { SET_CURR_TRIP_DESC, SET_CURR_TRIP_DESC_LOADING} from '../actions/types';
import { GET_MEMBER_LIST, GET_MEMBER_LIST_LOADING} from '../actions/types';
import { SET_YOUR_PAYMENT, SET_YOUR_PAYMENT_LOADING} from '../actions/types';

const initialState = {
    tripName: null,
    tripDesc: '',
    tripDescLoading: false,
    tripMembers: [],
    tripMembersLoading: false,
    yourExpenseLst: [],
    yourExpenseLstLoading: false
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
                tripName: null,
                tripMembers: []
            }
        case SET_CURR_TRIP_DESC:
            return {
                ...state,
                tripDesc: action.payload,
                tripDescLoading: false
            }
        case SET_CURR_TRIP_DESC_LOADING:
            return {
                ...state,
                tripDescLoading: true
            }
        case GET_MEMBER_LIST:
            return {
                ...state,
                tripMembers: action.payload,
                tripMembersLoading: false
            }
        case GET_MEMBER_LIST_LOADING:
            return {
                ...state,
                tripMembersLoading: true
            }
        case SET_YOUR_PAYMENT:
            return {
                ...state,
                yourExpenseLst: action.payload,
                yourExpenseLstLoading: false


            }
        case SET_YOUR_PAYMENT_LOADING:
            return {
                ...state,
                yourExpenseLstLoading: true
            }
        default:
            return state;

    }
}