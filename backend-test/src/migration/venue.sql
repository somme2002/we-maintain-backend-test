INSERT INTO venue
SELECT * FROM json_populate_recordset (NULL::venue,
  '[
    
    {
        "id": 1,
        "name": "Sound Academy, Toronto, ON, Canada",
        "latitude": 43.63967479999999,
        "longitude": -79.3535794
    },
    {
        "id": 2,
        "name": "The Drake Hotel, Toronto, ON, Canada",
        "latitude": 43.6432048,
        "longitude": -79.42463769999999
    },
    {
        "id": 3,
        "name": "Majestic Ventura Theater, Los Angeles, CA, US",
        "latitude": 34.2804242,
        "longitude": -119.2914618
    },
    {
        "id": 4,
        "name": "Electric Ballroom, London, UK",
        "latitude": 51.5396971,
        "longitude": -0.1430325
    },
    {
        "id": 5,
        "name": "U Street Music Hall, Washington, DC, US",
        "latitude": 38.9171386,
        "longitude": -77.0276204
    },
    {
        "id": 6,
        "name": "Le Batofar, Paris, France",
        "latitude": 48.83335,
        "longitude": 2.3793886
    },
    {
        "id": 7,
        "name": "Howard Theatre, Washington, DC, US",
        "latitude": 38.915254,
        "longitude": -77.0211964
    },
    {
        "id": 8,
        "name": "WiZink Center - Palacio de Deportes de la Comunidad de Madrid, Madrid, Spain",
        "latitude": 40.423876,
        "longitude": -3.6717501
    },
    {
        "id": 9,
        "name": "Button Factory, Dublin, Ireland",
        "latitude": 53.3449334,
        "longitude": -6.2645228
    },
    {
        "id": 10,
        "name": "Vive Cuervo Salón, Mexico City, Mexico",
        "latitude": 19.4432242,
        "longitude": -99.20035469999999
    },
    {
        "id": 11,
        "name": "La Fourmi, Limoges, France",
        "latitude": 45.85046639999999,
        "longitude": 1.223815
    },
    {
        "id": 12,
        "name": "Pianos, New York, NY, US",
        "latitude": 40.721025,
        "longitude": -73.987692
    },
    {
        "id": 13,
        "name": "Qudos Bank Arena, Sydney, NSW, Australia",
        "latitude": -33.8443038,
        "longitude": 151.0620838
    },
    {
        "id": 14,
        "name": "Forest National / Vorst Nationaal, Brussels, Belgium",
        "latitude": 50.8099282,
        "longitude": 4.326107599999999
    },
    {
        "id": 15,
        "name": "Propaganda, Moscow, Russian Federation",
        "latitude": 55.7586289,
        "longitude": 37.6328588
    },
    {
        "id": 16,
        "name": "Klub RE, Krakow, Poland",
        "latitude": 50.0609973,
        "longitude": 19.9414372
    },
    {
        "id": 17,
        "name": "The Bell House, New York, NY, US",
        "latitude": 40.67351,
        "longitude": -73.991632
    },
    {
        "id": 18,
        "name": "Brooklyn Bowl, New York, NY, US",
        "latitude": 40.7218813,
        "longitude": -73.95739449999999
    },
    {
        "id": 19,
        "name": "Fremont Abbey Arts Center, Seattle, WA, US",
        "latitude": 47.6591888,
        "longitude": -122.3496822
    },
    {
        "id": 20,
        "name": "Lido, Berlin, Germany",
        "latitude": 52.49917,
        "longitude": 13.445
    },
    {
        "id": 21,
        "name": "Patinoire Meriadeck, Bordeaux, France",
        "latitude": 44.835121,
        "longitude": -0.5873993
    },
    {
        "id": 22,
        "name": "Rivoli, Toronto, ON, Canada",
        "latitude": 43.64944970000001,
        "longitude": -79.3949696
    },
    {
        "id": 23,
        "name": "Hamburger Börs, Stockholm, Sweden",
        "latitude": 59.3305093,
        "longitude": 18.0695431
    },
    {
        "id": 24,
        "name": "X-TRA, Zürich, Switzerland",
        "latitude": 47.3841033,
        "longitude": 8.5329633
    },
    {
        "id": 25,
        "name": "Muffathalle, Munich, Germany",
        "latitude": 48.1329363,
        "longitude": 11.5894601
    },
    {
        "id": 26,
        "name": "The Tabernacle, Atlanta, GA, US",
        "latitude": 33.7586647,
        "longitude": -84.3914487
    },
    {
        "id": 27,
        "name": "El Lokal, Zürich, Switzerland",
        "latitude": 47.374641,
        "longitude": 8.533891299999999
    },
    {
        "id": 28,
        "name": "3Arena, Dublin, Ireland",
        "latitude": 53.3474963,
        "longitude": -6.2285078
    },
    {
        "id": 29,
        "name": "Paramount Theatre, Oakland, CA, US",
        "latitude": 37.8097055,
        "longitude": -122.2682219
    },
    {
        "id": 30,
        "name": "Palace Theatre, Melbourne, VIC, Australia",
        "latitude": -37.8673546,
        "longitude": 144.976156
    },
    {
        "id": 31,
        "name": "KOKO, London, UK",
        "latitude": 51.5347377,
        "longitude": -0.1382573
    },
    {
        "id": 32,
        "name": "Sony Centre for the Performing Arts, Toronto, ON, Canada",
        "latitude": 43.6466723,
        "longitude": -79.3760205
    },
    {
        "id": 33,
        "name": "Eventim Apollo, London, UK",
        "latitude": 51.4910136,
        "longitude": -0.2246563
    },
    {
        "id": 34,
        "name": "Rock School Barbey, Bordeaux, France",
        "latitude": 44.8269694,
        "longitude": -0.5632283
    },
    {
        "id": 35,
        "name": "Constellation Room at the Observatory, Los Angeles, CA, US",
        "latitude": 33.6997278,
        "longitude": -117.9175687
    },
    {
        "id": 36,
        "name": "Royal Theatre Carré (Koninklijk Theater Carré), Amsterdam, Netherlands",
        "latitude": 52.3623872,
        "longitude": 4.9042637
    }
]');