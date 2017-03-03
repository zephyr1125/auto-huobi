var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

readDoc(
    "http://api.huobi.com/staticmarket/btc_kline_005_json.js",
    received);

function readDoc(url, callback){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function received(xhttp){
    console.log(xhttp.responseText);
}