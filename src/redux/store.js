import {legacy_createStore} from 'redux';
import reducers from './reducers';
import thunk from "redux-thunk";
import {applyMiddleware, compose} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    reducers, {},
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
