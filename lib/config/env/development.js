module.exports = {
    environment: 'development',
    ip: '',
    port: 6002,
    protocol: 'http',
    TAG: 'development',
    swagger_port: 80,
    isDev: true,
    mongo: {
        dbName: 'order_apis',
        dbUrl: 'mongodb://localhost:27017/',
        options: {
            user: 'order_apis',
            pass: 'order_apis',
            useNewUrlParser: true
        },
        dbAuthUrl: 'mongodb://order_apis:order_apis@localhost:27017/order_apis'
    },
    url: {
       
    },

    socket: {
        port: 4000
    },

    //Form Dynamic Values Depending on ENV
    form: function () {
        var swagger_port = this.swagger_port ? this.swagger_port : this.port;
        this.server_address = this.protocol + '://' + this.ip + ':' + swagger_port;
    }
}


