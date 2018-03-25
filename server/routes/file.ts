import * as express from 'express';
import fileCtrl from '../controllers/fileController';
var router = express.Router();

// POST file.
router.post('/', function (req: express.Request, res: express.Response) {
	return fileCtrl.upload(req, res);
});

module.exports = router;