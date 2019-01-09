import _ from 'underscore';
import moment from 'moment';
import { FETCH_MENU_PLANS, FETCH_WEEK_MENU_PLANS, CREATE_MENU_PLAN, UPDATE_MENU_PLAN, DELETE_MENU_PLAN, FETCH_MENU_PLAN } from './../constants/actionTypes';
import ApiClient from './../utils/apiClient';

const basePath = 'menu';

const getMenuPlans = (filter) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MENU_PLANS.PENDING });

		ApiClient().find(`${basePath}`, {
			startDate: '2018-12-04T18:19:00.289Z',
			endDate: '2018-12-05T18:19:00.289Z'
		})
			.then(response => response.json())
			.then(menuPlans => {
				dispatch({
					type: FETCH_MENU_PLANS.SUCCESS,
					data: menuPlans
				})
			}
			)
			.catch(error => dispatch({
				type: FETCH_MENU_PLANS.ERROR
			}))
	}
};

const getMenuPlan = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MENU_PLAN.PENDING });

		ApiClient().get(`${basePath}/${id}`)
			.then(response => response.json())
			.then(meal => dispatch({
				type: FETCH_MENU_PLAN.SUCCESS,
				data: meal
			}))
			.catch(error => dispatch({
				type: FETCH_MENU_PLAN.ERROR
			}))
	}
};

const createMenuPlan = (menuPlan, callback) => {
	return (dispatch) => {
		dispatch({ type: CREATE_MENU_PLAN.PENDING });

		ApiClient().create(basePath, menuPlan)
			.then(response => {
				callback()
			})
			.catch(error => dispatch({
				type: CREATE_MENU_PLAN.ERROR
			}));
	}
};

const getWeekMenuPlans = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_WEEK_MENU_PLANS.PENDING });

		ApiClient().find(`${basePath}/week`)
		// fetch('/api/menu/week')
			.then(response => response.json())
			.then(menuPlans => {
				var result = _.chain(menuPlans)
					.groupBy(function (item) {
						return moment(item.date).local().startOf('day').format('dddd DD/MM/YYYY');
					})
					.map(function (value, index) {
						return {
							date: index,
							meals: value
						}
					})
					.value();

				dispatch({
					type: FETCH_WEEK_MENU_PLANS.SUCCESS,
					data: result
				})
			}
			)
			.catch(error => dispatch({
				type: FETCH_WEEK_MENU_PLANS.ERROR
			}))
	}
}

const updateMenuPlan = (id, menuPlan, callback) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_MENU_PLAN.PENDING });

		ApiClient().update(`${basePath}/${id}`, menuPlan)
			.then(response => {
				dispatch({ type: UPDATE_MENU_PLAN.SUCCESS });
				callback()
			})
			.catch(error => dispatch({
				type: UPDATE_MENU_PLAN.ERROR
			}));
	}
};

const deleteMenuPlan = (id, updateStateCallback) => {
	return (dispatch) => {
		// dispatch({ type: DELETE_MENU_PLAN.PENDING });

		ApiClient().remove(`${basePath}/${id}`)
			.then(response =>
				dispatch(getMenuPlans())
			)
			.catch(error =>
				dispatch({ type: DELETE_MENU_PLAN.ERROR })
			);
	}
};

export { getMenuPlans, getMenuPlan, getWeekMenuPlans, createMenuPlan, updateMenuPlan, deleteMenuPlan };