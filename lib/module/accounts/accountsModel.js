// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');

var Schema = mongoose.Schema;
var AccountSchema;

var AccountSchema = new Schema({

    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    email: { type: String },
    password: { type: String },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }

})

//Export Ag module
Account = module.exports = mongoose.model(constants.DB_MODEL_REF.ACCOUNT, AccountSchema);



