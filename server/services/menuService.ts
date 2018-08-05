import Menu from '../models/Menu';
import * as moment from 'moment';

export default {
	get: get,
	getById: getById,
	create: create,
	update: update,
	remove: remove
};

// Gets menus.
function get(filter) {
	var query = Menu.find();

	return query
		.limit(filter.days)
		.exec();
}

// Gets menu by id.
function getById(id) {
	return Menu.findById(id)
		.exec();
}

// Creates menu.
function create(item) {
	var entry = new Menu({
		date: moment.utc(),
		meals: item.meals
	});

	return entry.save();
}

// Updates menu.
function update(id, item) {
	return Menu.findByIdAndUpdate(id, item);
}

// Removes menu.
function remove(id) {
	return Menu.findByIdAndRemove(id);
}

