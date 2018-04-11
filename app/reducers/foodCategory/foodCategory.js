import { handleActions, combineActions } from 'redux-actions';
import { FETCH_FOOD_CATEGORY } from './../../constants/actionTypes';

const initialState = {
	foodCategory: {
		title: ''
	},
	foodCategoryIsLoading: false
};

const foodCategory = handleActions({
	[FETCH_FOOD_CATEGORY.PENDING]: (state) => ({
		...state,
		foodCategoryIsLoading: true
	}),
	[FETCH_FOOD_CATEGORY.SUCCESS]: (state, action) => ({
		...state,
		foodCategory: action.data,
		foodCategoryIsLoading: false
	}),
	[FETCH_FOOD_CATEGORY.ERROR]: (state) => ({
		...state,
		foodCategoryIsLoading: false
	})
}, initialState);

export default foodCategory;