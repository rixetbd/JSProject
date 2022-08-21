
const CityArr = [{
        AustraliaCity: [" ", 'Adelaide','Albany','Albury–Wodonga','Ballarat','Bathurst','Bendigo','Bowral–Mittagong','Brisbane','Bunbury','Bundaberg','Busselton','Cairns','Canberra–Queanbeyan','Central Coast','Coffs Harbour','Darwin','Dubbo','Geelong','Geraldton','Gladstone–Tannum Sands','Gold Coast–Tweed Heads','Hervey Bay','Hobart','Launceston','Mackay','Melbourne','Melton','Mildura–Wentworth','Newcastle–Maitland','Nowra–Bomaderry','Orange','Perth','Port Macquarie','Rockhampton','Shepparton–Mooroopna','Sunshine Coast','Sydney','Tamworth','Toowoomba','Townsville','Traralgon–Morwell','Wagga Wagga','Warragul–Drouin','Warrnambool','Wollongong'],
    },
    {
        CanadaCity: [" ", 'Abbotsford', 'Airdrie', 'Barrie', 'Belleville', 'Beloeil', 'Bowmanville-Newcastle', 'Brandon', 'Brantford', 'Calgary', 'Charlottetown', 'Châteauguay', 'Chicoutimi-Jonquière', 'Chilliwack', 'Cornwall', 'Courtenay', 'Drummondville', 'Edmonton', 'FortMcMurray', 'Fredericton', 'Granby', 'GrandePrairie', 'Guelph', 'Halifax', 'Hamilton', 'Joliette', 'Kamloops', 'Kanata', 'Kelowna', 'Kingston', 'Kitchener', 'Lethbridge', 'London', 'MedicineHat', 'Milton', 'Moncton', 'Montreal', 'Nanaimo', 'NorthBay', 'Oshawa', 'Ottawa–Gatineau', 'Peterborough', 'PrinceGeorge', 'QuebecCity', 'RedDeer', 'Regina', 'Saint-Hyacinthe', 'Saint-Jean-sur-Richelieu', 'Saint-Jérôme', 'SaintJohn', 'Sarnia', 'Saskatoon', 'SaultSte.Marie', 'Sherbrooke', 'St.Catharines-NiagaraFalls', 'St.Johns', 'St.Thomas', 'Sudbury', 'ThunderBay', 'Toronto', 'Trois-Rivières', 'Vancouver', 'Vernon', 'Victoria', 'Victoriaville', 'Welland-Pelham', 'WhiteRock', 'Windsor', 'Winnipeg', 'Woodstock'],
    }, {
        FranchCity: [" ", 'Aix-en-Provence', 'Ajaccio', 'Amiens', 'Angers', 'Annecy', 'Antibes', 'Antony', 'Argenteuil', 'Asnières-sur-Seine', 'Aubervilliers', 'Aulnay-sous-Bois', 'Avignon', 'Beauvais', 'Besançon', 'Béziers', 'Bordeaux', 'Boulogne-Billancourt', 'Bourges', 'Brest', 'Caen', 'Calais', 'Cannes', 'Cayenne', 'Cergy', 'Chambéry', 'Champigny-sur-Marne', 'Cherbourg-en-Cotentin', 'Clermont-Ferrand', 'Clichy', 'Colmar', 'Colombes', 'Courbevoie', 'Créteil', 'Dijon', 'Drancy', 'Dunkirk', 'Fort-de-France', 'Grenoble', 'Issy-les-Moulineaux', 'Ivry-sur-Seine', 'LaRochelle', 'LaSeyne-sur-Mer', 'LeBlanc-Mesnil', 'LeHavre', 'LeMans', 'LeTampon', 'Levallois-Perret', 'Lille', 'Limoges', 'Lorient', 'Lyon', 'Mamoudzou', 'Marseille', 'Mérignac', 'Metz', 'Montauban', 'Montpellier', 'Montreuil', 'Mulhouse', 'Nancy', 'Nanterre', 'Nantes', 'Neuilly-sur-Seine', 'Nice', 'Nîmes', 'Niort', 'Noisy-le-Grand', 'Orléans', 'Pantin', 'Paris', 'Pau', 'Perpignan', 'Pessac', 'Poitiers', 'Quimper', 'Reims', 'Rennes', 'Roubaix', 'Rouen', 'Rueil-Malmaison', 'Saint-Denis', 'Saint-Denis', 'Saint-Étienne', 'Saint-Maur-des-Fossés', 'Saint-Nazaire', 'Saint-Paul', 'Saint-Pierre', 'Sarcelles', 'Strasbourg', 'Toulon', 'Toulouse', 'Tourcoing', 'Tours', 'Troyes', 'Valence', 'Vénissieux', 'Versailles', 'Villeneuve-d"Ascq', 'Villeurbanne', 'Vitry-sur-Seine'],
    }, {
        GarmanCity: [" ", 'Aachen', 'Augsburg', 'BergischGladbach', 'Berlin', 'Bielefeld', 'Bochum', 'Bonn', 'Bottrop', 'Braunschweig', 'Bremen', 'Bremerhaven', 'Chemnitz', 'Cologne', 'Darmstadt', 'Dortmund', 'Dresden', 'Duisburg', 'Düsseldorf', 'Erfurt', 'Erlangen', 'Essen', 'FrankfurtamMain', 'FreiburgimBreisgau', 'Fürth', 'Gelsenkirchen', 'Göttingen', 'Hagen', 'Halle', 'Hamburg', 'Hamm', 'Hanover(Hannover)', 'Heidelberg', 'Heilbronn', 'Herne', 'Hildesheim', 'Ingolstadt', 'Jena', 'Karlsruhe', 'Kassel', 'Kiel', 'Koblenz', 'Krefeld', 'Leipzig', 'Leverkusen', 'Lübeck', 'LudwigshafenamRhein', 'Magdeburg', 'Mainz', 'Mannheim', 'Moers', 'Mönchengladbach', 'MülheimanderRuhr', 'Munich', 'Münster', 'Neuss', 'Nuremberg(Nürnberg)', 'Oberhausen', 'OffenbachamMain', 'Oldenburg', 'Osnabrück', 'Paderborn', 'Pforzheim', 'Potsdam', 'Recklinghausen', 'Regensburg', 'Remscheid', 'Reutlingen', 'Rostock', 'Saarbrücken', 'Salzgitter', 'Siegen', 'Solingen', 'Stuttgart', 'Trier', 'Ulm', 'Wiesbaden', 'Wolfsburg', 'Wuppertal', 'Würzburg']
    }, {
        SpainCity: [" ", 'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Las Palmas de Gran Canaria', 'Bilbao', 'Murcia', 'Valladolid', 'Córdoba', 'Palma de Mallorca', 'Vigo', 'Alicante', 'Gijón', 'Hospital et de Llobregat', 'Granada', 'La Coruña', 'Vitoria-Gasteiz', 'Badalona', 'Santa Cruzde (Tenerife)', 'Oviedo', 'Móstoles', 'Elche', 'Sabadell', 'Santander', 'Jérez de la Frontera', 'San Sebastián', 'Leganés', 'Almería', 'Cartagena', 'Tarrasa', 'Alcaláde Henares', 'Fuenlabrada', 'Pamplona', 'Burgos', 'Salamanca', 'Albacete', 'León', 'Getafe', 'Alcorcón', 'Cádiz', 'Huelva', 'Castellón de la Plana', 'Badajoz', 'Logroño', 'Santa Coloma de Gramanet', 'La Laguna', 'Lleida', 'Tarragona']
    }, {
        UKCity: [" ", 'London', 'Birmingham', 'Liverpool', 'Sheffield', 'Bristol', 'Glasgow', 'Leicester', 'Edinburgh', 'Leeds', 'Cardiff', 'Manchester', 'Stoke-on-Trent', 'Coventry', 'Sunderland', 'Brent', 'Birkenhead', 'Nottingham', 'Islington', 'Reading', 'Kingston upon Hull', 'Preston', 'Newport', 'Swansea', 'Bradford', 'Southend-on-Sea', 'Belfast', 'Derby', 'Plymouth', 'Luton', 'Wolverhampton', 'City of Westminster', 'Southampton', 'Blackpool', 'Milton Keynes', 'Bexley', 'Northampton', 'Archway', 'Norwich', 'Dudley', 'Aberdeen', 'Portsmouth', 'Newcastle upon Tyne', 'Sutton', 'Swindon', 'Crawley', 'Ipswich', 'Wigan', 'Croydon', 'Walsall', 'Mansfield', 'Oxford', 'Warrington', 'Slough', 'Bournemouth', 'Peterborough', 'Cambridge', 'Doncaster', 'York', 'Poole', 'Gloucester', 'Burnley', 'Huddersfield', 'Telford', 'Dundee', 'Blackburn', 'Basildon', 'Middlesbrough', 'Bolton', 'Stockport', 'Brighton', 'West Bromwich', 'Grimsby', 'Hastings', 'High Wycombe', 'Tottenham', 'Newcastle under Lyme', 'Watford', 'Saint Peters', 'Burton upon Trent', 'Colchester', 'Eastbourne', 'Exeter', 'Rotherham', 'Cheltenham', 'Lincoln', 'Chesterfield', 'Chelmsford', 'Mendip', 'Walthamstow', 'Dagenham', 'Basingstoke', 'Maidstone', 'Sutton Coldfield', 'Bedford', 'Oldham', 'Enfield Town', 'Woking', 'St Helens', 'Worcester']
    }, {
        USACity: [" ", 'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'Indianapolis', 'San Francisco', 'Seattle', 'Denver', 'Washington', 'Nashville', 'Oklahoma City', 'Boston', 'El Paso', 'Portland', 'Las Vegas', 'Memphis', 'Detroit', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Fresno', 'Tucson', 'Sacramento', 'Kansas City', 'Mesa', 'Atlanta', 'Omaha', 'Colorado Springs', 'Raleigh', 'Long Beach', 'Virginia Beach', 'Miami', 'Oakland', 'Minneapolis', 'Tulsa', 'Bakersfield', 'Wichita', 'Tampa', 'New Orleans', 'Cleveland', 'Honolulu', 'Anaheim', 'Louisville', 'Henderson', 'Lexington', 'Irvine', 'Stockton', 'Orlando', 'Corpus Christi', 'Newark', 'Riverside', 'St. Paul', 'Cincinnati', 'San Juan', 'Santa Ana', 'Greensboro', 'Pittsburgh', 'Jersey City', 'St. Louis', 'Lincoln', 'Durham', 'Anchorage', 'Plano', 'Chandler', 'Chula Vista', 'Buffalo', 'Gilbert', 'Madison', 'Reno', 'North Las Vegas', 'Toledo', 'Fort Wayne', 'Irving', 'Lubbock', 'St. Petersburg', 'Laredo', 'Chesapeake', 'Winston-Salem', 'Garland', 'Scottsdale', 'Arlington', 'Enterprise', 'Boise', 'Santa Clarita', 'Norfolk', 'Fremont', 'Spokane', 'Richmond', 'Baton Rouge', 'San Bernardino', 'Tacoma', 'Spring Valley', 'Hialeah', 'Huntsville', 'Modesto', 'Frisco', 'Des Moines', 'Yonkers', 'Moreno Valley', 'Worcester', 'Rochester', 'Fontana', 'Fayetteville', 'Sunrise Manor', 'McKinney', 'Little Rock', 'Augusta', 'Oxnard', 'Salt Lake City', 'Amarillo', 'Overland Park', 'Cape Coral', 'Grand Rapids', 'Huntington Beach', 'Sioux Falls', 'Grand Prairie', 'Montgomery', 'Tallahassee', 'Birmingham', 'Peoria', 'Glendale', 'Vancouver', 'Providence', 'Knoxville', 'Brownsville', 'Akron', 'Newport News', 'Fort Lauderdale', 'Mobile', 'Shreveport', 'Paradise', 'Tempe', 'Chattanooga', 'Cary', 'Eugene', 'Elk Grove', 'Santa Rosa', 'Salem', 'Ontario', 'Aurora', 'Lancaster', 'Rancho Cucamonga', 'Oceanside', 'Fort Collins', 'Pembroke Pines', 'Clarksville', 'Palmdale', 'Garden Grove', 'Springfield', 'Hayward', 'Salinas', 'Alexandria', 'Paterson', 'Murfreesboro', 'Bayamon', 'Sunnyvale', 'Lakewood', 'Killeen', 'Corona', 'Bellevue', 'Charleston', 'Hollywood', 'Roseville', 'Pasadena', 'Escondido', 'Pomona', 'Mesquite', 'Naperville', 'Joliet', 'Savannah', 'Jackson', 'Bridgeport', 'Syracuse', 'Surprise', 'Rockford', 'Torrance', 'Thornton', 'Kent', 'Fullerton', 'Denton', 'Visalia']
    }, {
        NewZelandCity: [" ", 'Auckland', 'Wellington', 'Christchurch', 'Manukau City', 'North Shore', 'Hamilton', 'Dunedin', 'Tauranga', 'Lower Hutt', 'Hastings', 'Palmerston North', 'Rotorua', 'Porirua', 'Nelson', 'Napier', 'Whangarei', 'New Plymouth', 'Whanganui', 'Upper Hutt', 'Invercargill', 'Papatoetoe', 'Gisborne', 'Paraparaumu', 'Timaru', 'Masterton', 'Blenheim', 'Taupo', 'Remuera', 'Otara', 'Papakura', 'Pukekohe East', 'Mangere', 'Ashburton', 'New Lynn', 'Avondale', 'Levin', 'Stoke', 'Wainuiomata', 'Manurewa', 'Whakatane', 'Rangiora', 'Taradale', 'Karori', 'Cambridge', 'Otahuhu', 'Tokoroa', 'Richmond', 'Waikanae', 'Gore', 'Kaiapoi', 'Oamaru', 'Takanini', 'Homai', 'Wigram', 'Howick', 'Queenstown', 'Orewa', 'Hawera', 'Carterton', 'Forrest Hill', 'Albany', 'Favona', 'Halswell', 'Spreydon', 'Greymouth', 'Waiuku', 'Lincoln', 'Khandallah', 'Bethlehem', 'Takapuna', 'Kerikeri', 'Otumoetai', 'Ngaruawahia', 'Pakuranga', 'Kawerau', 'Parnell', 'Motueka', 'Waitara', 'Kelvin Grove', 'Thames', 'Bell Block', 'Titahi Bay', 'Petone', 'Papatowai', 'Onekawa', 'Onerahi', 'Warkworth', 'Whitianga', 'Matamata', 'Beachlands', 'New Brighton', 'Stratford', 'Otaki', 'Ngaio', 'Dannevirke', 'Katikati', 'Waikowhai', 'Raumati Beach', 'Ngongotaha', 'Cromwell', 'Pokeno', 'Prebbleton', 'Rothesay Bay', 'Dargaville', 'Mount Victoria', 'Dairy Flat', 'Picton', 'Foxton', 'Waihi', 'Fendalton', 'Rosebank', 'Belfast', 'Murrays Bay', 'Whangamata', 'Balclutha', 'Wanaka', 'Mission Bay', 'Westport', 'Tamaki', 'Wairoa', 'Moturoa', 'Greerton', 'Opotiki', 'Paeroa', 'Newmarket']
    }, {
        PortugalCity: [" ", 'Lisbon', 'Porto', 'Amadora', 'Braga', 'Setubal', 'Coimbra', 'Queluz', 'Funchal', 'Cacem', 'Vila Nova de Gaia', 'Algueirao', 'Loures', 'Felgueiras', 'Evora', 'Rio de Mouro', 'Odivelas', 'Aveiro', 'Amora', 'Corroios', 'Barreiro', 'Monsanto', 'Rio Tinto', 'Sao Domingos de Rana', 'Figueira da Foz', 'Leiria', 'Ponte de Lima', 'Faro', 'Sesimbra', 'Guimaraes', 'Ermesinde', 'Portimao', 'Benfica', 'Cascais', 'Maia', 'Viana do Castelo', 'Oeiras', 'Beja', 'Esposende', 'Braganca', 'Almada', 'Olivais', 'Castelo Branco', 'Alcabideche', 'Espinho', 'Camara de Lobos', 'Guarda', 'Alvalade', 'Arrentela', 'Montijo', 'Charneca de Caparica', 'Santarem', 'Olhao', 'Povoa de Varzim', 'Senhora da Hora', 'Marinha Grande', 'Povoa de Santa Iria', 'Sequeira', 'Massama', 'Matosinhos', 'Gondomar', 'Aguas Santas', 'Vila do Conde', 'Caldas da Rainha', 'Sao Martinho', 'Canidelo', 'Viseu', 'Sintra', 'Paco de Arcos', 'Quinta Do Conde', 'Torres Vedras', 'Oliveira do Douro', 'Fanzeres', 'Estoril', 'Carnaxide', 'Pinhal Novo', 'Monte Estoril', 'Canico', 'Pontinha', 'Loule', 'Arcos de Valdevez', 'Moscavide e Portela', 'Lavradio', 'Bougado', 'Valongo', 'Caparica', 'Belas', 'Laranjeira', 'Linda-a-Velha', 'Trofa', 'Baiao', 'Laranjeiro', 'Carcavelos', 'Camarate', 'Ponta Delgada', 'Entroncamento', 'Paredes', 'Moncao', 'Piedade', 'Custoias', 'Alges', 'Tomar', 'Barcelos', 'Pedroso', 'Vilar de Andorinho']
    }, {
        SwedenCity: [" ", 'Alingsås', 'Arboga', 'Arvika', 'Askersund', 'Avesta', 'Boden', 'Bollnäs', 'Borgholm', 'Borlänge', 'Borås', 'Djursholm', 'Eksjö', 'Enköping', 'Eskilstuna', 'Eslöv', 'Fagersta', 'Falkenberg', 'Falköping', 'Falsterbo', 'Falun', 'Filipstad', 'Flen', 'Gothenburg', 'Gränna', 'Gävle', 'Hagfors', 'Halmstad', 'Haparanda', 'Hedemora', 'Helsingborg', 'Hjo', 'Hudiksvall', 'Huskvarna', 'Härnösand', 'Hässleholm', 'Höganäs', 'Jönköping', 'Kalmar', 'Karlshamn', 'Karlskoga', 'Karlskrona', 'Karlstad', 'Katrineholm', 'Kiruna', 'Kramfors', 'Kristianstad', 'Kristinehamn', 'Kumla', 'Kungsbacka', 'Kungälv', 'Köping', 'Laholm', 'Landskrona', 'Lidingö', 'Lidköping', 'Lindesberg', 'Linköping', 'Ljungby', 'Ludvika', 'Luleå', 'Lund', 'Lycksele', 'Lysekil', 'Malmö', 'Mariefred', 'Mariestad', 'Marstrand', 'Mjölby', 'Motala', 'Nacka', 'Nora', 'Norrköping', 'Norrtälje', 'Nybro', 'Nyköping', 'Nynäshamn', 'Nässjö', 'Oskarshamn', 'Oxelösund', 'Piteå', 'Ronneby', 'Sala', 'Sandviken', 'Sigtuna', 'Simrishamn', 'Skanör', 'Skanör med Falsterbo', 'Skara', 'Skellefteå', 'Skänninge', 'Skövde', 'Sollefteå', 'Solna', 'Stockholm', 'Strängnäs', 'Strömstad', 'Sundbyberg', 'Sundsvall', 'Säffle', 'Säter', 'Sävsjö', 'Söderhamn', 'Söderköping', 'Södertälje', 'Sölvesborg', 'Tidaholm', 'Torshälla', 'Tranås', 'Trelleborg', 'Trollhättan', 'Trosa', 'Uddevalla', 'Ulricehamn', 'Umeå', 'Uppsala', 'Vadstena', 'Varberg', 'Vaxholm', 'Vetlanda', 'Vimmerby', 'Visby', 'Vänersborg', 'Värnamo', 'Västervik', 'Västerås', 'Växjö', 'Ystad', 'Åmål', 'Ängelholm', 'Örebro', 'Öregrund', 'Örnsköldsvik', 'Östersund', 'Östhammar']
    }
]

