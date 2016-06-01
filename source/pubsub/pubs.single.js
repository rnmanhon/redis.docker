var sentinel = require('redis-sentinel');
var moment = require('moment');
var sleep = require('sleep');

// List the sentinel endpoints 
//var endpoints = [
//  { host: "172.17.0.1", port: 16379 },
//  { host: "172.17.0.1", port: 16380 }
//];
var endpoints = [
    {host: "192.168.211.128", port: 26379}, 
    {host: "192.168.211.128", port: 26380
    }
];

var opts = {}; // Standard node_redis client options 
var masterName = 'mymaster';

// masterName and opts are optional - masterName defaults to 'mymaster' 
var redisClient = sentinel.createClient(endpoints, masterName, opts);


//redisClient.auth("hello123");

var channel = process.argv[2]; 
var command = process.argv[3]; 

redisClient.publish(channel, command); 

redisClient.quit();
console.log("after quit")
    //process.exit();