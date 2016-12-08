/**
 * Created by zhengjinwei on 2016/11/23.
 */
var Path = require('path');
var JadeLoader = require("./plugin/app").JadeLoader;
var HttpServer = require("./plugin/app").HttpServer;
var LogUtil = require("./utils/app").Logger;
var Singleton = require("./utils/app").Singleton;
var logger = Singleton.getDemon(LogUtil, Path.join(__dirname, "./config/logger.json"), Path.join(__dirname, "./logs"));

JadeLoader.init(Path.join(__dirname, "./"), true, 60, function () {
    console.log("jadeLoader success");
    var httpS = new HttpServer(9090, "127.0.0.1", {
        filtersFunc: [
            function (message) {
                return true;
            }
        ]
    }, Path.join(__dirname, "../httpServerTest"));

    httpS.on("ready", function (log) {
        logger.info("Http",log);
    });
    httpS.on("error", function (log) {
        logger.info("Http",log);
    });
    httpS.on("connect-connect", function (log) {
        logger.info("Http",log);
    });
    httpS.on("connect-error", function (log) {
        logger.info("Http",log);
    });
    httpS.on("connect-disconnect", function (log) {
        logger.info("Http",log);
    });
    httpS.on("connect-response", function (log) {
        logger.info("Http",log);
    });
    httpS.on("connect-errorcode", function (log) {
        logger.info("Http",log);
    });

    httpS.createServer();
});

JadeLoader.on("error", function (err) {
    console.error(err);
});
JadeLoader.on("hotLoad", function (resp) {
    console.log(resp);
});


