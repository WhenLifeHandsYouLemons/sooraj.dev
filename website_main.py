from flask import Flask
from flask import send_file

app = Flask(__name__)

@app.route('/')
def main():
    return send_file("mainpage.html")



@app.route('/firstpage')
def page2():
    return ("<h1>This is page 2!</h1>")

app.run(host="127.0.0.1", port=8080, debug=True)
#app.run(host='localhost', port=8080, debug=True)
