import * as express from 'express';
import foodCtrl from '../controllers/foodController';
var router = express.Router();

// GET food.
router.get('/', function (req: express.Request, res: express.Response) {
	return foodCtrl.get(req, res);
});

// GET food by id.
router.get('/:id', function(req: express.Request, res: express.Response) {
	return foodCtrl.getById(req, res);
});

// POST food.
router.post('/', function (req: express.Request, res: express.Response) {
	return foodCtrl.create(req, res);
});

// PUT food.
router.put('/:id', function (req: express.Request, res: express.Response) {
	return foodCtrl.update(req, res);
});

// DELETE food.
router.delete('/:id', function (req: express.Request, res: express.Response) {
	return foodCtrl.remove(req, res);
})

module.exports = router;