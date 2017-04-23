import csv
import sys
import pandas as pd
import numpy as np

file_path = sys.argv[1]
folder_id = sys.argv[2]
file_name = sys.argv[3]

open_path = file_path+folder_id+'/file/'+file_name
df1=pd.read_csv(open_path)
new_df = df1.drop('year', 1)
new_df = new_df.drop('country_name', 1)
new_df.to_csv(open_path, index = False)
rho = new_df.corr()
rho.to_csv(file_path+folder_id+'/cor-data/cor-'+file_name)
