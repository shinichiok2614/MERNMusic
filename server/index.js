const initWebRouter = require('./src/routes/route');
const express = require('express');
const authRouter = require('./src/routes/auth');
const connectDB = require('./src/config/connectDB');
// const connectDB = require('./src/config/connect2');
const musicRouter = require('./src/routes/music');

require('dotenv').config();

let app = express();
app.use(express.json()); //đọc được dữ liệu json từ request

initWebRouter(app);

connectDB();
app.use('/api/auth', authRouter);
app.use('/api/music', musicRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Backend Nodejs is running ${port}`));
