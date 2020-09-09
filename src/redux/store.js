import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import employees from './reducers';

export default createStore(employees, applyMiddleware(thunk, logger));