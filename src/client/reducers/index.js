import { combineReducers } from 'redux';
import personInfo from './personInfo';
import companyInfo from './companyInfo';

export default combineReducers({
  personInfo,
  companyInfo,
});
