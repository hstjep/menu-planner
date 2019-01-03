import { handleActions } from 'redux-actions';
import { FETCH_FOOD, DELETE_FOOD_ITEM } from './../../constants/actionTypes';
import { setQueryOptions } from '../../actions/queryUtilityActions';

const initialState = {
		foodItems: [],
		foodItemsAreLoading: false,
		queryOptions: setQueryOptions({page: 1, pageSize: 10, embed: 'foodCategory' })
};

const food = handleActions({
	[FETCH_FOOD.PENDING]: (state) => ({
		...state,
		foodItemsAreLoading: true
	}),
	[FETCH_FOOD.SUCCESS]: (state, action) => ({
		...state,
		foodItems: action.data,
		foodItemsAreLoading: false,
		queryOptions: setQueryOptions(action.data)
	}),
	[FETCH_FOOD.ERROR]: (state) => ({
		...state,
		foodItemsAreLoading: false
	})
}, initialState);

export default food;