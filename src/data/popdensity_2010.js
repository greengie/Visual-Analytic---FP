"use strict";

const popdensity_2010 = [{"country_code":"ABW","country_name":"Aruba","year":2010,"data_value":564.427777777778},{"country_code":"AND","country_name":"Andorra","year":2010,"data_value":179.614893617021},{"country_code":"AFG","country_name":"Afghanistan","year":2010,"data_value":42.8303265631223},{"country_code":"AGO","country_name":"Angola","year":2010,"data_value":17.0208983717013},{"country_code":"ALB","country_name":"Albania","year":2010,"data_value":106.314635036496},{"country_code":"ARE","country_name":"United Arab Emirates","year":2010,"data_value":99.6346052631579},{"country_code":"ARG","country_name":"Argentina","year":2010,"data_value":15.063041484421},{"country_code":"ARM","country_name":"Armenia","year":2010,"data_value":104.091886195996},{"country_code":"ASM","country_name":"American Samoa","year":2010,"data_value":278.18},{"country_code":"ATG","country_name":"Antigua and Barbuda","year":2010,"data_value":198.256818181818},{"country_code":"AUS","country_name":"Australia","year":2010,"data_value":2.86785858401781},{"country_code":"AUT","country_name":"Austria","year":2010,"data_value":101.299693559913},{"country_code":"AZE","country_name":"Azerbaijan","year":2010,"data_value":109.542344173442},{"country_code":"BDI","country_name":"Burundi","year":2010,"data_value":368.423559190031},{"country_code":"BEL","country_name":"Belgium","year":2010,"data_value":359.827807133421},{"country_code":"BEN","country_name":"Benin","year":2010,"data_value":84.3366264632849},{"country_code":"BFA","country_name":"Burkina Faso","year":2010,"data_value":57.1347441520468},{"country_code":"BGD","country_name":"Bangladesh","year":2010,"data_value":1164.75975263117},{"country_code":"BGR","country_name":"Bulgaria","year":2010,"data_value":68.1245302137067},{"country_code":"BHR","country_name":"Bahrain","year":2010,"data_value":1655.27427821522},{"country_code":"BHS","country_name":"The Bahamas","year":2010,"data_value":36.0469530469531},{"country_code":"BIH","country_name":"Bosnia and Herzegovina","year":2010,"data_value":74.9073828125},{"country_code":"BLR","country_name":"Belarus","year":2010,"data_value":46.7718087727945},{"country_code":"BLZ","country_name":"Belize","year":2010,"data_value":14.0994739149496},{"country_code":"BMU","country_name":"Bermuda","year":2010,"data_value":1302.48},{"country_code":"BOL","country_name":"Bolivia","year":2010,"data_value":9.15558478722422},{"country_code":"BRA","country_name":"Brazil","year":2010,"data_value":23.7629673587664},{"country_code":"BRB","country_name":"Barbados","year":2010,"data_value":650.153488372093},{"country_code":"BRN","country_name":"Brunei","year":2010,"data_value":74.6303605313093},{"country_code":"BTN","country_name":"Bhutan","year":2010,"data_value":18.89566335231},{"country_code":"BWA","country_name":"Botswana","year":2010,"data_value":3.61341555943747},{"country_code":"CAF","country_name":"Central African Republic","year":2010,"data_value":7.13501717551125},{"country_code":"CAN","country_name":"Canada","year":2010,"data_value":3.73951026611287},{"country_code":"CHE","country_name":"Switzerland","year":2010,"data_value":198.018751897965},{"country_code":"CHL","country_name":"Chile","year":2010,"data_value":22.8840829984453},{"country_code":"CHN","country_name":"China","year":2010,"data_value":142.487743405},{"country_code":"CIV","country_name":"Ivory Coast","year":2010,"data_value":63.3072547169811},{"country_code":"CMR","country_name":"Cameroon","year":2010,"data_value":43.5587696473525},{"country_code":"COG","country_name":"Republic of the Congo","year":2010,"data_value":11.9065241581259},{"country_code":"COL","country_name":"Colombia","year":2010,"data_value":41.3863010365029},{"country_code":"COM","country_name":"Comoros","year":2010,"data_value":375.440623320795},{"country_code":"CPV","country_name":"Cape Verde","year":2010,"data_value":121.682133995037},{"country_code":"CRI","country_name":"Costa Rica","year":2010,"data_value":89.0182726204465},{"country_code":"CUB","country_name":"Cuba","year":2010,"data_value":106.239505824878},{"country_code":"CYM","country_name":"Cayman Islands","year":2010,"data_value":231.2875},{"country_code":"CYP","country_name":"Cyprus","year":2010,"data_value":119.446428571429},{"country_code":"CZE","country_name":"Czech Republic","year":2010,"data_value":135.608622475401},{"country_code":"DEU","country_name":"Germany","year":2010,"data_value":234.606908225034},{"country_code":"DJI","country_name":"Djibouti","year":2010,"data_value":35.8413287316652},{"country_code":"DMA","country_name":"Dominica","year":2010,"data_value":94.8893333333333},{"country_code":"DNK","country_name":"Denmark","year":2010,"data_value":130.749069054914},{"country_code":"DOM","country_name":"Dominican Republic","year":2010,"data_value":204.842363410596},{"country_code":"DZA","country_name":"Algeria","year":2010,"data_value":15.1301817158884},{"country_code":"ECU","country_name":"Ecuador","year":2010,"data_value":60.1332420679659},{"country_code":"EGY","country_name":"Egypt","year":2010,"data_value":82.4159867396655},{"country_code":"ERI","country_name":"Eritrea","year":2010,"data_value":46.4323168316832},{"country_code":"ESP","country_name":"Spain","year":2010,"data_value":93.1519309613808},{"country_code":"EST","country_name":"Estonia","year":2010,"data_value":31.4101203113942},{"country_code":"ETH","country_name":"Ethiopia","year":2010,"data_value":87.561814},{"country_code":"FIN","country_name":"Finland","year":2010,"data_value":17.6484106614018},{"country_code":"FJI","country_name":"Fiji","year":2010,"data_value":47.0690749863164},{"country_code":"FRA","country_name":"France","year":2010,"data_value":118.75934742867},{"country_code":"FRO","country_name":"Faroe Islands","year":2010,"data_value":34.7901146131805},{"country_code":"FSM","country_name":"Federated States of Micronesia","year":2010,"data_value":148.027142857143},{"country_code":"GAB","country_name":"Gabon","year":2010,"data_value":5.98415026972484},{"country_code":"GBR","country_name":"United Kingdom","year":2010,"data_value":259.440189310958},{"country_code":"GEO","country_name":"Georgia","year":2010,"data_value":68.6867979985304},{"country_code":"GHA","country_name":"Ghana","year":2010,"data_value":106.872347719082},{"country_code":"GIB","country_name":"Gibraltar","year":2010,"data_value":3073.2},{"country_code":"GIN","country_name":"Guinea","year":2010,"data_value":44.816889142113},{"country_code":"GMB","country_name":"The Gambia","year":2010,"data_value":167.292687747036},{"country_code":"GNB","country_name":"Guinea-Bissau","year":2010,"data_value":58.1150782361309},{"country_code":"GNQ","country_name":"Equatorial Guinea","year":2010,"data_value":25.9789661319073},{"country_code":"GRC","country_name":"Greece","year":2010,"data_value":86.278828549263},{"country_code":"GRD","country_name":"Grenada","year":2010,"data_value":307.873529411765},{"country_code":"GRL","country_name":"Greenland","year":2010,"data_value":0.138640516506274},{"country_code":"GTM","country_name":"Guatemala","year":2010,"data_value":137.479106009705},{"country_code":"GUM","country_name":"Guam","year":2010,"data_value":295.259259259259},{"country_code":"GUY","country_name":"Guyana","year":2010,"data_value":3.82708661417323},{"country_code":"HKG","country_name":"Hong Kong","year":2010,"data_value":6689.71428571429},{"country_code":"HND","country_name":"Honduras","year":2010,"data_value":67.0647510948253},{"country_code":"HRV","country_name":"Croatia","year":2010,"data_value":78.945335954253},{"country_code":"HTI","country_name":"Haiti","year":2010,"data_value":362.830805515239},{"country_code":"HUN","country_name":"Hungary","year":2010,"data_value":110.460874848117},{"country_code":"IDN","country_name":"Indonesia","year":2010,"data_value":133.372227404958},{"country_code":"IMN","country_name":"Isle of Man","year":2010,"data_value":147.942105263158},{"country_code":"IND","country_name":"India","year":2010,"data_value":414.028200014126},{"country_code":"IRL","country_name":"Republic of Ireland","year":2010,"data_value":66.1947307301495},{"country_code":"IRN","country_name":"Iran","year":2010,"data_value":45.5947763347763},{"country_code":"IRQ","country_name":"Iraq","year":2010,"data_value":71.0723798121201},{"country_code":"ISL","country_name":"Iceland","year":2010,"data_value":3.17247880299252},{"country_code":"ISR","country_name":"Israel","year":2010,"data_value":352.292051756007},{"country_code":"ITA","country_name":"Italy","year":2010,"data_value":201.527901679472},{"country_code":"JAM","country_name":"Jamaica","year":2010,"data_value":248.460203139428},{"country_code":"JOR","country_name":"Jordan","year":2010,"data_value":73.416445145303},{"country_code":"JPN","country_name":"Japan","year":2010,"data_value":351.30983404197},{"country_code":"KAZ","country_name":"Kazakhstan","year":2010,"data_value":6.04570174463829},{"country_code":"KEN","country_name":"Kenya","year":2010,"data_value":70.8583353832097},{"country_code":"KGZ","country_name":"Kyrgyzstan","year":2010,"data_value":28.4040667361835},{"country_code":"KHM","country_name":"Cambodia","year":2010,"data_value":81.3708701563562},{"country_code":"KIR","country_name":"Kiribati","year":2010,"data_value":126.725925925926},{"country_code":"KNA","country_name":"Saint Kitts and Nevis","year":2010,"data_value":201.353846153846},{"country_code":"KOR","country_name":"South Korea","year":2010,"data_value":508.180253008331},{"country_code":"KWT","country_name":"Kuwait","year":2010,"data_value":171.687598204265},{"country_code":"LAO","country_name":"Laos","year":2010,"data_value":27.1254072790295},{"country_code":"LBN","country_name":"Lebanon","year":2010,"data_value":423.964418377322},{"country_code":"LBR","country_name":"Liberia","year":2010,"data_value":41.0920888704319},{"country_code":"LBY","country_name":"Libya","year":2010,"data_value":3.56098582584084},{"country_code":"LCA","country_name":"Saint Lucia","year":2010,"data_value":290.814754098361},{"country_code":"LIE","country_name":"Liechtenstein","year":2010,"data_value":226.725},{"country_code":"LKA","country_name":"Sri Lanka","year":2010,"data_value":320.810078137458},{"country_code":"LSO","country_name":"Lesotho","year":2010,"data_value":66.2248353096179},{"country_code":"LTU","country_name":"Lithuania","year":2010,"data_value":49.418141204627},{"country_code":"LUX","country_name":"Luxembourg","year":2010,"data_value":195.734749034749},{"country_code":"LVA","country_name":"Latvia","year":2010,"data_value":33.7010764781491},{"country_code":"MAC","country_name":"Macau","year":2010,"data_value":18000.8754208754},{"country_code":"MAF","country_name":"St. Martin","year":2010,"data_value":555.790441176471},{"country_code":"MAR","country_name":"Morocco","year":2010,"data_value":71.9420546717455},{"country_code":"MCO","country_name":"Monaco","year":2010,"data_value":18422.5},{"country_code":"MDA","country_name":"Moldova","year":2010,"data_value":124.169310140482},{"country_code":"MDG","country_name":"Madagascar","year":2010,"data_value":36.2477765931836},{"country_code":"MDV","country_name":"Maldives","year":2010,"data_value":1223.33333333333},{"country_code":"MEX","country_name":"Mexico","year":2010,"data_value":61.0188235294118},{"country_code":"MHL","country_name":"Marshall Islands","year":2010,"data_value":291.266666666667},{"country_code":"MKD","country_name":"Republic of Macedonia","year":2010,"data_value":81.7780729579699},{"country_code":"MLI","country_name":"Mali","year":2010,"data_value":12.4302657782804},{"country_code":"MLT","country_name":"Malta","year":2010,"data_value":1295.3375},{"country_code":"MMR","country_name":"Myanmar","year":2010,"data_value":79.1920720693139},{"country_code":"MNE","country_name":"Montenegro","year":2010,"data_value":46.054126394052},{"country_code":"MNG","country_name":"Mongolia","year":2010,"data_value":1.74609091377224},{"country_code":"MNP","country_name":"Northern Mariana Islands","year":2010,"data_value":117.086956521739},{"country_code":"MOZ","country_name":"Mozambique","year":2010,"data_value":30.9283768661461},{"country_code":"MRT","country_name":"Mauritania","year":2010,"data_value":3.48442805860095},{"country_code":"MUS","country_name":"Mauritius","year":2010,"data_value":615.960591133005},{"country_code":"MWI","country_name":"Malawi","year":2010,"data_value":156.659142978362},{"country_code":"MYS","country_name":"Malaysia","year":2010,"data_value":85.5866686957845},{"country_code":"NAM","country_name":"Namibia","year":2010,"data_value":2.66448396069429},{"country_code":"NCL","country_name":"New Caledonia","year":2010,"data_value":13.6761487964989},{"country_code":"NER","country_name":"Niger","year":2010,"data_value":12.8617589010816},{"country_code":"NGA","country_name":"Nigeria","year":2010,"data_value":175.043910098049},{"country_code":"NIC","country_name":"Nicaragua","year":2010,"data_value":47.6792587668273},{"country_code":"NLD","country_name":"Netherlands","year":2010,"data_value":492.599881411207},{"country_code":"NOR","country_name":"Norway","year":2010,"data_value":13.3862256841298},{"country_code":"NPL","country_name":"Nepal","year":2010,"data_value":187.484548308336},{"country_code":"NRU","country_name":"Nauru","year":2010,"data_value":501.25},{"country_code":"NZL","country_name":"New Zealand","year":2010,"data_value":16.5231096426266},{"country_code":"OMN","country_name":"Oman","year":2010,"data_value":9.51129886914378},{"country_code":"PAK","country_name":"Pakistan","year":2010,"data_value":220.584160958904},{"country_code":"PAN","country_name":"Panama","year":2010,"data_value":48.7019908528383},{"country_code":"PER","country_name":"Peru","year":2010,"data_value":22.948159375},{"country_code":"PHL","country_name":"Philippines","year":2010,"data_value":312.033075091391},{"country_code":"PLW","country_name":"Palau","year":2010,"data_value":44.5},{"country_code":"PNG","country_name":"Papua New Guinea","year":2010,"data_value":15.1206046018637},{"country_code":"POL","country_name":"Poland","year":2010,"data_value":124.209200731357},{"country_code":"PRI","country_name":"Puerto Rico","year":2010,"data_value":419.563246899662},{"country_code":"PRK","country_name":"North Korea","year":2010,"data_value":203.475674777842},{"country_code":"PRT","country_name":"Portugal","year":2010,"data_value":115.439458456163},{"country_code":"PRY","country_name":"Paraguay","year":2010,"data_value":15.6301963251951},{"country_code":"PYF","country_name":"French Polynesia","year":2010,"data_value":73.2418032786885},{"country_code":"QAT","country_name":"Qatar","year":2010,"data_value":152.068303186908},{"country_code":"ROU","country_name":"Romania","year":2010,"data_value":88.0107411432297},{"country_code":"RUS","country_name":"Russia","year":2010,"data_value":8.72263436175533},{"country_code":"RWA","country_name":"Rwanda","year":2010,"data_value":417.254519659505},{"country_code":"SAU","country_name":"Saudi Arabia","year":2010,"data_value":13.0673013318199},{"country_code":"SDN","country_name":"Sudan","year":2010,"data_value":19.4323905723906},{"country_code":"SEN","country_name":"Senegal","year":2010,"data_value":67.2975172700358},{"country_code":"SGP","country_name":"Singapore","year":2010,"data_value":7231.81196581197},{"country_code":"SLB","country_name":"Solomon Islands","year":2010,"data_value":18.7987495534119},{"country_code":"SLE","country_name":"Sierra Leone","year":2010,"data_value":80.0208090883901},{"country_code":"SLV","country_name":"El Salvador","year":2010,"data_value":291.424034749035},{"country_code":"SMR","country_name":"San Marino","year":2010,"data_value":511.5},{"country_code":"SOM","country_name":"Somalia","year":2010,"data_value":15.2735581981063},{"country_code":"SRB","country_name":"Serbia","year":2010,"data_value":83.3688085982163},{"country_code":"STP","country_name":"São Tomé and Príncipe","year":2010,"data_value":178},{"country_code":"SUR","country_name":"Suriname","year":2010,"data_value":3.32141666666667},{"country_code":"SVK","country_name":"Slovakia","year":2010,"data_value":112.108876920838},{"country_code":"SVN","country_name":"Slovenia","year":2010,"data_value":101.717130089374},{"country_code":"SWE","country_name":"Sweden","year":2010,"data_value":22.8545255154262},{"country_code":"SWZ","country_name":"Swaziland","year":2010,"data_value":69.3690697674419},{"country_code":"SXM","country_name":"Sint Maarten","year":2010,"data_value":1043.35294117647},{"country_code":"SYC","country_name":"Seychelles","year":2010,"data_value":195.152173913043},{"country_code":"SYR","country_name":"Syria","year":2010,"data_value":112.838871644067},{"country_code":"TCA","country_name":"Turks & Caicos Islands","year":2010,"data_value":32.6242105263158},{"country_code":"TCD","country_name":"Chad","year":2010,"data_value":9.44756988564168},{"country_code":"TGO","country_name":"Togo","year":2010,"data_value":117.500478029049},{"country_code":"THA","country_name":"Thailand","year":2010,"data_value":130.540867897199},{"country_code":"TJK","country_name":"Tajikistan","year":2010,"data_value":54.1704486996285},{"country_code":"TKM","country_name":"Turkmenistan","year":2010,"data_value":10.7292469091141},{"country_code":"TLS","country_name":"East Timor","year":2010,"data_value":71.7154673839946},{"country_code":"TON","country_name":"Tonga","year":2010,"data_value":144.370833333333},{"country_code":"TTO","country_name":"Trinidad and Tobago","year":2010,"data_value":258.887914230019},{"country_code":"TUN","country_name":"Tunisia","year":2010,"data_value":67.8881307929969},{"country_code":"TUR","country_name":"Turkey","year":2010,"data_value":93.9547782700778},{"country_code":"TUV","country_name":"Tuvalu","year":2010,"data_value":327.566666666667},{"country_code":"TZA","country_name":"Tanzania","year":2010,"data_value":51.5336701286972},{"country_code":"UGA","country_name":"Uganda","year":2010,"data_value":165.317260123678},{"country_code":"UKR","country_name":"Ukraine","year":2010,"data_value":79.180245805427},{"country_code":"URY","country_name":"Uruguay","year":2010,"data_value":19.2801622671695},{"country_code":"USA","country_name":"United States","year":2010,"data_value":33.8179358770014},{"country_code":"UZB","country_name":"Uzbekistan","year":2010,"data_value":67.1424541607898},{"country_code":"VCT","country_name":"Saint Vincent and the Grenadines","year":2010,"data_value":280.297435897436},{"country_code":"VEN","country_name":"Venezuela","year":2010,"data_value":32.8731307748994},{"country_code":"VGB","country_name":"British Virgin Islands","year":2010,"data_value":181.486666666667},{"country_code":"VIR","country_name":"U.S. Virgin Islands","year":2010,"data_value":303.62},{"country_code":"VNM","country_name":"Vietnam","year":2010,"data_value":280.3641113297},{"country_code":"VUT","country_name":"Vanuatu","year":2010,"data_value":19.3846595570139},{"country_code":"WSM","country_name":"Samoa","year":2010,"data_value":65.734628975265},{"country_code":"YEM","country_name":"Yemen","year":2010,"data_value":44.6843040324261},{"country_code":"ZAF","country_name":"South Africa","year":2010,"data_value":41.8533048508187},{"country_code":"COD","country_name":"Democratic Republic of the Congo","year":2010,"data_value":29.0856893319512},{"country_code":"ZMB","country_name":"Zambia","year":2010,"data_value":18.7215849015994},{"country_code":"ZWE","country_name":"Zimbabwe","year":2010,"data_value":36.1222618586015}];
export default popdensity_2010;
