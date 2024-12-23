require("express-async-errors");
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieSession = require("cookie-session");
const healthRouter = require("./routes/health.router");
const clustersRouter = require("./routes/clusters.router");
const authRouter = require("./routes/auth.router");
const errorMiddleware = require("./middlewares/error-middleware.middleware");
const NotFoundError = require("./errors/not-found.error");

const app = express();

app.use(cors())
app.use(morgan('combined'))
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '5mb'}))
app.use(
    cookieSession({
        name: "session-token",
        signed: false,
        secure: false,
        maxAge: 2 * 60 * 60 * 1000
    })
)

// add your routers below
app.use('/api/health', healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/clusters", clustersRouter);

app.all("*", (req, res) => {
    throw new NotFoundError(`${req.url} not found on server`)
})

app.use(errorMiddleware)

module.exports = app;