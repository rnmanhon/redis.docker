var sentinel = require('redis-sentinel');
var moment = require('moment');
var sleep = require('sleep');

// List the sentinel endpoints 
//var endpoints = [
//  { host: "172.17.0.1", port: 16379 },
//  { host: "172.17.0.1", port: 16380 }
//];
var endpoints = [
    {
        host: "192.168.211.128"
        , port: 26379
    }
    
    , {
        host: "192.168.211.128"
        , port: 26380
    }
];

var opts = {}; // Standard node_redis client options 
var masterName = 'mymaster';

var client = sentinel.createClient(endpoints, masterName, opts);

var channel = process.argv[2];
var msg = process.argv[3];
var msgCount = 0;

client.on("connect", pubMessages);

function pubMessages() {
    console.log('pubMessages ....  ');

    setInterval(function () {
        var timeStr = moment(new Date()).utc().format("YYYY-MM-DD HH:mm:ss").toString();
        console.log("timeStr " + timeStr);
        logMsg = msg + " " + ++msgCount + " " + timeStr;
        console.log("logMsg " + logMsg);
        console.log("before publish");
        client.publish(channel, logMsg, function (err, reply) {});
        console.log("after publish");
    }, 5000);
}









//redisClient.auth("hello123");

//var channel = process.argv[2];
//var msg = process.argv[3];
//var msgCount = 0;
//
//
//while (true) { //let's create a endless loop
//    var timeStr = moment(new Date()).utc().format("YYYY-MM-DD HH:mm:ss").toString();
//    console.log("timeStr " + timeStr);
//    logMsg = msg + " " + ++msgCount + " " + timeStr;
//    console.log("logMsg " + logMsg);
//
//    console.log("before publish");
//    redisClient.publish(channel, logMsg);
//    console.log("after publish");
//    //    redisClient.quit();
//    //    console.log("after quit")
//    //    sleep.sleep(5);
//}


//process.exit();