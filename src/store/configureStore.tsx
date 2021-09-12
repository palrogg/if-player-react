import {createStore, applyMiddleware, compose} from 'redux';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../reducers';

import thunk from 'redux-thunk';






const persistConfig = {
  key: 'root',
  whitelist: [], // TODO for debug -- remove when you put in production
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)





const composeEnhancers:typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;


const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
const persistor = persistStore(store);
export default {store, persistor};
