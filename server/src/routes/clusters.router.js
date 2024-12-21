const express = require("express");
const clustersController = require("../controllers/clusters.controller")

const clustersRouter = express.Router();

clustersRouter.get('/', clustersController.listClusters);

module.exports = clustersRouter;