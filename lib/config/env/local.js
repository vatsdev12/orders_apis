module.exports = {
    environment: 'local',
    ip: '',
    port: 6002,
    protocol: 'http',
    TAG: 'Local',
    swagger_port: 80,
    isDev: true,
    mongo: {
        dbName: 'order_apis',
        dbUrl: "mongodb://localhost:27017/",
        options: {
            user: "order_apis",
            pass: "order_apis",
            useNewUrlParser: true
        },
        dbAuthUrl: 'mongodb://order_apis:order_apis@localhost:27017/order_apis'
    },
    url: {

    },

    //Form Dynamic Values Depending on ENV
    form: function () {
        var swagger_port = this.swagger_port ? this.swagger_port : this.port;
        this.server_address = this.protocol + "://" + this.ip + ":" + swagger_port;
    },

}
