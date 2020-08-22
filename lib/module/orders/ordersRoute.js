const orderRoutr = require("express").Router();
const resHndlr = require("../../responseHandler");
const middleware = require("../../middleware");
const orderFacade = require("./ordersFacade");
const validators = require("./ordersValidator");
const mediaUpload = require("../../mediaUpload/mediaUploadMiddleware");


/** 
 * route for create order
 */

orderRoutr.route("/create")
    .post([middleware.authenticate.autntctTkn, validators.validateCreate], function (req, res) {
        let { userId } = req.user;
        let { productId, quantity, totalAmount, tax, currency } = req.body;
        orderFacade.create({
            userId,
            productId, quantity, totalAmount, tax, currency

        })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });

/** 
 * route for get users order
 */


orderRoutr.route("/userOrder")
    .get([middleware.authenticate.autntctTkn], function (req, res) {
        let { userId } = req.user;
        orderFacade.userOrder({ userId })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });




module.exports = orderRoutr;


