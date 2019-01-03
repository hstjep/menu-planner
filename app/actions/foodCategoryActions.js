import { FETCH_FOOD_CATEGORIES, FETCH_FOOD_CATEGORY, CREATE_FOOD_CATEGORY, UPDATE_FOOD_CATEGORY, DELETE_FOOD_CATEGORY } from './../constants/actionTypes';

const getFoodCategories = (options) => {
	return (dispatch) => {
		dispatch({ type: FETCH_FOOD_CATEGORIES.PENDING });

		fetch(`/api/food-category/${options.page}/${options.pageSize}?embed=${options.embed}`)
			.then(response => response.json())
			.then(foodCategories => dispatch({
				type: FETCH_FOOD_CATEGORIES.SUCCESS,
				data: foodCategories
			}))
			.catch(error => dispatch({
				type: FETCH_FOOD_CATEGORIES.ERROR
			}))
	}
};

const getFoodCategory = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCH_FOOD_CATEGORY.PENDING });

		fetch('/api/food-category/' + id)
			.then(response => response.json())
			.then(foodCategory => dispatch({
				type: FETCH_FOOD_CATEGORY.SUCCESS,
				data: foodCategory
			}))
			.catch(error => dispatch({
				type: FETCH_FOOD_CATEGORY.ERROR
			}))
	}
};

const createFoodCategory = (foodCategory, callback) => {
	return (dispatch) => {
		dispatch({ type: CREATE_FOOD_CATEGORY.PENDING });

		fetch('/api/food-category', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(foodCategory)
		})
			.then(response => {
				callback()
			})
			.catch(error => dispatch({
				type: CREATE_FOOD_CATEGORY.ERROR
			}));
	}
};

const updateFoodCategory = (id, foodCategory, callback) => {
	return (dispatch) => {
		dispatch({ type: UPDATE_FOOD_CATEGORY.PENDING });

		fetch('/api/food-category/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(foodCategory)
		})
			.then(response => {
				dispatch({ type: UPDATE_FOOD_CATEGORY.SUCCESS });				
				callback()
			})
			.catch(error => dispatch({
				type: UPDATE_FOOD_CATEGORY.ERROR
			}));
	}
};

const deleteFoodCategory = (id, updateStateCallback) => {
	return (dispatch) => {
		// dispatch({ type: DELETE_FOOD_CATEGORY.PENDING });

		fetch('/api/food-category/' + id, {
			method: 'DELETE'
		})
			.then(response =>
				dispatch(getFoodCategories())
			)
			.catch(error =>
				dispatch({ type: DELETE_FOOD_CATEGORY.ERROR })
			);
	}
};

export { getFoodCategories, getFoodCategory, createFoodCategory, updateFoodCategory, deleteFoodCategory };