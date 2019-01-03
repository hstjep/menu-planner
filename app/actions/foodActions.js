import { FETCH_FOOD, FETCH_FOOD_ITEM, CREATE_FOOD_ITEM, UPDATE_FOOD_ITEM, DELETE_FOOD_ITEM, SELECT_FOOD } from './../constants/actionTypes';

const getFoodItems = (options) => {
	return (dispatch) => {
		dispatch({ type: FETCH_FOOD.PENDING });

		fetch(`/api/food/${options.page}/${options.pageSize}?embed=${options.embed}`)
			.then(response => response.json())
			.then(response => dispatch({
				type: FETCH_FOOD.SUCCESS,
				data: response
			}))
			.catch(error => dispatch({
				type: FETCH_FOOD.ERROR,
				data: error
			}))
	}
};

const getFoodItem = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCH_FOOD_ITEM.PENDING });

		fetch('/api/food/' + id)
			.then(response => response.json())
			.then(foodItem => dispatch({
				type: FETCH_FOOD_ITEM.SUCCESS,
				data: foodItem
			}))
			.catch(error => dispatch({
				type: FETCH_FOOD_ITEM.ERROR
			}))
	}
};

const createFoodItem = (foodItem, callback) => {
	return (dispatch) => {
		dispatch({ type: CREATE_FOOD_ITEM.PENDING });

		if (foodItem.imageUrl) {
			foodItem.imageUrl = '/' + foodItem.imageUrl.replace(/\\/g, "/");
		}

		fetch('/api/food', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(foodItem)
		})
			.then(response => {
				// dispatch({ type: CREATE_FOOD_ITEM.SUCCESS });
				callback()
			})
			.catch(error => dispatch({
				type: CREATE_FOOD_ITEM.ERROR
			}));
	}
};

const updateFoodItem = (id, foodItem, callback) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_FOOD_ITEM.PENDING });

		fetch('/api/food/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(foodItem)
		})
			.then(response => {
				dispatch({ type: UPDATE_FOOD_ITEM.SUCCESS });				
				callback()
			})
			.catch(error => dispatch({
				type: UPDATE_FOOD_ITEM.ERROR
			}));
	}
};

const deleteFoodItem = (id, updateStateCallback) => {
	return (dispatch) => {
		// dispatch({ type: DELETE_FOOD_ITEM.PENDING });

		fetch('/api/food/' + id, {
			method: 'DELETE'
		})
			.then(response =>
				dispatch(getFoodItems())
			// getFoodItems(updateStateCallback)
			)
			.catch(error =>
				dispatch({ type: DELETE_FOOD_ITEM.ERROR })
			);
	}
};

const selectFood = value => ({
	type: SELECT_FOOD,
	data: value
});
export { getFoodItems, getFoodItem, createFoodItem, updateFoodItem, deleteFoodItem, selectFood };