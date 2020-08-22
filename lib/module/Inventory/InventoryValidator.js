//========================== Load Modules Start ===========================

//========================== Load external Module =========================
var _ = require("lodash");

//========================== Load Internal Module =========================
var appUtils = require("../../appUtils");
var constant = require("../../constant");
var exceptions = require("../../customException");

//========================== Load Modules End =============================


//========================== Export Module Start ===========================



var validateAdd = function (req, res, next) {
    let {productName, productImage, productQuantity} = req.body;

    let errors = [];


  

    if (_.isEmpty(productName)) {
        errors.push({
            fieldName: "productName",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "productName")
        });
    }
    if (_.isEmpty(productImage)) {
        errors.push({
            fieldName: "productImage",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "productImage")
        });
    }
    if (!productQuantity) {
        errors.push({
            fieldName: "productQuantity",
            message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "productQuantity")
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
    validateAdd,
    


};
//========================== Export module end ==================================

