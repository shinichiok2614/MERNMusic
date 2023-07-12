const initWebRouter = require('./src/routes/route');
// import initWebRouter from './src/routes/route';
const express = require('express');
require('dotenv').config();

let app = express();
app.use(express.json());

initWebRouter(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Backend Nodejs is running ${port}`));
