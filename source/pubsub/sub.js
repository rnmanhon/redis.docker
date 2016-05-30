// exmaple: nodejs sub.js testChannel

var os = require("os"); // 1
var rs = require("sentinel-redis")

// Create a new sentinel manager with the array of sentinel server definitions
var sentinel = rs([
  { host: "172.17.0.1", port: 16379 },
  { host: "172.17.0.1", port: 16380 }
]);

var client = sentinel.createClient("mymaster", options);

//
//var redis = require("redis");
//var client = redis.createClient("6379","172.17.0.1");
client.auth("hello123");


client.on("message", function(channel, commandName) { // 6
    console.log("message: " + commandName);
});
client.subscribe(process.argv[2]); // 11