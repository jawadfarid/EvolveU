from flask import Flask,request,render_template
app = Flask(__name__)

people = {1:{'fname':'Jawad', 'lname':'Farid','age':29},
		  5:{'fname':'Greg', 'lname':'Shumlich','age':31},
		  12:{'fname':'Erin', 'lname':'Shumlich','age':30}
		 }



@app.route("/")
def hello():
    return " Hello World <h1>Jawad Farid</h1>"

@app.route("/admin")
@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
	print('people:', people)
	print ('my id is:', int(myid))
	return render_template("person.html",
		# testval="Some Value So We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))


@app.route("/info")
def info():
	print('Args:', request.args)#Using request method is another way of passing parameters with question mark(?)
	return "Hello World! - info -Jawad Farid " + request.args.get('parm1','default1') + " " + request.args.get('test','default2')

@app.route("/update")
def update():
    return "Your information has been updated (Jawad)"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)


