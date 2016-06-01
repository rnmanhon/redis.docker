#redis-server ./redis/redis.conf --loglevel verbose
#redis-server ./redis2/redis.conf --loglevel verbose
echo starting redis master as slave
cp ./redis//redis.conf.slave ./redis//redis.conf
redis-server ./redis/redis.conf --loglevel verbose

#echo starting redis 2
#cp ./redis//redis.conf.slave ./redis//redis.conf
#redis-server ./redis2/redis.conf --loglevel verbose

#echo starting redis 3
#redis-server ./redis3/redis.conf 
#sleep 2
#echo starting redis sentinel 1
#cp ./redis//sentinel.conf.org ./redis//sentinel.conf
#redis-sentinel ./redis//sentinel.conf --sentinel --protected-mode no
#sleep 2
#echo starting redis sentinel 2
#redis-sentinel ./redis2//sentinel.conf --sentinel --protected-mode no
#sleep 2
#echo starting redis sentinel 3
#redis-sentinel ./redis3//sentinel.conf --sentinel --protected-mode no
echo end ...