import FoodCategory from '../models/FoodCategory';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food category.
function get() {
	var query = FoodCategory.find();

	return query.sort({ title: 'asc' })
		.limit(12)
		.exec();
}

// Gets food category by id.
function getById(id) {
	return FoodCategory.findById(id)
		.exec();
}

// Creates food category.
function create(item) {
	var entry = new FoodCategory({
		title: item.title
	});

	return entry.save();
}

// Updates food category.
function update(id, item) {
	return FoodCategory.findByIdAndUpdate(id, item);
}

// Removes food category.
function remove(id) {
	return FoodCategory.findByIdAndRemove(id);
}

