import csv
import sys
import pandas as pd
import numpy as np

file_path = sys.argv[1]
folder_id = sys.argv[2]
file_name = sys.argv[3]

open_path = file_path+folder_id+'/file/'+file_name
df1=pd.read_csv(open_path)
rho = df1.corr()
rho.to_csv(file_path+folder_id+'/cor-data/cor-'+file_name)
# with open(file_name_1, 'rb') as csvfile1:
# 	filereader1 = csv.DictReader(csvfile1)
# 	for x in filereader1:
# 		print x
