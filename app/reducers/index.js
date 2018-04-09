import { combineReducers } from 'redux';
import food from './food/food';
import foodDetails from './food/foodDetails';
import foodCategory from './foodCategory/foodCategory';
import foodCategoryDetails from './foodCategory/foodCategoryDetails';

export default combineReducers({ food, foodDetails, foodCategory, foodCategoryDetails });