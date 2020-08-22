const _ = require('lodash'),
    dbConfig = require('./dbConfig'),
    expressConfig = require('./expressConfig'),
    path = require('path');

var envConfig = {};
var cfg = {};
var environment = process.env.NODE_ENV || 'local';

// ENV Config
switch (environment) {
    case 'local':
    case 'localhost':
        envConfig = require('./env/local');
        break;
    case 'remote':
    case 'remoteserver':
        envConfig = require('./env/remoteserver');
        break;
    case 'dev':
    case 'development':
        envConfig = require('./env/development');
        break;
}

var defaultConfig = {
    environment: 'development',
    ip: 'localhost',
    port: 5001,
    protocol: 'http',
    TAG: 'localhost',
    uploadDir: path.resolve('./uploads'),
    tokenExpirationTime: 24 * 60 * 60 * 1000, // 1 day
    oneDayTimestamp: 24 * 60 * 60 * 1000, // 1 day
    fiveMinuteTimestamp: 5 * 60 * 1000, // 5 min
    signUpTokenExpirationTime: '10m', // 10 day
    jwtSecretKey: 'g8b9(-=~Sdf)',
    saltRounds: 10,
    //default admin

    stripe: {
        publishableKey: '',
        secretKey: '',
        appleMerchendId: '',
        country: {
            name: '',
            code: '',
            currency: {
                symbol: '$',
                abbreviationOf: '',
                abbreviation: '',
                isoCode: ''
            }
        },
        connectAccountType: '',
        accountType: '',
        charge: {
            lessonDescription: ''
        },
        bankAccountType: {
            bankAccount: '',
            card: ''
        }
    },
    googleAPIKey: "",
    mongo: {
        dbName: 'order_apis',
        dbUrl: 'mongodb://localhost:27017/',
        options: {
            user: 'order_apis',
            pass: 'order_apis'
        },
        dbAuthUrl: 'mongodb://order_apis:order_apis@localhost:27017/order_apis'
    },
    pemFile: '',
    fcmServerKey: '',

    redis: {
        server: 'localhost',
        port: 6379,
        namespace: "order_apis",
        appname: "order_apis"
    },

    basicAuth: {
        name: 'order_apis',
        pass: 'order_apis'
    },

    smtp: {
        fromEmail: "support@demo.com",
        host: "Gmail",
        auth: {
            user: "",
            pass: ""
        }
    },

    twilio: {
        ACCOUNT_SID: '',
        AUTH_TOKEN: '',
        TWILIO_NUMBER: '',
        AUTHY_API_KEY: ''
    },
    //New SMS Gateway used in sms-auth class
    mobtexting: {
        ENDPOINT: '',
        AUTH_TOKEN: '',
    },


    // aws s3
    iamUser: {
        accessKey: '',
        keyId: ''
    },
 

    // option parameters constantys for s3
    s3: {
        maxAsyncS3: 0, // this is the default
        s3RetryCount: 0, // this is the default
        s3RetryDelay: 0, // this is the default
        multipartUploadThreshold: 20975465, // this is the default (20 MB)
        multipartUploadSize: 15728640, // this is the default (15 MB)
        bucketName: '',
        publicBucketName: '',
        signatureVersion: '',
        region: '',
        ACL: '',
        base_url: ''
    },
    email: {
        emailId: "",
        acc_password: ""
    },
    url: {
        basePath: "",
        forgotpassword: ""
    },

    swagger_port: 80,

    socket: {
        port: 4000
    },

    //Form Dynamic Values Depending on ENV
    form: function () {
        var swagger_port = this.swagger_port ? this.swagger_port : this.port;
        this.server_address = this.protocol + '://' + this.ip + ':' + swagger_port;
    }
}

// Create Final Config JSON by extending env from default
var cfg = _.extend(defaultConfig, envConfig);

// ========================== Export Module Start ==========================
module.exports = {
    cfg,
    dbConfig,
    expressConfig
}
// ========================== Export Module End ============================