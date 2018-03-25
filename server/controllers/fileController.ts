// var foodService = require('../services/fileService');
import * as multer from 'multer';
import * as mime from 'mime-types';
import fileService from '../services/fileService';
// var fileContainerConstants = require('../common/constants/fileContainerConstants'); 

export default {
	upload: upload
};

var storage = fileService.getStorage('food');

// Uploads food.
function upload(req, res) {
	var uploadFile = multer({ storage: storage }).single('file');
	
	uploadFile(req, res, function (err) {
		if (err) {
			// An error occurred when uploading
			console.log(res);
			return res.json('Error.');
		}
		console.log(res);		
		return res.json(res.req.file);
		// Everything went fine
	})
}


