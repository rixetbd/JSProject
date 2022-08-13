// let countryNames = ['Albania', 'Algeria', 'Andorra', 'Angola', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'USA', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];


let countryNames = ['Australia','Canada','France','German','Newzeland','Spain','UK','USA','Portugal','Sweden'];

let stateNames = ['ALBERTA', 'BRITISH COLUMBIA', 'MANITOBA', 'NEW BRUNSWICK', 'NEWFOUNDLAND', 'LABRADOR', 'NORTHWEST TERRITORIES', 'NOVA SCOTIA', 'NUNAVUT', 'ONTARIO', 'PRINCE EDWARD ISLAND', 'QUEBEC', 'SASKATCHEWAN', 'YUKON', 'ALBERTA', 'BRITISH COLUMBIA', 'MANITOBA', 'NEW BRUNSWICK', 'NEWFOUNDLAND AND LABRADOR', 'NORTHWEST TERRITORIES', 'NOVA SCOTIA', 'NUNAVUT', 'ONTARIO', 'PRINCE EDWARD ISLAND', 'QUEBEC', 'SASKATCHEWAN', 'YUKON'];


let industryNames = ['CANNABIST', 'CHRIOPRACTOR', 'DENTAL', 'E-COMMERCE', 'FOOTBALL CLUB', 'HVAC', 'LAW FIRM', 'OPTOMETRY', 'PHYSIOTHERAPY', 'PLASTIC SURGEONS', 'REAL ESTATE', 'VETERINARIANS', 'ALBERTA', 'BRITISH COLUMBIA', 'MANITOBA', 'NEW BRUNSWICK', 'NEWFOUNDLAND AND LABRADOR', 'NORTHWEST TERRITORIES', 'NOVA SCOTIA', 'NUNAVUT', 'ONTARIO', 'PRINCE EDWARD ISLAND', 'QUEBEC', 'SASKATCHEWAN', 'YUKON'];

countryNames.sort();
stateNames.sort();
industryNames.sort();


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


// for (let i = 0; i < stateNames.length; i++) {

//     if (stateNames[i].length > 20) {
//         stateNames[i] = stateNames[i].slice(0, 20) + "...";
//     }

//     let boxDiv = document.createElement("button");
//     boxDiv.className = "btn my-1 btn_city";
//     boxDiv.textContent = stateNames[i];
//     boxDiv.setAttribute('id', stateNames[i]);
//     state_Name_ID.appendChild(boxDiv);
// }



for (let i = 0; i < industryNames.length; i++) {

    if (industryNames[i].length > 20) {
        industryNames[i] = industryNames[i].slice(0, 20) + "...";
    }
    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = industryNames[i];
    boxDiv.setAttribute('id', industryNames[i]);
    industry_Name_ID.appendChild(boxDiv);
}