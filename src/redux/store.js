// const store = createStore();
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { cartReducer } from './reducers/cartReducer.js';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
// export default store;
