
var express = require('express');
var path = require('path');
var bodyParser  = require("body-parser");

var app = express(); //main



function Router_start() {
    var self = this;
    self.configureExpress();
}

Router_start.prototype.configureExpress = function()
{
    var self = this;

    var allowCORS = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*'); //*,
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, XMLHttpRequest, api_key, X-API-SECRET');
        (req.method === 'OPTIONS') ?
            res.send(200) :
            next();
    };


    app.use(bodyParser({limit: '50mb'}));  // pdf body 용량문제 해결
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(allowCORS); // localhost 에서 개발할 때 이걸 열어주지 않으면 들어올 수 없다


    // app.use(express.static(path.join(__dirname, './client'))); // service
    app.use('/v1/hana/agreements', express.static('./client/v1/hana/agreements')); // 윗 라인 정의 폴더 밑에 있음.
    app.use('/v1/meritz/agreements', express.static('./client/v1/meritz/agreements')); // 윗 라인 정의 폴더 밑에 있음.
    var router = express.Router();



    self.startServer();
}

Router_start.prototype.startServer = function()
{
    var port = 80;
    app.listen(port, function() {
        console.log('connection for Server' + port);

    });
}

new Router_start();
