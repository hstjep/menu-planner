import { FETCH_MEALS, FETCH_MEAL, CREATE_MEAL, UPDATE_MEAL, DELETE_MEAL, SELECT_MEAL } from './../constants/actionTypes';
import { setQueryOptions } from './queryUtilityActions';

const getMeals = (options) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MEALS.PENDING });

		fetch(`/api/meal/${options.page}/${options.pageSize}?embed=${options.embed}&searchTerm=${options.searchTerm}`)
			.then(response => response.json())
			.then(meals => dispatch({
				type: FETCH_MEALS.SUCCESS,
				data: meals
			}))
			.catch(error => dispatch({
				type: FETCH_MEALS.ERROR,
				data: error
			}))
	}
};

const getMeal = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCH_MEAL.PENDING });

		fetch('/api/meal/' + id)
			.then(response => response.json())
			.then(meal => dispatch({
				type: FETCH_MEAL.SUCCESS,
				data: meal
			}))
			.catch(error => dispatch({
				type: FETCH_MEAL.ERROR
			}))
	}
};

const createMeal = (meal, callback) => {
	return (dispatch) => {
		dispatch({ type: CREATE_MEAL.PENDING });

		fetch('/api/meal', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meal)
		})
			.then(response => {
				callback()
			})
			.catch(error => dispatch({
				type: CREATE_MEAL.ERROR
			}));
	}
};

const updateMeal = (id, meal, callback) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_MEAL.PENDING });

		fetch('/api/meal/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(meal)
		})
			.then(response => {
				dispatch({ type: UPDATE_MEAL.SUCCESS });
				callback()
			})
			.catch(error => dispatch({
				type: UPDATE_MEAL.ERROR
			}));
	}
};

const deleteMeal = (id) => {
	return (dispatch) => {
		// dispatch({ type: DELETE_MEAL.PENDING });

		fetch('/api/meal/' + id, {
			method: 'DELETE'
		})
			.then(response =>
				dispatch(getMeals({...setQueryOptions(), embed: 'food'}))
			)
			.catch(error =>
				dispatch({ type: DELETE_MEAL.ERROR })
			);
	}
};

const getMealOptions = options =>
	new Promise(resolve => {
		fetch(`/api/meal/${options.page}/${options.pageSize}?embed=${options.embed}&searchTerm=${options.searchTerm}`)
			.then(response => response.json())
			.then(response => {
				resolve(
					response.items.map(function (item) {
						return {
							label: item.title,
							value: item._id
						}
					})
				);
			});
	});

const selectMeal = value => {
	var values = value[0];
	var data = [];

	Object.keys(values).forEach(function (prop) {
		if (values[prop].value) {
			data.push({
				_id: values[prop].value,
				title: values[prop].label
			});
		}
	});

	return {
		type: SELECT_MEAL,
		data: data
	}
}

export { getMeals, getMeal, createMeal, updateMeal, selectMeal, deleteMeal, getMealOptions };