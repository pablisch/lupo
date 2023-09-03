// Bakerloo Line: 25 stations
// Central Line: 48 stations
// Circle Line: 36 stations
// District Line: 60 stations

const bakerloo = [
  "Harrow&Wealdstone",
  "Kenton",
  "SouthKenton",
  "NorthWembley",
  "WembleyCentral",
  "StonebridgePark",
  "Harlesden",
  "WillesdenJunction",
  "KensalGreen",
  "Queen'sPark",
  "KilburnPark",
  "MaidaVale",
  "WarwickAvenue",
  "Paddington",
  "EdgwareRoadB",
  "Marylebone",
  "BakerStreet",
  "Regent'sPark",
  "OxfordCircus",
  "PiccadillyCircus",
  "CharingCross",
  "Embankment",
  "Waterloo",
  "LambethNorth",
  "Elephant&Castle"
] // 25

const central = [
  "WestRuislip",
  "RuislipGardens",
  "SouthRuislip",
  "Northolt",
  "Greenford",
  "Perivale",
  "HangerLane",
  "NorthActon",
  "WestActon",
  "EastActon",
  "WhiteCity",
  "ShepherdsBush(Central)",
  "HollandPark",
  "NottingHillGate",
  "Queensway",
  "LancasterGate",
  "MarbleArch",
  "BondStreet",
  "OxfordCircus",
  "TottenhamCourtRoad",
  "Holborn",
  "ChanceryLane",
  "StPauls",
  "Bank",
  "LiverpoolStreet",
  "BethnalGreen",
  "MileEnd",
  "Stratford",
  "Leyton",
  "Leytonstone",
  "Snaresbrook",
  "SouthWoodford",
  "Woodford",
  "BuckhurstHill",
  "Loughton",
  "Debden",
  "TheydonBois",
  "Epping",
  "RodingValley",
  "Chigwell",
  "GrangeHill",
  "Hainault",
  "Fairlop",
  "Barkingside",
  "NewburyPark",
  "GantsHill",
  "Redbridge",
  "Wanstead"
]; // 48

const circle = [
  "Hammersmith(H&CLine)",
  "GoldhawkRoad",
  "ShepherdsBushMarket",
  "WoodLane",
  "LatimerRoad",
  "LadbrokeGrove",
  "WestbournePark",
  "RoyalOak",
  "Paddington(H&CLine)-Underground",
  "Paddington",
  "EdgwareRoad(CircleLine)",
  "BakerStreet",
  "GreatPortlandStreet",
  "EustonSquare",
  "KingsCrossStPancras",
  "Farringdon",
  "Barbican",
  "Moorgate",
  "LiverpoolStreet",
  "Aldgate",
  "TowerHill",
  "Monument",
  "CannonStreet",
  "MansionHouse",
  "Blackfriars",
  "Temple",
  "Embankment",
  "Westminster",
  "StJamessPark",
  "VictoriaSt",
  "SloaneSquare",
  "SouthKensington",
  "GloucesterRoad",
  "HighStreetKensington",
  "NottingHillGate",
  "Bayswater"
]; // 36

const district = [
  "ActonTown",
  "AldgateEast",
  "Bromley-by-Bow",
  "Becontree",
  "Blackfriars",
  "Barking",
  "BaronsCourt",
  "BowRoad",
  "Bayswater",
  "CannonStreet",
  "ChiswickPark",
  "DagenhamEast",
  "DagenhamHeathway",
  "EalingBroadway",
  "EalingCommon",
  "EarlsCourt",
  "EastHam",
  "Embankment",
  "ElmPark",
  "EastPutney",
  "EdgwareRoad(CircleLine)",
  "FulhamBroadway",
  "Gunnersbury",
  "GloucesterRoad",
  "Hornchurch",
  "Hammersmith(Dist&PiccLine)",
  "HighStreetKensington",
  "Kensington(Olympia)",
  "KewGardens",
  "MileEnd",
  "Monument",
  "MansionHouse",
  "NottingHillGate",
  "Paddington",
  "Plaistow",
  "ParsonsGreen",
  "PutneyBridge",
  "Richmond",
  "RavenscourtPark",
  "StamfordBrook",
  "Southfields",
  "StepneyGreen",
  "StJamessPark",
  "SouthKensington",
  "SloaneSquare",
  "Temple",
  "TurnhamGreen",
  "TowerHill",
  "UpminsterBridge",
  "UptonPark",
  "Upminster",
  "Upney",
  "VictoriaSt",
  "WestBrompton",
  "WestHam",
  "Wimbledon",
  "WimbledonPark",
  "WestKensington",
  "Whitechapel",
  "Westminster"
] // 60

const hammersmithcity = [
  "AldgateEast",
  "Bromley-by-Bow",
  "Barbican",
  "Barking",
  "BakerStreet",
  "BowRoad",
  "EastHam",
  "EdgwareRoad(CircleLine)",
  "EustonSquare",
  "Farringdon",
  "GoldhawkRoad",
  "GreatPortlandStreet",
  "Hammersmith(H&CLine)",
  "KingsCrossStPancras",
  "LadbrokeGrove",
  "LatimerRoad",
  "LiverpoolStreet",
  "MileEnd",
  "Moorgate",
  "Paddington(H&CLine)-Underground",
  "Plaistow",
  "RoyalOak",
  "ShepherdsBushMarket",
  "StepneyGreen",
  "UptonPark",
  "WestHam",
  "WoodLane",
  "Whitechapel",
  "WestbournePark"
] // 29

