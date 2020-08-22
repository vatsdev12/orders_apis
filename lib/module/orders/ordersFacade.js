const orderService = require('./ordersService');
const orderMapper = require('./orderMapper');
const inventoryService = require('../Inventory/InventoryService')
const customException = require('../../customException')

async function create(params) {
    const inventoryResult = await inventoryService.productExist(params)
    if (inventoryResult.productAvailable) {
        return orderService.create(params)
            .then(function (result) {
                if (result) {
                    inventoryService.decreasedQuantity(params)
                    return orderMapper.createMapping(params)
                }
            })
            .catch(function(error){
                throw customException.intrnlSrvrErr()
            })
    }
    else {
        throw customException.notInStock();
    }
}

function userOrder(params){
    return orderService.userOrder(params)
    .then(function(result){
        return orderMapper.userOrderMapping(result)
    })
    .catch(function(error){
        throw customException.intrnlSrvrErr()
    })
}

module.exports = {
    create,
    userOrder
}