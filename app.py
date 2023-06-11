from flask import Flask, request

app = Flask(__name__)

@app.route('/post_json', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        response = {"greeting": "Hi " + json["name"]}
        return response
    else:
        return 'Content-Type not supported!'
    
app.run(host='0.0.0.0', port=5000)