CityArr[7].NewZelandCity.push('Brooklyn', 'Pegasus', 'Oratia', 'Turangi', 'Inglewood', 'Wiri', 'Snells Beach', 'Tinwald', 'Frankton', 'Raglan', 'Kelburn', 'Silverstream', 'Waimate', 'Riverhead', 'Leigh', 'Fitzroy', 'Kumeu', 'Paremoremo', 'Titirangi', 'Mornington', 'Ashhurst', 'Omokoroa', 'Helensville', 'Kihikihi', 'Woodend', 'Rolleston', 'Belmont', 'Whitford', 'Port Chalmers', 'Darfield', 'Te Anau', 'Atawhai', 'Hokitika', 'Campbells Bay', 'Opaheke', 'Ruakaka', 'Tahunanui', 'Pahiatua', 'Eastbourne', 'Waimate North', 'Waihi Beach', 'Waipu', 'Otorohanga', 'Wakefield', 'Renwick', 'Wallaceville', 'Paremata', 'Red Hill', 'Heretaunga', 'Otatara', 'West Melton', 'Oropi', 'Waikiwi', 'Kaukapakapa', 'Clive', 'Ruawai', 'Oxford', 'East Taieri', 'Leeston', 'Loburn', 'Amberley', 'Geraldine', 'Awakeri', 'Silverdale', 'Bulls', 'Brightwater', 'Bay View', 'Taupiri', 'Plimmerton', 'Winton', 'Arrowtown', 'Wairau Valley', 'Foxton Beach', 'Waiatarua', 'Redcliffs', 'Pukerua Bay', 'Eltham', 'Rahotu', 'Milton', 'Mangorei', 'Wellsford', 'Ramarama', 'Bluff', 'Waitakere', 'Methven', 'Ostend', 'Mangatainoka', 'Waipawa', 'Ladbrooks', 'Murupara', 'Moerewa', 'Paekakariki', 'Rangiriri', 'Mapua', 'Tangiteroria', 'Templeton', 'Edgecumbe', 'Clifton', 'Maramarua', 'Mataura', 'Taipa', 'Wainui', 'Oakura', 'Castlepoint', 'Paihia', 'Twizel', 'Acacia Bay', 'Whakarongo', 'Waikawa', 'Te Kauwhata', 'Kaharoa', 'Kawakawa', 'Tairua', 'Rakaia', 'Ealing', 'West Eyreton', 'Tiniroto', 'Waharoa', 'Clevedon', 'Coromandel', 'Taneatua', 'Opunake', 'Colville', 'Pleasant Point', 'Oneroa', 'Riverton', 'Whangarei Heads', 'Hicks Bay', 'Takaka', 'Ngunguru', 'Arthurs Point', 'Pirongia', 'Patea', 'Maungaturoto', 'Muriwai Beach', 'Burnham', 'Rawene', 'Rapaura', 'Weston', 'Maketu', 'Drury', 'Raupunga', 'Temple View', 'Waitoa', 'Haumoana', 'Portobello', 'Jerusalem', 'Ngatea', 'Washdyke', 'Opua', 'Manutuke', 'Hanmer Springs', 'Parakai', 'Ahipara', 'Kennedys Bush', 'Judgeford', 'Ohinemutu', 'Hamurana', 'Normanby', 'Pauatahanui', 'Kopuaranga', 'Palmerston', 'Maungatapere', 'Pauanui');

