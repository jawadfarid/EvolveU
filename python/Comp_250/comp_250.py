from flask import Flask, render_template, jsonify, url_for, redirect, request,json
from flask_restful import Resource, Api
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 

app = Flask(__name__)
# api= Api(app)
# CORS(app)

DB_URL = 'postgres://postgres:jawadf@localhost:5432/invoices'

#########################################
#########################################
########## DATABSE SETUP ################
#########################################
#########################################

app.config['SECRET_KEY'] = 'mysecret'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_DATABASE_URI"] = DB_URL


db = SQLAlchemy(app)
Migrate(app,db)

#########################################
#########################################
################ MODELS ################
#########################################
#########################################


class Customer(db.Model):

	__tablename__ = "customers"

	cust_id = db.Column(db.Integer,primary_key=True)
	cust_name = db.Column(db.Text)

	def __init__(self,cust_id,cust_name):
		self.cust_id = cust_id
		self.cust_name = cust_name

	def __repr__(self):
		return f"Customer ID: {self.cust_id}, Customer Name: {self.cust_name}"

	
class Product(db.Model):

	__tablename__ = "products"

	prod_id = db.Column(db.Integer,primary_key=True)
	prod_name = db.Column(db.Text)
	prod_cost = db.Column(db.Float)
	prod_inventory = db.Column(db.Integer)

	def __init__(self,prod_id, prod_name, prod_cost,inventory):
		self.prod_id = prod_id
		self.prod_name = prod_name
		self.prod_cost = prod_cost
		self.inventory = inventory

	def __repr__(self):
		return f"Product ID: {self.product_id}, Product Name: {self.prod_name}, Product Cost: {self.prod_cost},Inventory: {self.inventory}"

class Invoice(db.Model):
	__tablename__ = "invoices"
	
	inv_id = db.Column(db.Integer,primary_key=True)
	cust_id = db.Column(db.Integer,db.ForeignKey("customers.cust_id"), nullable=False)
	inv_date = db.Column(db.Date)
	
	def __init__(self, inv_id, cust_id,inv_date):
		self.inv_id = inv_id
		self.cust_id = cust_id
		self.inv_date = inv_date
	
	def __repr__(self):
		return f"Invoice ID: {self.inv_id}, Invoice Date: {self.inv_date}"


class Line_Items(db.Model):
	__tablename__ = "Line_Items"
	
	id = db.Column(db.Integer, primary_key=True)
	inv_id = db.Column(db.Integer,db.ForeignKey("invoices.inv_id"), nullable=False)
	prod_id = db.Column(db.Integer,db.ForeignKey("productss.prod_id"), nullable=False)
	qty = db.Column(db.Integer)

	def __init__(self, inv_id, prod_id, qty):
		self.inv_num = inv_id
		self.prod_id = prod_id
		self.qty = qty

	def __repr__(self):
		return f"Invoice ID: {self.inv_id}, Invoice Date: {self.inv_date}"

#########################################
#########################################
################ ROUTING ################
#########################################
#########################################


@app.route("/invoices", methods=['GET'])
def invoices():
	inv_info = Invoice.query.all()
	inv_list = []
	for inv in inv_info:
		inv_list.append(inv.__repr__())
	return jsonify(inv_list), 200

@app.route("/customers", methods=['GET'])
def customers():
	cust_info = Customer.query.all()
	cust_list = []
	for cust in cust_info:
		cust_list.append(cust.__repr__())
	return jsonify(cust_list), 200

@app.route("/products", methods=['GET'])
def products():
	prod_info = Product.query.all()
	prod_list = []
	for prod in prod_info:
		prod_list.append(prod.__repr__())
	return jsonify(prod_list), 200

@app.route("/invoice_detail/<inv_id>",methods = ["GET"])
def invoice_detail():
	items = Line_Items.query.filter_by(inv_id=inv_id).all() #returns an array of query results
	invoice = Invoice.query.filter_by(inv_id=inv_id).first() # returns a single value of query results
	customer = Customer.query.filter_by(cust_id=invoice.cust_id).first()

	total_prods_cost=[]
	product_list = []
	for item in items:
		currentprod = Product.query.filter_by(prod_id=item.prod_id).first()
		total_prods_cost +=currentProd.prod_cost*item.qty
		currentprod_stringform = currentprod.__repr__()
		product_list.append(currentprod_stringform)

	invoice_json = {"Invoice": invoice.__repr__(), "Customer" : customer.__repr__(), "Products":product_list, "Total Cost": total_prods_cost}
	resp = jsonify(invoice_json)
	return resp, 200

@app.route("/addproduct", methods = [ "GET", "POST"])
def add_product():
	response = request.get_json()
	new_prod = Product(response["newProd"]["prodName"], response["newProd"]["prodCost"])

	db.session.add(new_prod)
	db.session.commit()

	new_line_item = Line_Items(response["invId"],new_prod.prod_id,response["newProd"]["prodQty"])
	db.session.add(new_line_item)
	db.session.commit()
	return jsonify({"New Product Added to the Database": "OK"}), 200




@app.route("/invoice_list", methods=["GET"])
def my_invoice():
	my_list = []
	test = Invoice.query.all()
	for inv in test:
		my_list.append(inv.__repr__())
	return jsonify(my_list)

# api.add_resource(Comp240,"/api")
# api.add_resource(Customer_JSON,"/customer/<string:id>")

if __name__ == '__main__':
	app.run(debug=True)