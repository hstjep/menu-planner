import Food from '../models/Food';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food.
function get() {
	var query = Food.find();

	return query.sort({ title: 'asc' })
		.limit(12)
		.exec();
}

// Gets food by id.
function getById(id) {
	return Food.findById(id)
		.exec();
}

// Creates food.
function create(item) {
	var entry = new Food({
		title: item.title
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


