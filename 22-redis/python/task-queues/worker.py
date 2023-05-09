import redis
from rq import Queue, Worker

redis_client = redis.Redis(host='localhost', port=6379, db=0)

print("hello")
queue = Queue(connection=redis_client)

worker = Worker(queues=[queue], connection=redis_client) # which queues it should listen to
worker.work(with_scheduler=True) # parameter specifies whether the worker should also process scheduled jobs.