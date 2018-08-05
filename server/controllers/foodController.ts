import foodService from '../services/foodService';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food.
function get(req, res) {
	foodService.get()
		.then(function(food) {
			return res.json(food);
		});
}

// Gets food by id.
function getById(req, res) {
	foodService.getById(req.params.id)
		.then(function(food){
			return res.json(food);
		});
}

// Creates food.
function create(req, res) {
	foodService.create(req.body)
		.then(function(){
			return res.json('Food created.');
		}, function(err) {
			console.log(err);
		});
}

// Updates food.
function update(req, res) {
	foodService.update(req.params.id, req.body)
		.then(function() {
			return res.json('Food updated.');
		});
}

// Removes food.
function remove(req, res) {
	foodService.remove(req.params.id)
		.then(function () {
			return res.json('Food deleted.');
		});
}

// exports.filterByTitle = function (req, res) {
// 	var query = Food.find();
// 	var filter = req.body.title;

// 	query.sort({ title: 'desc'});

// 	if (filter.length > 0) {
// 		query.where({title: filter});
// 	}

// 	query.exec(function(err, results) {
// 		res.json(results);
// 	});
// }

