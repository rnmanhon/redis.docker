// exmaple: nodejs pub.js testChannel hello

var rs = require("sentinel-redis")

// Create a new sentinel manager with the array of sentinel server definitions
var sentinel = rs([
  { host: "172.17.0.1", port: 16379 },
  { host: "172.17.0.1", port: 16380 }
]);

var client = sentinel.createClient("mymaster");

client.auth("hello123");

var channel = process.argv[2]; 
var command = process.argv[3]; 

console.log("before publish 1")
client.publish(channel, command); 
console.log("after publish 1")

client.quit();