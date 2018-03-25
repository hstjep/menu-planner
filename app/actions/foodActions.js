const getFoodItems = (updateStateCallback) => {
	updateStateCallback({ foodItemsAreLoading: true });

	fetch('/api/food')
		.then(response => response.json())
		.then(foodItems => {
			updateStateCallback({ foodItems, foodItemsAreLoading: false })
		}
		);
};

const getFoodItem = (id, updateStateCallback) => {
	updateStateCallback({ foodItemIsLoading: true });
	fetch('/api/food/' + id)
		.then(response => response.json())
		.then(foodItem => {
			updateStateCallback({ foodItem, foodItemIsLoading: false })
		}
		);
};

const createFoodItem = (foodItem, callback) => {
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

export { getFoodItems, getFoodItem, createFoodItem, updateFoodItem, deleteFoodItem };