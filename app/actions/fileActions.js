// const axios = require('axios');

const uploadFile = (file, callback) => {
	let data = new FormData();
	data.append('file', file);

	return new Promise(function (resolve, reject) {
		return fetch('/api/file', {
			method: 'POST',
			body: data
		})
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