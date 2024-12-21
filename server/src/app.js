require("express-async-errors");
const express = require('express');
const healthRouter = require("./routes/health.router");

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}))

app.use('/api/health', healthRouter);

module.exports = app;