setup environment variable

'''
export REDIS_HOME=$PWD
'''

start docker
'''
cd docker
docker-compose -f docker-compose-deps.yml up -d
'''

go inside each docker of redis (i.e. redis, redis2 and redis3) to start the sentinel by using the following
'''
/opt/bitnami/redis/bin/redis-sentinel /opt/bitnami/redis/conf/sentinel.conf --sentinel --protected-mode no
'''

go in redis.client and run redis-cli and connection to master, then  kill the master by the following
'''
debug segfault 
'''

run redis-cli in redis.client to connect to any sentinel port and check master for mymaster cluster by the following
'''
sentinel get-master-addr-by-name mymaster
'''
