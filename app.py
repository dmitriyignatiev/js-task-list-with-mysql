from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
app.config['SECRET_KEY'] = 'test'

db = SQLAlchemy(app)


class Test(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String)

@app.route('/', methods=['GET', 'POST'])
def index():
    task=request.form
    print(task)
    return render_template('index.html')

@app.route('/add', methods=['GET', 'POST'])
def add():
    task=request.form['task']
    if task!='':
        test = Test(task=task)
        db.session.add(test)
        db.session.commit()
        return jsonify({'id':test.id})


if __name__=='__main__':
    app.run(port=5012)