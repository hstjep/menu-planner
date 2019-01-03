import * as express from 'express';
import mealCtrl from '../controllers/mealController';
var router = express.Router();

// GET meal.
router.get('/:page/:pageSize', function (req: express.Request, res: express.Response) {
	return mealCtrl.get(req, res);
});

// GET meal by id.
router.get('/:id', function(req: express.Request, res: express.Response) {
	return mealCtrl.getById(req, res);
});

// POST meal.
router.post('/', function (req: express.Request, res: express.Response) {
	return mealCtrl.create(req, res);
});

// PUT meal.
router.put('/:id', function (req: express.Request, res: express.Response) {
	return mealCtrl.update(req, res);
});

// DELETE meal.
router.delete('/:id', function (req: express.Request, res: express.Response) {
	return mealCtrl.remove(req, res);
})

module.exports = router;