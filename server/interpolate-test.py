import psycopg2
import sys
import math

def lin_interpolate(x1,y1,x2,y2,x):
    y = y1 + ((x-x1)*((y2-y1)/(x2-x1)))
    y = math.floor(y)
    return int(y)

def main():
    conn = psycopg2.connect("dbname='giegie' user='postgres' host='128.199.99.233' password='0909527339Gie'")
    cur = conn.cursor()
    # migration in
    query_in_1 = "SELECT iso_alpha3 as country_code, country_list.country_name, year, sum(female) as in_value, cont_color as color FROM migration_data, country_list WHERE (migration_data.destination_country = country_list.country_name) and (year = 2010) GROUP BY country_list.iso_alpha3,year ORDER BY country_list.iso_alpha3"
    cur.execute(query_in_1)
    m_in_1 = cur.fetchall()
    # print len(m_in_1)
    query_in_2 = "SELECT iso_alpha3 as country_code, country_list.country_name, year, sum(female) as in_value, cont_color as color FROM migration_data, country_list WHERE (migration_data.destination_country = country_list.country_name) and (year = 2015) GROUP BY country_list.iso_alpha3,year ORDER BY country_list.iso_alpha3"
    cur.execute(query_in_2)
    m_in_2 = cur.fetchall()
    # print len(m_in_2)
    # migration out
    query_out_1 = "SELECT iso_alpha3 as country_code, country_list.country_name, year, sum(female) as out_value, cont_color as color FROM migration_data, country_list WHERE (migration_data.origin_country = country_list.country_name) and (year = 2010) and (destination_country='Developed regions' or destination_country='Developing regions') GROUP BY country_list.iso_alpha3,year ORDER BY country_list.iso_alpha3"
    cur.execute(query_out_1)
    m_out_1 = cur.fetchall()
    # print len(m_out_1)
    query_out_2 = "SELECT iso_alpha3 as country_code, country_list.country_name, year, sum(female) as out_value, cont_color as color FROM migration_data, country_list WHERE (migration_data.origin_country = country_list.country_name) and (year = 2015) and (destination_country='Developed regions' or destination_country='Developing regions') GROUP BY country_list.iso_alpha3,year ORDER BY country_list.iso_alpha3"
    cur.execute(query_out_2)
    m_out_2 = cur.fetchall()
    # print len(m_out_1)

    for i in range(0,len(m_in_1)):
        country_code = m_in_1[i][0]
        country_name = m_in_1[i][1]
        color = m_in_1[i][4]
        x1_in = m_in_1[i][2]
        y1_in = m_in_1[i][3]
        x1_out = m_out_1[i][2]
        y1_out = m_out_1[i][3]
        for j in range(0, len(m_in_2)):
            if(country_code == m_in_2[j][0]):
                x2_in = m_in_2[j][2]
                y2_in = m_in_2[j][3]
                x2_out = m_out_2[j][2]
                y2_out = m_out_2[j][3]
                print country_code + ',' + country_name + ',' + str(x1_in) + ',' + str(y1_in) + ',' + str(y1_out) + ',' + color
                for k in range(2011,2015):
                    y_new_in = lin_interpolate(x1_in,y1_in,x2_in,y2_in,k)
                    y_new_out = lin_interpolate(x1_out,y1_out,x2_out,y2_out,k)
                    print country_code + ',' + country_name + ',' + str(k) + ',' + str(y_new_in) + ',' + str(y_new_out) + ',' + color
                print country_code + ',' + country_name + ',' + str(x2_in) + ',' + str(y2_in) + ',' + str(y2_out) + ',' + color
                break

if __name__ == "__main__":
    main()
