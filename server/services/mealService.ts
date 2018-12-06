import Meal from '../models/Meal';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets meals.
function get() {
	var query = Meal.find()
		.populate('food');

	return query
		.limit(12)
		.exec();
}

// Gets meal by id.
function getById(id) {
	return Meal.findById(id)
		.populate('food')	
		.exec();
}

// Creates meal.
function create(item) {
	var entry = new Meal({
		title: item.title,
		food: item.food
	});

	return entry.save();
}

// Updates meal.
function update(id, item) {
	return Meal.findByIdAndUpdate(id, item);
}

// Removes meal.
function remove(id) {
	return Meal.findByIdAndRemove(id);
}

