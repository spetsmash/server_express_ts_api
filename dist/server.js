"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var routes_1 = require("./controllers/routes");
var Main = /** @class */ (function () {
    function Main() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
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
        this.app.use('/', routes_1.ROUTER);
    };
    Main.prototype.getApp = function () {
        return this.app;
    };
    Main.PORT = 8080;
    return Main;
}());
exports.Main = Main;
