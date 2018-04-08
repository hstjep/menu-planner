import { handleActions, combineActions } from 'redux-actions';
import { FETCH_FOOD_ITEM } from './../../constants/actionTypes';

const initialState = {
	foodItem: undefined,
	foodItemIsLoading: false
};

const foodDetails = handleActions({
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

export default foodDetails;