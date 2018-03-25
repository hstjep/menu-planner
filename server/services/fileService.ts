import * as multer from 'multer';
import * as mime from 'mime-types';
import * as mkdirp from 'mkdirp';

function getStorage(folderName) {
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			var dest = 'dist/uploads/' + folderName;
			mkdirp.sync(dest);			
		  cb(null, dest)
		},
		filename: function (req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));		
		}
	  });

	  return storage;
}

function upload(containerName) {
	var storage = getStorage(containerName);
	return multer({ storage: storage }).single('file');
}

export default { getStorage, upload };