CityArr[8].PortugalCity.push('Aver-o-Mar', 'Carregado', 'Melres', 'Caldas de Vizela', 'Selho', 'Moimenta da Beira', 'Lordelo', 'Meadela', 'Elvas', 'Almancil', 'Maceira', 'Fundao', 'Alcochete', 'Santa Clara', 'Lavra', 'Alenquer', 'Lourosa', 'Madalena', 'Sao Joao de Ver', 'Rio de Loba', 'Vila Nova de Famalicao', 'Famoes', 'Sao Roque', 'Moura', 'Estremoz', 'Abraveses', 'Valadares', 'Guifoes', 'Alcacer do Sal', 'Lourinha', 'Gondizalves', 'Quinta do Anjo', 'Vinhais', 'Marco de Canavezes', 'Caxias', 'Mem Martins', 'Nazare', 'Benavente', 'Campo', 'Mangualde', 'Queijas', 'Santana', 'Tondela', 'Coruche', 'Argoncilhe', 'Ribeirao', 'Fiaes', 'Coronado', 'Estombar', 'Tavarede', 'Torre de Moncorvo', 'Benedita', 'Moncarapacho', 'Aves', 'Alpendurada', 'Soure', 'Bobadela', 'Casteloes de Cepeda', 'Vila Vicosa', 'Atouguia da Baleia', 'Murtosa', 'Almargem', 'Campo Maior', 'Beduido', 'Darque', 'Penafiel', 'Serzedo', 'Camacha', 'Freamunde', 'Albergaria-a-Velha', 'Alpiarca', 'Batalha', 'Colares', 'Serzedo', 'Rosto de Cao', 'Ferreiros', 'Joane', 'Buarcos', 'Miranda do Corvo', 'Santiago do Cacem', 'Sande', 'Pragal', 'Mira', 'Rabo de Peixe', 'Vale de Cambra', 'Ericeira', 'Mondim de Basto', 'Miranda do Douro', 'Nisa', 'Almodovar', 'Cantanhede', 'Vila Nova da Barquinha', 'Vila Nova de Foz Coa', 'Apulia e Fao', 'Aradas', 'Mertola', 'Mozelos', 'Alhandra', 'Silvalde', 'Apelacao', 'Azambuja', 'Oia', 'Seia', 'Jovim', 'Ponte', 'Valega', 'Arrifes', 'Silveira', 'Arrifana', 'Arcos', 'Pacos de Ferreira', 'Amarante', 'Sao Joao', 'Arcos', 'Sobrado', 'Aveleda', 'Negrelos', 'A dos Cunhados', 'Serpa', 'Horta', 'Macedo de Cavaleiros', 'Avanca', 'Sao Romao', 'Prior Velho', 'Cacilhas', 'Sandim', 'Sabrosa', 'Tabuaco', 'Foz do Sousa', 'Lagoa', 'Perozinho', 'Oliveira do Bairro', 'Santa Cruz do Bispo', 'Oliveira', 'Arruda dos Vinhos', 'Aljubarrota', 'Madalena', 'Sao Vicente', 'Praia da Vitoria', 'Marinhas', 'Lobao', 'Gandra', 'Porto de Mos', 'Santa Cruz', 'Fontanelas', 'Eixo', 'Olival Basto', 'Milharado', 'Vidigueira', 'Ribeira Brava', 'Arazede', 'Aljezur', 'Bombarral', 'Vila Nova da Telha', 'Redondo', 'Odemira', 'Vieira de Leiria', 'Marinhais', 'Monte Real', 'Boticas', 'Caldelas', 'Taipas', 'Oleiros', 'Olival', 'Sernancelhe', 'Serta', 'Branca', 'Lamas', 'Moreira de Conegos', 'Trafaria', 'Carregal do Sal', 'Sao Roque', 'Barrosas', 'Vilela', 'Poiares', 'Pataias', 'Aguiar da Beira', 'Riachos', 'Urgeses', 'Monchique', 'Sao Miguel do Couto', 'Galegos');

