const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

const Music = require('../models/Music');

router.get('/', verifyToken, async (req, res) => {
	try {
		const musics = await Music.find({ user: req.userId }).populate('user', ['username']);
		res.json({ success: true, musics });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

router.post('/', verifyToken, async (req, res) => {
	const { title, url, album, lyrics } = req.body;

	// Simple validation
	if (!title) return res.status(400).json({ success: false, message: 'Title is required' });

	try {
		const newMusic = new Music({
			title,
			url: url,
			album: album || 'New album',
			lyrics: lyrics || 'No lyrics',
			user: req.userId,
		});
		// title,album, url,lyrics, user
		await newMusic.save();

		res.json({ success: true, message: 'New Music added!', music: newMusic });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

router.put('/:id', verifyToken, async (req, res) => {
	const { title, description, url, status } = req.body;

	// Simple validation
	if (!title) return res.status(400).json({ success: false, message: 'Title is required' });

	try {
		let updatedPost = {
			title,
			description: description || '',
			url: (url.startsWith('https://') ? url : `https://${url}`) || '',
			status: status || 'TO LEARN',
		};

		const postUpdateCondition = { _id: req.params.id, user: req.userId };

		updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true });

		// User not authorised to update post or post not found
		if (!updatedPost)
			return res.status(401).json({
				success: false,
				message: 'Post not found or user not authorised',
			});

		res.json({
			success: true,
			message: 'Excellent progress!',
			post: updatedPost,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
	try {
		const musicDeleteCondition = { _id: req.params.id, user: req.userId };
		const deletedMusic = await Music.findOneAndDelete(musicDeleteCondition);

		// User not authorised or post not found
		if (!deletedMusic)
			return res.status(401).json({
				success: false,
				message: 'Music not found or user not authorised',
			});

		res.json({ success: true, music: deletedMusic });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
});

module.exports = router;
