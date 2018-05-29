"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
//import { Routes } from './controllers/routes';
var express_1 = require("express");
var Main = /** @class */ (function () {
    function Main() {
        //private routes: Routes;
        this.router = express.Router();
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
        // this.routes = new Routes(this.router);
    }
    Main.prototype.createApp = function () {
        this.app = express();
    };
    Main.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    Main.prototype.config = function () {
        this.port = process.env.PORT || Main.PORT;
    };
    Main.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
        var router = express_1.Router();
        router.get('/', function (req, res) { res.send('OK'); });
        this.app.use('/', router);
        //  this.routes.listen();
    };
    Main.prototype.getApp = function () {
        return this.app;
    };
    Main.PORT = 8080;
    return Main;
}());
exports.Main = Main;
