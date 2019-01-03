import FoodCategory from '../models/FoodCategory';
import SearchResult from '../common/models/SearchResult';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food category.
function get(options) {
	return new Promise(function (resolve, reject) {

		FoodCategory.find()
			.populate(...options.embed)
			.sort({ [options.orderBy || 'title']: options.orderDirection })
			.skip(options.pageSize * (options.page - 1))
			.limit(options.pageSize)
			.exec()
			.then(function (foodItems) {
				FoodCategory.count()
					.exec()
					.then(function (count) {
						resolve(
							new SearchResult(
								foodItems,
								count,
								options.page,
								options.pageSize,
								options.embed)
						)
					}, function (error) {
						reject(error);
					})
			}, function (error) {
				reject(error);
			});
	});
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

