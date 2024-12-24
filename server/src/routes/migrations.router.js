const express = require('express');
const migrationsController = require("../controllers/migrations.controller")
const validateUser = require('../middlewares/validate-user.middleware');

const migrationsRouter = express.Router();

migrationsRouter
    .route('/')
    .get(validateUser, migrationsController.listMigrations);



module.exports = migrationsRouter;