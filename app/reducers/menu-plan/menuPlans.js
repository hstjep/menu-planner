import { handleActions, combineActions } from 'redux-actions';
import { FETCH_WEEK_MENU_PLANS } from '../../constants/actionTypes';

const initialState = {
		menuPlanItems: undefined,
		isMenuPlanLoading: false
};

const menuPlans = handleActions({
	[FETCH_WEEK_MENU_PLANS.PENDING]: (state) => ({
		...state,
		isMenuPlanLoading: true
	}),
	[FETCH_WEEK_MENU_PLANS.SUCCESS]: (state, action) => ({
		...state,
		menuPlanItems: action.data,
		isMenuPlanLoading: false
	}),
	[FETCH_WEEK_MENU_PLANS.ERROR]: (state) => ({
		...state,
		isMenuPlanLoading: false
	}),
	['SET_WEEK_DAYS']: (state, action) => ({
		...state,
		menuPlanItems: action.data
	})
}, initialState);

export default menuPlans;