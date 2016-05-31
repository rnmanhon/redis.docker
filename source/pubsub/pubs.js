var sentinel = require('redis-sentinel');
 
// List the sentinel endpoints 
var endpoints = [
  { host: "172.17.0.1", port: 16379 },
  { host: "172.17.0.1", port: 16380 }
];
 
var opts = {}; // Standard node_redis client options 
var masterName = 'mymaster';
 
// masterName and opts are optional - masterName defaults to 'mymaster' 
var redisClient = sentinel.createClient(endpoints, masterName, opts);
 

redisClient.auth("hello123");

var channel = process.argv[2]; 
var command = process.argv[3]; 

console.log("before publish")
redisClient.publish(channel, command); 
console.log("after publish")

redisClient.quit();


