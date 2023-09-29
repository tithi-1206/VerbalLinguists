# from flask import Flask, request
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# items = []

# @app.route("/")
# def hello_world():
#     print("hello")
#     return "<p>Hello!</p>"

# @app.route('/audio', methods=['POST'])
# def create_audio():
#     data = request.json
#     items.append(data)
#     print(data)
#     return "<p>Hello, World!</p>"


# if __name__ == "__main__":
#     app.run(debug=True)



# from flask import Flask, request, jsonify  # Import jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# items = []

# @app.route("/")
# def hello_world():
#     print("hello")
#     return "<p>Hello!</p>"

# @app.route('/audio', methods=['POST'])
# def create_audio():
#     data = request.json
#     items.append(data)
#     print(data)


    
#     # Return a JSON response
#     return jsonify({"message": "Audio data received successfully"})

# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, request, jsonify, send_file  # Import send_file
from flask_cors import CORS
import pybase64 as base64

app = Flask(__name__)
CORS(app)

items = []

@app.route("/")
def hello_world():
    print("hello")
    return "<p>Hello!</p>"


@app.route('/audio', methods=['POST'])
def create_audio():
    data = request.json
    items.append(data)
    # print(data)

    # Check if 'audioData' is in the request JSON
    if 'audioData' in data:
        base_audio = data['audioData']

        # Decode the base64 audio data
        audio_bytes = base64.b64decode(base_audio)  # Use the imported base64 module

        # Save the audio data to an MP3 file
        with open('output.mp3', 'wb') as audio_file:
            audio_file.write(audio_bytes)

        # Respond with a success message
        return jsonify({"message": "Audio data received and saved successfully"})

    return jsonify({"message": "No audio data found in the request"})

@app.route('/play')
def play_audio():
    # Send the saved MP3 file as a response
    return send_file('output.mp3')

if __name__ == "__main__":
    app.run(debug=True)
