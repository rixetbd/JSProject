let countryNames = ['Canada', 'France', 'Germany', 'USA'];
// let stateNames = ['ALBERTA','BRITISH COLUMBIA','MANITOBA','NEW BRUNSWICK','NEWFOUNDLAND AND LABRADOR','NORTHWEST TERRITORIES','NOVA SCOTIA','NUNAVUT','ONTARIO','PRINCE EDWARD ISLAND','QUEBEC','SASKATCHEWAN','YUKON'];
let industryNames = ['CANNABIST', 'CHRIOPRACTOR', 'DENTAL', 'E-COMMERCE', 'FOOTBALL CLUB', 'HVAC', 'LAW FIRM', 'OPTOMETRY', 'PHYSIOTHERAPY', 'PLASTIC SURGEONS', 'REAL ESTATE', 'VETERINARIANS'];


let country_Name_ID = document.getElementById('country_Name_ID');
// let state_Name_ID = document.getElementById('state_Name_ID');
let industry_Name_ID = document.getElementById('industry_Name_ID');



for (let i = 0; i < countryNames.length; i++) {
    let boxDiv = document.createElement("div");
    let country_box = document.createElement("div");
    let country_Name = document.createElement("div");
    boxDiv.className = "col-md-3";
    country_box.className = "country_box";
    country_Name.className = "industry_box_overly";
    country_Name.setAttribute('id', countryNames[i]);
    country_box.style.backgroundImage = `url('img/Country_${countryNames[i]}.jpg')`;
    country_Name_ID.appendChild(boxDiv);
    boxDiv.appendChild(country_box);
    country_box.appendChild(country_Name);
    country_Name.textContent = countryNames[i];
}

// for (let i = 0; i < stateNames.length; i++) {
//     let boxDiv = document.createElement("div");
//     let country_box = document.createElement("div");
//     boxDiv.className = "col-md-2";
//     country_box.className = "state_box";
//     country_box.setAttribute('id', stateNames[i]);
//     state_Name_ID.appendChild(boxDiv);
//     boxDiv.appendChild(country_box);
//     country_box.textContent = stateNames[i];
// }

for (let i = 0; i < industryNames.length; i++) {
    let boxDiv3 = document.createElement("div");
    let industry_box = document.createElement("div");
    let industry_Name = document.createElement("div");
    boxDiv3.className = "col-md-2";
    industry_box.className = "industry_box";
    industry_Name.className = "industry_box_overly";
    industry_Name.setAttribute('id', industryNames[i]);
    industry_box.style.backgroundImage = `url('img/${industryNames[i]}.jpg')`;
    industry_Name_ID.appendChild(boxDiv3);
    boxDiv3.appendChild(industry_box);
    industry_box.appendChild(industry_Name);
    industry_Name.textContent = industryNames[i];
}

$("#country_Name_ID div").click(function (event) {
    let idName = event.target.id;
    localStorage.setItem("idName", idName);
    $('#industry').removeClass('d-none');
});

$("#industry_Name_ID div div div").click(function (event) {
    let industry = event.target.id;
    localStorage.setItem("industry", industry);
    $('#submit').removeClass('disabled');

    // let AllClass = document.querySelectorAll('industry_box_overly');
    // AllClass.style.backgroundColor = "rgba(0,0,0,0.5)";

    let idAct = document.getElementById(industry); 
    idAct.style.backgroundColor = "rgb(0 0 0 / 11%)";


    $('#myTable_filter input').val(industry).keyup();

});

$('#submit').click(function(){
    hello ();
});


function tableShowHide(idName, industry) {
    $('table').addClass('d-none');
    $(`#tablepress-${idName}_${industry}_wrapper`).removeClass('d-none');
}

function localVar(){
    idName = localStorage.getItem("idName");
    industry = localStorage.getItem("industry");
}

function hello (){
    localVar();
    console.log(idName);
    console.log(industry);
    tableShowHide(idName, industry);
}

// autocall();

// // function autocall(){
//     idName = localStorage.getItem("idName");
//     industry = localStorage.getItem("industry");
// // }


$('.country_box').click(function(e){
    $('.country_box').removeClass('tomato_code');
    $(this).addClass('tomato_code');
});

$('.industry_box').click(function(e){
    $('.industry_box').removeClass('tomato_code');
    $(this).addClass('tomato_code');
});



if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    localStorage.clear();
}

$('#reset').click(function(){
    $('#industry').addClass('d-none');
    $('#submit').addClass('disabled');
    $('.country_box').removeClass('tomato_code');
    $('.industry_box').removeClass('tomato_code');
    localStorage.clear();
    $('#myTable_filter input').val("").clear();
});

setInterval(function(){
    localVar();
    $('#data').html(`${idName} Leads with ${industry}`);
})