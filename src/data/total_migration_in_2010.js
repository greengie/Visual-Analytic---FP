"use strict";

const total_migration_in_2010 = [{"country_code":"ABW","country_name":"Aruba","year":2010,"color":"#8E24AA","value":32780},{"country_code":"AFG","country_name":"Afghanistan","year":2010,"color":"#E53935","value":73174},{"country_code":"AGO","country_name":"Angola","year":2010,"color":"#4CAF50","value":64461},{"country_code":"AIA","country_name":"Anguilla","year":2010,"color":"#8E24AA","value":4041},{"country_code":"ALB","country_name":"Albania","year":2010,"color":"#BA68C8","value":46939},{"country_code":"AND","country_name":"Andorra","year":2010,"color":"#BA68C8","value":49544},{"country_code":"ARE","country_name":"United Arab Emirates","year":2010,"color":"#E53935","value":7094180},{"country_code":"ARG","country_name":"Argentina","year":2010,"color":"#FF5722","value":1767689},{"country_code":"ARM","country_name":"Armenia","year":2010,"color":"#E53935","value":194741},{"country_code":"ASM","country_name":"American Samoa","year":2010,"color":"#03A9F4","value":22991},{"country_code":"ATG","country_name":"Antigua and Barbuda","year":2010,"color":"#8E24AA","value":26040},{"country_code":"AUS","country_name":"Australia","year":2010,"color":"#03A9F4","value":5821210},{"country_code":"AUT","country_name":"Austria","year":2010,"color":"#BA68C8","value":1275992},{"country_code":"AZE","country_name":"Azerbaijan","year":2010,"color":"#E53935","value":274411},{"country_code":"BDI","country_name":"Burundi","year":2010,"color":"#4CAF50","value":215702},{"country_code":"BEL","country_name":"Belgium","year":2010,"color":"#BA68C8","value":1036630},{"country_code":"BEN","country_name":"Benin","year":2010,"color":"#4CAF50","value":177454},{"country_code":"BES","country_name":"Caribbean Netherlands","year":2010,"color":"#8E24AA","value":10923},{"country_code":"BFA","country_name":"Burkina Faso","year":2010,"color":"#4CAF50","value":629595},{"country_code":"BGD","country_name":"Bangladesh","year":2010,"color":"#E53935","value":1110039},{"country_code":"BGR","country_name":"Bulgaria","year":2010,"color":"#BA68C8","value":74877},{"country_code":"BHR","country_name":"Bahrain","year":2010,"color":"#E53935","value":638094},{"country_code":"BHS","country_name":"The Bahamas","year":2010,"color":"#8E24AA","value":53806},{"country_code":"BIH","country_name":"Bosnia and Herzegovina","year":2010,"color":"#BA68C8","value":37841},{"country_code":"BLR","country_name":"Belarus","year":2010,"color":"#BA68C8","value":1090088},{"country_code":"BLZ","country_name":"Belize","year":2010,"color":"#8E24AA","value":44956},{"country_code":"BMU","country_name":"Bermuda","year":2010,"color":"#8E24AA","value":17857},{"country_code":"BOL","country_name":"Bolivia","year":2010,"color":"#FF5722","value":119859},{"country_code":"BRA","country_name":"Brazil","year":2010,"color":"#FF5722","value":586789},{"country_code":"BRB","country_name":"Barbados","year":2010,"color":"#8E24AA","value":19424},{"country_code":"BRN","country_name":"Brunei","year":2010,"color":"#E53935","value":99582},{"country_code":"BTN","country_name":"Bhutan","year":2010,"color":"#E53935","value":44708},{"country_code":"BWA","country_name":"Botswana","year":2010,"color":"#4CAF50","value":106209},{"country_code":"CAF","country_name":"Central African Republic","year":2010,"color":"#4CAF50","value":66524},{"country_code":"CAN","country_name":"Canada","year":2010,"color":"#8E24AA","value":7003177},{"country_code":"CHE","country_name":"Switzerland","year":2010,"color":"#BA68C8","value":1958346},{"country_code":"CHL","country_name":"Chile","year":2010,"color":"#FF5722","value":369436},{"country_code":"CHN","country_name":"China","year":2010,"color":"#E53935","value":707128},{"country_code":"CIV","country_name":"Ivory Coast","year":2010,"color":"#4CAF50","value":2018304},{"country_code":"CMR","country_name":"Cameroon","year":2010,"color":"#4CAF50","value":280209},{"country_code":"COD","country_name":"Democratic Republic of the Congo","year":2010,"color":"#4CAF50","value":428440},{"country_code":"COG","country_name":"Republic of the Congo","year":2010,"color":"#4CAF50","value":411152},{"country_code":"COK","country_name":"Cook Islands","year":2010,"color":"#03A9F4","value":3100},{"country_code":"COL","country_name":"Colombia","year":2010,"color":"#FF5722","value":123584},{"country_code":"COM","country_name":"Comoros","year":2010,"color":"#4CAF50","value":11255},{"country_code":"CPV","country_name":"Cape Verde","year":2010,"color":"#4CAF50","value":12921},{"country_code":"CRI","country_name":"Costa Rica","year":2010,"color":"#8E24AA","value":391708},{"country_code":"CUB","country_name":"Cuba","year":2010,"color":"#8E24AA","value":13880},{"country_code":"CYM","country_name":"Cayman Islands","year":2010,"color":"#8E24AA","value":23985},{"country_code":"CYP","country_name":"Cyprus","year":2010,"color":"#BA68C8","value":186325},{"country_code":"CZE","country_name":"Czech Republic","year":2010,"color":"#BA68C8","value":397785},{"country_code":"DEU","country_name":"Germany","year":2010,"color":"#BA68C8","value":11603711},{"country_code":"DJI","country_name":"Djibouti","year":2010,"color":"#4CAF50","value":95499},{"country_code":"DMA","country_name":"Dominica","year":2010,"color":"#8E24AA","value":4664},{"country_code":"DNK","country_name":"Denmark","year":2010,"color":"#BA68C8","value":509740},{"country_code":"DOM","country_name":"Dominican Republic","year":2010,"color":"#8E24AA","value":385696},{"country_code":"DZA","country_name":"Algeria","year":2010,"color":"#4CAF50","value":229831},{"country_code":"ECU","country_name":"Ecuador","year":2010,"color":"#FF5722","value":276341},{"country_code":"EGY","country_name":"Egypt","year":2010,"color":"#4CAF50","value":283475},{"country_code":"ERI","country_name":"Eritrea","year":2010,"color":"#4CAF50","value":13487},{"country_code":"ESH","country_name":"Western Sahara","year":2010,"color":"#4CAF50","value":4312},{"country_code":"ESP","country_name":"Spain","year":2010,"color":"#BA68C8","value":6277672},{"country_code":"EST","country_name":"Estonia","year":2010,"color":"#BA68C8","value":217814},{"country_code":"ETH","country_name":"Ethiopia","year":2010,"color":"#4CAF50","value":510644},{"country_code":"FIN","country_name":"Finland","year":2010,"color":"#BA68C8","value":246266},{"country_code":"FJI","country_name":"Fiji","year":2010,"color":"#03A9F4","value":11627},{"country_code":"FLK","country_name":"Falkland Islands","year":2010,"color":"#FF5722","value":1377},{"country_code":"FRA","country_name":"France","year":2010,"color":"#BA68C8","value":7196481},{"country_code":"FRO","country_name":"Faroe Islands","year":2010,"color":"#BA68C8","value":4837},{"country_code":"FSM","country_name":"Federated States of Micronesia","year":2010,"color":"#03A9F4","value":110265},{"country_code":"GAB","country_name":"Gabon","year":2010,"color":"#4CAF50","value":237590},{"country_code":"GBR","country_name":"United Kingdom","year":2010,"color":"#BA68C8","value":7560559},{"country_code":"GEO","country_name":"Georgia","year":2010,"color":"#E53935","value":178249},{"country_code":"GHA","country_name":"Ghana","year":2010,"color":"#4CAF50","value":258896},{"country_code":"GIB","country_name":"Gibraltar","year":2010,"color":"#BA68C8","value":8192},{"country_code":"GIN","country_name":"Guinea","year":2010,"color":"#4CAF50","value":200224},{"country_code":"GLP","country_name":"Guadeloupe","year":2010,"color":"#8E24AA","value":89657},{"country_code":"GMB","country_name":"The Gambia","year":2010,"color":"#4CAF50","value":180372},{"country_code":"GNB","country_name":"Guinea-Bissau","year":2010,"color":"#4CAF50","value":20410},{"country_code":"GNQ","country_name":"Equatorial Guinea","year":2010,"color":"#4CAF50","value":6996},{"country_code":"GRC","country_name":"Greece","year":2010,"color":"#BA68C8","value":1269749},{"country_code":"GRD","country_name":"Grenada","year":2010,"color":"#8E24AA","value":4771},{"country_code":"GRL","country_name":"Greenland","year":2010,"color":"#BA68C8","value":6014},{"country_code":"GTM","country_name":"Guatemala","year":2010,"color":"#8E24AA","value":66302},{"country_code":"GUF","country_name":"French Guiana","year":2010,"color":"#FF5722","value":92413},{"country_code":"GUM","country_name":"Guam","year":2010,"color":"#03A9F4","value":72950},{"country_code":"GUY","country_name":"Guyana","year":2010,"color":"#FF5722","value":12378},{"country_code":"HKG","country_name":"Hong Kong","year":2010,"color":"#E53935","value":2748711},{"country_code":"HND","country_name":"Honduras","year":2010,"color":"#8E24AA","value":27153},{"country_code":"HRV","country_name":"Croatia","year":2010,"color":"#BA68C8","value":553434},{"country_code":"HTI","country_name":"Haiti","year":2010,"color":"#8E24AA","value":32604},{"country_code":"HUN","country_name":"Hungary","year":2010,"color":"#BA68C8","value":427420},{"country_code":"IDN","country_name":"Indonesia","year":2010,"color":"#E53935","value":270353},{"country_code":"IMN","country_name":"Isle of Man","year":2010,"color":"#BA68C8","value":41377},{"country_code":"IND","country_name":"India","year":2010,"color":"#E53935","value":5330039},{"country_code":"IRL","country_name":"Republic of Ireland","year":2010,"color":"#BA68C8","value":730542},{"country_code":"IRN","country_name":"Iran","year":2010,"color":"#E53935","value":2509220},{"country_code":"IRQ","country_name":"Iraq","year":2010,"color":"#E53935","value":91594},{"country_code":"ISL","country_name":"Iceland","year":2010,"color":"#BA68C8","value":35091},{"country_code":"ISR","country_name":"Israel","year":2010,"color":"#E53935","value":1363316},{"country_code":"ITA","country_name":"Italy","year":2010,"color":"#BA68C8","value":5787893},{"country_code":"JAM","country_name":"Jamaica","year":2010,"color":"#8E24AA","value":21153},{"country_code":"JOR","country_name":"Jordan","year":2010,"color":"#E53935","value":2716659},{"country_code":"JPN","country_name":"Japan","year":2010,"color":"#E53935","value":2064499},{"country_code":"KAZ","country_name":"Kazakhstan","year":2010,"color":"#E53935","value":3334623},{"country_code":"KEN","country_name":"Kenya","year":2010,"color":"#4CAF50","value":867762},{"country_code":"KGZ","country_name":"Kyrgyzstan","year":2010,"color":"#E53935","value":226524},{"country_code":"KHM","country_name":"Cambodia","year":2010,"color":"#E53935","value":78719},{"country_code":"KIR","country_name":"Kiribati","year":2010,"color":"#03A9F4","value":2407},{"country_code":"KNA","country_name":"Saint Kitts and Nevis","year":2010,"color":"#8E24AA","value":3431},{"country_code":"KOR","country_name":"South Korea","year":2010,"color":"#E53935","value":877436},{"country_code":"KWT","country_name":"Kuwait","year":2010,"color":"#E53935","value":1765407},{"country_code":"LAO","country_name":"Laos","year":2010,"color":"#E53935","value":17079},{"country_code":"LBN","country_name":"Lebanon","year":2010,"color":"#E53935","value":818738},{"country_code":"LBR","country_name":"Liberia","year":2010,"color":"#4CAF50","value":92870},{"country_code":"LBY","country_name":"Libya","year":2010,"color":"#4CAF50","value":683998},{"country_code":"LCA","country_name":"Saint Lucia","year":2010,"color":"#8E24AA","value":7867},{"country_code":"LIE","country_name":"Liechtenstein","year":2010,"color":"#BA68C8","value":21704},{"country_code":"LKA","country_name":"Sri Lanka","year":2010,"color":"#E53935","value":37190},{"country_code":"LSO","country_name":"Lesotho","year":2010,"color":"#4CAF50","value":3840},{"country_code":"LTU","country_name":"Lithuania","year":2010,"color":"#BA68C8","value":160374},{"country_code":"LUX","country_name":"Luxembourg","year":2010,"color":"#BA68C8","value":162895},{"country_code":"LVA","country_name":"Latvia","year":2010,"color":"#BA68C8","value":313786},{"country_code":"MAC","country_name":"Macau","year":2010,"color":"#E53935","value":295655},{"country_code":"MAF","country_name":"St. Martin","year":2010,"color":"#8E24AA","value":23963},{"country_code":"MAR","country_name":"Morocco","year":2010,"color":"#4CAF50","value":58819},{"country_code":"MCO","country_name":"Monaco","year":2010,"color":"#BA68C8","value":10842},{"country_code":"MDA","country_name":"Moldova","year":2010,"color":"#BA68C8","value":152732},{"country_code":"MDG","country_name":"Madagascar","year":2010,"color":"#4CAF50","value":21151},{"country_code":"MDV","country_name":"Maldives","year":2010,"color":"#E53935","value":69571},{"country_code":"MEX","country_name":"Mexico","year":2010,"color":"#8E24AA","value":966873},{"country_code":"MHL","country_name":"Marshall Islands","year":2010,"color":"#03A9F4","value":2749},{"country_code":"MKD","country_name":"Republic of Macedonia","year":2010,"color":"#BA68C8","value":128286},{"country_code":"MLI","country_name":"Mali","year":2010,"color":"#4CAF50","value":223932},{"country_code":"MLT","country_name":"Malta","year":2010,"color":"#BA68C8","value":32304},{"country_code":"MMR","country_name":"Myanmar","year":2010,"color":"#E53935","value":66565},{"country_code":"MNE","country_name":"Montenegro","year":2010,"color":"#BA68C8","value":78125},{"country_code":"MNG","country_name":"Mongolia","year":2010,"color":"#E53935","value":15510},{"country_code":"MNP","country_name":"Northern Mariana Islands","year":2010,"color":"#03A9F4","value":23130},{"country_code":"MOZ","country_name":"Mozambique","year":2010,"color":"#4CAF50","value":144891},{"country_code":"MRT","country_name":"Mauritania","year":2010,"color":"#4CAF50","value":56954},{"country_code":"MSR","country_name":"Montserrat","year":2010,"color":"#8E24AA","value":1061},{"country_code":"MTQ","country_name":"Martinique","year":2010,"color":"#8E24AA","value":57901},{"country_code":"MUS","country_name":"Mauritius","year":2010,"color":"#4CAF50","value":23497},{"country_code":"MWI","country_name":"Malawi","year":2010,"color":"#4CAF50","value":170320},{"country_code":"MYS","country_name":"Malaysia","year":2010,"color":"#E53935","value":2219148},{"country_code":"MYT","country_name":"Mayotte","year":2010,"color":"#4CAF50","value":71248},{"country_code":"NAM","country_name":"Namibia","year":2010,"color":"#4CAF50","value":100198},{"country_code":"NCL","country_name":"New Caledonia","year":2010,"color":"#03A9F4","value":55415},{"country_code":"NER","country_name":"Niger","year":2010,"color":"#4CAF50","value":116285},{"country_code":"NGA","country_name":"Nigeria","year":2010,"color":"#4CAF50","value":825990},{"country_code":"NIC","country_name":"Nicaragua","year":2010,"color":"#8E24AA","value":35536},{"country_code":"NIU","country_name":"Niue","year":2010,"color":"#03A9F4","value":465},{"country_code":"NLD","country_name":"Netherlands","year":2010,"color":"#BA68C8","value":1827558},{"country_code":"NOR","country_name":"Norway","year":2010,"color":"#BA68C8","value":516976},{"country_code":"NPL","country_name":"Nepal","year":2010,"color":"#E53935","value":556029},{"country_code":"NRU","country_name":"Nauru","year":2010,"color":"#03A9F4","value":1944},{"country_code":"NZL","country_name":"New Zealand","year":2010,"color":"#03A9F4","value":908399},{"country_code":"OMN","country_name":"Oman","year":2010,"color":"#E53935","value":783100},{"country_code":"PAK","country_name":"Pakistan","year":2010,"color":"#E53935","value":3938511},{"country_code":"PAN","country_name":"Panama","year":2010,"color":"#8E24AA","value":156722},{"country_code":"PER","country_name":"Peru","year":2010,"color":"#FF5722","value":82847},{"country_code":"PHL","country_name":"Philippines","year":2010,"color":"#E53935","value":153633},{"country_code":"PLW","country_name":"Palau","year":2010,"color":"#03A9F4","value":5141},{"country_code":"PNG","country_name":"Papua New Guinea","year":2010,"color":"#03A9F4","value":24303},{"country_code":"POL","country_name":"Poland","year":2010,"color":"#BA68C8","value":634946},{"country_code":"PRI","country_name":"Puerto Rico","year":2010,"color":"#8E24AA","value":287931},{"country_code":"PRK","country_name":"North Korea","year":2010,"color":"#E53935","value":42072},{"country_code":"PRT","country_name":"Portugal","year":2010,"color":"#BA68C8","value":759742},{"country_code":"PRY","country_name":"Paraguay","year":2010,"color":"#FF5722","value":156416},{"country_code":"PSE","country_name":"Palestine","year":2010,"color":"#E53935","value":235008},{"country_code":"PYF","country_name":"French Polynesia","year":2010,"color":"#03A9F4","value":27588},{"country_code":"QAT","country_name":"Qatar","year":2010,"color":"#E53935","value":1406620},{"country_code":"ROU","country_name":"Romania","year":2010,"color":"#BA68C8","value":143106},{"country_code":"RUS","country_name":"Russia","year":2010,"color":"#BA68C8","value":11194137},{"country_code":"RWA","country_name":"Rwanda","year":2010,"color":"#4CAF50","value":417680},{"country_code":"SAU","country_name":"Saudi Arabia","year":2010,"color":"#E53935","value":8147064},{"country_code":"SDN","country_name":"Sudan","year":2010,"color":"#4CAF50","value":554541},{"country_code":"SEN","country_name":"Senegal","year":2010,"color":"#4CAF50","value":215154},{"country_code":"SGP","country_name":"Singapore","year":2010,"color":"#E53935","value":1919435},{"country_code":"SHN","country_name":"Saint Helena","year":2010,"color":"#4CAF50","value":475},{"country_code":"SLB","country_name":"Solomon Islands","year":2010,"color":"#03A9F4","value":2148},{"country_code":"SLE","country_name":"Sierra Leone","year":2010,"color":"#4CAF50","value":96482},{"country_code":"SLV","country_name":"El Salvador","year":2010,"color":"#8E24AA","value":40202},{"country_code":"SMR","country_name":"San Marino","year":2010,"color":"#BA68C8","value":4192},{"country_code":"SOM","country_name":"Somalia","year":2010,"color":"#4CAF50","value":1919},{"country_code":"SPM","country_name":"Saint Pierre and Miquelon","year":2010,"color":"#8E24AA","value":997},{"country_code":"SRB","country_name":"Serbia","year":2010,"color":"#BA68C8","value":825407},{"country_code":"SSD","country_name":"South Sudan","year":2010,"color":"#4CAF50","value":255341},{"country_code":"SUR","country_name":"Suriname","year":2010,"color":"#FF5722","value":23306},{"country_code":"SVK","country_name":"Slovakia","year":2010,"color":"#BA68C8","value":145694},{"country_code":"SVN","country_name":"Slovenia","year":2010,"color":"#BA68C8","value":253392},{"country_code":"SWE","country_name":"Sweden","year":2010,"color":"#BA68C8","value":1292196},{"country_code":"SWZ","country_name":"Swaziland","year":2010,"color":"#4CAF50","value":24283},{"country_code":"SYC","country_name":"Seychelles","year":2010,"color":"#4CAF50","value":11053},{"country_code":"SYR","country_name":"Syria","year":2010,"color":"#E53935","value":1271568},{"country_code":"TCA","country_name":"Turks & Caicos Islands","year":2010,"color":"#8E24AA","value":8981},{"country_code":"TCD","country_name":"Chad","year":2010,"color":"#4CAF50","value":406162},{"country_code":"TGO","country_name":"Togo","year":2010,"color":"#4CAF50","value":235112},{"country_code":"THA","country_name":"Thailand","year":2010,"color":"#E53935","value":3223380},{"country_code":"TJK","country_name":"Tajikistan","year":2010,"color":"#E53935","value":277849},{"country_code":"TKL","country_name":"Tokelau","year":2010,"color":"#03A9F4","value":395},{"country_code":"TKM","country_name":"Turkmenistan","year":2010,"color":"#E53935","value":195437},{"country_code":"TLS","country_name":"East Timor","year":2010,"color":"#03A9F4","value":9679},{"country_code":"TON","country_name":"Tonga","year":2010,"color":"#03A9F4","value":1417},{"country_code":"TTO","country_name":"Trinidad and Tobago","year":2010,"color":"#8E24AA","value":40940},{"country_code":"TUN","country_name":"Tunisia","year":2010,"color":"#4CAF50","value":35123},{"country_code":"TUR","country_name":"Turkey","year":2010,"color":"#E53935","value":1255160},{"country_code":"TUV","country_name":"Tuvalu","year":2010,"color":"#03A9F4","value":123},{"country_code":"TZA","country_name":"Tanzania","year":2010,"color":"#4CAF50","value":301574},{"country_code":"UGA","country_name":"Uganda","year":2010,"color":"#4CAF50","value":526101},{"country_code":"UKR","country_name":"Ukraine","year":2010,"color":"#BA68C8","value":4479141},{"country_code":"URY","country_name":"Uruguay","year":2010,"color":"#FF5722","value":71777},{"country_code":"USA","country_name":"United States","year":2010,"color":"#8E24AA","value":40180172},{"country_code":"UZB","country_name":"Uzbekistan","year":2010,"color":"#E53935","value":1140101},{"country_code":"VAT","country_name":"Vatican City","year":2010,"color":"#BA68C8","value":0},{"country_code":"VCT","country_name":"Saint Vincent and the Grenadines","year":2010,"color":"#8E24AA","value":4202},{"country_code":"VEN","country_name":"Venezuela","year":2010,"color":"#FF5722","value":1331312},{"country_code":"VGB","country_name":"British Virgin Islands","year":2010,"color":"#8E24AA","value":13103},{"country_code":"VIR","country_name":"U.S. Virgin Islands","year":2010,"color":"#8E24AA","value":55526},{"country_code":"VNM","country_name":"Vietnam","year":2010,"color":"#E53935","value":57368},{"country_code":"VUT","country_name":"Vanuatu","year":2010,"color":"#03A9F4","value":2191},{"country_code":"WLF","country_name":"Wallis and Futuna","year":2010,"color":"#03A9F4","value":2715},{"country_code":"WSM","country_name":"Samoa","year":2010,"color":"#03A9F4","value":4671},{"country_code":"YEM","country_name":"Yemen","year":2010,"color":"#E53935","value":250376},{"country_code":"ZAF","country_name":"South Africa","year":2010,"color":"#4CAF50","value":1890854},{"country_code":"ZMB","country_name":"Zambia","year":2010,"color":"#4CAF50","value":130863},{"country_code":"ZWE","country_name":"Zimbabwe","year":2010,"color":"#4CAF50","value":286242}];
export default total_migration_in_2010;
