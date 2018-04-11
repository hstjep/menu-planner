import { combineReducers } from 'redux';
import food from './food/food';
import foodItem from './food/foodItem';
import foodCategories from './foodCategory/foodCategories';
import foodCategory from './foodCategory/foodCategory';
import { reducer as form } from 'redux-form';

export default combineReducers({ 
	food, 
	foodItem, 
	foodCategories, 
	foodCategory,
	form 
});