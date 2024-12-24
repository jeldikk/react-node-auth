const express = require('express');
const migrationsController = require("../controllers/migrations.controller")
const validateUser = require('../middlewares/validate-user.middleware');
const requireAuth = require("../middlewares/require-auth.middleware");

const migrationsRouter = express.Router();

migrationsRouter
    .route('/')
    .get(validateUser, requireAuth, migrationsController.listMigrations);



module.exports = migrationsRouter;