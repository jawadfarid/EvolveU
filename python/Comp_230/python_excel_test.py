import python_excel

def test_Invoice_Maker():
    # Testing Invoice class constructor/initializer
    make_inv = python_excel.Invoice_Maker('Invoice-Example.xlsx')
    assert make_inv.new_book.sheetnames == ['Clients', 'Invoices', 'Items Sold', 'Product Inventory']

    # Test to construct a Class for Clients/client ID:
    client = python_excel.Customer('0001', 'Peter Jones')
    assert client.custid == '0001'
    assert client.custname == 'Peter Jones'

    # Test to construct a class for Invoices:
    inv = python_excel.Invoice('0001', '00001', 'May 25, 2019')
    assert inv.custid == '0001'
    assert inv.invid == '00001'
    assert inv.invdate == 'May 25, 2019'

    # Test to construct a class for Products:
    product = python_excel.Product('0001', '55" LCD TV', 599.99, 190)
    assert product.prodid == '0001'
    assert product.prodname == '55" LCD TV'
    assert product.prodprice == 599.99
    assert product.prodinv == 190







