
#Hotel Product

Access real-time, comprehensive hotel rates, availability and booking options with Hotels.

![img](img/OnlyHotel.png)

-----------------------------
##GetArrivalAutocomplete

| Update Date	 | 14.07.2023                                       |
|-------------------|--------------------------------------------------|
| Method Adress     | ```/api/productservice/getarrivalautocomplete``` |
| Method Type       | 	```POST```                                      |
| Token Required    | 		```YES```                                      |


[Click](../enumarations/#Product-Types) to reach the product types.

```json title="Request"
{
   "ProductType":2,
   "Query":"anta",
   "Culture": "en-US"
}
```

```json title="Response"
{
  "header": {
    "requestId": "723f1089-7c9d-4fb1-9423-bc018e79f30e",
    "success": true,
    "messages": [
      {
        "id": 10000000,
        "code": "OperationCompleted",
        "messageType": 2,
        "message": "Operation was completed successfully"
      }
    ]
  },
  "body": {
    "items": [
      {
        "type": 1,
        "geolocation": {
          "longitude": "30.70838",
          "latitude": "36.87536"
        },
        "country": {
          "id": "TR",
          "name": "Turkey"
        },
        "state": {
          "id": "10828",
          "name": "Turkish Riviera"
        },
        "city": {
          "id": "23494",
          "name": "Antalya"
        },
        "giataInfo": {
          "hotelId": "1269469",
          "destinationId": "930"
        },
        "provider": 2
      }
    ]
  }
}
```

-----------------------------
##PriceSearch

You can use PriceSearch for getting hotel prices.
If you just want to get the best price send <i><b>"getOnlyBestOffers": true</i></b> and use the getoffers method

| Update Date	 | 11.05.2023                            |
|-------------------|---------------------------------------|
| Method Adress     | ```/api/productservice/pricesearch``` |
| Method Type       | ```POST```                            |
| Token Required    | ```YES```                             |

[Click](../enumarations/#Product-Types) to reach the product types.

```json title="Request Sample ( For A Certain Location )"
{
  "checkAllotment":true,
  "checkStopSale":true,
  "getOnlyDiscountedPrice":false,
  "getOnlyBestOffers": true,
  "productType":2,
  "arrivalLocations":[
      {
        "id":"23494",
        "type":2
     }
  ],
  "roomCriteria":[
     {
        "adult":2,
        "childAges":[
           2,
           5
        ]
     },
     {
        "adult":1,
        "childAges":[
           3
        ]
     }
  ],
  "nationality":"DE",
  "checkIn":"2023-06-20",
  "night":7,
  "currency":"EUR",
  "culture":"en-US"
}
```

[Click](../enumarations/#Product-Types) to reach the product types.

```json title="Request Sample ( For A Certain Hotel )"
{
   "checkAllotment":true,
   "checkStopSale":true,
   "getOnlyDiscountedPrice":false,
   "getOnlyBestOffers": true,
   "productType":2,
   "Products": [
        "339163",
        "103746"
    ],
   "productPriceCategories":[
        {
            "product" : "103746",
            "category" : "a"
        }
    ],
   "roomCriteria":[
      {
         "adult":2
      }
   ],
   "nationality":"DE",
   "checkIn":"2023-06-20",
   "night":1,
   "currency":"EUR",
   "culture":"en-US"
}
```

```json title="Response"
{
  "header": {
    "requestId": "2258f243-1975-4f0d-8250-60d36887a6a4",
    "success": true,
    "messages": [
      {
        "id": 10000000,
        "code": "OperationCompleted",
        "messageType": 2,
        "message": "Operation was completed successfully"
      }
    ]
  },
  "body": {
    "searchId": "0967b3d6-a237-4dbc-bf19-cd79f39cab57",
    "expiresOn": "2020-10-27T14:22:48.8184312Z",
    "hotels": [
      {
        "geolocation": {
          "longitude": "30.537600000",
          "latitude": "36.508700000"
        },
        "stars": 5,
        "themes": [
          {
            "id": "1",
            "name": "FAMILY"
          },
          {
            "id": "7",
            "name": "ALL INCLUSIVE"
          }
        ],
        "boards": [
          {
            "id": "1"
          },
          {
            "id": "4"
          }
        ],
        "country": {
          "name": "TURKEY",
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "provider": 0,
          "id": "5"
        },
        "city": {
          "name": "Antalya",
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "provider": 0,
          "id": "22177"
        },
        "giataInfo": {
          "hotelId": "1269469",
          "destinationId": "930"
        },
        "town": {
          "name": "BELEK TV",
          "latitude": "36.856770000",
          "longitude": "30.851300000",
          "provider": 0,
          "id": "3694"
        },
        "village": {
          "name": "BOGAZKENT",
          "provider": 0,
          "id": "3706"
        },
        "offers": [
          {
            "night": 1,
            "isAvailable": false,
            "rooms": [
              {
                "roomId": "6941",
                "roomName": "STANDARD ROOM",
                "roomGroups": [],
                "accomId": "16287",
                "accomName": "DOUBLE ROOM",
                "boardId": "4592",
                "boardName": "ALL INCLUSIVE",
                "boardGroups": [],
                "allotment": 10000,
                "stopSaleGuaranteed": 0,
                "stopSaleStandart": 0,
                "price": {
                  "amount": 42.00375,
                  "currency": "EUR"
                },
                "travellers": [
                  { "type": 1 },
                  { "type": 1 }
                ]
              }
            ],
            "isRefundable": false,
            "offerId": "1-2--DE-1|2889381-455-2",
            "checkIn": "2020-10-27T00:00:00",
            "price": {
              "amount": 42.00375,
              "currency": "EUR"
            },
            "ownOffer": true
          },
          {
            "night": 1,
            "isAvailable": false,
            "rooms": [
              {
                "roomId": "6942",
                "roomName": "DELUX ROOM",
                "roomGroups": [],
                "accomId": "16289",
                "accomName": "DOUBLE ROOM",
                "boardId": "4592",
                "boardName": "ALL INCLUSIVE",
                "boardGroups": [],
                "allotment": 10000,
                "stopSaleGuaranteed": 0,
                "stopSaleStandart": 0,
                "price": {
                  "amount": 56.005,
                  "currency": "EUR"
                },
                "travellers": [
                  { "type": 1 },
                  { "type": 1 }
                ]
              }
            ],
            "isRefundable": false,
            "offerId": "1-2--DE-1|2886797-455-2",
            "checkIn": "2020-10-27T00:00:00",
            "price": {
              "amount": 56.005,
              "currency": "EUR"
            },
            "ownOffer": true
          }
        ],
        "address": "Tekirova Mahallesi, 07995 Kemer/Antalya, Türkiye",
        "provider": 1,
        "thumbnail": "/images/product/1/2/1/4481/fatih_test-en-us.jpg",
        "thumbnailFull": "http://test.services.tourvisio.com/media/images/product/1/2/1/4481/fatih_test-en-us.jpg",
        "description": { "text": "<p>GERMAN CULTURE, Category = SEARCH<\/p>" },
        "id": "4481",
        "name": "FATIH TEST-EN-US"
      }
    ],
    "details": {
      "enablePaging": false,
      "getOnlyBestOffers": false
    }
  }
}
```

-----------------------------

##GetProductInfo

You can use GetProductInfo for getting hotel media information without prices.

| Update Date	 | 11.05.2023                               |
|-------------------|------------------------------------------|
| Method Adress     | ```/api/productservice/getproductinfo``` |
| Method Type       | 	```POST```                              |
| Token Required    | 		```YES```                              |

[Click](../enumarations/#Product-Types) to reach the product types.

```json title="Request"
{
  "productType": 2,
  
  <!--If working a single provider is not required. But it is required if you work with multiple provider.
  e.g. TourVisio + Paximum hotels. This value in pricesearchresponse. hotel.provider-->
  "ownerProvider": 2,
  
  <!--This value in pricesearchresponse. hotel.id-->
  "product": "102576",
  
  "culture": "en-US"
}
```

```json title="Response"
{
    "body": {
        "hotel": {
            "seasons": [
                {
                    "id": 9,
                    "name": "TEST",
                    "beginDate": "2018-07-01T00:00:00",
                    "endDate": "2021-01-01T00:00:00",
                    "textCategories": [
                        {
                            "code": "HTLDESC",
                            "name": "HOTEL DESCRIPTION",
                            "presentations": [
                                {
                                    "textType": 3,
                                    "text": "<H5> <STRONG>HOTEL DESCRIPTION </H5>\r\nTEST 122334\r\nTESTW 35443\r\nTEST 4534JKLJK"
                                }
                            ]
                        }
                    ],
                    "facilityCategories": [
                        {
                            "name": "Undefined Facility Category",
                            "facilities": [
                                {
                                    "id": "4",
                                    "name": "Animation Team",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "5",
                                    "name": "Apartmen",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "7",
                                    "name": "Bar",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "8",
                                    "name": "Beach Hotel",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "10",
                                    "name": "Building",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "11",
                                    "name": "Bungalow",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "12",
                                    "name": "Business Center",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "13",
                                    "name": "Casino",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "15",
                                    "name": "City Hotel",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "19",
                                    "name": "Conference Hall",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "20",
                                    "name": "Credit Card",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "22",
                                    "name": "Diving",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "23",
                                    "name": "Doctor",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "24",
                                    "name": "Exchange",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "25",
                                    "name": "Fine Pebble Beach",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "26",
                                    "name": "Fitness Center",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "27",
                                    "name": "Gift Shop",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "28",
                                    "name": "Golf",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "29",
                                    "name": "Golf Course",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "30",
                                    "name": "GYM",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "31",
                                    "name": "Hair Dressing Saloon",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "32",
                                    "name": "Healthy Equipment",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "17",
                                    "name": "Indoor Pool",
                                    "unit": "7",
                                    "note": "",
                                    "isPriced": true,
                                    "highlighted": false
                                },
                                {
                                    "id": "33",
                                    "name": "Internet Cafe",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "34",
                                    "name": "Jakuzzi",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "35",
                                    "name": "Kids Club",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "36",
                                    "name": "Kids Pool",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "37",
                                    "name": "Laundry Service",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "38",
                                    "name": "Lifeguard",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "39",
                                    "name": "Market",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "40",
                                    "name": "Massage Center",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "41",
                                    "name": "Mini Bar",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "42",
                                    "name": "Newpaper",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "43",
                                    "name": "Non Smoking",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "44",
                                    "name": "Nurse",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "45",
                                    "name": "Parking",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "46",
                                    "name": "Pets Allowed",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "47",
                                    "name": "Pool",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "48",
                                    "name": "Private Beach",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "49",
                                    "name": "Rent a Bcyle",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "50",
                                    "name": "Rent a Car",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "51",
                                    "name": "Restaurant",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "52",
                                    "name": "Sand Beach",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "53",
                                    "name": "Sauna",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "54",
                                    "name": "Security",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "55",
                                    "name": "Snack Bar",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "56",
                                    "name": "Sport Equipment",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "57",
                                    "name": "Squash",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "58",
                                    "name": "Table Tennis",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "59",
                                    "name": "tenniS pLAY courT",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "60",
                                    "name": "Turkish Bath",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "61",
                                    "name": "TV Saloon",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "62",
                                    "name": "Villa",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "63",
                                    "name": "Warn Pool",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "64",
                                    "name": "Water Slides",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "65",
                                    "name": "Water Sport",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                }
                            ]
                        },
                        {
                            "id": "1",
                            "name": "SEARCH",
                            "facilities": [
                                {
                                    "id": "3",
                                    "name": "Air Condition",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "6",
                                    "name": "ATM (Bank)",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "9",
                                    "name": "Beauty Center",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "16",
                                    "name": "Clinic",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                },
                                {
                                    "id": "21",
                                    "name": "Disco",
                                    "note": "",
                                    "isPriced": true,
                                    "highlighted": true
                                },
                                {
                                    "id": "18",
                                    "name": "Outdoor Pool",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": true
                                }
                            ]
                        },
                        {
                            "id": "3",
                            "name": "Sports",
                            "facilities": [
                                {
                                    "id": "14",
                                    "name": "Cinema",
                                    "note": "",
                                    "isPriced": false,
                                    "highlighted": false
                                }
                            ]
                        }
                    ],
                    "mediaFiles": [
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/187/aydinbey_king_s_palace_187.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/187/aydinbey_king_s_palace_187.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/188/aydinbey_king_s_palace_188.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/188/aydinbey_king_s_palace_188.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/189/aydinbey_king_s_palace_189.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/189/aydinbey_king_s_palace_189.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/190/aydinbey_king_s_palace_190.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/190/aydinbey_king_s_palace_190.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/191/aydinbey_king_s_palace_191.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/191/aydinbey_king_s_palace_191.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/192/aydinbey_king_s_palace_192.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/192/aydinbey_king_s_palace_192.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/193/aydinbey_king_s_palace_193.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/193/aydinbey_king_s_palace_193.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/194/aydinbey_king_s_palace_194.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/194/aydinbey_king_s_palace_194.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/195/aydinbey_king_s_palace_195.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/195/aydinbey_king_s_palace_195.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/196/aydinbey_king_s_palace_196.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/196/aydinbey_king_s_palace_196.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/197/aydinbey_king_s_palace_197.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/197/aydinbey_king_s_palace_197.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/198/aydinbey_king_s_palace_198.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/198/aydinbey_king_s_palace_198.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/199/aydinbey_king_s_palace_199.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/199/aydinbey_king_s_palace_199.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/769/aydinbey_king_s_palace_769.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/769/aydinbey_king_s_palace_769.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/1/57/0/2/2/791/aydinbey_king_s_palace_791.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/2/791/aydinbey_king_s_palace_791.jpg"
                        }
                    ],
                    "themes": [
                        {
                            "id": "2",
                            "name": "AQUA"
                        },
                        {
                            "id": "6",
                            "name": "BEACH"
                        },
                        {
                            "id": "9",
                            "name": "LUXURY"
                        },
                        {
                            "id": "11",
                            "name": "ADULTS ONLY"
                        }
                    ]
                },
                {
                    "id": 1108,
                    "name": "summer last",
                    "beginDate": "2019-04-01T00:00:00",
                    "endDate": "2021-01-01T00:00:00",
                    "facilityCategories": [
                        {
                            "name": "Undefined Facility Category",
                            "facilities": [
                                {
                                    "id": "4",
                                    "name": "Animation Team",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "5",
                                    "name": "Apartmen",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "7",
                                    "name": "Bar",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "8",
                                    "name": "Beach Hotel",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "10",
                                    "name": "Building",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "11",
                                    "name": "Bungalow",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "12",
                                    "name": "Business Center",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "13",
                                    "name": "Casino",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "15",
                                    "name": "City Hotel",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "19",
                                    "name": "Conference Hall",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "20",
                                    "name": "Credit Card",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "22",
                                    "name": "Diving",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "23",
                                    "name": "Doctor",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "24",
                                    "name": "Exchange",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "25",
                                    "name": "Fine Pebble Beach",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "26",
                                    "name": "Fitness Center",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "27",
                                    "name": "Gift Shop",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "28",
                                    "name": "Golf",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "29",
                                    "name": "Golf Course",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "30",
                                    "name": "GYM",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "31",
                                    "name": "Hair Dressing Saloon",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "32",
                                    "name": "Healthy Equipment",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "17",
                                    "name": "Indoor Pool",
                                    "unit": "7",
                                    "note": "",
                                    "isPriced": true
                                },
                                {
                                    "id": "33",
                                    "name": "Internet Cafe",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "34",
                                    "name": "Jakuzzi",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "35",
                                    "name": "Kids Club",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "36",
                                    "name": "Kids Pool",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "37",
                                    "name": "Laundry Service",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "38",
                                    "name": "Lifeguard",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "39",
                                    "name": "Market",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "40",
                                    "name": "Massage Center",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "41",
                                    "name": "Mini Bar",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "42",
                                    "name": "Newpaper",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "43",
                                    "name": "Non Smoking",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "44",
                                    "name": "Nurse",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "45",
                                    "name": "Parking",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "46",
                                    "name": "Pets Allowed",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "47",
                                    "name": "Pool",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "48",
                                    "name": "Private Beach",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "49",
                                    "name": "Rent a Bcyle",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "50",
                                    "name": "Rent a Car",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "51",
                                    "name": "Restaurant",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "52",
                                    "name": "Sand Beach",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "53",
                                    "name": "Sauna",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "54",
                                    "name": "Security",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "55",
                                    "name": "Snack Bar",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "56",
                                    "name": "Sport Equipment",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "57",
                                    "name": "Squash",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "58",
                                    "name": "Table Tennis",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "59",
                                    "name": "tenniS pLAY courT",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "60",
                                    "name": "Turkish Bath",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "61",
                                    "name": "TV Saloon",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "62",
                                    "name": "Villa",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "63",
                                    "name": "Warn Pool",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "64",
                                    "name": "Water Slides",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "65",
                                    "name": "Water Sport",
                                    "note": "",
                                    "isPriced": false
                                }
                            ]
                        },
                        {
                            "id": "1",
                            "name": "SEARCH",
                            "facilities": [
                                {
                                    "id": "3",
                                    "name": "Air Condition",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "6",
                                    "name": "ATM (Bank)",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "9",
                                    "name": "Beauty Center",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "16",
                                    "name": "Clinic",
                                    "note": "",
                                    "isPriced": false
                                },
                                {
                                    "id": "21",
                                    "name": "Disco",
                                    "note": "",
                                    "isPriced": true
                                },
                                {
                                    "id": "18",
                                    "name": "Outdoor Pool",
                                    "note": "",
                                    "isPriced": false
                                }
                            ]
                        },
                        {
                            "id": "3",
                            "name": "Sports",
                            "facilities": [
                                {
                                    "id": "14",
                                    "name": "Cinema",
                                    "note": "",
                                    "isPriced": false
                                }
                            ]
                        }
                    ]
                }
            ],
            "faxNumber": "",
            "phoneNumber": "",
            "homePage": "",
            "rooms": [
                {
                    "presentations": [
                        {
                            "textType": 1,
                            "text": "<p><b>Test xxxxxxxxxxxxxx</b></p><p><b><u><span style=\"font-size: 13px\">test xxxxxxx</span></u></b><u><span style=\"font-size: 13px\">&nbsp;</span></u></p><p><span style=\"font-size: 13px\"><u>Test</u></span>&nbsp;</p>"
                        }
                    ],
                    "facilities": [
                        {
                            "id": "266",
                            "name": "Balcony",
                            "note": "",
                            "isPriced": false
                        },
                        {
                            "id": "263",
                            "name": "Coffee Maker",
                            "note": "",
                            "isPriced": false
                        },
                        {
                            "id": "2126",
                            "name": "WC",
                            "note": "",
                            "isPriced": false
                        }
                    ],
                    "mediaFiles": [
                        {
                            "fileType": 0,
                            "url": "/images/product/1/57/0/2/4/1002/aydinbey_king_s_palace_1002.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/4/1002/aydinbey_king_s_palace_1002.jpg"
                        },
                        {
                            "fileType": 0,
                            "url": "/images/product/1/57/0/2/4/1003/aydinbey_king_s_palace_1003.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/4/1003/aydinbey_king_s_palace_1003.jpg"
                        },
                        {
                            "fileType": 0,
                            "url": "/images/product/1/57/0/2/4/1005/aydinbey_king_s_palace_1005.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/4/1005/aydinbey_king_s_palace_1005.jpg"
                        },
                        {
                            "fileType": 0,
                            "url": "/images/product/1/57/0/2/4/1006/aydinbey_king_s_palace_1006.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/4/1006/aydinbey_king_s_palace_1006.jpg"
                        },
                        {
                            "fileType": 0,
                            "url": "/images/product/1/57/0/2/4/1014/aydinbey_king_s_palace_1014.jpg",
                            "urlFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/0/2/4/1014/aydinbey_king_s_palace_1014.jpg"
                        }
                    ],
                    "name": "STANDARD ROOM",
                    "code": "STD"
                }
            ],
            "boards": [
                {
                    "presentations": [
                        {
                            "textType": 1,
                            "text": "<p>&nbsp;test xxx </p><p><b>Test xxx</b></p><p>&nbsp;</p><p><b><span style=\"font-size: 64px;\">test xxx</span></b><span style=\"font-size: 64px;\">&nbsp;</span></p>"
                        }
                    ],
                    "mediaFiles": [
                        {
                            "fileType": 2,
                            "url": "/documents/other/1/57/2/9/aydinbey_king_s_palace_9",
                            "urlFull": "https://preprod-services.tourvisio.com/media/documents/other/1/57/2/9/aydinbey_king_s_palace_9"
                        }
                    ],
                    "name": "BB TEST XX",
                    "code": "HB"
                }
            ],
            "stopSaleGuaranteed": 0,
            "stopSaleStandart": 0,
            "paymentPlanInfo": [
                {
                    "id": 1,
                    "phase": 1,
                    "day": 0,
                    "paymentTimeStatus": 1,
                    "price": {
                        "percent": 30.00,
                        "amount": 0
                    }
                },
                {
                    "id": 2,
                    "phase": 2,
                    "day": 10,
                    "paymentTimeStatus": 0,
                    "price": {
                        "percent": 100.00,
                        "amount": 0
                    }
                }
            ],
            "geolocation": {
                "longitude": "31.342760400",
                "latitude": "36.806733500"
            },
            "location": {
                "name": "ALANYA TV",
                "latitude": "36.525213930",
                "longitude": "31.974851300",
                "provider": 0,
                "isTopRegion": false,
                "id": "3695"
            },
            "country": {
                "name": "TURKEY",
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
            },
            "city": {
                "name": "Antalya 22177",
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
            },
            "town": {
                "name": "ALANYA TV",
                "latitude": "36.525213930",
                "longitude": "31.974851300",
                "provider": 0,
                "isTopRegion": false,
                "id": "3695"
            },
            "hotelCategory": {
                "name": "APART",
                "id": "2041",
                "code": "APART"
            },
            "code": "AYDIN",
            "provider": 1,
            "thumbnail": "/images/product/1/57/635885402400000000/2/1/14/aydinbey_king_s_palace.jpg",
            "thumbnailFull": "https://preprod-services.tourvisio.com/media/images/product/1/57/635885402400000000/2/1/14/aydinbey_king_s_palace.jpg",
            "id": "14",
            "name": "Aydinbey King's Palace"
        }
    },
    "header": {
        "requestId": "88028bc3-532b-4e2d-a396-860a487a24db",
        "success": true,
        "responseTime": "2022-08-10T13:05:05.9072867Z",
        "messages": [
            {
                "id": 10000000,
                "code": "OperationCompleted",
                "messageType": 2,
                "message": "Operation was completed successfully"
            }
        ]
    }
}
```

-----------------------------
##GetOffers (Optional)
You can use GetOffers for getting selected hotel offers. If you use <i><b>"getOnlyBestOffers": true</i></b>  in <i><b>price search  </i></b> use this method.

| Update Date	 | 25.07.2023                          |
|-------------------|-------------------------------------|
| Method Adress     | ```/api/productservice/getoffers``` |
| Method Type       | ```POST```                          |
| Token Required    | ```YES```                           |

```json title="Request"
{
  "searchId": "f43dcb3a-0214-4d17-8838-7540c815245d",
  "offerId": "2$2$05ba9a42-24a8-41ce-bc61-40e6c443f9e5",
  "productType": 2,
  <!--This value in pricesearchresponse. hotel.id-->
  "productId": "105841",
  "currency": "EUR",
  "culture": "tr-TR",
  <!--This value must be true in order to get room informations (presentation, facilities and media files) -->
  "getRoomInfo": true
}
```

```json title="Response"
{
  "header": {
    "requestId": "bd02cac7-e312-4cf4-a4bd-76e9b74374b7",
    "success": true,
    "responseTime": "2021-08-18T19:08:28.8279303Z",
    "messages": [
      {
        "id": 10000000,
        "code": "OperationCompleted",
        "messageType": 2,
        "message": "Operation was completed successfully"
      }
    ]
  },
  "body": {
    "offers": [
      {
        "night": 2,
        "isAvailable": true,
        "availability": 1,
        "rooms": [
          {
            "roomId": "12305",
            "roomName": "SINGLE LAND VIEW",
            "boardId": "50",
            "boardName": "BED AND BREAKFAST",
            "boardGroups": [
              {
                "id": "1",
                "name": "Kahvaltı"
              }
            ],
            "stopSaleGuaranteed": 0,
            "stopSaleStandart": 0,
            "travellers": [
              {
                "type": 1,
                "age": 0,
                "nationality": "TR",
                "minAge": 0,
                "maxAge": 0
              }
            ],
            "roomInfoId": "SINGLE LAND VIEW"
          }
        ],
        "isRefundable": false,
        "cancellationPolicies": [
          {
            "dueDate": "2021-08-17T20:00:00",
            "price": {
              "amount": 55.045,
              "currency": "EUR"
            },
            "provider": 0
          }
        ],
        "priceBreakdowns": [
          {
            "productType": 2,
            "priceBreakdowns": [
              {
                "roomNumber": "1",
                "date": "2021-08-20T00:00:00Z",
                "price": {
                  "amount": 27.5225,
                  "currency": "EUR"
                }
              },
              {
                "roomNumber": "1",
                "date": "2021-08-21T00:00:00Z",
                "price": {
                  "amount": 27.5225,
                  "currency": "EUR"
                }
              }
            ]
          }
        ],
        "expiresOn": "2021-08-18T19:28:21.7892602Z",
        "offerId": "2$2$5ec1089a-ded3-4a46-a563-fcc26784149c",
        "checkIn": "2021-08-19T00:00:00Z",
        "price": {
          "amount": 55.045,
          "currency": "EUR"
        },
        "ownOffer": false,
        "provider": 2
      },
      {
        "night": 2,
        "isAvailable": true,
        "availability": 1,
        "rooms": [
          {
            "roomId": "12305",
            "roomName": "SINGLE LAND VIEW",
            "boardId": "50",
            "boardName": "BED AND BREAKFAST",
            "boardGroups": [
              {
                "id": "1",
                "name": "Kahvaltı"
              }
            ],
            "stopSaleGuaranteed": 0,
            "stopSaleStandart": 0,
            "travellers": [
              {
                "type": 1,
                "age": 0,
                "nationality": "TR",
                "minAge": 0,
                "maxAge": 0
              }
            ],
            "roomInfoId": "SINGLE LAND VIEW"
          }
        ],
        "isRefundable": false,
        "cancellationPolicies": [
          {
            "dueDate": "2021-08-17T20:00:00",
            "price": {
              "amount": 30.4212,
              "currency": "EUR"
            },
            "provider": 0
          }
        ],
        "priceBreakdowns": [
          {
            "productType": 2,
            "priceBreakdowns": [
              {
                "roomNumber": "1",
                "date": "2021-08-20T00:00:00Z",
                "price": {
                  "amount": 30.5828,
                  "currency": "EUR"
                }
              },
              {
                "roomNumber": "1",
                "date": "2021-08-21T00:00:00Z",
                "price": {
                  "amount": 30.5828,
                  "currency": "EUR"
                }
              }
            ]
          }
        ],
        "expiresOn": "2021-08-18T19:28:21.7892602Z",
        "offerId": "2$2$ac504b0e-fe61-4238-9b68-11097010788f",
        "checkIn": "2021-08-19T00:00:00Z",
        "price": {
          "amount": 61.1656,
          "currency": "EUR"
        },
        "ownOffer": false,
        "provider": 2
      }
    ],
    "information": {
      "total": 2
    },
    "productId": "105841",
    "roomInfos": [
			{
				"presentations": [],
				"facilities": [
					{
						"name": "Bathroom"
					},
					{
						"name": "Bathtub or Shower"
					},
					{
						"name": "Hair dryer"
					},
					{
						"name": "Slipper"
					},
					{
						"name": "Toilet"
					},
					{
						"name": "Free Bathroom Supplies"
					},
					{
						"name": "Towel Set"
					},
					{
						"name": "Phone in Bathroom"
					},
					{
						"name": "Wooden / Parquet Floor"
					},
					{
						"name": "Safe Box"
					},
					{
						"name": "Wardrobe / Closet"
					},
					{
						"name": "Carpeted Floor"
					},
					{
						"name": "Heating"
					},
					{
						"name": "Couch"
					},
					{
						"name": "Air conditioning"
					},
					{
						"name": "Dryer"
					},
					{
						"name": "Sitting group"
					},
					{
						"name": "Cleaning products"
					},
					{
						"name": "Study desk"
					},
					{
						"name": "Iron facility"
					},
					{
						"name": "Make up desk"
					},
					{
						"name": "Garden View"
					},
					{
						"name": "Balcony"
					},
					{
						"name": "City View"
					},
					{
						"name": "Flat Screen TV"
					},
					{
						"name": "radio"
					},
					{
						"name": "TV"
					},
					{
						"name": "Satellite Channels"
					},
					{
						"name": "LED TV"
					},
					{
						"name": "Wireless Internet"
					},
					{
						"name": "Wake Up Service"
					},
					{
						"name": "Refrigerator"
					},
					{
						"name": "Kettle"
					},
					{
						"name": "Mini bar"
					}
				],
				"mediaFiles": [
					{
						"fileType": 1,
						"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_60dd9670.jpg"
					},
					{
						"fileType": 1,
						"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_60dd9670.jpg"
					},
					{
						"fileType": 1,
						"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_ae67c61c.jpg"
					},
					{
						"fileType": 1,
						"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_8ec56797.jpg"
					},
					{
						"fileType": 1,
						"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_54f6b977.jpg"
					}
				],
				"name": "SINGLE LAND VIEW",
				"id": "SINGLE LAND VIEW"
			}
		]
  }
}
```

-----------------------------

##GetOfferDetails (Optional)
You have to use this method before starting the booking process for any offer that you had received by using price search method. This method is going to show you whether or not that offer was still valid. At the same time, using this method, you can get cancellation rules about an offer which you couldn't get via price search.

<i><b>Attention, don't continue to the booking step without checking validity of the offer! <br/> (It is optional if GetOffers method is used.)</b></i>
 
| Update Date	 | 01.09.2023                                |
|-------------------|-------------------------------------------|
| Method Adress     | ```/api/productservice/getofferdetails``` |
| Method Type       | ```POST```                                |
| Token Required    | ```YES```                                 |

```json title="Request"
{
   "offerIds":[
      "1$2$202202170837$TR$0|1528$1$167$15073$$$0$0$2"
   ],
   "currency":"EUR",
   <!-- This value must be true in order to get hotel and room informations (like presentations, image files and facilities) -->
   <!-- In order to get room informations getRoomInfo value on the getOffers request also must be true. -->
   "getProductInfo":true 
}
```

```json title="Response"
{
  "header": {
    "requestId": "e9385826-1458-4c0b-917a-8aa9d8ba95db",
    "success": true,
    "responseTime": "2022-02-17T08:08:48.4474975Z",
    "messages": [
      {
        "id": 10000000,
        "code": "OperationCompleted",
        "messageType": 2,
        "message": "Operation was completed successfully"
      }
    ]
  },
  "body": {
    "offerDetails": [
      {
        "expiresOn": "2022-02-17T08:37:00Z",
        "offerId": "1$2$202202170837$TR$0|1528$1$167$15073$$$0$0$2",
        "checkIn": "2022-04-17T00:00:00",
        "checkOut": "2022-04-24T00:00:00",
        "isSpecial": false,
        "isAvailable": true,
        "isRefundable": true,
        "passengerAmountToPay": {
          "amount": 1158,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 5,
          "amount": 57.9,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "hotels": [
					{
						"seasons": [
							{
								"name": "General",
								"textCategories": [
									{
										"name": "Location",
										"presentations": [
											{
												"textType": 3,
												"text": "Lying amidst wonderful gardens, this exclusive beach hotel is surrounded by a pine forest and lies at the foot of the Taurus mountain range. A comfortable resort is located in the tourist centre of Belek, the pretty sand/ pebble beach is across the River Acisu from the hotel and may easily be reached by making use of the hotel's wooden bridge. The city centre is around 8 km away from the hotel with plenty of shopping and entertainment venues, numerous restaurants, bars and cafés, which can easily be reached with the affordable public transport or by taxi. There is a stop for the public transport to be found in front of the hotel. Antalya is located around 55 km from the hotel and the transfer time to Antalya airport is around 50 minutes."
											}
										]
									},
									{
										"name": "Facilities",
										"presentations": [
											{
												"textType": 3,
												"text": "Opened in 1997, the hotel comprises a total of 420 rooms spread over 4 floors and a number of villas. Facilities on offer include a foyer with a 24-hour reception desk and lifts. The hotel offers a beauty salon, a pharmacy, a shopping centre, a hairdresser, 2 bars, a nightclub, a open-air theatre, a games room and 2 air-conditioned main restaurants with non-smoking areas and an outside terrace, 3 à la carte restaurants (with reservations and for an added fee). Additionally, a conference room, a public Internet terminal, laundry and room services as well as medical assistance are on offer to guests. For younger guests there is a kids' club and a playground. Those arriving by car may make use of the car park or garage facilities. Furthermore, guests are presented with the opportunity to rent out bicycles."
											}
										]
									},
									{
										"name": "Rooms",
										"presentations": [
											{
												"textType": 3,
												"text": "The comfortable rooms come with an en suite bathroom with shower and hairdryer, a direct dial telephone, satellite/ cable TV, pay TV, a radio, a minibar/ fridge, centrally controlled air conditioning as well as a hire safe. Each of these tastefully furnished rooms also comes with a balcony or a terrace (some with sea views)."
											}
										]
									},
									{
										"name": "Sports/Entertainment",
										"presentations": [
											{
												"textType": 3,
												"text": "In the garden area, guests will find a pool landscape with water slides, 2 swimming pools, 4 children's pools, a poolside snack bar as well as a wonderful sun terrace with sun loungers and parasols laid out ready for use. In addition, there are 2 indoor pools, a Turkish bath, a sauna, massage services and various health treatments as well as a health club to choose from. Various water sports are offer on the beach, such as windsurfing, sailing, catamaran sailing, canoeing and pedalo hire (additional charges apply). Sports enthusiasts may make use of the 6 various tennis courts as well as the in-house gym. In addition, minigolf, table tennis, squash, aerobics and archery are also on offer. Guests will also find a number of golf courses in the area. A seasonal entertainment programme for adults and children rounds off the offerings, as well as a children's cinema for younger guests."
											}
										]
									},
									{
										"name": "Meals",
										"presentations": [
											{
												"textType": 3,
												"text": "Guests may select their breakfast, midday and evening meals from varied buffets. Guests are also able to book half-board or all-inclusive stays."
											}
										]
									},
									{
										"name": "Payment",
										"presentations": [
											{
												"textType": 3,
												"text": "American Express, Diners Club, MasterCard and VISA are accepted as methods of payment."
											}
										]
									}
								],
								"mediaFiles": [
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;57169f01fe69bd244f594a09976dd572;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/57169f01fe69bd244f594a09976dd572.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;7d54b7c2e15141686ac49e09953c1663;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/7d54b7c2e15141686ac49e09953c1663.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;e6b1f2d5db8f3cb16eb6a25b757a32f5;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/e6b1f2d5db8f3cb16eb6a25b757a32f5.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;d1c3cedf9697e85747d4e2f249ab2188;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/d1c3cedf9697e85747d4e2f249ab2188.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;6e009d9f1bf4cd7c3a2f2d7d371540b1;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/6e009d9f1bf4cd7c3a2f2d7d371540b1.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;0a11eff619e06485c9f96debafd7d8fe;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/0a11eff619e06485c9f96debafd7d8fe.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;d891d8f055e19b01a8ac068298a4efcf;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/d891d8f055e19b01a8ac068298a4efcf.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;67638a1efb7846f90a24cb7174326c0b;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/67638a1efb7846f90a24cb7174326c0b.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;54d168f0964de156611ca5d44b512f21;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/54d168f0964de156611ca5d44b512f21.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;036f1625633c08a34abe9e3b096553ae;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/036f1625633c08a34abe9e3b096553ae.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;32f4a18383210c3f69cf8ab3d08b1454;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/32f4a18383210c3f69cf8ab3d08b1454.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;d701685c58655bf94079555e6125555e;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/d701685c58655bf94079555e6125555e.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;4afe05508b485b0da36d1a21498f9954;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/4afe05508b485b0da36d1a21498f9954.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;d26d15fe04931e98e15acdd3f8573b41;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/d26d15fe04931e98e15acdd3f8573b41.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;22dc7ed5e3a7266616ad412b25bf0def;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/22dc7ed5e3a7266616ad412b25bf0def.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;e7bd1c1916415fdcf72aa4bd2930d04a;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/e7bd1c1916415fdcf72aa4bd2930d04a.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;9209790fe2735c46e7a5b664e5c7d6db;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/9209790fe2735c46e7a5b664e5c7d6db.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;e86123eab3c3d9558451d598075929b7;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/e86123eab3c3d9558451d598075929b7.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;7871faad03a124c4432b065e975f2a9f;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/7871faad03a124c4432b065e975f2a9f.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;47bab67002e509db2466dc55b50bef53;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/47bab67002e509db2466dc55b50bef53.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;b73f7855db4bae50640631e9982cda5f;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/b73f7855db4bae50640631e9982cda5f.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;e900b1ffb03904a7dae7b6b626f779da;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/e900b1ffb03904a7dae7b6b626f779da.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;256cc0674cf451b5da61fe084f443aa6;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/256cc0674cf451b5da61fe084f443aa6.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;dbd09294607f9f87686a634d3d6b8622;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/dbd09294607f9f87686a634d3d6b8622.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;cb7ef463a6b63276b74f312b5bc2feb3;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/cb7ef463a6b63276b74f312b5bc2feb3.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;a6183a350ca53ba49d152078cbcc55df;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/a6183a350ca53ba49d152078cbcc55df.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;475fa43fc908f06013a397cceabf82a7;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/475fa43fc908f06013a397cceabf82a7.jpg"
									},
									{
										"fileType": 1,
										"url": "/images/product/2/151/0/2/2/100021;7b55602aff5de4e9c843e3cec75abd05;jpg/gloria_golf_resort.jpg",
										"urlFull": "https://media.dev.paximum.com/hotelimages/100021/7b55602aff5de4e9c843e3cec75abd05.jpg"
									}
								]
							}
						],
						"address": {
							"city": {
								"name": "Belek",
								"provider": 0,
								"isTopRegion": false
							},
							"addressLines": [
								"Acisu Mevkii",
								"Belek",
								"Serik"
							],
							"street": "Acisu Mevkii",
							"geolocation": {
								"longitude": "31.11234",
								"latitude": "36.84033"
							}
						},
						"faxNumber": "+902427100633",
						"phoneNumber": "+902427100600",
						"homePage": "http://www.gloria.com.tr/Gloria-Hotels-And-Resorts/Hotels.aspx?otelId=1",
						"rooms": [
							{
								"presentations": [],
								"facilities": [
									{
										"name": "Bathroom"
									},
									{
										"name": "Bathtub or Shower"
									},
									{
										"name": "Hair dryer"
									},
									{
										"name": "Slipper"
									},
									{
										"name": "Toilet"
									},
									{
										"name": "Free Bathroom Supplies"
									},
									{
										"name": "Towel Set"
									},
									{
										"name": "Phone in Bathroom"
									},
									{
										"name": "Wooden / Parquet Floor"
									},
									{
										"name": "Safe Box"
									},
									{
										"name": "Wardrobe / Closet"
									},
									{
										"name": "Carpeted Floor"
									},
									{
										"name": "Heating"
									},
									{
										"name": "Couch"
									},
									{
										"name": "Air conditioning"
									},
									{
										"name": "Dryer"
									},
									{
										"name": "Sitting group"
									},
									{
										"name": "Cleaning products"
									},
									{
										"name": "Study desk"
									},
									{
										"name": "Iron facility"
									},
									{
										"name": "Make up desk"
									},
									{
										"name": "Garden View"
									},
									{
										"name": "Balcony"
									},
									{
										"name": "City View"
									},
									{
										"name": "Flat Screen TV"
									},
									{
										"name": "radio"
									},
									{
										"name": "TV"
									},
									{
										"name": "Satellite Channels"
									},
									{
										"name": "LED TV"
									},
									{
										"name": "Wireless Internet"
									},
									{
										"name": "Wake Up Service"
									},
									{
										"name": "Refrigerator"
									},
									{
										"name": "Kettle"
									},
									{
										"name": "Mini bar"
									}
								],
								"mediaFiles": [
									{
										"fileType": 1,
										"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_60dd9670.jpg"
									},
									{
										"fileType": 1,
										"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_60dd9670.jpg"
									},
									{
										"fileType": 1,
										"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_ae67c61c.jpg"
									},
									{
										"fileType": 1,
										"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_8ec56797.jpg"
									},
									{
										"fileType": 1,
										"urlFull": "https://img.otelz.com/s3/size(1200,500,max,mc)/turkiye/istanbul/fatih/ebru-hotel_54f6b977.jpg"
									}
								],
								"name": "Family Room",
								"id": "Family Room"
							}
						],
						"stopSaleGuaranteed": 0,
						"stopSaleStandart": 0,
						"geolocation": {
							"longitude": "31.11234",
							"latitude": "36.84033"
						},
						"stars": 5,
						"rating": 5.37931,
						"themes": [],
						"location": {
							"name": "Belek",
							"latitude": "36.8516",
							"longitude": "31.0603",
							"provider": 2,
							"isTopRegion": false,
							"id": "23488"
						},
						"country": {
							"name": "Turkey",
							"provider": 0,
							"isTopRegion": false,
							"id": "TR"
						},
						"city": {
							"name": "Belek",
							"latitude": "36.8516",
							"longitude": "31.0603",
							"provider": 2,
							"isTopRegion": false,
							"id": "23488"
						},
						"giataInfo": {
							"hotelId": "4723",
							"destinationId": "931"
						},
						"offers": [
							{
								"isAvailable": false,
								"availability": 0,
								"rooms": [
									{
										"roomId": "0",
										"roomName": "Family Room",
										"boardId": "0",
										"boardName": "Breakfast included",
										"travellers": [
											{
												"type": 1,
												"minAge": 0,
												"maxAge": 0
											}
										],
										"roomInfoId": "Family Room"
									}
								],
								"isRefundable": false
							}
						],
						"provider": 2,
						"thumbnail": "/images/product/2/151/0/2/2/100021;57169f01fe69bd244f594a09976dd572;jpg/gloria_golf_resort.jpg",
						"thumbnailFull": "https://media.dev.paximum.com/hotelimages/100021/57169f01fe69bd244f594a09976dd572.jpg",
						"description": {
							"text": "Lying amidst wonderful gardens, this exclusive beach hotel is surrounded by a pine forest and lies at the foot of the Taurus mountain range. A comfortable resort is located in the tourist centre of Belek, the pretty sand/ pebble beach is across the River Acisu from the hotel and may easily be reached by making use of the hotel's wooden bridge. The city centre is around 8 km away from the hotel with plenty of shopping and entertainment venues, numerous restaurants, bars and cafés, which can easily be reached with the affordable public transport or by taxi. There is a stop for the public transport to be found in front of the hotel. Antalya is located around 55 km from the hotel and the transfer time to Antalya airport is around 50 minutes.Opened in 1997, the hotel comprises a total of 420 rooms spread over 4 floors and a number of villas. Facilities on offer include a foyer with a 24-hour reception desk and lifts. The hotel offers a beauty salon, a pharmacy, a shopping centre, a hairdresser, 2 bars, a nightclub, a open-air theatre, a games room and 2 air-conditioned main restaurants with non-smoking areas and an outside terrace, 3 à la carte restaurants (with reservations and for an added fee). Additionally, a conference room, a public Internet terminal, laundry and room services as well as medical assistance are on offer to guests. For younger guests there is a kids' club and a playground. Those arriving by car may make use of the car park or garage facilities. Furthermore, guests are presented with the opportunity to rent out bicycles.The comfortable rooms come with an en suite bathroom with shower and hairdryer, a direct dial telephone, satellite/ cable TV, pay TV, a radio, a minibar/ fridge, centrally controlled air conditioning as well as a hire safe. Each of these tastefully furnished rooms also comes with a balcony or a terrace (some with sea views).In the garden area, guests will find a pool landscape with water slides, 2 swimming pools, 4 children's pools, a poolside snack bar as well as a wonderful sun terrace with sun loungers and parasols laid out ready for use. In addition, there are 2 indoor pools, a Turkish bath, a sauna, massage services and various health treatments as well as a health club to choose from. Various water sports are offer on the beach, such as windsurfing, sailing, catamaran sailing, canoeing and pedalo hire (additional charges apply). Sports enthusiasts may make use of the 6 various tennis courts as well as the in-house gym. In addition, minigolf, table tennis, squash, aerobics and archery are also on offer. Guests will also find a number of golf courses in the area. A seasonal entertainment programme for adults and children rounds off the offerings, as well as a children's cinema for younger guests.Guests may select their breakfast, midday and evening meals from varied buffets. Guests are also able to book half-board or all-inclusive stays.American Express, Diners Club, MasterCard and VISA are accepted as methods of payment."
						},
						"id": "100021",
						"name": "Gloria Golf Resort"
					}
				],
        "extraServices": [
          {
            "compulsory": true,
            "free": false,
            "offers": [
              {
                "priceBreakDown": {
                  "items": [
                    {
                      "type": 1,
                      "price": {
                        "amount": 35,
                        "currency": "EUR"
                      }
                    },
                    {
                      "type": 1,
                      "price": {
                        "amount": 35,
                        "currency": "EUR"
                      }
                    }
                  ]
                },
                "willBePayAt": 1,
                "checkIn": "2022-04-17T00:00:00",
                "price": {
                  "amount": 70,
                  "currency": "EUR"
                }
              }
            ],
            "code": "FLOWERS",
            "id": "2",
            "name": "FLOWERS"
          },
          {
            "compulsory": true,
            "free": false,
            "offers": [
              {
                "priceBreakDown": {
                  "items": [
                    {
                      "type": 1,
                      "price": {
                        "amount": 5,
                        "currency": "EUR"
                      }
                    },
                    {
                      "type": 1,
                      "price": {
                        "amount": 5,
                        "currency": "EUR"
                      }
                    }
                  ]
                },
                "willBePayAt": 1,
                "checkIn": "2022-04-17T00:00:00",
                "price": {
                  "amount": 10,
                  "currency": "EUR"
                }
              }
            ],
            "code": "SPEEDBOAT",
            "id": "231",
            "name": "SpeedBoat Transfer"
          }
        ],
        "cancellationPolicies": [
          {
            "roomNumber": "1",
            "beginDate": "2022-04-17T00:00:00",
            "dueDate": "2022-02-17T00:00:00+03:00",
            "price": {
              "percent": 0,
              "amount": 0,
              "currency": "EUR"
            },
            "provider": 0
          }
        ],
        "priceBreakdowns": [
          {
            "roomNumber": "1",
            "date": "2022-04-17T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-18T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-19T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-20T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-21T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-22T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          },
          {
            "roomNumber": "1",
            "date": "2022-04-23T00:00:00",
            "price": {
              "amount": 154,
              "currency": "EUR"
            }
          }
        ],
        "provider": 1,
        "paymentDetail": {
          "paymentPlan": [
            {
              "paymentNo": 1,
              "dueDate": "2022-04-14T00:00:00",
              "price": {
                "percent": 100,
                "amount": 1100.1,
                "currency": "EUR"
              },
              "paymentStatus": false
            }
          ],
          "paymentInfo": []
        }
      }
    ]
  }
}
```