require("express-async-errors");
const express = require('express');
const healthRouter = require("./routes/health.router");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const clustersRouter = require("./routes/clusters.router");
const authRouter = require("./routes/auth.router");
const errorMiddleware = require("./middlewares/error-middleware.middleware");
const NotFoundError = require("./errors/not-found.error");

const app = express();

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}))

// add your routers below
app.use('/api/health', healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/clusters", clustersRouter);

app.all("*", (req, res) => {
    throw new NotFoundError(`${req.url} not found on server`)
})

app.use(errorMiddleware)

module.exports = app;