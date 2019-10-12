import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import WeatherReducer from './store/reducers/weather';
import AuthReducer from './store/reducers/auth';
import UserDataReducer from './store/reducers/userData';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import Firebase, { FirebaseContext } from './component/Firebase/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
    weather: WeatherReducer,
    auth: AuthReducer,
    user: UserDataReducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

const app = (
        <Provider store={store}>
            <FirebaseContext.Provider value={new Firebase()}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate> 
            </FirebaseContext.Provider>
        </Provider>
)
        
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();
