import ApiClient from './../utils/apiClient';

const basePath = 'file';

const uploadFile = (file, callback) => {
	let data = new FormData();
	data.append('file', file);

	return new Promise(function (resolve, reject) {	
		return ApiClient().upload(basePath, data)
			.then(response => {
				if (response.ok) {
					response.json().then(json => {
						 resolve(json);
					});
				}
			}, function(error) {
				reject(error);
			});
	})
};

export { uploadFile };