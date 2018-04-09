import foodCategoryService from '../services/foodCategoryService';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food category.
function get(req, res) {
	foodCategoryService.get()
		.then(function(food) {
			return res.json(food);
		});
}

// Gets food category by id.
function getById(req, res) {
	foodCategoryService.getById(req.params.id)
		.then(function(food){
			return res.json(food);
		});
}

// Creates food category.
function create(req, res) {
	foodCategoryService.create(req.body)
		.then(function(){
			return res.json('Food category created.');
		});
}

// Updates food category.
function update(req, res) {
	foodCategoryService.update(req.params.id, req.body)
		.then(function() {
			return res.json('Food category updated.');
		});
}

// Removes food category.
function remove(req, res) {
	foodCategoryService.remove(req.params.id)
		.then(function () {
			return res.json('Food category deleted.');
		});
}