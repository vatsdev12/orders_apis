const inventoryDao = require('./InventoryDoa');

function add(params) {
    return inventoryDao.add(params)
}

function getProduct(params) {
    return inventoryDao.getProduct(params)
}

function productExist(params) {
    return inventoryDao.findProduct(params)
        .then(function (result) {
            console.log(params,"vvvvvvvvvvvv", result);

            if (result) {
                let minusQuantity = result.productQuantity - params.quantity;
                console.log('minusQuantity', minusQuantity);

                if (minusQuantity === 0 || minusQuantity>0) {
                    return { productAvailable: true }
                }
                else {
                    return { productAvailable: false }

                }
            }
            else {
                return { productAvailable: false }

            }
        })
}

function decreasedQuantity(params) {
    return inventoryDao.decreasedQuantity(params)
}

module.exports = {
    add,
    getProduct,
    productExist,
    decreasedQuantity
}