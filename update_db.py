from flask import Flask, request
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://hopesath:mongodb123@protfolio0.tkm63vo.mongodb.net/?retryWrites=true&w=majority"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.user_info
collection = db.Backend_Practice
# print(db)

app = Flask(__name__)

@app.route('/post_json', methods=["POST"])
def process_json():
    new_users = dict()
    # content_type = request.headers.get('Content-Type')
    if request.method == "POST":
        json = request.get_json()
        firstname = json["firstname"]
        email = json["email"]

        query = {"Firstname": firstname}
        new = {"$set":{"Email":email}}

        collection.update_one(query, new)
        
        return "updated user information successfully"
        
    else:
        return 'Content-Type not supported!'
    
app.run(host='0.0.0.0', port=5000)