CityArr[8].PortugalCity.push('Sao Joao da Talha', 'Azeitao', 'Lagos', 'Quarteira', 'Santa Iria da Azoia', 'Ovar', 'Vila Franca de Xira', 'Leca da Palmeira', 'Moita', 'Sacavem', 'Covilha', 'Ramada', 'Chaves', 'Pombal', 'Ilhavo', 'Parede', 'Condeixa-a-Nova', 'Alfragide', 'Vila Real', 'Palmela', 'Fafe', 'Cabeceiras de Basto', 'Feira', 'Leca do Bailio', 'Vialonga', 'Albufeira', 'Baguim do Monte', 'Alcobaca', 'Peniche', 'Portalegre', 'Alfena', 'Tavira', 'Torres Novas', 'Gafanha', 'Vilar do Paraiso', 'Valbom', 'Lagoa', 'Arcozelo', 'Canelas', 'Costa de Caparica', 'Valenza', 'Samora Correia', 'Santo Tirso', 'Porto Salvo', 'Abrantes', 'Esgueira', 'Alhos Vedros', 'Moreira', 'Montemor-o-Novo', 'Sines', 'Beato Antonio', 'Ourem', 'Machico', 'Pedroucos', 'Perafita', 'Mirandela', 'Azenha', 'Mafra', 'Tabua', 'Rio Maior', 'Angra do Heroismo', 'Barcarena', 'Alijo', 'Agueda', 'Fatima', 'Oliveira de Azemeis', 'Semelhe', 'Real', 'Santa Comba Dao', 'Avintes', 'Almeirim', 'Rebordosa', 'Lousa', 'Esmoriz', 'Calendario', 'Moreira', 'Vendas Novas', 'Santo Andre', 'Obidos', 'Sao Bras de Alportel', 'Sobreda', 'Cucujaes', 'Ponte de Sor', 'Foz do Douro', 'Canecas', 'Anta', 'Lamego', 'Silves', 'Grijo', 'Vale da Amoreira', 'Grandola', 'Unhos', 'Gulpilhares', 'Margaride', 'Santo Andre', 'Charneca', 'Cartaxo');

