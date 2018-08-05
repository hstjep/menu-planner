import mealService from '../services/mealService';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets meals.
function get(req, res) {
	mealService.get()
		.then(function(meal) {
			return res.json(meal);
		});
}

// Gets meal by id.
function getById(req, res) {
	mealService.getById(req.params.id)
		.then(function(meal){
			return res.json(meal);
		});
}

// Creates meal.
function create(req, res) {
	mealService.create(req.body)
		.then(function(){
			return res.json('Meal created.');
		}, function(data){
			return res.json('Error', data);
		});
}

// Updates meal.
function update(req, res) {
	mealService.update(req.params.id, req.body)
		.then(function() {
			return res.json('Meal updated.');
		});
}

// Removes meal.
function remove(req, res) {
	mealService.remove(req.params.id)
		.then(function () {
			return res.json('Meal deleted.');
		});
}