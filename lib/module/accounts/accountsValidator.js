//========================== Load Modules Start ===========================

//========================== Load external Module =========================
var _ = require("lodash");

//========================== Load Internal Module =========================
var appUtils = require("../../appUtils");
var constant = require("../../constant");
var exceptions = require("../../customException");

//========================== Load Modules End =============================


//========================== Export Module Start ===========================



var validateRegister = function (req, res, next) {
    let { email, password, firstName, lastName } = req.body;

    let errors = [];

    email = req.body.email = _.toLower(email);

    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(firstName)) {
        errors.push({
            fieldName: "firstName",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "FirstName")
        });
    }
    if (_.isEmpty(password)) {
        errors.push({
            fieldName: "password",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "password")
        });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }


    next();
}

var validateLogin = function (req, res, next) {

    var { email, password, adminPassword } = req.body;
    var { } = req.headers;
    var errors = [];

    email = req.body.email = _.toLower(email);
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Email") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }

    if (_.isEmpty(password || adminPassword)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};


var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(exceptions.getCustomErrorException(errors))
    }
    next();
}


module.exports = {
    validateRegister,
    validateLogin,


};
//========================== Export module end ==================================