CityArr[0].AustraliaCity = [...new Set(CityArr[0].AustraliaCity.sort())];
CityArr[1].CanadaCity = [...new Set(CityArr[1].CanadaCity)];
CityArr[2].FranchCity = [...new Set(CityArr[2].FranchCity)];
CityArr[3].GarmanCity = [...new Set(CityArr[3].GarmanCity)];
CityArr[4].SpainCity = [...new Set(CityArr[4].SpainCity)];
CityArr[5].UKCity = [...new Set(CityArr[5].UKCity)];
CityArr[6].USACity = [...new Set(CityArr[6].USACity)];
CityArr[7].NewZelandCity = [...new Set(CityArr[7].NewZelandCity)];
CityArr[8].PortugalCity = [...new Set(CityArr[8].PortugalCity)];
CityArr[9].SwedenCity = [...new Set(CityArr[9].SwedenCity)];


CityArr[1].CanadaCity.sort(),
    CityArr[2].FranchCity.sort(),
    CityArr[3].GarmanCity.sort(),
    CityArr[4].SpainCity.sort(),
    CityArr[5].UKCity.sort(),
    CityArr[6].USACity.sort(),
    CityArr[7].NewZelandCity.sort(),
    CityArr[8].PortugalCity.sort(),
    CityArr[9].SwedenCity.sort();

