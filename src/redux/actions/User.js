import { SET_CURRENT_USER } from "../actionTypes/actionTypes";

export const currentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
