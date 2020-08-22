//========================== Load Modules Start ===========================

//========================== Load external Module =========================
var _ = require("lodash");

//========================== Load Internal Module =========================
var appUtils = require("../../appUtils");
var constant = require("../../constant");
var exceptions = require("../../customException");

//========================== Load Modules End =============================


//========================== Export Module Start ===========================



var validateCreate = function (req, res, next) {
    let {productId, quantity, totalAmount, tax, currency} = req.body;

    let errors = [];


  

    if (_.isEmpty(productId)) {
        errors.push({
            fieldName: "productId",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "productId")
        });
    }
    if (!totalAmount) {
        errors.push({
            fieldName: "totalAmount",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "totalAmount")
        });
    }
    if (!tax) {
        errors.push({
            fieldName: "tax",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "tax")
        });
    }
    if (!quantity) {
        errors.push({
            fieldName: "quantity",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "quantity")
        });
    }
    if (_.isEmpty(currency)) {
        errors.push({
            fieldName: "currency",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "currency")
        });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }


    next();
}



var validationError = function (errors, next) {
    if (errors && errors.length > 0) {
        return next(exceptions.getCustomErrorException(errors))
    }
    next();
}


module.exports = {
    validateCreate,
    


};
//========================== Export module end ==================================

