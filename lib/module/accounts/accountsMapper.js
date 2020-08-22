/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("./accountsConstants");

function loginMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.login_success,
        "accessToken": params.redisSession,
        "user": params.user,
    }
    return respObj;
}

function signupMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.signup_success,
        "accessToken": params.redisSession,
        "userProfile": params.user,
    }
    return respObj;
}


module.exports = {
    loginMapping,
    signupMapping,

}