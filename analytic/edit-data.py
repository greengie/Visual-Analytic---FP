import pandas
import sys
import csv

# filename = sys.argv[1]
path = "/home/greengie/Downloads/FP-Visual-Analytic/analytic/"

with open(path+'all_data.csv', 'rb') as csvfile:
	filereader = csv.DictReader(csvfile)
	# print filereader
	for row in filereader:
		str1 = ''
		for i in row:
			print i
		# 	if(i == 'gdp'):
		# 		if(row[i] == ''):
		# 			str1 = '?'
		# 		else:	
		# 			str1 = row[i]
		# 	else:
		# 		if(row[i] == ''):
		# 			str1 = str1 + ',' + '?'
		# 		else:	
		# 			str1 = str1 + ',' + row[i]
		# print str1
		# if(row['country'] != ''):
		# 	for i in range (1990,2011):
		# 		print '"' + row['country'] + '",' + str(i) + ',' + row[str(i)]
		# else:
		# 	pass
		# for i in range (1800,2016):
			#print row['Country Code'] + ', ' + str(i) + ', ' + row[str(i)]
			# print row
			# try:
			# 	if((row[str(i)] == '') or (row[str(i)] == "0")):
			#  		print '"' + row['Total population'] + '";' + str(i) + ';'''
			# 	else:
			# 		x = int(row[str(i)])
			#  		print '"' + row['Total population'] + '";' + str(i)  + ';' + row[str(i)]
			# except KeyError:
			# 	pass
							