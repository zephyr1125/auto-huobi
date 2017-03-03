var request = require('request');
var crypto = require("crypto");

var method = 'get_account_info';

//dev key, 90 days valid
var access_key = 'd378d371-d9a1a073-2f0616d0-70eb6';
var secret_key = 'b573ca28-9db1ec25-657c7bb9-233bc';
//dis key
// var access_key = '751ee8f6-b8e11312-d365a190-8b8a5';
// var secret_key = '241842f5-e6742d07-5bb4c2f2-5daa6';

var timestamp = Date.parse( new Date() ).toString().substr(0,10);

getAccountInfo(
    "https://api.huobi.com/apiv3");

function getAccountInfo(url){
    var signed = md5(
        "access_key="+access_key+
        "&created="+timestamp+
        "&method="+method+
        "&secret_key="+secret_key
    );
    request.post({
        url: url,
        form:{
            method: method,
            access_key: access_key,
            created: timestamp,
            sign: signed,
        }
    }, function callback(err, httpResponse, body){
        console.log(body);
    });
}

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};