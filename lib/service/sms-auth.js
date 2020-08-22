/**
 * @author Ashutosh Singh
 */

//Load dependencies
//const Client = require('authy-client').Client;
var config = require(".././config").cfg;
//const authy = new Client({key: config.twilio.AUTHY_API_KEY});
//const enums = require('authy-client').enums;

var Client = require('node-rest-client').Client;
var client = new Client();

var customExceptions = require('../customException');
var status_codes = require("../status_codes.json");

const ENDPOINT = config.mobtexting.ENDPOINT;
const ACCESS_TOKEN = config.mobtexting.AUTH_TOKEN;

//Send otp to user
/*
function __sendOtp(params) {
    return authy.startPhoneVerification({
        countryCode: params.countryCode,
        phone: params.mobileNo,
        locale: "en",
        via: enums.verificationVia.SMS
    })
        .then(function (result) {
            console.log(result, '---> result');
            return result;
        })
        .catch(function (err) {
            console.log('err----> Unable to send OTP to user', err);
            throw customExceptions.completeCustomException(status_codes.err_sending_otp.status_code, status_codes.err_sending_otp.message, false);
        })
}
*/


//Verify Otp from user
/*
function __verifyOtp(params) {
    return authy.verifyPhone({countryCode: params.countryCode, phone: params.mobileNo, token: params.otp})
        .then(function (result) {
            return result;
        })
        .catch(function (err) {
            console.log('err----> Unable to verify OTP to user', err);
            if (err && err.body && err.body.error_code == '60022') //Verification code is incorrect
                throw customExceptions.completeCustomException(parseInt(err.body.error_code), err.body.errors.message, false);
            else if (err && err.body && err.body.error_code == '60023') //'No pending verifications for +91 907-027-8999 found.'
                throw customExceptions.completeCustomException(parseInt(err.body.error_code), err.body.errors.message, false);
            else
                throw customExceptions.completeCustomException(status_codes.err_matching_otp.status_code, status_codes.err_matching_otp.message, false);

        })
}
*/

//Send otp to user
function __sendOtp(params) {
    let phone = "" + params.countryCode + params.mobileNo;
    let url = ENDPOINT + "verify?to=" + phone + "&&length=4&&from=";

// set content-type header and data as json in args parameter
    let args = {headers: {"Accept": "application/json", "Authorization": ACCESS_TOKEN}};

    return new Promise(function (resolve, reject) {
        return client.post(url, args, function (data, response) {
            resolve(data);
        })
    })
}

//Verify Otp from user
function __verifyOtp(params) {

    let url = ENDPOINT + "verify/check/" + params.msgId + "/" + params.otp;
    // set content-type header and data as json in args parameter
    let args = {
        headers: {"Accept": "application/json", "Authorization": ACCESS_TOKEN}
    };
    return new Promise(function (resolve, reject) {
        return client.get(url, args, function (data, response) {
            resolve(data);
        })
    });
}


module.exports = {
    __sendOtp,
    __verifyOtp
}
