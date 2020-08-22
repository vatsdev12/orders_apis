"use strict";

//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const mongoose = require('mongoose');
//Import logger
const logger = require("../logger").logger;
// plugin bluebird promise in mongoose
mongoose.Promise = require('bluebird');

const appUtils = require("../appUtils");



//=================================== Load Modules end =====================================

// Connect to Db
function connectDb(env, callback) {
    let dbName = env.mongo.dbName;
    let dbUrl = env.mongo.dbUrl;
    let dbOptions = env.mongo.options;
    if (env.isProd) {
        logger.info("Configuring db in " + env.TAG + ' mode');
        dbUrl = dbUrl + dbName;
    } else {
        logger.info("Configuring db in " + env.TAG + ' mode');
        dbUrl = dbUrl + dbName;
        mongoose.set('debug', true);
    }

    logger.info("Connecting to -> " + dbUrl);
    mongoose.connect(dbUrl, dbOptions);
    mongoose.set('useCreateIndex', true);

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('Connected to DB', dbName, 'at', dbUrl);
        callback();
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (error) {
        logger.info('DB connection error: ' + error);
        callback(error);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('DB connection disconnected.');
        callback("DB connection disconnected.");
    });

    // project run admin create
    mongoose.connection.on('open', function () {
    });
}

// ========================== Export Module Start ==========================
module.exports = connectDb;
// ========================== Export Module End ============================