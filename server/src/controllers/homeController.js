const { builtinModules } = require('module');
const { model } = require('mongoose');

let getHomePage = (req, res) => {
	return res.status(200).json({
		message: 'hello getHomePage',
	});
};
module.exports = getHomePage;
