import {SET_CURR_TRIP_NAME, CLEAR_CURR_TRIP_NAME} from '../actions/types';
import { SET_CURR_TRIP_DESC, SET_CURR_TRIP_DESC_LOADING} from '../actions/types';
import { GET_MEMBER_LIST, GET_MEMBER_LIST_LOADING} from '../actions/types';
import { SET_YOUR_PAYMENT, SET_YOUR_PAYMENT_LOADING} from '../actions/types';
import { SET_YOUR_DEBT, SET_YOUR_DEBT_LOADING} from '../actions/types';
import { SET_NET_PAYMENT, SET_NET_PAYMENT_LOADING} from '../actions/types';
import { SET_ANALYTICS, SET_ANALYTICS_LOADING} from '../actions/types';

const initialState = {
    tripName: null,
    tripDesc: '',
    tripDescLoading: false,
    tripMembers: [],
    tripMembersLoading: false,
    yourExpenseLst: [],
    yourExpenseLstLoading: false,
    yourDebtLst: [],
    yourDebtLstLoading: false,
    netPaymentLst: [],
    netPaymentLstLoading: false,
    analyticsLst: null,
    analyticsLstLoading: false
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
        case SET_YOUR_DEBT:
            return {
                ...state,
                yourDebtLst: action.payload,
                yourDebtLstLoading: false
            }
        case SET_YOUR_DEBT_LOADING:
            return {
                ...state,
                yourDebtLstLoading: true
            }
        case SET_NET_PAYMENT:
            return {
                ...state,
                netPaymentLst: action.payload,
                netPaymentLstLoading: false
            }
        case SET_NET_PAYMENT_LOADING:
            return {
                ...state,
                netPaymentLstLoading: true
            }
        case SET_ANALYTICS:
            return {
                ...state,
                analyticsLst: action.payload,
                analyticsLstLoading: false
            }
        case SET_ANALYTICS_LOADING:
            return {
                ...state,
                analyticsLstLoading: true
            }
        default:
            return state;

    }
}