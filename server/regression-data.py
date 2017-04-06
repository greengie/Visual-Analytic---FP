import csv
import sys
import pandas as pd
import numpy as np

userid = sys.argv[1]
fileid = sys.argv[2]

file_path = '/home/giegie/mytest/test-api-scatter/server/uploads/'+userid+'/'
# file_path = '/home/greengie/Downloads/FP-Visual-Analytic/server/test/'

data_dict = {'corMatrix': '', 'table-data': '', 'label': ''}
# print userid, fileid
df=pd.read_csv(file_path+'file/'+fileid)
df=df.fillna(df.mean())
key_list = list(df)
data_dict['label'] = key_list
my_dict = {}
for i in key_list:
	my_dict[i] = list(df[i])
# new_dict = {}
# for i in my_dict:
# 	new_dict[i] = []
# 	for data in my_dict[i]:
# 		if(data > 0):
# 			new_dict[i].append(round(np.log10(data), 2))
# 		else:
# 			new_dict[i].append(round(data, 2))
data_dict['table-data'] = my_dict
# data_dict['table-data'] = new_dict
# print data_dict['data']['gdp']
df_matrix=pd.read_csv(file_path+'cor-data/cor-'+fileid)
# print list(df_matrix['Unnamed: 0'])
corMatrix = []
key_list = df_matrix['Unnamed: 0']
# print list(key_list)
df_matrix.__delitem__('Unnamed: 0')
# print list(df_matrix.iloc[0])
for i in range(0,len(key_list)):
	corMatrix.append(list(df_matrix.iloc[i]))
# print corMatrix
data_dict['corMatrix'] = corMatrix
print data_dict