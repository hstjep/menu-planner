import { handleActions, combineActions } from 'redux-actions';
import { CREATE_FOOD_ITEM, UPDATE_FOOD_ITEM, FETCH_FOOD_ITEM, FETCH_FOOD_CATEGORIES } from './../../constants/actionTypes';

const initialState = {
	foodItem: {
		title: '',
		description: '',
		category: '',
		subcategory: ''
	},
	foodItemIsLoading: false,
	foodCategories: [],
	foodCategoriesAreLoading: false
};

const foodCreate = handleActions({
	[FETCH_FOOD_CATEGORIES.SUCCESS]: (state, action) => ({
		...state,
		foodCategories: action.data,
		foodCategoriesAreLoading: false
	}),
	[FETCH_FOOD_ITEM.SUCCESS]: (state, action) => ({
		...state,
		foodItem: {
			title: action.data.title,
			description: action.data.description,
			category: action.data.category._id,
			subcategory: action.data.subcategory
		},
		foodItemIsLoading: false
	})
}, initialState);

export default foodCreate;
