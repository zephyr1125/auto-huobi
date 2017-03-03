var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var crypto = require("crypto");
var FormData = require('form-data');

var method = 'get_account_info';

//dev key, 90 days valid
var access_key = 'd378d371-d9a1a073-2f0616d0-70eb6';
var secret_key = 'b573ca28-9db1ec25-657c7bb9-233bc';
//dis key
// var access_key = '751ee8f6-b8e11312-d365a190-8b8a5';
// var secret_key = '241842f5-e6742d07-5bb4c2f2-5daa6';

var timestamp = Date.parse( new Date() ).toString().substr(0,10);

getAccountInfo(
    "https://api.huobi.com/apiv3",
    received);

function getAccountInfo(url, callback){
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         callback(this);
    //     }
    // };
    // xhttp.open("POST", url, true);
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //form data
    var data = new FormData();
    data.append('method', method);
    data.append('access_key', access_key);
    data.append('created', timestamp);
    var signed = md5(
        "access_key="+access_key+
        "&created="+timestamp+
        "&method="+method+
        "&secret_key="+secret_key
    );
    data.append('sign', signed);
    data.append('market', 'cny');
    
    console.log(data);
    // xhttp.send(data);

    data.submit(url, function(err, res){
        // console.log(err);
        // console.log(res.statusCode);
        // console.log(res);
    });
}

function received(xhttp){
    console.log(xhttp.responseText);
}

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};

//https://api.huobi.com/apiv3/method=get_account_info&access_key=d378d371-d9a1a073-2f0616d0-70eb6&created=1488538327&sign=7cf1844b13faa9c57f41145757a2cba3&market=cny