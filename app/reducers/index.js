import { combineReducers } from 'redux';
import common from './common/common';
import food from './food/food';
import foodCreate from './food/foodCreate';
import foodItem from './food/foodItem';
import foodCategories from './foodCategory/foodCategories';
import foodCategory from './foodCategory/foodCategory';
import meals from './meal/meals';
import meal from './meal/meal';
import menuPlans from './menu-plan/menuPlans';
import menuPlan from './menu-plan/menuPlan';
import { reducer as form } from 'redux-form';

export default combineReducers({ 
	common,
	food, 
	foodCreate,
	foodItem, 
	foodCategories, 
	foodCategory,
	meals,
	meal,
	menuPlans,
	menuPlan,
	form
});
