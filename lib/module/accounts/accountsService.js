"use strict";

//========================== Load Modules Start =======================

//========================== Load internal modules ====================
const promise = require("bluebird");
// Load user dao
var _ = require("lodash");
const accountDao = require('./accountsDao');
const appUtils = require("../../appUtils");


//========================== Load Modules End ==============================================


function login(loginInfo) {
    if (loginInfo.password) {
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);
    }
    return accountDao.login(loginInfo)
        .then(function (result) {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

function create(loginInfo) {
    console.log("ddddddddddddd",loginInfo);
    
    if (loginInfo.password)
        loginInfo.password = appUtils.createHashSHA256(loginInfo.password);


    return accountDao.create(loginInfo)
}


function isEmailExist(param) {
    return accountDao.isEmailExist(param)
}



function getByKey(params) {
    return accountDao.getByKey(params)
}




//========================== Export Module Start ==============================

module.exports = {
    login,
    isEmailExist,
    getByKey,
    create
    

};

//========================== Export Module End ===============================
