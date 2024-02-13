import json
from flask import Flask,jsonify,request
from chat import get_response
from flask_cors import CORS
import flask
  
app =   Flask(__name__)
CORS(app)
  
  #               flask.render_template('filename.html')
@app.route('/', methods=['GET', 'POST'])
def home():
    response =jsonify({"data":True})
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
   
@app.route('/<save>/<time>', methods = ['POST'])   
def savefile(save,time):
    x=request.json
    
    with open('file.txt', 'w') as f:
     f.write(x['txts'])
    data = {
            "ok" : True,
            "save" : "txt",
        }
    response =jsonify(data)
    response.headers.set('Access-Control-Allow-Origin', '*')
    return response
@app.route('/res/<key>/<time>', methods = ['POST'])
def ReturnJSON(key,time):
    x=request.json
    if(request.method =='POST'):
        data = {
            "ok" : True,
            "ans" : get_response(x['res']),
        }
        response =jsonify(data)
        response.headers.set('Access-Control-Allow-Origin', '*')
        return response
  
if __name__=='__main__':
    app.run(debug=True)
