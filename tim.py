import pymongo
from pymongo import MongoClient
import urllib.parse

username = urllib.parse.quote_plus('denniskibet')
password = urllib.parse.quote_plus('@neron27finn')

cluster = MongoClient("mongodb+srv://{}:{}@cluster0.7dg5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority".format(username, password))
db = cluster["denniskibet"]
collection = db["kibet"]

# post = {"name": "kaiser", "score": 10}
# collection.insert_one(post)

# searching database
# results = collection.find({"name":"kaiser"})
#for result in results:
#     print(result)