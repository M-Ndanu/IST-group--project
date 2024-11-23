from flask import *
import pymysql
# import re

app = Flask(__name__)
connection = pymysql.connect(host="", user="", password="", database="")
cursor = connection.cursor()
@app.route("/")
def home():
    return render_template("login.html")
if "__main__" == __name__ :
    app.run( debug= True )