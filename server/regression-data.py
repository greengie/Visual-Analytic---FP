import csv
import sys
import pandas as pd
import numpy as np

userid = sys.argv[1]
fileid = sys.argv[2]

file_path = '/home/giegie/mytest/test-api-scatter/server/uploads/'+userid+'/'
# file_path = '/home/greengie/Downloads/FP-Visual-Analytic/server/test/'

data_dict = {'corMatrix': '', 'table-data': ''}
# print userid, fileid
df=pd.read_csv(file_path+fileid+'.csv')
df=df.fillna(0)
key_list = list(df)
my_dict = {}
for i in key_list:
	my_dict[i] = list(df[i])
data_dict['table-data'] = my_dict
# print data_dict['data']['gdp']
df_matrix=pd.read_csv(file_path+'cor-'+fileid+'.csv')
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