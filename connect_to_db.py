from flask import Flask, request
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb://hopesath:mongodb123@localhost:27017/"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)



# db = client.user_info
# collection = db.Backend_Practice
# # print(db)

# app = Flask(__name__)

# @app.route('/create', methods=["POST"])
# def process_json():
#     new_users = dict()
#     # content_type = request.headers.get('Content-Type')
#     if request.method == "POST":
#         json = request.get_json()
#         firstname = json["firstname"]
#         lastname = json["lastname"]
#         email = json["email"]
#         phone_number = json["phone_number"]
#         new_users["Firstname"], new_users["Lastname"], new_users["Email"], new_users["Phone Number"] = firstname, lastname, email, phone_number
#         try:
#             collection.insert_one(new_users)
#             return "User information inserted successfully!"
#         except Exception as e:
#             return "An error occurred during user insertion: " + str(e)
        
#     else:
#         return 'Content-Type not supported!'

# @app.route('/update', methods=["POST"])
# def process_update():
#     new_users = dict()
#     # content_type = request.headers.get('Content-Type')
#     if request.method == "POST":
#         json = request.get_json()
#         firstname = json["firstname"]
#         email = json["email"]

#         query = {"Firstname": firstname}
#         new = {"$set":{"Email":email}}

#         collection.update_one(query, new)
        
#         return "updated user information successfully"
        
#     else:
#         return 'Content-Type not supported!'
    
# @app.route('/delete', methods=["POST"])
# def process_json():
#     old_users = dict()
#     # content_type = request.headers.get('Content-Type')
#     if request.method == "POST":
#         json = request.get_json()
#         firstname = json["firstname"]
#         email = json["email"]
#         old_users["Firstname"], old_users["Email"] = firstname, email
#         collection.delete_one(old_users)
        
#         return "Deleted user information successfully"
        
#     else:
#         return 'Content-Type not supported!'
    
# app.run(host='0.0.0.0', port=5000)