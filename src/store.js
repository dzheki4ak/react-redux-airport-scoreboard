import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { flightReducer, activeTabReducer, searchValueReducer } from './features/flight.reducer';

const reducer = combineReducers({
  flightsList: flightReducer,
  activeTab: activeTabReducer,
  searchedValue: searchValueReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
