// exmaple: nodejs sub.js testChannel

var sentinel = require('redis-sentinel');

//var os = require("os"); // 1
//var rs = require("sentinel-redis")

// Create a new sentinel manager with the array of sentinel server definitions
//var sentinel = rs([
//  { host: "127.0.0.1", port: 26379 },
//  { host: "127.0.0.1", port: 26380 },
//    { host: "127.0.0.1", port: 26381 }
//]);
var endpoints = [
  { host: "192.168.211.128", port: 26379 },
  { host: "192.168.211.128", port: 26380 }
];
 
var opts = {}; // Standard node_redis client options 
var masterName = 'mymaster';
 
// masterName and opts are optional - masterName defaults to 'mymaster' 
var redisClient = sentinel.createClient(endpoints, masterName, opts);
 

//
//var redis = require("redis");
//var client = redis.createClient("6379","172.17.0.1");
//redisClient.auth("hello123");


redisClient.on("message", function(channel, commandName) { // 6
    console.log("message: " + commandName);
});

console.log("before sub");
redisClient.subscribe(process.argv[2]); // 11
console.log("after sub");