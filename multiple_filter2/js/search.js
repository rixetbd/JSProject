let countryInput = document.getElementById('countryInput');
let cityInput = document.getElementById('cityInput');
let industryInput = document.getElementById('industryInput');

countryInput.addEventListener('keyup', function () {
    countrySearch();
});

const countrySearch = () => {
    var cunValue = countryInput.value.toUpperCase();
    country_Name_ID.textContent = "";
    for (let i = 0; i < countryNames.length; i++) {
        let valuuu = countryNames[i];
        if (valuuu.toUpperCase().indexOf(cunValue) > -1) {
            let boxDiv = document.createElement("button");
            boxDiv.className = "btn my-1 btn_city";
            boxDiv.textContent = countryNames[i];
            boxDiv.setAttribute('id', countryNames[i]);
            country_Name_ID.appendChild(boxDiv);
        }
    }
}

cityInput.addEventListener('keyup', function () {
    citySearch();
});

const citySearch = () => {
    var cunValue = cityInput.value.toUpperCase();
    state_Name_ID.textContent = "";
    for (let i = 0; i < stateNames.length; i++) {
        let valuuu = stateNames[i];
        if (valuuu.toUpperCase().indexOf(cunValue) > -1) {
            let boxDiv = document.createElement("button");
            boxDiv.className = "btn my-1 btn_city";
            boxDiv.textContent = stateNames[i];
            boxDiv.setAttribute('id', stateNames[i]);
            state_Name_ID.appendChild(boxDiv);
        }
    }
}

industryInput.addEventListener('keyup', function () {
    industrySearch();
});

const industrySearch = () => {
    var cunValue = industryInput.value.toUpperCase();
    industry_Name_ID.textContent = "";
    for (let i = 0; i < industryNames.length; i++) {
        let valuuu = industryNames[i];
        if (valuuu.toUpperCase().indexOf(cunValue) > -1) {
            let boxDiv = document.createElement("button");
            boxDiv.className = "btn my-1 btn_city";
            boxDiv.textContent = industryNames[i];
            boxDiv.setAttribute('id', industryNames[i]);
            industry_Name_ID.appendChild(boxDiv);
        }
    }
}