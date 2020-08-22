const accountRoutr = require("express").Router();
const resHndlr = require("../../responseHandler");
const middleware = require("../../middleware");
const accountFacade = require("./accountsFacade");
const validators = require("./accountsValidator");
const mediaUpload = require("../../mediaUpload/mediaUploadMiddleware");


/** 
 * route for get register user in application
 */

accountRoutr.route("/register")
    .post([validators.validateRegister], function (req, res) {
        let { email, password, firstName, lastName, address } = req.body;
        accountFacade.signUp({
            email,
            password,
            firstName,
            lastName,
            address
        })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });


/** 
 * route for get login user in application
 */


accountRoutr.route("/login")
    .post([validators.validateLogin], function (req, res) {
        let { email, password, } = req.body;
        accountFacade.login({ email, password })
            .then(function (result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function (err) {
                resHndlr.sendError(res, err, req);
            })
    });




module.exports = accountRoutr;


