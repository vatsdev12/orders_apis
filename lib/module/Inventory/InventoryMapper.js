/**
 * This file will have request and response object mappings.
 */
var _ = require("lodash");
const contstants = require("./InventoryConstants");

function addMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.ADD,
        "product": params,
    }
    return respObj;
}

function getProductMapping(params) {
    var respObj = {
        "message": contstants.MESSAGES.GET_PRODUCT,
        "products": params,
        "count": params.length,
    }
    return respObj;
}


module.exports = {
    addMapping,
    getProductMapping,

}