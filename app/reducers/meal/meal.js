import { handleActions } from 'redux-actions';
import { FETCH_MEAL, SELECT_FOOD } from './../../constants/actionTypes';

const initialState = {
	meal: {
		title: '',
		food: []
	},
	foodItems: [],
	mealIsLoading: false
};

const meal = handleActions({
	[FETCH_MEAL.PENDING]: (state) => ({
		...state,
		mealIsLoading: true
	}),
	[FETCH_MEAL.SUCCESS]: (state, action) => ({
		...state,
		meal: action.data,
		mealIsLoading: false
	}),
	[FETCH_MEAL.ERROR]: (state) => ({
		...state,
		mealIsLoading: false
	}),
	[SELECT_FOOD] : (state, action) => ({
		...state,
		meal: {
			...state.meal,
			food: action.data
		} 
	})
}, initialState);

export default meal;