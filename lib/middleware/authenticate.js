"use strict";
//========================== Load Modules Start ===========================
var Promise = require("bluebird");
//========================== Load internal Module =========================

const redisSession = require("../redisClient/session");
const customException = require("../customException");
const accountSerice = require("../module/accounts/accountsService");


//========================== Load Modules End =============================

var __verifyTok = function (acsTokn) {
    return redisSession.getByToken(acsTokn)
        .then(function (tokenPayload) {
            console.log("acsToknacsToknacsToknacsToknacsTokn", tokenPayload);

            return tokenPayload;
        })
        .catch(function (err) {
            throw err
        })
};

var expireToken = function (req, res, next) {
    return redisSession.expire(req.get('accessToken'))
        .then(function (result) {
            //return result;
            next();
        })
        .catch(function (err) {
            next(err)
        })
}

var autntctTkn = function (req, res, next) {


    let acsToken = req.get('accessToken');
    if (acsToken) {
        console.log("aaaaaaaaaaaaaaaaa", acsToken);
        __verifyTok(acsToken)
            .then(function (tokenPayload) {

                if (!tokenPayload.d) {
                    throw customException.sessionExpired();
                }
                req.user = tokenPayload.d;
                next()

            })
            .catch(function (err) {
                next(err)
            })
    }
    else {
        req.user = "";
        next();
    }
}

var authSocketTkn = function (socket, next) {

    var accessToken = socket.handshake.query.accessToken;
    next();
    __verifyTok(accessToken)
        .bind({})
        .then(function (tokenPayload) {
            if (tokenPayload.d) {
                let paylod = tokenPayload.d;
                socket.payload = tokenPayload.d;
                if (paylod.isAdmin == 0) {
                    return accountSerice.getByKey({ _id: paylod.userId });
                } else {
                    // return adminService.findByKey({ _id: paylod.userId });
                }
            } else {
                next()
                //throw customException.sessionExpired();
            }
        })
        .then(function (user) {
            socket.user = user;
            next()
        })
        .catch(function (err) {
            next(new Error('Authentication error'));
        })
}

//========================== Export Module Start ===========================

module.exports = {
    autntctTkn,
    expireToken,
    authSocketTkn
};

//========================== Export Module End ===========================
