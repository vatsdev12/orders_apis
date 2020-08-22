"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
var Promise = require("bluebird");
var ip = require('ip');
var _ = require("lodash");

//========================== Load internal modules ====================
// Load user service

const accountService = require('./accountsService');
const accountsMapper = require('./accountsMapper');
const redisSession = require("../../redisClient/session");
const customException = require("../../customException");



//========================== Load Modules End ==============================================

function signUp(params) {
    return accountService.isEmailExist(params)
        .bind({})
        .then(function (isExist) {

            if (isExist) {
                throw customException.emailAlreadyRegistered();
            } else {
                return accountService.create(params);
            }
        })
        .then(function (user) {
            this.user = user;
            console.log("sssssssssssssss", user);

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                userObj: tokenObj,
                ip: ip.address()
            }
            return redisSession.create(userObj)
        })
        .then(function (redisSession) {
            return accountsMapper.signupMapping({
                user: this.user,
                redisSession: redisSession.token
            });
        });
}



//  if (user && user.status != 1 || user.status != 2) {
function login(params) {
    return accountService.isEmailExist(params)
        .bind({})
        .then(function (isExist) {
            return accountService.login(params);
        })
        .then(function (user) {
            console.log("ddddddddddd", user);

            if (!user) {
                throw customException.incorrectPass();
            }
            return this.userProfile = user; //user data with target

        }).then(function (user) {

            let tokenObj = _buildUserTokenGenObj(user);
            let userObj = {
                userId: user._id.toString(),
                userType: user.userType,
                userObj: tokenObj,
                ip: ip.address()
            }
            return redisSession.create(userObj)
        })
        .then(function (redisSession) {
            this.redisSession = redisSession;
            return accountService.getByKey(this.userProfile)

        })
        .then(function (result) {
            return accountsMapper.loginMapping({ user: result[0], redisSession: this.redisSession.token });

        })

}

function _buildUserTokenGenObj(user) {
    var userObj = {};
    userObj.deviceToken = user.deviceToken ? user.deviceToken : '';
    userObj.platform = user.platform ? user.platform : '';
    userObj.deviceId = user.deviceId ? user.deviceId : '';
    userObj.userId = user._id.toString();
    return userObj;
}


module.exports = {
    signUp,
    login,
    _buildUserTokenGenObj

};

//========================== Export Module End ===============================signUp