INSERT INTO band
SELECT * FROM json_populate_recordset (NULL::band,
  '[
    {
        "id": 1,
        "name": "3 Doors Down"
    },
    {
        "id": 2,
        "name": "3OH!3"
    },
    {
        "id": 3,
        "name": "4 Non Blondes"
    },
    {
        "id": 4,
        "name": "The 77s"
    },
    {
        "id": 5,
        "name": "7 Year Bitch"
    },
    {
        "id": 6,
        "name": "8stops7"
    },
    {
        "id": 7,
        "name": "10 Years"
    },
    {
        "id": 8,
        "name": "12 Stones"
    },
    {
        "id": 9,
        "name": "13 Engines"
    },
    {
        "id": 10,
        "name": "+44"
    },
    {
        "id": 11,
        "name": "54-40"
    }
]');