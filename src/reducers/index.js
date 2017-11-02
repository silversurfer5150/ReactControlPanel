import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import panel from './panel';

export default combineReducers({
  router: routerReducer,
  counter,
  panel,
});
