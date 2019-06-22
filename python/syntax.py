#TUPLES
t = (1,2,3)
print(t)
print(t[0])

t1 = (1,2,3,"a",2.3)
print(t1)
print(t1[0])  

mylist = [1,2,3]
mylist[0] = "NEW"
print(mylist)

#t[0] = "NEW" #You cant edit tuple
print(t)

#SETS
x = set()
print(x)
x.add(1)
x.add(2)
x.add(3)
x.add(3)
x.add(3)
print(x)

mylist = [1,2,3,4,4,4,4,5,6,6,21,12,45,65,5,5,5,5,5,5]
print(set(mylist))

#Example
name = "Sammy"
age = 4

print(f"Hello my dog's name is {name} and he is {age} years old")

#BOOLEANS
a = True
b= False
# SPECIAL KEYWORD
c = None
print(1<2)

#If /else
username = "admin"
permission = True

if username == "admin" and permission:
	print("Full Access")
elif username == "admin" and permission == False:
	print("Admin access only, no full permission")
else:
	print("No Access")

permission = False
if username == "admin" and permission:
	print("Full Access")
elif username == "admin" and permission == False:
	print("Admin access only, no full permission")
else:
	print("No Access")

username = "Jose"
if username == "admin" and permission:
	print("Full Access")
elif username == "admin" and permission == False:
	print("Admin access only, no full permission")
else:
	print("No Access")

#For Loops
seq = [1,2,3,4,5,6]

for i in seq:
	print(i**2)

for i in seq:
	print("Hello",i)

mystring = "Jawad"
for char in mystring:
	print(char)

salaries = {"John":10, "Sally":20, "Lisa":30}
for employee in salaries:
	print(f"{employee} has a salary of {salaries[employee]}")
	
#UNPACKING THE TUPLE
mypairs = [("a",1),("b",2),("c",3)]

for i in mypairs:
	print(i)
#if you want to print every tuple element
for letters,num in mypairs:
	print(letters)
	# print(num)


#WHILE LOOPS
i = 1
while i <5:
	print(f"i is currently {i}")
	i = i +1

#RANGE
for i in range(0,11,2):
	print(i)

result = list(range(0,11,2))
print(result)

#IN KEYWORD
"widfhwigytgwfbwhgweriuyetoowngojh"
print("a" in "widfhwigytgwfbwhgweriuyetoowngojh")

print( 6 in [1,2,3,4,5])

#FUNCTIONS
def report_person(name="BLANK"):
	print(f"reporting {name}")

report_person()



def add_num(num1,num2):
	return(num1+num2) #with return now

result = add_num(8,3)
print(result)


#Max and Min
print(f"the maximum number is : {max(10,5)}")

print(f"the maximum number is : {max([12,4,35,545646,464646])}")

#Enumerate
mylist = ["a","b","c"]
index = 0
for letter in mylist:
	print (letter, f"has an index of {index}")
	index = index+1

for letter in enumerate(mylist): # with enumerate
	print (letter)

#Now do the unpacking
for item,letter in enumerate(mylist): # with enumerate
	print (letter, f"has an index of {item}")

#.join
mylist = ["a","b","c"]
print("".join(mylist))
print("--".join(mylist))
print("****".join(mylist))
print("--x--".join(mylist))

#FUNCTION EXERCISE
def secret_func(mystring):
	return "secret" in mystring.lower()
		
print(secret_func("You are a Secret member of the society"))

def code_maker(mystring):
	output = list(mystring)
	#print(output)
	for index,letter in enumerate(mystring):
		for vowel in "aeiou":
			if (letter.lower() ==vowel):
				print (f"{letter} with index {index}, is a vowel")
				output[index] = "x"
	output = ''.join(output)
	return(output)

print(code_maker("Adam"))



# ## Task 1
#
#  Create a function that takes in two integers and returns
## a Boolean True if their sum is 10, False if their sum is something else.
def check_ten (n1,n2):
	return (n1+n2) == 10
		

print(check_ten(5,5))
print(check_ten(9,5))



# ## Task 2
#
# Create a function that takes in two integers and returns True if their
# sum is 10, otherwise, return the actual sum value.
def check_ten_sum (n1,n2):
	if (n1+n2) == 10:
		return True
	else:
		return n1+n2

print("check_ten_sum",check_ten_sum(5,5))
print("check_ten_sum",check_ten_sum(9,5))


# ## Task 3
#
# Create a function that takes in a string and returns back the
# first character of that string in upper case.
def first_upper(mystring):
	return mystring[0].upper()

print("first_upper",first_upper("wdfrwtrwgrwehwgreg"))
print("first_upper",first_upper("My name is Jawad"))
print("first_upper",first_upper(" My name is Jawad"))



# ## Task 4
#
# Create a function that takes in a string and returns the last two characters.
# If there are less than two chracters, return the string:  "Error".
# Use this link if you need help/hint.
# (https://stackoverflow.com/questions/7983820/get-the-last-4-characters-of-a-string)

def last_two(mystring):
	if len(mystring) <2:
		return "Error"
	else:
		return mystring[-2:]


print("last_two",last_two("232498234729ru9w"))


# ## Task 5
#
# Given a list of integers, return True if the sequence [1,2,3] is somewhere
# in the list. Hint: Use slicing and a for loop.

nums = [1,5,7,1,2,3,8,9,10,11]

def seq_check(nums):
	for i in range(len(nums)-2):
		if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
			return True
	return False
	
print("seq_check",seq_check(nums))


# ## Task 6
#
# Given a 2 strings, create a function that returns the difference in length
# between them. This difference in length should always be a positive number
# (or just 0). Hint: Absolute Value.**
def compare_len(s1,s2):
	s1length = len(s1)
	s2length = len(s2)
	difference = (s1length - s2length)
	return abs(difference)

print("compare_len",compare_len("1","Jawad"))


# ## Task 7
#
# Given a list of integers, if the length of the list is an even number,
# return the sum of the list. If the length of the list is odd, return the max
## value in that list.
def sum_or_max(mylist):
	if len(mylist)%2 == 0:
		return sum(mylist)
	else:
		return max(mylist)

mylist = [1,2,3,4,5]
print(sum_or_max(mylist))


