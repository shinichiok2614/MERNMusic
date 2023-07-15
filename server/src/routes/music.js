const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

router.get('/', async (req, res) => {
	try {
		const musics = await Music.find();
		// const musics = await Music.find({ user: req.userId }).populate('user', ['username']);
		res.json({ success: true, musics });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

module.exports = router;
