import os

path_test = '/home/giegie/mytest/test-api-scatter/analytic/test_data/arff/'
path_model = '/home/giegie/mytest/test-api-scatter/analytic/model/'
path_weka = '$CLASSPATH:/home/giegie/weka-3-8-1/weka.jar' 

def edit_text():
	with open(path_test+'data-2.arff', 'r+') as f:
		lines = f.readlines()
		# print len(lines)
		fout = open(path_test+"data-2.arff", "wt")
		for i in range(0,len(lines)):
			if(i == 9):
				line = '@attribute m_in numeric'
				fout.write(line)
			else:
				fout.write(lines[i])

def preprocess_test():
	# convert to arff
	os.system('java -cp ' + path_weka + ' weka.core.converters.CSVLoader ' + path_test + 'data-test.csv > ' + path_test + 'data-2.arff')
	# change label to numeric 
	# edit_text()
	# replace missing value with mean
	os.system('java -cp ' + path_weka + ' -Xmx1024m weka.filters.unsupervised.attribute.ReplaceMissingValues -i ' + path_test + 'data-2.arff -o ' + path_test + 'data-4.arff')

def main():
	# preprocess 
	# preprocess_test()
	# run model
	os.system('java -cp ' + path_weka + ' -Xmx500m weka.classifiers.meta.RandomCommittee -classifications weka.classifiers.evaluation.output.prediction.CSV -T ' + path_test + 'data-test.arff -l ' + path_model + 'model-m_in-v1.model -p 0 |tail -n+6 |head -n -1')

if __name__ == "__main__":
    main()


