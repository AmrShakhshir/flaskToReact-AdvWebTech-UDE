from app import app
from flask_pymongo import PyMongo
from pymongo import MongoClient
from flask import Flask,request,jsonify,json
from bson.json_util import dumps, RELAXED_JSON_OPTIONS

# Mongodb Connection
app.config["MONGO_URI"] = "mongodb://flaskmongo:amSh_2921@advwebtech-shard-00-00-98vlb.mongodb.net:27017,advwebtech-shard-00-01-98vlb.mongodb.net:27017,advwebtech-shard-00-02-98vlb.mongodb.net:27017/test?ssl=true&replicaSet=AdvWebTech-shard-0&authSource=admin&retryWrites=true&w=majority"
app.config['MONGO_DBNAME'] = 'usersDatabase'
app.config['SECRET_KEY'] = 'secret_key'
mongo = PyMongo(app)
db = mongo.db
col = mongo.db["userCollection"]


@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


@app.route('/login', methods=['POST'])
def login():

    email=request.get_json()['email']
    password=request.get_json()['password']

    
    user = mongo.db.userCollection
    q = user.find_one({'email':email, 'password':password})
    
    # return req['firstname']
    if q is None :
        return jsonify({"login":"Login Fail! Please check your email or password"})

    else :
        req = eval(dumps(q, json_options=RELAXED_JSON_OPTIONS))
        return jsonify({"login":"Login Successfully!","firstname": req['firstname'] ,"lastname": req['lastname']})

    
if __name__ == '__main__':
    app.run(debug=True)