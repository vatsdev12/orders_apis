const orderDao=require('./ordersDoa');

function create(params){
    return orderDao.create(params)
}

function userOrder(params){
    return orderDao.userOrder(params)
}

module.exports={
    create,
    userOrder
}