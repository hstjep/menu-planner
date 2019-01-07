import Meal from '../models/Meal';
import SearchResult from '../common/models/SearchResult';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets meals.
function get(options) {
	return new Promise(function (resolve, reject) {
		Meal.find({ title: new RegExp(options.searchTerm, 'i') })
			.populate(...options.embed)
			.sort({ [options.orderBy || 'title']: options.orderDirection })
			.skip(options.pageSize * (options.page - 1))
			.limit(options.pageSize)
			.exec()
			.then(function (meals) {
				Meal.count()
					.exec()
					.then(function (count) {
						resolve(
							new SearchResult(
								meals,
								count,
								options.page,
								options.pageSize,
								options.embed,
								options.searchTerm)
						)
					}, function (error) {
						reject(error);
					})
			}, function (error) {
				reject(error);
			});
	});
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

