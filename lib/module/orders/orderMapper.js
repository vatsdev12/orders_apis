/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("./ordersConstants");

function createMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.ADD,
        "product": params,
    }
    return respObj;
}

function userOrderMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.USER_ORDER,
        "products": params,
        "count": params.length,
    }
    return respObj;
}


module.exports = {
    createMapping,
    userOrderMapping,

}