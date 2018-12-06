import { FETCH_MEALS, FETCH_MEAL, CREATE_MEAL, UPDATE_MEAL, DELETE_MEAL, SELECT_MEAL } from './../constants/actionTypes';

const getMeals = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_MEALS.PENDING });

		fetch('/api/meal')
			.then(response => response.json())
			.then(meals => dispatch({
				type: FETCH_MEALS.SUCCESS,
				data: meals
			}))
			.catch(error => dispatch({
				type: FETCH_MEALS.ERROR
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

const deleteMeal = (id, updateStateCallback) => {
	return (dispatch) => {
		// dispatch({ type: DELETE_MEAL.PENDING });

		fetch('/api/meal/' + id, {
			method: 'DELETE'
		})
			.then(response =>
				dispatch(getMeals())
			)
			.catch(error =>
				dispatch({ type: DELETE_MEAL.ERROR })
			);
	}
};

const selectMeal = value => ({
	type: SELECT_MEAL,
	data: value
});

export { getMeals, getMeal, createMeal, updateMeal, selectMeal, deleteMeal };