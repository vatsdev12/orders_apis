"use strict";
//========================== Load Modules Start ===========================
var Promise = require("bluebird");
//========================== Load internal Module =========================

const redisSession = require("../redisClient/session");

//========================== Load Modules End =============================

var __verifyTok = function (acsTokn) {
    return redisSession.getByToken(acsTokn)
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            throw err
        })
};

var expireToken = function (req, res, next) {
    let acsToken = req.params.id;
    return redisSession.expire(acsToken)
        .then(function (result) {
            //return result;
            next();
        })
        .catch(function (err) {
            next(err)
        })
}

var tokenAuth = function (req, res, next) {
    let acsToken = req.params.id; // web page cases like forgot password

    __verifyTok(acsToken)
        .bind({})
        .then(function (tokenPayload) {
            console.log('tokenPayload: ', tokenPayload);
            if (tokenPayload.d) {
                req.user = tokenPayload.d;
                next()
            } else {
                res.render('reset_failure', {error_message: "Your token has been expired. Please try to reset password again."});

            }
        })
        .catch(function (err) {
            res.render('reset_failure', {error_message: "Your token has been expired. Please try to reset password again."});
        })
}


//========================== Export Module Start ===========================

module.exports = {
    tokenAuth,
    expireToken,
};

//========================== Export Module End ===========================
