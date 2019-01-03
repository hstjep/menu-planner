import * as express from 'express';
import foodCategoryCtrl from '../controllers/foodCategoryController';
var router = express.Router();

// GET food category.
router.get('/:page/:pageSize', function (req: express.Request, res: express.Response) {
	return foodCategoryCtrl.get(req, res);
});

// GET food category by id.
router.get('/:id', function(req: express.Request, res: express.Response) {
	return foodCategoryCtrl.getById(req, res);
});

// POST food category.
router.post('/', function (req: express.Request, res: express.Response) {
	return foodCategoryCtrl.create(req, res);
});

// PUT food category.
router.put('/:id', function (req: express.Request, res: express.Response) {
	return foodCategoryCtrl.update(req, res);
});

// DELETE food category.
router.delete('/:id', function (req: express.Request, res: express.Response) {
	return foodCategoryCtrl.remove(req, res);
})

module.exports = router;