# Python Excel Invoice Generation:

class Invoice_Maker():
    def __init__(self, filename):
        self.filename = filename
        from openpyxl import load_workbook
        self.new_book = load_workbook(self.filename)

class Customer():
    def __init__(self, custid, custname):
        self.custid = custid
        self.custname = custname

class Invoice():
    def __init__(self, invname,custid, invid, invdate):
        self.invname = invname
        self.custid = custid
        self.invid = invid
        self.invdate = invdate

class Product():
    def __init__(self, prodid, prodname, prodcost, prodinv):
        self.prodid = prodid
        self.prodname = prodname
        self.prodcost = prodcost
        self.prodinv = prodinv
