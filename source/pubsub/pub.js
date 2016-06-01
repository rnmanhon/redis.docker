// exmaple: nodejs pub.js testChannel hello
var moment = require('moment');


var redis = require("redis");
var client = redis.createClient("6379", "192.168.211.128", {
    no_ready_check: true
});
//client.auth("hello123");


//var channel = process.argv[2]; 
//var command = process.argv[3]; 
//client.publish(channel, command); 

//client.auth('password', function (err) {
//    if (err) then throw err;
//});

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