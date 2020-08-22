const inventoryRoutr = require("express").Router();
const resHndlr = require("../../responseHandler");
const middleware = require("../../middleware");
const inventoryFacade = require("./InventoryFacade");
const validators = require("./InventoryValidator");
const mediaUpload = require("../../mediaUpload/mediaUploadMiddleware");


/** 
 * route for add product in Inventory
 */

inventoryRoutr.route("/add")
    .post([middleware.authenticate.autntctTkn, validators.validateAdd], function (req, res) {
        let { productName, productImage, productQuantity } = req.body;
        let { userId } = req.user;
        inventoryFacade.add({
            productName, productImage, productQuantity, userId
        })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });



/** 
 * route for get Inventory product
 */

inventoryRoutr.route("/getProduct")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user
        inventoryFacade.getProduct({ userId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });



module.exports = inventoryRoutr;

