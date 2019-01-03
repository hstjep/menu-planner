import foodCategoryService from '../services/foodCategoryService';
import FilterOptions from '../common/models/FilterOptions';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets food category.
function get(req, res) {
	const filterOptions = new FilterOptions(req.params.page, req.params.pageSize, req.query.orderBy, req.query.orderDirection, req.query.embed);

	foodCategoryService.get(filterOptions)
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