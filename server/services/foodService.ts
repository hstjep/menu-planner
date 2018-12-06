import Food from '../models/Food';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food.
function get(pageOptions) {
	return new Promise(function (resolve, reject) {
		Food.find()
			.populate('foodCategory')
			.sort({ title: 'asc' })
			.skip(pageOptions.pageSize * (pageOptions.pageNumber - 1))
			.limit(pageOptions.pageSize)
			.exec()
			.then(function (foodItems) {
				Food.count()
					.exec()
					.then(function (count) {
						resolve({
							items: foodItems,
							currentPage: pageOptions.pageNumber,
							totalPages: Math.ceil(count / pageOptions.pageSize)
						})
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


