from flask import Flask, jsonify, render_template, request, make_response
from queue import Queue
app = Flask(__name__)

COMMAND_QUEUE = Queue()

@app.route('/')
def index():
    return render_template("webpanel_index.html")



@app.route('/submit_command', methods = ['POST'])
def submit_command():
    data = request.json
    command = data.get('command','')
    print(command)
    COMMAND_QUEUE.put(command)
    print(COMMAND_QUEUE)


    return "Command Submitted to Queue"

@app.route('/get_command')
def get_next_command():
    command = COMMAND_QUEUE.get()
    print(command)
    return jsonify(command=command)

print("gmod control panel v0.1")
app.run(host="0.0.0.0", port=80)