const jubilee = [
  "Bermondsey",
  "BondStreet",
  "BakerStreet",
  "CanningTown",
  "CanonsPark",
  "CanadaWater",
  "CanaryWharf",
  "DollisHill",
  "FinchleyRoad",
  "GreenPark",
  "Kilburn",
  "Kingsbury",
  "LondonBridge",
  "Neasden",
  "NorthGreenwich",
  "Queensbury",
  "StJohnsWood",
  "Stratford",
  "Stanmore",
  "SwissCottage",
  "Southwark",
  "WestHam",
  "WestHampstead",
  "WillesdenGreen",
  "Waterloo",
  "Westminster",
  "WembleyPark"
] // 27

const metropolitan = [
  "Aldgate",
  "Amersham",
  "Barbican",
  "BakerStreet",
  "Chalfont&Latimer",
  "Chesham",
  "Croxley",
  "Chorleywood",
  "Eastcote",
  "EustonSquare",
  "Farringdon",
  "FinchleyRoad",
  "GreatPortlandStreet",
  "Hillingdon",
  "Harrow-on-the-Hill",
  "Ickenham",
  "KingsCrossStPancras",
  "LiverpoolStreet",
  "Moorgate",
  "MoorPark",
  "NorthHarrow",
  "NorthwickPark",
  "Northwood",
  "NorthwoodHills",
  "Pinner",
  "PrestonRoad",
  "Rickmansworth",
  "RuislipManor",
  "Ruislip",
  "RaynersLane",
  "Uxbridge",
  "Watford",
  "WestHarrow",
  "WillesdenGreen",
  "WembleyPark"
] // 35

const northern = [
  "Archway",
  "Angel",
  "Balham",
  "Bank",
  "Borough",
  "BurntOak",
  "BrentCross",
  "BelsizePark",
  "ChalkFarm",
  "CharingCross",
  "Colindale",
  "ClaphamCommon",
  "ClaphamNorth",
  "ClaphamSouth",
  "ColliersWood",
  "CamdenTown",
  "Elephant&Castle",
  "EastFinchley",
  "Edgware",
  "Embankment",
  "Euston",
  "FinchleyCentral",
  "GoodgeStreet",
  "GoldersGreen",
  "HighBarnet",
  "HendonCentral",
  "Highgate",
  "Hampstead",
  "Kennington",
  "KentishTown",
  "KingsCrossStPancras",
  "LondonBridge",
  "LeicesterSquare",
  "Morden",
  "Moorgate",
  "MillHillEast",
  "MorningtonCrescent",
  "OldStreet",
  "Oval",
  "Stockwell",
  "SouthWimbledon",
  "Totteridge&Whetstone",
  "TootingBec",
  "TootingBroadway",
  "TottenhamCourtRoad",
  "TufnellPark",
  "WestFinchley",
  "Waterloo",
  "WoodsidePark",
  "WarrenStreet"
] // 50

const piccadilly = [
  "ActonTown",
  "Alperton",
  "ArnosGrove",
  "Arsenal",
  "BoundsGreen",
  "BostonManor",
  "BaronsCourt",
  "CaledonianRoad",
  "CoventGarden",
  "Cockfosters",
  "Eastcote",
  "EalingCommon",
  "EarlsCourt",
  "FinsburyPark",
  "GreenPark",
  "GloucesterRoad",
  "Holborn",
  "Hillingdon",
  "HattonCross",
  "HydeParkCorner",
  "HeathrowTerminal4",
  "HeathrowTerminal5",
  "HeathrowTerminals2&3",
  "Hammersmith(Dist&PiccLine)",
  "HounslowCentral",
  "HounslowEast",
  "HounslowWest",
  "HollowayRoad",
  "Ickenham",
  "Knightsbridge",
  "KingsCrossStPancras",
  "LeicesterSquare",
  "ManorHouse",
  "NorthEaling",
  "Northfields",
  "Oakwood",
  "Osterley",
  "PiccadillyCircus",
  "ParkRoyal",
  "RuislipManor",
  "Ruislip",
  "RussellSquare",
  "RaynersLane",
  "SouthEaling",
  "Southgate",
  "SouthHarrow",
  "SouthKensington",
  "SudburyHill",
  "SudburyTown",
  "TurnhamGreen",
  "TurnpikeLane",
  "Uxbridge",
  "WoodGreen"
] // 53

const victoria = [
  "BlackhorseRoad",
  "Brixton",
  "Euston",
  "FinsburyPark",
  "GreenPark",
  "Highbury&Islington",
  "KingsCrossStPancras",
  "OxfordCircus",
  "Pimlico",
  "Stockwell",
  "SevenSisters",
  "TottenhamHale",
  "VictoriaSt",
  "Vauxhall",
  "WarrenStreet",
  "WalthamstowCentral"
] // 16

const waterloocity = [
  "Bank",
  "Waterloo"
] // 2

const allStations = [
  central, bakerloo, circle, district, hammersmithcity, jubilee, metropolitan, northern, piccadilly, victoria, waterloocity
]

export default allStations;