let stateNames = CityArr[0].AustraliaCity.concat(
    CityArr[1].CanadaCity,
    CityArr[2].FranchCity,
    CityArr[3].GarmanCity,
    CityArr[4].SpainCity,
    CityArr[5].UKCity,
    CityArr[6].USACity,
    CityArr[7].NewZelandCity,
    CityArr[8].PortugalCity,
    CityArr[9].SwedenCity);

stateNames.sort();

let flagAddress = {
    Australia: "https://flagpedia.net/data/flags/icon/256x192/au.webp",
    Canada: "https://flagpedia.net/data/flags/icon/256x192/ca.webp",
    France: "https://flagpedia.net/data/flags/icon/256x192/fr.webp",
    German: "https://flagpedia.net/data/flags/icon/256x192/de.webp",
    Newzeland: "https://flagpedia.net/data/flags/icon/256x192/nz.webp",
    Portugal: "https://flagpedia.net/data/flags/icon/256x192/pt.webp",
    Spain: "https://flagpedia.net/data/flags/icon/256x192/es.webp",
    Sweden: "https://flagpedia.net/data/flags/icon/256x192/se.webp",
    UK: "https://flagpedia.net/data/flags/icon/256x192/gb.webp",
    USA: "https://flagpedia.net/data/flags/icon/256x192/us.webp",
};


