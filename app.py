from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

username = os.getenv("DB_USERNAME")
password = os.getenv("DB_PASSWORD")


uri = f"mongodb://{username}:{password}@localhost:27017/"
# uri = "mongodb://hopesath:mongodb123@localhost:27017/"

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

app = Flask(__name__)
CORS(app)

@app.route('/test', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json' and request.method == "POST"):
        json = request.get_json()
        return jsonify(json)
    else:
        return 'Content-Type not supported!'

## Adds Usern
@app.route('/addUser', methods=["POST"])
def adduser():
    new_users = dict()
    content_type = request.headers.get('Content-Type')
    print(content_type)
    if (content_type == 'application/json' and request.method == "POST"):
        json = request.get_json()
        print(json)
        firstname = json["firstname"]
        # print("firstname")
        lastname = json["lastname"]
        email = json["email"]
        phone_number = json["phonenumber"]
        new_users["Firstname"], new_users["Lastname"], new_users["Email"], new_users["Phone Number"] = firstname, lastname, email, phone_number
        try:
            collection.insert_one(new_users)
            return ({"message": "User information inserted successfully!"})
        except Exception as e:
            return "An error occurred during user insertion: " + str(e)
        
    else:
        return 'Content-Type not supported!'
    
# Find a User
@app.route('/findUser', methods=["GET"])
def findUser():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json' and request.method == "GET"):
        firstname = request.args.get('firstname')
        # json = json.to_dict()
        # print(firstname)
        # print(json)
        # firstname = json["firstname"]
        query = {"Firstname": firstname}
        projection = {"_id": 0, "Firstname": 1, "Lastname": 1, "Email": 1, "Phone Number": 1}
        data = collection.find_one(query, projection)
        return jsonify(data)
               
    else:
        return {"message" : 'Content-Type not supported!'}


## Update user info
@app.route('/updateUser', methods=["PUT"])
def updateUser():
    # new_users = dict()
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json' and request.method == "PUT"):
        json = request.get_json()
        firstname = json["firstname"]
        email = json["email"]

        query = {"Firstname": firstname}
        new = {"$set":{"Email":email}}

        collection.update_one(query, new)
        
        return ({"message": "User information updated successfully!"})
        
    else:
        return 'Content-Type not supported!'
    
## Deletes a user
@app.route('/deleteUser', methods=["DELETE"])
def deleteUser():
    old_users = dict()
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json' and request.method == "DELETE"):
        firstname = request.args.get('firstname')
        email = request.args.get('email')
        # firstname = json["firstname"]
        # email = json["email"]
        old_users["Firstname"], old_users["Email"] = firstname, email
        collection.delete_one(old_users)
        return {"message": "Deleted user information successfully"}
        
    else:
        return {"message" : 'Content-Type not supported!'}
if __name__ == "__main__":
    app.run(debug=True)