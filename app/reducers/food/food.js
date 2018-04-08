import { handleActions, combineActions } from 'redux-actions';
import { FETCH_FOOD, DELETE_FOOD_ITEM, TOGGLE_DELETE_CONFIRM } from './../../constants/actionTypes';

const initialState = {
		foodItems: undefined,
		foodItemsAreLoading: false,
		isDeleteModalOpen: {}
};

const food = handleActions({
	[FETCH_FOOD.PENDING]: (state) => ({
		...state,
		foodItemsAreLoading: true
	}),
	[FETCH_FOOD.SUCCESS]: (state, action) => ({
		...state,
		foodItems: action.data,
		foodItemsAreLoading: false
	}),
	[FETCH_FOOD.ERROR]: (state) => ({
		...state,
		foodItemsAreLoading: false
	}),
	[TOGGLE_DELETE_CONFIRM] : (state, action) => ({
		...state,
		isDeleteModalOpen: { [action.value]: !state.isDeleteModalOpen[action.value]}
	})
}, initialState);

export default food;