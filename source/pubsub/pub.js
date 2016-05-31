// exmaple: nodejs pub.js testChannel hello

var redis = require("redis");
var client = redis.createClient("6379","127.0.0.1");
client.auth("hello123");

var channel = process.argv[2]; 
var command = process.argv[3]; 

client.publish(channel, command); 

client.quit();