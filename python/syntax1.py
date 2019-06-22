Python 3.7.1 (default, Dec 10 2018, 22:54:23) [MSC v.1915 64 bit (AMD64)] :: Anaconda, Inc. on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> print("hhelo")
hhelo
>>> mystring = "abcdefh"
>>> mystring[2:4]
'cd'
>>> mystring[0:6:1]
'abcdef'
>>> mystring[0:6:2]
'ace'
>>> mystring[0:6:3]
'ad'
>>> mystring[0:7:3]
'adh'
>>> mystring[:7:3]
'adh'
>>> mystring[:7:]
'abcdefh'
>>> mystring[:7]
'abcdefh'
>>> mystring[7;]
  File "<stdin>", line 1
    mystring[7;]
              ^
SyntaxError: invalid syntax
>>> mystring[7:]
''
>>> mystring[::]
'abcdefh'
>>> mystring[::2]
'aceh'
>>> mystring[::-1]
'hfedcba'
>>> mystring[::-2]
'heca'
>>> print(mystring.upper())
ABCDEFH
>>> print(mystring.lower())
abcdefh
>>> print(mystring.lower
... print(mystring.lower)
  File "<stdin>", line 2
    print(mystring.lower)
        ^
SyntaxError: invalid syntax
>>> print(mystring.split())
['abcdefh']
>>> mystring = "hello world"
>>> print(mystring.split())
['hello', 'world']
>>> print(mystring.lower().split())
['hello', 'world']
>>> print(mystring.upper().split())
['HELLO', 'WORLD']
>>> print("{} from python".format(mystring))
hello world from python
>>> print(f"{mystring} from python")
hello world from python
>>> mylist = ['a','b','c','d',"e",]
>>> mylist.append('z')
>>> mylist
['a', 'b', 'c', 'd', 'e', 'z']
>>> mylist.insert(0,'z')
>>> mylist
['z', 'a', 'b', 'c', 'd', 'e', 'z']
>>> mylist.insert(3,'z',4)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: insert() takes exactly 2 arguments (3 given)
>>> mylist.pop(0)
'z'
>>> mylist
['a', 'b', 'c', 'd', 'e', 'z']
>>> mylist.pop(4)
'e'
>>> mylist
['a', 'b', 'c', 'd', 'z']
>>> mylist1 = [0,1,2]
mylist2= [3,4,5]
my;ist3 = [6,7,8]
>>> >>> Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'my' is not defined
>>> mylist1 = [0,1,2]
mylist2= [3,4,5]
mylist3 = [6,7,8]
>>> >>> >>> mega_list = [mylist1, mylist2, mylist3]
>>> mega_list
[[0, 1, 2], [3, 4, 5], [6, 7, 8]]
>>> len(mega_list)
3
>>> mega_list[2][0]
6
>>> mega_list[2][3]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
>>> mega_list[2][2]
8
>>> mega_list[1][2]
5
>>> d = {"key1" = "value", "key2" = "value2"}
  File "<stdin>", line 1
    d = {"key1" = "value", "key2" = "value2"}
                ^
SyntaxError: invalid syntax
>>> d = {"key1" : "value", "key2" : "value2"}
>>> d
{'key1': 'value', 'key2': 'value2'}
>>> d["key1"]
'value'
>>> d = {"key1" : "value1", "key2" : "value2"}
>>> d["key1"]
'value1'
>>> 
>>> 
>>> salaries = {"John":20, "Sally":30, "Sammy":15}
>>> salaries[John]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'John' is not defined
>>> salaries["John"]
20
>>> salaries["John"]
20
>>> print(salaries["John"])
20
>>> salaries["Jawad"] = 25
>>> salaries
{'John': 20, 'Sally': 30, 'Sammy': 15, 'Jawad': 25}
>>> salaries["John"] = salaries["John"] + 40
>>> salaries
{'John': 60, 'Sally': 30, 'Sammy': 15, 'Jawad': 25}
>>> people = {"John":[1,2,3], "Sally":[40,10,20]}
>>> people["John"]
[1, 2, 3]
>>> people["John"][2]
3
>>> people2 = {"John":{"salary":10,"age":30}}
>>> people["John"]["salary"]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: list indices must be integers or slices, not str
>>> people["John"]
[1, 2, 3]
>>> people2["John"]["salary"]
10
>>> people.keys()
dict_keys(['John', 'Sally'])
>>> people.values()
dict_values([[1, 2, 3], [40, 10, 20]])
>>> people.items()
dict_items([('John', [1, 2, 3]), ('Sally', [40, 10, 20])])
>>> 