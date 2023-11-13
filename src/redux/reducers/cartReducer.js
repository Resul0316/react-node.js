import { ADD_ITEM, DELETE_ITEM, SET_USER_TOKEN } from "../actionTypes/actionTypes";

const initialState = {
    numOfItems: 0,
    token:null
};
// reducers are functions
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1
            };
            break
        case DELETE_ITEM:
            return {
                ...state,
                numOfItems:state.numOfItems - 1
            };
        default:
            return state;
    }
}

// USer Token
export const userToken = (state = initialState, action) => {
    if (initialState.token !== null) {
        this.cookieStore.set('token', initialState.token)
    }
}