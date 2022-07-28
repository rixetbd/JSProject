
let countryNames = ['Canada',  'France', 'USA', 'Germany'];
let stateNames = ['Canada',  'France', 'USA', 'Germany'];
let industryNames = ['Canada',  'France', 'USA', 'Germany'];


let country_Name_ID = document.getElementById('country_Name_ID');
let state_Name_ID = document.getElementById('state_Name_ID');
let industry_Name_ID = document.getElementById('industry_Name_ID');



for(let i = 0; i < countryNames.length; i++ ){
    let boxDiv = document.createElement("div");
    let country_box = document.createElement("div");
    boxDiv.className = "col-md-3";
    country_box.className = "country_box";
    country_box.setAttribute('id', countryNames[i]);
    country_Name_ID.appendChild(boxDiv);
    boxDiv.appendChild(country_box);
    country_box.textContent = countryNames[i];
}

for(let i = 0; i < stateNames.length; i++ ){
    let boxDiv = document.createElement("div");
    let country_box = document.createElement("div");
    boxDiv.className = "col-md-2";
    country_box.className = "state_box";
    country_box.setAttribute('id', countryNames[i]);
    state_Name_ID.appendChild(boxDiv);
    boxDiv.appendChild(country_box);
    country_box.textContent = countryNames[i];
}

for(let i = 0; i < industryNames.length; i++ ){
    let boxDiv = document.createElement("div");
    let country_box = document.createElement("div");
    boxDiv.className = "col-md-2";
    country_box.className = "state_box";
    country_box.setAttribute('id', countryNames[i]);
    industry_Name_ID.appendChild(boxDiv);
    boxDiv.appendChild(country_box);
    country_box.textContent = countryNames[i];
}