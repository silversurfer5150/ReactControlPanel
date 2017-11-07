import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import panel from './panel';
import async from './async';

export default combineReducers({
  router: routerReducer,
  panel,
  async,
});
