import menuService from '../services/menuService';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets meals.
function get(req, res) {
	menuService.get(req.query)
		.then(function(meal) {
			return res.json(meal);
		});
}

// Gets meal by id.
function getById(req, res) {
	menuService.getById(req.params.id)
		.then(function(meal){
			return res.json(meal);
		});
}

// Creates menu.
function create(req, res) {
	menuService.create(req.body)
		.then(function(){
			return res.json('Menu created.');
		}, function(data){
			return res.json('Error', data);
		});
}

// Updates menu.
function update(req, res) {
	menuService.update(req.params.id, req.body)
		.then(function() {
			return res.json('Menu updated.');
		});
}

// Removes menu.
function remove(req, res) {
	menuService.remove(req.params.id)
		.then(function () {
			return res.json('Menu deleted.');
		});
}