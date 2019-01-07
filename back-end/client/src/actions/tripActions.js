import axios from 'axios';
import {SET_CURR_TRIP_NAME, CLEAR_CURR_TRIP_NAME} from './types';
import { SET_CURR_TRIP_DESC, SET_CURR_TRIP_DESC_LOADING} from './types';
import { GET_MEMBER_LIST, GET_MEMBER_LIST_LOADING} from './types';
import { GET_ERRORS, CLEAR_ERRORS } from './types';
import { SET_YOUR_PAYMENT, SET_YOUR_PAYMENT_LOADING} from './types';

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

// Set loading 
export const setLoading = (action_loading) => {
    return {
      type: action_loading
    };
  };

// Get Description
export const getTripDesc = (tripName) => (dispatch) => {
    dispatch(setLoading(SET_CURR_TRIP_DESC_LOADING));
    axios
         .post('http://localhost:5000/api/trips/get-desc', tripName)
         .then( res => {
                    dispatch({
                        type: SET_CURR_TRIP_DESC,
                        payload: res.data.tripDesc
                    });
         }).catch( err => {
             console.log(err);
         });
};

//Get members
export const getMembers = (tripName) => (dispatch) => {
    dispatch(setLoading(GET_MEMBER_LIST_LOADING));
    axios
        .post('http://localhost:5000/api/trips/get-members', tripName)
        .then( res => {
                    dispatch({
                        type: GET_MEMBER_LIST,
                        payload: res.data.memberLst
                    })
        }).catch( err => {
            console.log(err);
        });
    
}



// Add Expense
export const addExpenseAction = (expenseItem) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/expenses/add-expense', expenseItem)
        .then( res => {
            alert("SUCCESS: Your Expense has been added.");
            dispatch({
                type: CLEAR_ERRORS
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
              })
              alert("ERROR: Please read the error messages.");
        });       
}

//Get Your Expenses
export const getYourExpenses = (tripItem) => (dispatch) => {
    dispatch(setLoading(SET_YOUR_PAYMENT_LOADING));
    axios
        .post('http://localhost:5000/api/expenses/expense-for', tripItem)
        .then( res => {
                    dispatch({
                        type: SET_YOUR_PAYMENT,
                        payload: res.data
                    })
        }).catch( err => {
            console.log(err);
        });
    
}