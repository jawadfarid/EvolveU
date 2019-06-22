f = open("basic.js","r")
#print(f.read())

#print(f.read(15))

#print(f.readline(),f.readline())
#print(f.readlines())
def total_lines(filename):
	f = open(filename,"r")
	i = 1
	for lines in f:
		#print (lines)
		i = i+1
	return (f"The total number of lines in this file : {i}")

# print(total_lines("basic.js"))


def string_count(mystring):
	count = 0
	for line in f:
		if mystring in line:
			# print (True)
			count = count+1
	return (f"Number of {mystring.upper()} Counts = {count}")

# print(string_count("else"))


def no_of_char(filename):
	f = open(filename,"r")
	char = 0
	#lines = 0
	words= 0
	for line in f:
		wordslist = line.split()
		words = words + len(wordslist)
		#lines = lines + 1
		char = char + len(line)
	return (f"Number of characters in the file: {char} \n Number of words : {words}")

print(no_of_char("basic.js"))	

###############################
###############################
#EXERCISE = READING DIRECTORIES
###############################
###############################
f = open("basic.js","r")
import os
from pathlib import Path
test = os.listdir()
print(test)

for files in test:
	print (files)

# new_path = Path("C:/Users/jawad/OneDrive/Desktop/Jawad/EvolveU/python/Comp_220") 
# test = os.listdir(new_path)
# print(os.path.getsize())

myPath = os.getcwd()
myfiles = list(os.listdir(myPath))

myDict = dict()
for i in myfiles: 
    myStats = os.stat(i)
    myDict[i] = myStats

for items in myDict:
    print(f"File Name: {items:30} The Size: {myDict[items].st_size} Bytes")



#################################
#################################
#EXERCISE = WORKING WITH THE DATA
#################################
#################################

#Write a python program that will:
#Use a dictionary to total “res_cnt”. 
#Do not use lists - you do not know from time to time what the Class or Sector names are.
#CLASS
#SECTOR


def class_rest_count():
	import csv
	reader = csv.DictReader(open("Census_by_Community_2018.csv"))
	# header = next(reader)
	mydict1={}
	mydict2={}
	for row in reader:
		class_key = row["CLASS"]
		sector_class_key = row["SECTOR"]
		res_count_key = row["RES_CNT"]
		if class_key in mydict1:
			mydict1[class_key] = mydict1[class_key] + int(res_count_key)
		else:
			mydict1[class_key] = int(res_count_key)
		if sector_class_key in mydict2:
			mydict2[sector_class_key] = mydict2[sector_class_key] + int(res_count_key)
		else:
			mydict2[sector_class_key] = int(res_count_key)


	myreport=""
	myreport1="Residents By Class\n" + ("="*40)+"\n"				
	
	for items in mydict1:
		myreport1 = myreport1 + f"{items :30}: {mydict1[items]}\n"
	
	myreport2="\n\nResidents By Sector\n" + ("="*40)+"\n"
	for items in mydict2:
		myreport2 = myreport2 + f"{items :30}: {mydict2[items]}\n"

	myreport = myreport1 + myreport2
	return myreport

	
class_rest_count()

#Count the number of lines in this CSV

def csv_no_of_lines():
	import csv
	reader = csv.reader(open("Census_by_Community_2018.csv"))
	# return len(list(reader))
	i = 0
	for lines in reader:
		i = i + 1
	print(f"No of lines in this CSV {i :11}")

csv_no_of_lines()




###Write the report to a file called report.txt.
def create_write_file(filename):
	if filename == filename:
		file = open(filename,"w")
	else:
		file = open(filename,"x")

	test = class_rest_count()
	file.write(test)  
	file.close()

create_write_file("report")

