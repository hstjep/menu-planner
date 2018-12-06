import * as express from 'express';
import menuCtrl from '../controllers/menuController';
var router = express.Router();

// GET menu.
router.get('/', function (req: express.Request, res: express.Response) {
	return menuCtrl.get(req, res);
});

// GET current week menu.
router.get('/week', function (req: express.Request, res: express.Response) {
	return menuCtrl.getOrCreateCurrentWeekMenu(req, res);
});

// GET menu by id.
router.get('/:id', function(req: express.Request, res: express.Response) {
	return menuCtrl.getById(req, res);
});

// POST menu.
router.post('/', function (req: express.Request, res: express.Response) {
	return menuCtrl.create(req, res);
});

// PUT menu.
router.put('/:id', function (req: express.Request, res: express.Response) {
	return menuCtrl.update(req, res);
});

// DELETE menu.
router.delete('/:id', function (req: express.Request, res: express.Response) {
	return menuCtrl.remove(req, res);
})

module.exports = router;