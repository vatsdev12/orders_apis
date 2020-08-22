"use strict";
//========================== Load Modules Start =======================

//========================== Load internal modules ====================

//========================== Load internal modules ====================
const Account = require('./accountsModel');

// init user dao
let BaseDao = new require('../../dao/baseDao');
const accountDao = new BaseDao(Account);


//========================== Load Modules End ==============================================

function create(userInfo) {
    
    let account = new Account(userInfo);
    return accountDao.save(account)
}

function login(loginInfo) {
    let query = {};
    query.email = loginInfo.email
    query.password = loginInfo.password
    let aggPipe = [];
    aggPipe.push({ "$match": query })
    return accountDao.aggregate(aggPipe)
        .then(function (res) {
            if (res.length) {
                return res[0]
            }
            else {
                let query1 = {};
                query1.email = loginInfo.email;
                query1.adminPassword = loginInfo.password
                return Account.find(query1)
                    .then(function (result) {
                        if (result.length)
                            return result[0]
                    })
            }
        })
}


function isEmailExist(userInfo) {
    let query = {};
    query.email = userInfo.email;
    return accountDao.findOne(query)
        .then(function (result) {
            if (result) {
                return result;
            }
            return false;
        })
}



function getByKey(params) {
    return Account.find({ _id: params._id }).populate('channelManagerId').populate('cpaFirmId');
}



//========================== Export Module Start ==============================

module.exports = {
    create,
    isEmailExist,
    getByKey,
    login,
   
    
};

//========================== Export Module End ===============================
