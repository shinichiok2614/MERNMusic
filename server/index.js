const initWebRouter = require('./src/routes/route');
const express = require('express');
const authRouter = require('./src/routes/auth');
const connectDB = require('./src/config/connectDB');
const myMusicRouter = require('./src/routes/mymusic');
const musicRouter = require('./src/routes/music');

var cors = require('cors');

require('dotenv').config();

let app = express();
app.use(express.json()); //đọc được dữ liệu json từ request

app.use(cors()); //cho phép CORS với toàn bộ route

initWebRouter(app);

connectDB();
app.use('/api/auth', authRouter);
app.use('/api/mymusic', myMusicRouter);
app.use('/api/music', musicRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Backend Nodejs is running ${port}`));
