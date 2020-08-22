// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');

var Schema = mongoose.Schema;
var OrderSchema;

var OrderSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.ACCOUNT },
    totalAmount: { type: Number },
    tax: { type: Number },
    currency: { type: String },
    quantity: { type: Number },
    productId: { type: Schema.Types.ObjectId, ref: constants.DB_MODEL_REF.INVENTORY },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }

})

//Export Ag module
Order = module.exports = mongoose.model(constants.DB_MODEL_REF.ORDER, OrderSchema);



