//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./model/Exception");
var constants = require("./constant");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    completeCustomException: function (errcode, errMsg, error) {
        console.log(errcode, 'errcode', errMsg, error, 'errMsg, error');
        if (error == false)
            return new Exception(errcode, errMsg);
        else
            return new Exception(errcode, errMsg, error);
    },
    intrnlSrvrErr: function (err) {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    tokenGenException: function (err) {
        return new Exception(3, constants.MESSAGES.TOKEN_GENERATE_EXCEPTION, err)
    },
    invalidEmail: function () {
        return new Exception(4, constants.MESSAGES.INVALID_EMAIL)
    },
    getCustomErrorException: function (error) {
        return new Exception(5, error[0]);
    },
    incorrectPass: function () {
        return new Exception(7, constants.MESSAGES.INCORRECT_PASS)
    },
    userNotFound: function (err) {
        return new Exception(8, constants.MESSAGES.USER_NOT_FOUND, err);
    },
   
    sessionExpired:  function (err) {
        return new Exception(9, constants.MESSAGES.SESSION_EXPIRED, err)
    },
    notInStock:function (err){
        return new Exception(10, constants.MESSAGES.NOT_IN_STOCK, err)
    },
    emailAlreadyRegistered: function () {
        return new Exception(11, constants.MESSAGES.EMAIL_ALREADY_EXIST)
    },

   



};

//========================== Export Module   End ===========================
