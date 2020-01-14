

import countries from './countries'
import callCenters from './callCenters'
import users from './users'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
   countries,
   callCenters,
   users
});

export default createStore(allReducers, compose(
   applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))