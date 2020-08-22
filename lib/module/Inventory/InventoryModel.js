// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../constant');

var Schema = mongoose.Schema;
var InventorySchema;

var InventorySchema = new Schema({

    productName: { type: String },
    productImage: { type: String },
    productQuantity: { type: Number },
    inStock: { type: Boolean },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    }

})

//Export Ag module
Inventory = module.exports = mongoose.model(constants.DB_MODEL_REF.INVENTORY, InventorySchema);



