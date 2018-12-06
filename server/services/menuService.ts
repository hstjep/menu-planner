import Menu from '../models/Menu';
import IMenu from '../interfaces/IMenu';
import * as moment from 'moment';
import * as _ from 'underscore';
import { runInNewContext } from 'vm';

export default {
	get: get,
	getById: getById,
	getOrCreateCurrentWeekMenu: getOrCreateCurrentWeekMenu,
	create: create,
	update: update,
	remove: remove
};

// Gets menus.
function get(filter) {
	var query = Menu.find({
		'date': {
			'$gte': filter.startDate,
			'$lt': filter.endDate
		}
	});

	return query
		.populate('meals')
		.sort({ date: 1 })
		.exec();
}

// Gets menu by id.
function getById(id) {
	return Menu.findById(id)
		.populate('meals')
		.exec();
}

// Gets or creates current week menus.
function getOrCreateCurrentWeekMenu() {
	var query = Menu.find({
		'date': {
			'$gte': moment().day(0).utc(),
			'$lt': moment().day(7).utc()
		}
	});
	return new Promise(function (resolve, reject) {
		query
			.populate('meals')
			.sort({ date: 1 })
			.exec()
			.then(function (items) {
				if (items != null && items.length > 0) {
					resolve(items);
				} else {
					let menuPlansTest = new Array<IMenu>();

					const types = ['Breakfast', 'Lunch', 'Dinner', 'Snack']; // TODO: move to enum.

					for (var i = 1; i <= 7; i++) {
						_.each(types, function (type) {
							menuPlansTest.push(new Menu({
								date: moment().day(i).utc(),
								type: type,
								meals: []
							}));
						});
					}

					Menu.insertMany(menuPlansTest)
						.then(function (items) {
							resolve(items);
						});
				}
			});
	});
}

// Creates menu.
function create(item) {
	var entry = new Menu({
		date: moment.utc(),
		type: item.type,
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

