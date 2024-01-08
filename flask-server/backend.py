# backend.py 
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://grace101:Nathania98!@localhost/phonebook1db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Contacts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50),nullable=False)
    contactnumber = db.Column(db.String(20), nullable=False)


#Endpointd API 


@app.route('/api/contacts', methods=['GET'])
def get_contacts():
    contacts = Contacts.query.all()
    return jsonify([{'id': contacts.id, 'name': contacts.name, 'contactnumber': contacts.contactnumber} for contacts in Contacts ])

@app.route('/api/contacts', methods=['POST'])
def add_contacts():
    data = request.get_json() 
    new_contact = Contacts(name=data['name'], contactNumber=data['contactNumber']) 
    db.session.add(new_contact)
    db.session.commit()
    return jsonify({'message': 'Phone Number has been added'})

@app.route('/api/contacts/<int:id>', methods=['PUT'])
def update_contacts(id):
    contacts = Contacts.query.get_or_404(id)
    data = request.get_json()
    contacts.name = data['name']
    contacts.contactNumber = data['contactNumber']
    db.session.commit()
    return jsonify({'message': 'Phone Number has been updated'})

@app.route('/api/contacts/<int:db>', methods=['DELETE'])
def delete_cotact(id):
    contacts = Contacts.query.get_or_404(id)
    db.session.delete(contacts)
    db.session.commit()
    return jsonify({'message': 'Phone Number has been deleted'})

if __name__ == '__main__':
    app.run(debug=True)


