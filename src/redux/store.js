// const store = createStore();
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import rootReducer from '../redux/index.js'
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = { key: 'root', storage }
const persistSessionConfig = { key: 'loading', storage:storageSession }

const persistedReducer = persistReducer(persistConfig, rootReducer)
const combinedReducers = combineReducers({
    loading: persistReducer(persistSessionConfig),
    root: persistedReducer
})

export const store = createStore(combinedReducers, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;
