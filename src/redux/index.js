import { combineReducers } from "redux";
import { cartReducer } from './reducers/cartReducer.js';
import { user } from './reducers/User.js';


export default combineReducers({
    cartReducer: cartReducer,
    user: user
})
