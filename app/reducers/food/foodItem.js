import { handleActions, combineActions } from 'redux-actions';
import { FETCH_FOOD_ITEM, FETCH_FOOD_CATEGORIES } from './../../constants/actionTypes';

const initialState = {
	foodItem: {
		title: '',
		description: '',
		category: '',
		subcategory: ''
		// imageUrl: ''
	},
	foodItemIsLoading: false
};

const foodItem = handleActions({
	[FETCH_FOOD_ITEM.PENDING]: (state) => ({
		...state,
		foodItemIsLoading: true
	}),
	[FETCH_FOOD_ITEM.SUCCESS]: (state, action) => ({
		...state,
		foodItem: action.data,
		foodItemIsLoading: false
	}),
	[FETCH_FOOD_ITEM.ERROR]: (state) => ({
		...state,
		foodItemIsLoading: false
	})
}, initialState);

export default foodItem;