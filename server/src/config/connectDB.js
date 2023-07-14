require('dotenv').config();
const mongoose = require('mongoose');
// const mongoose = require('mongodb');
const connectDB = async () => {
	try {
		console.log(`${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`);
		// mongodb+srv://shinichiok2614:<password>@cluster0.ucjvqev.mongodb.net/?retryWrites=true&w=majority
		await mongoose.connect(
			// `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ucjvqev.mongodb.net/?retryWrites=true&w=majority`,
			`mongodb+srv://phuonghoangit2614:1234@cluster0.ipc4rkm.mongodb.net/?retryWrites=true&w=majority`,
			{
				useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
		);
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};
module.exports = connectDB;
