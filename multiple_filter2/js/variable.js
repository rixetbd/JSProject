let countryNames = ['Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo (Congo-Brazzaville)','Costa Rica','Croatia','Cuba','Cyprus','Czechia (Czech Republic)','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini (fmr. "Swaziland")','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Holy See','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (formerly Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine State','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];


// let countryNames = ['Australia','Canada','France','German','Newzeland','Spain','UK','USA'];
let stateNames = ['ALBERTA','BRITISH COLUMBIA','MANITOBA','NEW BRUNSWICK','NEWFOUNDLAND','LABRADOR','NORTHWEST TERRITORIES','NOVA SCOTIA','NUNAVUT','ONTARIO','PRINCE EDWARD ISLAND','QUEBEC','SASKATCHEWAN','YUKON','ALBERTA','BRITISH COLUMBIA','MANITOBA','NEW BRUNSWICK','NEWFOUNDLAND AND LABRADOR','NORTHWEST TERRITORIES','NOVA SCOTIA','NUNAVUT','ONTARIO','PRINCE EDWARD ISLAND','QUEBEC','SASKATCHEWAN','YUKON'];
let industryNames = ['CANNABIST', 'CHRIOPRACTOR', 'DENTAL', 'E-COMMERCE', 'FOOTBALL CLUB', 'HVAC', 'LAW FIRM', 'OPTOMETRY', 'PHYSIOTHERAPY', 'PLASTIC SURGEONS', 'REAL ESTATE', 'VETERINARIANS','ALBERTA','BRITISH COLUMBIA','MANITOBA','NEW BRUNSWICK','NEWFOUNDLAND AND LABRADOR','NORTHWEST TERRITORIES','NOVA SCOTIA','NUNAVUT','ONTARIO','PRINCE EDWARD ISLAND','QUEBEC','SASKATCHEWAN','YUKON'];


let country_Name_ID = document.getElementById('country_Name_ID');
let state_Name_ID = document.getElementById('state_Name_ID');
let industry_Name_ID = document.getElementById('industry_Name_ID');



for (let i = 0; i < countryNames.length; i++) {

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = countryNames[i];
    boxDiv.setAttribute('id', countryNames[i]);
    country_Name_ID.appendChild(boxDiv);
}

for (let i = 0; i < stateNames.length; i++) {

    if (stateNames[i].length > 20) {
        stateNames[i] = stateNames[i].slice(0,20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = stateNames[i];
    boxDiv.setAttribute('id', stateNames[i]);
    state_Name_ID.appendChild(boxDiv);
}

for (let i = 0; i < industryNames.length; i++) {

    if (industryNames[i].length > 20) {
        industryNames[i] = industryNames[i].slice(0,20) + "...";
    }
    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = industryNames[i];
    boxDiv.setAttribute('id', industryNames[i]);
    industry_Name_ID.appendChild(boxDiv);
}