const inventoryService = require('./InventoryService');
const inventoryMapper = require('./InventoryMapper')
const customException =require('../../customException')

function add(params) {
    return inventoryService.add(params)
        .then(function (result) {
            return inventoryMapper.addMapping(result)
        })
        .catch(function(error){
            throw customException.intrnlSrvrErr()
        })
}

function getProduct(params) {
    return inventoryService.getProduct(params)
        .then(function (result) {
            return inventoryMapper.getProductMapping(result)
        })
        .catch(function(error){
            throw customException.intrnlSrvrErr()
        })
}


module.exports = {
    add,
    getProduct
}