for (let i = 0; i < AustraliaCity.length; i++) {

    if (AustraliaCity[i].length > 20) {
        AustraliaCity[i] = AustraliaCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = AustraliaCity[i];
    boxDiv.setAttribute('id', AustraliaCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < CanadaCity.length; i++) {

    if (CanadaCity[i].length > 20) {
        CanadaCity[i] = CanadaCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = CanadaCity[i];
    boxDiv.setAttribute('id', CanadaCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < FranchCity.length; i++) {

    if (FranchCity[i].length > 20) {
        FranchCity[i] = FranchCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = FranchCity[i];
    boxDiv.setAttribute('id', FranchCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < GarmanCity.length; i++) {

    if (GarmanCity[i].length > 20) {
        GarmanCity[i] = GarmanCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = GarmanCity[i];
    boxDiv.setAttribute('id', GarmanCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < SpainCity.length; i++) {

    if (SpainCity[i].length > 20) {
        SpainCity[i] = SpainCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = SpainCity[i];
    boxDiv.setAttribute('id', SpainCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < UKCity.length; i++) {

    if (UKCity[i].length > 20) {
        UKCity[i] = UKCity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = UKCity[i];
    boxDiv.setAttribute('id', UKCity[i]);
    state_Name_ID.appendChild(boxDiv);
}
for (let i = 0; i < USACity.length; i++) {

    if (USACity[i].length > 20) {
        USACity[i] = USACity[i].slice(0, 20) + "...";
    }

    let boxDiv = document.createElement("button");
    boxDiv.className = "btn my-1 btn_city";
    boxDiv.textContent = USACity[i];
    boxDiv.setAttribute('id', USACity[i]);
    state_Name_ID.appendChild(boxDiv);
}

// let allCItyName = [AustraliaCity,CanadaCity, FranchCity, GarmanCity, SpainCity, UKCity, USACity];

// for (let i = 0; i < allCItyName.length; i++) {

//     for (let i = 0; i < allCItyName[i].length; i++) {
//         // if (AustraliaCity[i].length > 20) {
//         //     AustraliaCity[i] = AustraliaCity[i].slice(0, 20) + "...";
//         // }
    
//         let boxDiv = document.createElement("button");
//         boxDiv.className = "btn my-1 btn_city";
//         boxDiv.textContent = AustraliaCity[i][i];
//         boxDiv.setAttribute('id', AustraliaCity[i][i]);
//         state_Name_ID.appendChild(boxDiv);
//     }

// }