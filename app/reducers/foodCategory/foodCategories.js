import { handleActions, combineActions } from 'redux-actions';
import { FETCH_FOOD_CATEGORIES, DELETE_FOOD_CATEGORY, TOGGLE_DELETE_CONFIRM } from './../../constants/actionTypes';
import { setQueryOptions } from '../../actions/queryUtilityActions';

const initialState = {
		foodCategories: [],
		foodCategoriesAreLoading: false,
		isDeleteModalOpen: {},
		queryOptions: setQueryOptions({page: 1, pageSize: 10 })
};

const foodCategories = handleActions({
	[FETCH_FOOD_CATEGORIES.PENDING]: (state) => ({
		...state,
		foodCategoriesAreLoading: true
	}),
	[FETCH_FOOD_CATEGORIES.SUCCESS]: (state, action) => ({
		...state,
		foodCategories: action.data,
		foodCategoriesAreLoading: false,
		queryOptions: setQueryOptions(action.data)
	}),
	[FETCH_FOOD_CATEGORIES.ERROR]: (state) => ({
		...state,
		foodCategoriesAreLoading: false
	}),
	[TOGGLE_DELETE_CONFIRM] : (state, action) => ({
		...state,
		isDeleteModalOpen: { [action.value]: !state.isDeleteModalOpen[action.value]}
	})
}, initialState);

export default foodCategories;