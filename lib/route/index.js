const accountRoute = require('../module/accounts/accountsRoute'),
    inventoryRoute = require('../module/Inventory/InventoryRoute')
    orderRoute=require('../module/orders/ordersRoute')
responseHandler = require('../responseHandler');

basicAuth = require('../middleware/basicAuth');

//========================== Export Module Start ==========================

module.exports = function (app) {
    // Attach User Routes
    app.use('/order_api/api/v1/account', accountRoute);
    app.use('/order_api/api/v1/inventory', inventoryRoute);

    app.use('/order_api/api/v1/order', orderRoute);
    // Attach ErrorHandler to Handle All Errors
    app.use(responseHandler.handleError);
}
//========================== Export Module End ============================