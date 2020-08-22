const express = require('express'),
    bodyParser = require('body-parser'),// parses information from POST
    methodOverride = require('method-override');// used to manipulate POST
var auth = require('basic-auth');

module.exports = function(app, env){
	// parses application/json bodies
    app.use(bodyParser.json({limit: '500mb'}) );
    app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
	// parses application/x-www-form-urlencoded bodies
	// use queryString lib to parse urlencoded bodies
	//app.use(bodyParser.urlencoded({extended:false}));
	app.use(methodOverride(function(request, response){
           
            if(request.body && typeof request.body === 'object' && '_method' in request.body){
                // look in urlencoded POST bodies and delete it
                var method = request.body._method;
                delete request.body._method;
                return method;
            }
	}));

	/**
	 * add swagger to our project
	 */
	app.use('/apiDocs', express.static(app.locals.rootDir + '/public/dist'));
    app.use('/public', express.static(app.locals.rootDir + '/public'));
    app.use('/chatTest', express.static(app.locals.rootDir + '/views'));
    app.use('/app', express.static(app.locals.rootDir + '/deeplink'));
    
    /*
     * all api request
     */
    app.use(function (request, response, next) {
        response.header("Access-Control-Allow-Origin", "*");
        response.header('Access-Control-Allow-Credentials', true);
        response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, accessToken");
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        next();
    });
}