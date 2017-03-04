import { combineReducers } from 'redux';
import simple from './simple';
import authentication from './authentication';
import registration from './registration';
import locale from './locale';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
  simple,
  authentication,
  registration,
  locale,
  routing
});
