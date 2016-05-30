// exmaple: nodejs sub.js testChannel

var os = require("os"); // 1
var redis = require("redis");
var client = redis.createClient("6379","172.17.0.1");
client.auth("hello123");


client.on("message", function(channel, commandName) { // 6
    console.log("message: " + commandName);
});
client.subscribe(process.argv[2]); // 11