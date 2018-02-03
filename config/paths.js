const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	appHtml: resolveApp('index.html'),
	appIndexJs: resolveApp('app/index.js')
};