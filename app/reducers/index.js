import { combineReducers } from 'redux';
import food from './food/food';
import foodDetails from './food/foodDetails';

export default combineReducers({ food, foodDetails });