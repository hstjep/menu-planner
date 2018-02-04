const getFoodItems = (updateStateCallback) => {
	updateStateCallback({ foodItemsAreLoading: true });

	fetch('/api/food')
		.then(response => response.json())
		.then(foodItems => {
			updateStateCallback({ foodItems, foodItemsAreLoading: false })
		}
		);
};

const createFoodItem = (foodItem, callback) => {
	fetch('/api/food', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(foodItem)
	})
		.then(response => {
			callback()
		});
};

const updateFoodItem = (id, foodItem, callback) => {
	fetch('/api/food/' + id, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(foodItem)
	})
		.then(response => {
			callback()
		});
};

const deleteFoodItem = (id, updateStateCallback) => {
	fetch('/api/food/' + id, {
		method: 'DELETE'
	})
		.then(response =>
			getFoodItems(updateStateCallback)
		);
};

export { getFoodItems, createFoodItem, updateFoodItem, deleteFoodItem };