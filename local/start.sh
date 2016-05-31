#redis-server ./redis/redis.conf --loglevel verbose
#redis-server ./redis2/redis.conf --loglevel verbose
redis-server ./redis/redis.conf 
redis-server ./redis2/redis.conf 
redis-server ./redis3/redis.conf 
redis-sentinel ./redis//sentinel.conf --sentinel --protected-mode no
redis-sentinel ./redis2//sentinel.conf --sentinel --protected-mode no
redis-sentinel ./redis3//sentinel.conf --sentinel --protected-mode no