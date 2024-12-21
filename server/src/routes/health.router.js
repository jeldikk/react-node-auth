const express = require("express");
const healthController = require("../controllers/health.controller");

const healthRouter = express.Router();

healthRouter.get('/', healthController.getHealthStatus)

module.exports = healthRouter;