// exmaple: nodejs sub.js testChannel

var os = require("os"); // 1
var rs = require("sentinel-redis")

// Create a new sentinel manager with the array of sentinel server definitions
//var sentinel = rs([
//  { host: "127.0.0.1", port: 26379 },
//  { host: "127.0.0.1", port: 26380 },
//    { host: "127.0.0.1", port: 26381 }
//]);
var sentinel = rs([
  { host: "192.168.211.128", port: 26379 },
  { host: "192.168.211.128", port: 26380 },
 { host: "192.168.211.128", port: 26381 }
]);


var client = sentinel.createClient("mymaster");

//
//var redis = require("redis");
//var client = redis.createClient("6379","172.17.0.1");
client.auth("hello123");


client.on("message", function(channel, commandName) { // 6
    console.log("message: " + commandName);
});

console.log("before sub");
client.subscribe(process.argv[2]); // 11
console.log("after sub");