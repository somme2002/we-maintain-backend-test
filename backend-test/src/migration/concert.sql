INSERT INTO concert
SELECT * FROM json_populate_recordset (NULL::concert,
  '[
     {
        "bandId": 1,
        "venueId": 1,
        "date": 1391573996175
    },
    {
        "bandId": 1,
        "venueId": 2,
        "date": 1199174515916
    },
    {
        "bandId": 1,
        "venueId": 3,
        "date": 1304726383471
    },
    {
        "bandId": 1,
        "venueId": 4,
        "date": 1465857952566
    },
    {
        "bandId": 1,
        "venueId": 5,
        "date": 1206053174059
    },
    {
        "bandId": 2,
        "venueId": 6,
        "date": 1461724303675
    },
    {
        "bandId": 2,
        "venueId": 7,
        "date": 1407625684924
    },
    {
        "bandId": 2,
        "venueId": 8,
        "date": 1521057637722
    },
    {
        "bandId": 2,
        "venueId": 9,
        "date": 1202137434913
    },
    {
        "bandId": 2,
        "venueId": 10,
        "date": 1534575059287
    },
    {
        "bandId": 2,
        "venueId": 11,
        "date": 1328185495932
    },
    {
        "bandId": 2,
        "venueId": 12,
        "date": 1311527210591
    },
    {
        "bandId": 2,
        "venueId": 13,
        "date": 1438904687373
    },
    {
        "bandId": 2,
        "venueId": 14,
        "date": 1388299436193
    },
    {
        "bandId": 2,
        "venueId": 15,
        "date": 1460750992958
    },
    {
        "bandId": 2,
        "venueId": 16,
        "date": 1524031830782
    },
    {
        "bandId": 2,
        "venueId": 17,
        "date": 1314888426271
    },
    {
        "bandId": 2,
        "venueId": 18,
        "date": 1276607949589
    },
    {
        "bandId": 2,
        "venueId": 19,
        "date": 1316591043423
    },
    {
        "bandId": 2,
        "venueId": 20,
        "date": 1397596943236
    },
    {
        "bandId": 2,
        "venueId": 21,
        "date": 1302054570804
    },
    {
        "bandId": 2,
        "venueId": 22,
        "date": 1571808436512
    },
    {
        "bandId": 2,
        "venueId": 23,
        "date": 1248645199885
    },
    {
        "bandId": 2,
        "venueId": 24,
        "date": 1283745540142
    },
    {
        "bandId": 2,
        "venueId": 25,
        "date": 1322008340672
    },
    {
        "bandId": 2,
        "venueId": 1,
        "date": 1424652665767
    },
    {
        "bandId": 3,
        "venueId": 26,
        "date": 1276686820148
    },
    {
        "bandId": 3,
        "venueId": 27,
        "date": 1281645744932
    },
    {
        "bandId": 3,
        "venueId": 28,
        "date": 1449024010834
    },
    {
        "bandId": 3,
        "venueId": 29,
        "date": 1566048590758
    },
    {
        "bandId": 3,
        "venueId": 30,
        "date": 1203287610403
    },
    {
        "bandId": 3,
        "venueId": 31,
        "date": 1388269535496
    },
    {
        "bandId": 3,
        "venueId": 11,
        "date": 1506266927971
    },
    {
        "bandId": 3,
        "venueId": 27,
        "date": 1434289031979
    },
    {
        "bandId": 3,
        "venueId": 32,
        "date": 1550266041260
    }
]');