let countryNames = [" ", 'Australia', 'Canada', 'France', 'German', 'Newzeland', 'Spain', 'UK', 'USA', 'Portugal', 'Sweden'];
let industryNames = [" ", 'CANNABIST', 'CHRIOPRACTOR', 'DENTAL', 'E-COMMERCE', 'HVAC', 'LAW FIRM', 'OPTOMETRY', 'PHYSIOTHERAPY', 'PLASTIC SURGEONS', 'REAL ESTATE', 'SPORTS MEDICINE', 'VETERINARIANS'];

countryNames.sort();
industryNames.sort();

let country_Name_ID = document.getElementById('country_Name_ID');
let state_Name_ID = document.getElementById('state_Name_ID');
let industry_Name_ID = document.getElementById('industry_Name_ID');
let showCountryFlag = document.getElementById('showCountryFlag');
let showCountryName = document.getElementById('showCountryName');
let showCityName = document.getElementById('showCityName');
let showIndustryName = document.getElementById('showIndustryName');

for (let i = 0; i < countryNames.length; i++) {
    let boxDiv = document.createElement("option");
    // boxDiv.className = "btn my-1 btn_city";
    boxDiv.innerHTML = countryNames[i];
    boxDiv.setAttribute('value', countryNames[i]);
    country_Name_ID.appendChild(boxDiv);
}


