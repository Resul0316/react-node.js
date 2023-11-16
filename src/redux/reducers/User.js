import { SET_CURRENT_USER } from "../actionTypes/actionTypes";

const initialState = {
    currentUser: null
}

export const user = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state,
                    currentUser: action.payload }
        default:
            return state;
    }
}