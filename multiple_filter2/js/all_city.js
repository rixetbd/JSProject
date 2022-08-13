// let USACity = [ 'Visalia', 'McAllen'];

let USACity = ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San Francisco', 'Seattle', 'Denver', 'Washington', 'Nashville', 'Oklahoma City', 'Boston', 'El Paso', 'Portland', 'Las Vegas', 'Memphis', 'Detroit', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Fresno', 'Tucson', 'Sacramento', 'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Colorado Springs', 'Raleigh', 'Long Beach', 'Virginia Beach', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Bakersfield', 'Wichita', 'Tampa', 'New Orleans', 'Cleveland', 'Honolulu', 'Anaheim','Louisville', 'Henderson', 'Lexington', 'Irvine', 'Stockton', 'Orlando', 'Corpus Christi', 'Newark', 'Riverside', 'St. Paul', 'Cincinnati', 'San Juan', 'Santa Ana', 'Greensboro', 'Pittsburgh', 'Jersey City', 'St. Louis', 'Lincoln', 'Durham', 'Anchorage', 'Plano', 'Chandler', 'Chula Vista', 'Buffalo', 'Gilbert', 'Madison', 'Reno', 'North Las Vegas', 'Toledo', 'Fort Wayne', 'Irving', 'Lubbock', 'St. Petersburg', 'Laredo', 'Chesapeake', 'Winston-Salem', 'Garland', 'Scottsdale', 'Arlington', 'Enterprise', 'Boise', 'Santa Clarita', 'Norfolk', 'Fremont', 'Spokane', 'Richmond', 'Baton Rouge', 'San Bernardino', 'Tacoma', 'Spring Valley', 'Hialeah', 'Huntsville', 'Modesto', 'Frisco', 'Des Moines', 'Yonkers', 'Port St. Lucie', 'Moreno Valley', 'Worcester', 'Rochester', 'Fontana', 'Fayetteville', 'Sunrise Manor', 'McKinney', 'Little Rock', 'Augusta', 'Oxnard', 'Salt Lake City', 'Amarillo', 'Overland Park', 'Cape Coral', 'Grand Rapids', 'Huntington Beach', 'Sioux Falls', 'Grand Prairie', 'Montgomery', 'Tallahassee', 'Birmingham', 'Peoria', 'Glendale', 'Vancouver', 'Providence', 'Knoxville', 'Brownsville', 'Akron', 'Newport News', 'Fort Lauderdale', 'Mobile', 'Shreveport', 'Paradise', 'Tempe', 'Chattanooga', 'Cary', 'Eugene',  'Elk Grove', 'Santa Rosa', 'Salem', 'Ontario', 'Aurora', 'Lancaster', 'Rancho Cucamonga', 'Oceanside', 'Fort Collins', 'Pembroke Pines', 'Clarksville', 'Palmdale', 'Garden Grove', 'Springfield', 'Hayward', 'Salinas', 'Alexandria', 'Paterson', 'Murfreesboro', 'Bayamon', 'Sunnyvale', 'Lakewood', 'Killeen', 'Corona', 'Bellevue', 'Charleston', 'Hollywood', 'Roseville', 'Pasadena', 'Escondido', 'Pomona', 'Mesquite', 'Naperville', 'Joliet', 'Savannah', 'Jackson', 'Bridgeport', 'Syracuse', 'Surprise', 'Rockford', 'Torrance', 'Thornton', 'Kent', 'Fullerton', 'Denton', 'Visalia'];

let AustraliaCity = ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast–Tweed Heads', 'Newcastle–Maitland', 'Canberra–Queanbeyan', 'Sunshine Coast', 'Central Coast', 'Wollongong', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Toowoomba', 'Darwin', 'Ballarat', 'Bendigo', 'Albury–Wodonga', 'Launceston', 'Mackay', 'Rockhampton', 'Melton', 'Bunbury', 'Coffs Harbour', 'Bundaberg', 'Wagga Wagga', 'Hervey Bay', 'Shepparton–Mooroopna', 'Mildura–Wentworth', 'Port Macquarie', 'Gladstone–Tannum Sands', 'Tamworth', 'Traralgon–Morwell', 'Warragul–Drouin', 'Bowral–Mittagong', 'Orange', 'Busselton', 'Dubbo', 'Nowra–Bomaderry', 'Bathurst', 'Geraldton', 'Warrnambool', 'Albany'];


let allCity = USACity.concat(AustraliaCity);
AustraliaCity.sort();
USACity.sort();
allCity.sort();


let countryBTN = country_Name_ID.getElementsByTagName('button');


for (let i = 0; i < countryBTN.length; i++) {
    let cnID = document.getElementById(countryBTN[i].id);
    cnID.addEventListener('click', function(){
        if(cnID.id == 'Australia'){
 
            state_Name_ID.textContent = '';

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
        }
        
    });
}

// countryBTN.addEventListener('click', function(){

//     console.log("countryBTN.innerText");
//     console.log(this.innerText);

    // if(countryBTN.innerText == 'USA'){
    //     state_Name_ID.appendChild(' ');
    //     for (let i = 0; i < USACity.length; i++) {
    //         if (USACity[i].length > 20) {
    //             USACity[i] = USACity[i].slice(0, 20) + "...";
    //         }
        
    //         let boxDiv = document.createElement("button");
    //         boxDiv.className = "btn my-1 btn_city";
    //         boxDiv.textContent = USACity[i];
    //         boxDiv.setAttribute('id', USACity[i]);
    //         state_Name_ID.appendChild(boxDiv);
    //     }
    // }
    
// });

// if(countryBTN)