// stateNames
function cityLoad(cities) {
    // state_Name_ID.textContent = " ";
    for (let i = 0; i < cities.length; i++) {
        let boxDiv = document.createElement("option");
        boxDiv.textContent = cities[i];
        boxDiv.setAttribute('value', cities[i]);
        state_Name_ID.appendChild(boxDiv);
    }
}

// cityLoad(stateNames);

for (let i = 0; i < industryNames.length; i++) {
    if (industryNames[i].length > 20) {
        industryNames[i] = industryNames[i].slice(0, 20) + "...";
    }
    let boxDiv = document.createElement("option");
    boxDiv.textContent = industryNames[i];
    boxDiv.setAttribute('value', industryNames[i]);
    industry_Name_ID.appendChild(boxDiv);
}

// $('#country_Name_ID').nextElementSibling.addClass('d-none');

$('#filter').click(function () {
    let countryName = $('#country_Name_ID').select2().val();
    let cityName = $('#state_Name_ID').select2().val();
    let industryName = $('#industry_Name_ID').select2().val();

    if (countryName != " " && cityName != " " && industryName != " ") {
        showCountryFlag.setAttribute('src', flagAddress[countryName]);
        showCountryName.textContent = countryName;
        showCityName.textContent = cityName;
        showIndustryName.textContent = industryName;
        
        var randomValue = Math.floor(Math.random()*8)+1;
        let sortingTH = document.querySelectorAll('.sorting');
        sortingTH[randomValue].click();

        show_hide_column();
        var lastColCellsOnly = Array.prototype.slice.call(document.querySelectorAll('td:nth-child(8)', 'table'), 0);
        lastColCellsOnly.forEach(function (cell) { // iterate and hide
            cell.textContent = cityName;
        });
        $('#myTable_filter input').val(industryName).keyup();
    }

})

$('#reset').click(function () {
    $('#country_Name_ID').val(null).trigger('change');
    $('#state_Name_ID').val(null).trigger('change');
    $('#industry_Name_ID').val(null).trigger('change');

    showCountryFlag.setAttribute('src', "https://i0.wp.com/css-tricks.com/wp-content/uploads/2017/08/facebook-skeleton.png");
    showCountryName.textContent = "N/A";
    showCityName.textContent = "N/A";
    showIndustryName.textContent = "N/A";
    $('#myTable_filter input').val('').keyup();
})


$('#country_Name_ID').select2().change(function(){

    
    $('#state_Name_ID').val(null).trigger('change');
    
    let countryName = $('#country_Name_ID').val();

    if (countryName == "Australia") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[0].AustraliaCity);
    } else if (countryName == "Canada") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[1].CanadaCity);
    } else if (countryName == "France") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[2].FranchCity);
    } else if (countryName == "German") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[3].GarmanCity);
    } else if (countryName == "Spain") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[4].SpainCity);
    } else if (countryName == "UK") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[5].UKCity);
    } else if (countryName == "USA") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[6].USACity);
    } else if (countryName == "Newzeland") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[7].NewZelandCity);
    } else if (countryName == "Portugal") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[8].PortugalCity);
    } else if (countryName == "Sweden") {
        state_Name_ID.textContent = " ";
        cityLoad(CityArr[9].SwedenCity);
    }

    if(countryName == " ") {
        state_Name_ID.textContent = " ";
        // cityLoad(stateNames);
        // console.log(stateNames.sort());
    }
});
