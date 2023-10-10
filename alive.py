from flask import Flaskfrom flask import Flask
from threading import Thread

app = Flask('')

@app.route('/')
def main():
  return " "

def run():
  app.run(host="0.0.0.0", port=8080)

def alive():
  server = Thread(target=run)
  server.start()
from threading import Thread

app = Flask('')

@app.route('/')
def main():
  return " "

def run():
  app.run(host="0.0.0.0", port=8080)

def alive():
  server = Thread(target=run)
  server.start()

d