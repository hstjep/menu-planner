import { handleActions } from 'redux-actions';
import { FETCH_MENU_PLAN, SELECT_MEAL } from './../../constants/actionTypes';

const initialState = {
	menuPlan: {
		date: '',
		meals: []
	},
	meals: [],
	isMenuPlanLoading: false
};

const menuPlan = handleActions({
	[FETCH_MENU_PLAN.PENDING]: (state) => ({
		...state,
		isMenuPlanLoading: true
	}),
	[FETCH_MENU_PLAN.SUCCESS]: (state, action) => ({
		...state,
		menuPlan: action.data,
		isMenuPlanLoading: false
	}),
	[FETCH_MENU_PLAN.ERROR]: (state) => ({
		...state,
		isMenuPlanLoading: false
	}),
	[SELECT_MEAL] : (state, action) => ({
		...state,
		menuPlan: {
			...state.menuPlan,
			meals: action.data
		} 
	})
}, initialState);

export default menuPlan;