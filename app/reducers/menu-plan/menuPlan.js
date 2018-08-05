import { handleActions, combineActions } from 'redux-actions';
import { FETCH_MENU_PLANS } from './../../constants/actionTypes';

const initialState = {
		days: [],
		menuPlanItems: undefined,
		isMenuPlanLoading: false
};

const menuPlan = handleActions({
	[FETCH_MENU_PLANS.PENDING]: (state) => ({
		...state,
		isMenuPlanLoading: true
	}),
	[FETCH_MENU_PLANS.SUCCESS]: (state, action) => ({
		...state,
		menuPlanItems: action.data,
		isMenuPlanLoading: false
	}),
	[FETCH_MENU_PLANS.ERROR]: (state) => ({
		...state,
		isMenuPlanLoading: false
	}),
	['SET_WEEK_DAYS']: (state, action) => ({
		...state,
		days: action.data
	})
}, initialState);

export default menuPlan;