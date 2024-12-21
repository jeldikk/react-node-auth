require("express-async-errors");
const express = require('express');
const healthRouter = require("./routes/health.router");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const clustersRouter = require("./routes/clusters.router");

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}))

// add your routers below
app.use('/api/health', healthRouter);
app.use("/api/v1/clusters", clustersRouter);

app.all("*", (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND)
})

app.use((err, req, res, next) => {
    // error handling can be more personalised and informative
    // by how we are throwing errors from controller handlers
    // create a abstract CustomError and have concrete Errors extend from this CustomError class
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: err.message
    })
})

module.exports = app;