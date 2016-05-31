// exmaple: nodejs pub.js testChannel hello

var rs = require("sentinel-redis")

// Create a new sentinel manager with the array of sentinel server definitions
//var sentinel = rs([
//  { host: "197.17.01", port: 26379 },
//  { host: "127.0.0.1", port: 26380 },
// { host: "127.0.0.1", port: 26381 }
//]);
var sentinel = rs([
  { host: "192.168.211.128", port: 26379 },
  { host: "192.168.211.128", port: 26380 },
 { host: "192.168.211.128", port: 26381 }
]);


var client = sentinel.createClient("mymaster");

client.auth("hello123");

var channel = process.argv[2]; 
var command = process.argv[3]; 

console.log("before publish 1")
client.publish(channel, command); 
console.log("after publish 1")

client.quit();
