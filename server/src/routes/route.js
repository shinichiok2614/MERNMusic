const express = require('express');
const getHomePage = require('../controllers/homeController');
const router = express.Router();
let initWebRouter = (app) => {
	router.get('/', (req, res) => {
		return res.send('hello');
	});
	router.get('/home', getHomePage);
	// router.get
	return app.use('/', router);
};
module.exports = initWebRouter;
