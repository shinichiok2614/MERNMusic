const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	album: {
		type: String,
	},
	url: {
		type: String,
	},
	lyrics: {
		type: String,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
});

module.exports = mongoose.model('musics', MusicSchema);
