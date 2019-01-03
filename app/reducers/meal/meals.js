import { handleActions, combineActions } from 'redux-actions';
import { FETCH_MEALS, DELETE_MEAL, TOGGLE_DELETE_CONFIRM } from './../../constants/actionTypes';
import { setQueryOptions } from '../../actions/queryUtilityActions';

const initialState = {
		meals: [],
		mealsAreLoading: false,
		isDeleteModalOpen: {},
		queryOptions: setQueryOptions({page: 1, pageSize: 10, embed: 'food' })
};

const meals = handleActions({
	[FETCH_MEALS.PENDING]: (state) => ({
		...state,
		mealsAreLoading: true
	}),
	[FETCH_MEALS.SUCCESS]: (state, action) => ({
		...state,
		meals: action.data,
		mealsAreLoading: false,
		queryOptions: setQueryOptions(action.data)
	}),
	[FETCH_MEALS.ERROR]: (state) => ({
		...state,
		mealsAreLoading: false
	}),
	[TOGGLE_DELETE_CONFIRM] : (state, action) => ({
		...state,
		isDeleteModalOpen: { [action.value]: !state.isDeleteModalOpen[action.value]}
	})
}, initialState);

export default meals;