var http = require('http');
var accountInfo = require("./post_account_info")

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end(accountInfo.account() + '\n');
}).listen(8080);