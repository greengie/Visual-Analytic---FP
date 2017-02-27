#!/usr/bin/python
import psycopg2
import sys
import math

# print 'Number of arguments:', len(sys.argv), 'arguments.'
# print 'Argument List:', str(sys.argv)
# print type(int(sys.argv[1]))
def pearson_correlation(dataX, dataY):
    n = len(dataX)
    m = len(dataY)
    n = max(n,m)
    sum_x = 0;
    sum_y = 0;
    sum_xy = 0;
    sum_x2 = 0;
    sum_y2 = 0;
    for j in range(0,n):
        try:
            if(dataX[j][1] == None):
                xi = 0
            else:
                xi = dataX[j][1]
        except IndexError:
            xi = 0
        try:
            if(dataY[j][1] == None):
                yi = 0
            else:
                yi = dataY[j][1]
        except IndexError:
            yi = 0
        sum_x += xi;
        sum_y += yi;
        sum_xy += (xi*yi);
        sum_x2 += (xi*xi);
        sum_y2 += (yi*yi);
    r = (((n*sum_xy)-(sum_x*sum_y))/(math.sqrt(((n*sum_x2)-(sum_x*sum_x))*((n*sum_y2)-(sum_y*sum_y)))));
    r = round(r, 2)
    # print r
    return r

def changeLog(data):
    n = len(data)
    new_list = []
    for i in range(0,n):
        # print data[i][1]
        if(data[i][1] >= 1):
            new_list.append((data[i][0], math.log(data[i][1], 2)))
        else:
            new_list.append((data[i][0], data[i][1]))
    return new_list

def main():
    correlation = []
    yearMin = int(sys.argv[1])
    yearMax = int(sys.argv[2])
    selectorX = sys.argv[3]
    selectorY = sys.argv[4]
    scale_x = sys.argv[5]
    scale_y = sys.argv[6]
    query_type = sys.argv[7]
    # print query_type
    conn = psycopg2.connect("dbname='giegie' user='postgres' host='128.199.99.233' password='0909527339Gie'")
    cur = conn.cursor()
    # select iso_alpha3 as country_code, country_list.country_name, year, value as data_value, cont_color as color from $2~, country_list where ($2~.country_name = country_list.country_name) and (year = $1) and (value is not null)
    # ($2~.country_name = country_list.country_name) and (year = $1)
    for i in range(yearMin, yearMax+1):
        # get X
        if(query_type == '1'):
            query1 = "SELECT year, value FROM " + selectorX +", country_list WHERE (" + selectorX + ".country_name = country_list.country_name) and (year = " + str(i) + ");"
        elif(query_type == '2'):
            query1 = "SELECT year, " + selectorX + " as value FROM sum_migration WHERE (year = " + str(i) + ");"
        cur.execute(query1)
        dataX = cur.fetchall()
        if(scale_x == 'lin'):
            dataX = dataX
        elif(scale_x == 'log'):
            dataX = changeLog(dataX)
        #  get Y
        query2 = "SELECT year, value FROM " + selectorY +", country_list WHERE (" + selectorY + ".country_name = country_list.country_name) and (year = " + str(i) + ");"
        cur.execute(query2)
        dataY = cur.fetchall()
        if(scale_y == 'lin'):
            dataY = dataY
        elif(scale_y == 'log'):
            dataY = changeLog(dataY)
        # calculate R
        r = pearson_correlation(dataX, dataY)
        d = {'y': i,'x': r}
        correlation.append(d)
    print correlation
if __name__ == "__main__":
    main()
