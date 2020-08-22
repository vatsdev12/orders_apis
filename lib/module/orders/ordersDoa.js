const Order = require('./ordersModel');

// init user dao
let BaseDao = new require('../../dao/baseDao');
const orderDao = new BaseDao(Order);


function create(params) {
    let order = new Order(params)
    return orderDao.save(order)
}

function userOrder(params) {
    return Order.find({ userId: params.userId }).populate('productId')
}

module.exports = {
    create,
    userOrder
}