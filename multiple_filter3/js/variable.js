const CityArr = [ {
        AustraliaCity:[" " ,'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast–Tweed Heads', 'Newcastle–Maitland', 'Canberra–Queanbeyan', 'Sunshine Coast', 'Central Coast', 'Wollongong', 'Geelong', 'Hobart', 'Townsville', 'Cairns', 'Toowoomba', 'Darwin', 'Ballarat', 'Bendigo', 'Albury–Wodonga', 'Launceston', 'Mackay', 'Rockhampton', 'Melton', 'Bunbury', 'Coffs Harbour', 'Bundaberg', 'Wagga Wagga', 'Hervey Bay', 'Shepparton–Mooroopna', 'Mildura–Wentworth', 'Port Macquarie', 'Gladstone–Tannum Sands', 'Tamworth', 'Traralgon–Morwell', 'Warragul–Drouin', 'Bowral–Mittagong', 'Orange', 'Busselton', 'Dubbo', 'Nowra–Bomaderry', 'Bathurst', 'Geraldton', 'Warrnambool', 'Albany'],
    },
    {
        CanadaCity:['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa–Gatineau', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener', 'London', 'Victoria', 'Halifax', 'Oshawa', 'Windsor', 'Saskatoon', 'St. Catharines - Niagara Falls', 'Regina', 'St. Johns', 'Kelowna', 'Barrie', 'Sherbrooke', 'Guelph', 'Kanata', 'Abbotsford', 'Trois-Rivières', 'Kingston', 'Milton', 'Moncton', 'White Rock', 'Nanaimo', 'Brantford', 'Chicoutimi - Jonquière', 'Saint-Jérôme', 'Red Deer', 'Thunder Bay', 'Lethbridge', 'Kamloops', 'Sudbury', 'Saint-Jean-sur-Richelieu', 'Peterborough', 'Chilliwack', 'Châteauguay', 'Belleville', 'Sarnia', 'Airdrie', 'Drummondville', 'Welland - Pelham', 'Fort McMurray', 'Prince George', 'Sault Ste. Marie', 'Fredericton', 'Saint John', 'Medicine Hat', 'Grande Prairie', 'Granby', 'Bowmanville - Newcastle', 'Beloeil', 'Charlottetown', 'Vernon', 'North Bay', 'Saint-Hyacinthe', 'Brandon', 'Joliette', 'Courtenay', 'Cornwall', 'Victoriaville', 'Woodstock', 'St. Thomas']
    },{
        FranchCity:['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Montpellier', 'Strasbourg', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Toulon', 'Saint-Étienne', 'Le Havre', 'Grenoble', 'Dijon', 'Angers', 'Saint-Denis', 'Villeurbanne', 'Nîmes', 'Clermont-Ferrand', 'Aix-en-Provence', 'Le Mans', 'Brest', 'Tours', 'Amiens', 'Limoges', 'Annecy', 'Boulogne-Billancourt', 'Perpignan', 'Metz', 'Besançon', 'Orléans', 'Saint-Denis', 'Rouen', 'Montreuil', 'Argenteuil', 'Mulhouse', 'Caen', 'Nancy', 'Saint-Paul', 'Roubaix', 'Tourcoing', 'Nanterre', 'Vitry-sur-Seine', 'Créteil', 'Avignon', 'Poitiers', 'Aubervilliers', 'Asnières-sur-Seine', 'Aulnay-sous-Bois', 'Colombes', 'Dunkirk', 'Saint-Pierre', 'Versailles', 'Courbevoie', 'Le Tampon', 'Cherbourg-en-Cotentin', 'Rueil-Malmaison', 'Béziers', 'La Rochelle', 'Champigny-sur-Marne', 'Fort-de-France', 'Pau', 'Saint-Maur-des-Fossés', 'Cannes', 'Antibes', 'Calais', 'Drancy', 'Mérignac', 'Mamoudzou', 'Saint-Nazaire', 'Ajaccio', 'Colmar', 'Issy-les-Moulineaux', 'Noisy-le-Grand', 'Vénissieux', 'Levallois-Perret', 'Cergy', 'Cayenne', 'Pessac', 'Valence', 'Bourges', 'Ivry-sur-Seine', 'Quimper', 'Clichy', 'La Seyne-sur-Mer', 'Antony', 'Troyes', 'Villeneuve-d"Ascq', 'Montauban', 'Pantin', 'Neuilly-sur-Seine', 'Sarcelles', 'Niort', 'Chambéry', 'Le Blanc-Mesnil', 'Lorient', 'Beauvais']
    },{
        GarmanCity : ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt am Main', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig', 'Bremen', 'Dresden', 'Hanover (Hannover)', 'Nuremberg (Nürnberg)', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster', 'Karlsruhe', 'Mannheim', 'Augsburg', 'Wiesbaden', 'Gelsenkirchen', 'Mönchengladbach', 'Braunschweig', 'Chemnitz', 'Kiel', 'Aachen', 'Halle (Saale)', 'Magdeburg', 'Freiburg im Breisgau', 'Krefeld', 'Lübeck', 'Oberhausen', 'Erfurt', 'Mainz', 'Rostock', 'Kassel', 'Hagen', 'Hamm', 'Saarbrücken', 'Mülheim an der Ruhr', 'Potsdam', 'Ludwigshafen am Rhein', 'Oldenburg', 'Leverkusen', 'Osnabrück', 'Solingen', 'Heidelberg', 'Herne', 'Neuss', 'Darmstadt', 'Paderborn', 'Regensburg', 'Ingolstadt', 'Würzburg', 'Fürth', 'Wolfsburg', 'Offenbach am Main', 'Ulm', 'Heilbronn', 'Pforzheim', 'Göttingen', 'Bottrop', 'Trier', 'Recklinghausen', 'Reutlingen', 'Bremerhaven', 'Koblenz', 'Bergisch Gladbach', 'Jena', 'Remscheid', 'Erlangen', 'Moers', 'Siegen', 'Hildesheim', 'Salzgitter']
    },{
        SpainCity : ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Las Palmas de Gran Canaria', 'Bilbao', 'Murcia', 'Valladolid', 'Córdoba', 'Palma de Mallorca', 'Vigo', 'Alicante', 'Gijón', 'Hospital et de Llobregat', 'Granada', 'La Coruña', 'Vitoria-Gasteiz', 'Badalona', 'Santa Cruzde (Tenerife)', 'Oviedo', 'Móstoles', 'Elche', 'Sabadell', 'Santander', 'Jérez de la Frontera', 'San Sebastián', 'Leganés', 'Almería', 'Cartagena', 'Tarrasa', 'Alcaláde Henares', 'Fuenlabrada', 'Pamplona', 'Burgos', 'Salamanca', 'Albacete', 'León', 'Getafe', 'Alcorcón', 'Cádiz', 'Huelva', 'Castellón de la Plana', 'Badajoz', 'Logroño', 'Santa Coloma de Gramanet', 'La Laguna', 'Lleida', 'Tarragona']
    },{
        UKCity : ['London', 'Birmingham', 'Liverpool', 'Sheffield', 'Bristol', 'Glasgow', 'Leicester', 'Edinburgh', 'Leeds', 'Cardiff', 'Manchester', 'Stoke-on-Trent', 'Coventry', 'Sunderland', 'Brent', 'Birkenhead', 'Nottingham', 'Islington', 'Reading', 'Kingston upon Hull', 'Preston', 'Newport', 'Swansea', 'Bradford', 'Southend-on-Sea', 'Belfast', 'Derby', 'Plymouth', 'Luton', 'Wolverhampton', 'City of Westminster', 'Southampton', 'Blackpool', 'Milton Keynes', 'Bexley', 'Northampton', 'Archway', 'Norwich', 'Dudley', 'Aberdeen', 'Portsmouth', 'Newcastle upon Tyne', 'Sutton', 'Swindon', 'Crawley', 'Ipswich', 'Wigan', 'Croydon', 'Walsall', 'Mansfield', 'Oxford', 'Warrington', 'Slough', 'Bournemouth', 'Peterborough', 'Cambridge', 'Doncaster', 'York', 'Poole', 'Gloucester', 'Burnley', 'Huddersfield', 'Telford', 'Dundee', 'Blackburn', 'Basildon', 'Middlesbrough', 'Bolton', 'Stockport', 'Brighton', 'West Bromwich', 'Grimsby', 'Hastings', 'High Wycombe', 'Tottenham', 'Newcastle under Lyme', 'Watford', 'Saint Peters', 'Burton upon Trent', 'Colchester', 'Eastbourne', 'Exeter', 'Rotherham', 'Cheltenham', 'Lincoln', 'Chesterfield', 'Chelmsford', 'Mendip', 'Walthamstow', 'Dagenham', 'Basingstoke', 'Maidstone', 'Sutton Coldfield', 'Bedford', 'Oldham', 'Enfield Town', 'Woking', 'St Helens', 'Worcester']
    },{
        USACity : ['New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San Francisco', 'Seattle', 'Denver', 'Washington', 'Nashville', 'Oklahoma City', 'Boston', 'El Paso', 'Portland', 'Las Vegas', 'Memphis', 'Detroit', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Fresno', 'Tucson', 'Sacramento', 'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Colorado Springs', 'Raleigh', 'Long Beach', 'Virginia Beach', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Bakersfield', 'Wichita', 'Tampa', 'New Orleans', 'Cleveland', 'Honolulu', 'Anaheim','Louisville', 'Henderson', 'Lexington', 'Irvine', 'Stockton', 'Orlando', 'Corpus Christi', 'Newark', 'Riverside', 'St. Paul', 'Cincinnati', 'San Juan', 'Santa Ana', 'Greensboro', 'Pittsburgh', 'Jersey City', 'St. Louis', 'Lincoln', 'Durham', 'Anchorage', 'Plano', 'Chandler', 'Chula Vista', 'Buffalo', 'Gilbert', 'Madison', 'Reno', 'North Las Vegas', 'Toledo', 'Fort Wayne', 'Irving', 'Lubbock', 'St. Petersburg', 'Laredo', 'Chesapeake', 'Winston-Salem', 'Garland', 'Scottsdale', 'Arlington', 'Enterprise', 'Boise', 'Santa Clarita', 'Norfolk', 'Fremont', 'Spokane', 'Richmond', 'Baton Rouge', 'San Bernardino', 'Tacoma', 'Spring Valley', 'Hialeah', 'Huntsville', 'Modesto', 'Frisco', 'Des Moines', 'Yonkers', 'Moreno Valley', 'Worcester', 'Rochester', 'Fontana', 'Fayetteville', 'Sunrise Manor', 'McKinney', 'Little Rock', 'Augusta', 'Oxnard', 'Salt Lake City', 'Amarillo', 'Overland Park', 'Cape Coral', 'Grand Rapids', 'Huntington Beach', 'Sioux Falls', 'Grand Prairie', 'Montgomery', 'Tallahassee', 'Birmingham', 'Peoria', 'Glendale', 'Vancouver', 'Providence', 'Knoxville', 'Brownsville', 'Akron', 'Newport News', 'Fort Lauderdale', 'Mobile', 'Shreveport', 'Paradise', 'Tempe', 'Chattanooga', 'Cary', 'Eugene',  'Elk Grove', 'Santa Rosa', 'Salem', 'Ontario', 'Aurora', 'Lancaster', 'Rancho Cucamonga', 'Oceanside', 'Fort Collins', 'Pembroke Pines', 'Clarksville', 'Palmdale', 'Garden Grove', 'Springfield', 'Hayward', 'Salinas', 'Alexandria', 'Paterson', 'Murfreesboro', 'Bayamon', 'Sunnyvale', 'Lakewood', 'Killeen', 'Corona', 'Bellevue', 'Charleston', 'Hollywood', 'Roseville', 'Pasadena', 'Escondido', 'Pomona', 'Mesquite', 'Naperville', 'Joliet', 'Savannah', 'Jackson', 'Bridgeport', 'Syracuse', 'Surprise', 'Rockford', 'Torrance', 'Thornton', 'Kent', 'Fullerton', 'Denton', 'Visalia']
    }
]

let stateNames =  CityArr[0].AustraliaCity.sort().concat(
                    CityArr[1].CanadaCity.sort(),
                    CityArr[2].FranchCity.sort(),
                    CityArr[3].GarmanCity.sort(),
                    CityArr[4].SpainCity.sort(),
                    CityArr[5].UKCity.sort(),
                    CityArr[6].USACity.sort()
                    ).sort();

let flagAddress = {
    Australia:"https://flagpedia.net/data/flags/icon/256x192/au.webp",
    Canada:"https://flagpedia.net/data/flags/icon/256x192/ca.webp",
    France:"https://flagpedia.net/data/flags/icon/256x192/fr.webp",
    German:"https://flagpedia.net/data/flags/icon/256x192/de.webp",
    Newzeland:"https://flagpedia.net/data/flags/icon/256x192/nz.webp",
    Portugal:"https://flagpedia.net/data/flags/icon/256x192/pt.webp",
    Spain:"https://flagpedia.net/data/flags/icon/256x192/es.webp",
    Sweden:"https://flagpedia.net/data/flags/icon/256x192/se.webp",
    UK:"https://flagpedia.net/data/flags/icon/256x192/gb.webp",
    USA:"https://flagpedia.net/data/flags/icon/256x192/gb.webp",
};


let countryNames = [" ",'Australia','Canada','France','German','Newzeland','Spain','UK','USA','Portugal','Sweden'];
let industryNames = [" " , 'CANNABIST', 'CHRIOPRACTOR', 'DENTAL', 'E-COMMERCE', 'FOOTBALL CLUB', 'HVAC', 'LAW FIRM', 'OPTOMETRY', 'PHYSIOTHERAPY', 'PLASTIC SURGEONS', 'REAL ESTATE', 'VETERINARIANS'];

countryNames.sort();
industryNames.sort();

let country_Name_ID = document.getElementById('country_Name_ID');
let state_Name_ID = document.getElementById('state_Name_ID');
let industry_Name_ID = document.getElementById('industry_Name_ID');
let showCountryFlag = document.getElementById('showCountryFlag');
let showCountryName = document.getElementById('showCountryName');
let showCityName = document.getElementById('showCityName');
let showIndustryName = document.getElementById('showIndustryName');

// $('#country_Name_ID').nextElementSibling.addClass('d-none');

$('#filter').click(function(){
let countryName = $('#country_Name_ID').select2().val();
let cityName = $('#state_Name_ID').select2().val();
let industryName = $('#industry_Name_ID').select2().val();

    if(countryName != " " && cityName != " " && industryName != " "){    
        showCountryFlag.setAttribute('src', flagAddress[countryName]);
        showCountryName.textContent = countryName;
        showCityName.textContent = cityName;
        showIndustryName.textContent = industryName;
        // $('#myTable_filter input').val(cityName).keyup();
        // $('#myTable_filter input').click(this);
    }

    show_hide_column();
    var lastColCellsOnly = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(8)', 'table'), 0); 
    lastColCellsOnly.forEach(function (cell) { // iterate and hide
        cell.textContent = cityName;
    });
})
$('#reset').click(function(){
    $('#country_Name_ID').val(null).trigger('change');
    $('#state_Name_ID').val(null).trigger('change');
    $('#industry_Name_ID').val(null).trigger('change');

    showCountryFlag.setAttribute('src', "https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/facebook-skeleton.png");
    showCountryName.textContent = "N/A";
    showCityName.textContent = "N/A";
    showIndustryName.textContent = "N/A";
    $('#myTable_filter input').val('').keyup();
})

$('#CONCON').click(function(){
    
})

for (let i = 0; i < countryNames.length; i++) {
    let boxDiv = document.createElement("option");
    // boxDiv.className = "btn my-1 btn_city";
    boxDiv.innerHTML = countryNames[i];
    boxDiv.setAttribute('value', countryNames[i]);
    country_Name_ID.appendChild(boxDiv);
}


setInterval(function(){
    let countryName = $('#country_Name_ID').val();

    if(countryName == "Australia" && cityName != " "){
        let cities = CityArr[0].AustraliaCity;
        cityLoad(cities);
    }else if(countryName == "Canada" && cityName != " "){
        let cities = CityArr[1].CanadaCity;
        cityLoad(cities);
    }else if(countryName == "France" && cityName != " "){
        let cities = CityArr[2].FranchCity;
        cityLoad(cities);
    }else if(countryName == "German" && cityName != " "){
        let cities = CityArr[3].GarmanCity;
        cityLoad(cities);
    }else if(countryName == "Newzeland" && cityName != " "){
        let cities = CityArr[0].SpainCity;
        cityLoad(cities);
    }else if(countryName == "Spain" && cityName != " "){
        let cities = CityArr[4].SpainCity;
        cityLoad(cities);
    }else if(countryName == "UK" && cityName != " "){
        let cities = CityArr[5].UKCity;
        cityLoad(cities);
    }else if(countryName == "USA" && cityName != " "){
        let cities = CityArr[6].USACity;
        cityLoad(cities);
    }else if(countryName == "Portugal" && cityName != " "){
        let cities = CityArr[0].AustraliaCity;
        cityLoad(cities);
    }else if(countryName == "Sweden" && cityName != " "){
        let cities = CityArr[0].AustraliaCity;
        cityLoad(cities);
    }else{
        let cities = stateNames;
    }
}, 1000)


function cityLoad(cities){
    state_Name_ID.textContent = " ";
    for (let i = 0; i < cities.length; i++) {
        let boxDiv = document.createElement("option");
        boxDiv.textContent = cities[i];
        boxDiv.setAttribute('value', cities[i]);
        state_Name_ID.appendChild(boxDiv);
    }
}



for (let i = 0; i < stateNames.length; i++) {
    let boxDiv = document.createElement("option");
    boxDiv.textContent = stateNames[i];
    boxDiv.setAttribute('value', stateNames[i]);
    state_Name_ID.appendChild(boxDiv);
}



for (let i = 0; i < industryNames.length; i++) {
    if (industryNames[i].length > 20) {
        industryNames[i] = industryNames[i].slice(0, 20) + "...";
    }
    let boxDiv = document.createElement("option");
    boxDiv.textContent = industryNames[i];
    boxDiv.setAttribute('value', industryNames[i]);
    industry_Name_ID.appendChild(boxDiv);
}