const Inventory = require('./InventoryModel');

// init user dao
let BaseDao = new require('../../dao/baseDao');
const inventoryDao = new BaseDao(Inventory);

function add(params) {
    let inventory = new Inventory(params);
    return inventoryDao.save(inventory)
}

function getProduct(params) {
    return inventoryDao.find()
}

function findProduct(params) {
    return inventoryDao.findOne({ _id: params.productId })
}

function decreasedQuantity(params) {
    return Inventory.findOneAndUpdate({ _id: params.productId, }, { $inc: { productQuantity: - params.quantity } }, { new: true }).exec()
}

module.exports = {
    add,
    getProduct,
    findProduct,
    decreasedQuantity
}