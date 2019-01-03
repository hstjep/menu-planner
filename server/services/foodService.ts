import Food from '../models/Food';
import SearchResult from '../common/models/SearchResult';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food.
function get(options) {
	return new Promise(function (resolve, reject) {
	
		Food.find()
			.populate(...options.embed)
			.sort({ [options.orderBy || 'title']: options.orderDirection })
			.skip(options.pageSize * (options.page - 1))
			.limit(options.pageSize)
			.exec()
			.then(function (foodItems) {
				Food.count()
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

// Gets food by id.
function getById(id) {
	return Food.findById(id)
		.populate('foodCategory')
		.exec();
}

// Creates food.
function create(item) {
	var entry = new Food({
		title: item.title,
		description: item.description,
		foodCategory: item.foodCategory,
		foodSubcategory: item.foodSubcategory,
		imageUrl: item.imageUrl
	});

	return entry.save();
}

// Updates food.
function update(id, item) {
	return Food.findByIdAndUpdate(id, item);
}

// Removes food.
function remove(id) {
	return Food.findByIdAndRemove(id);
}


// exports.create = function(req, res) {
// 	var entry = new Food({
// 		title: req.body.title
// 	});

// 	entry.save();

// 	res.redirect(301, '/');
// };

// exports.get = function (req, res) {
// 	res.render('food', { title: 'salad' });
// }


