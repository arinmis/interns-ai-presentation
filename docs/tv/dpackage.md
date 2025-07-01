-----------------------------
#Dynamic Package

<!-- ![img](img/holiday_package.png) -->

-----------------------------
##GetDepartureAutocomplete Method

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getdepartureautocomplete```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "query": "İstanb",
    "productType": 13,
    "masterProductTypes": [
        2,
        3
    ],
    "serviceType": "2",
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "2b41313b-60dc-4568-bf6f-2ec7318d4810",
        "success": true,
        "responseTime": "2022-04-18T13:38:28.6279019Z",
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
                    "longitude": "28.9783589",
                    "latitude": "41.0082376"
                },
                "city": {
                    "id": "IST",
                    "name": "Istanbul, Turkey (All Airports)"
                },
                "provider": 3
            },
            {
                "type": 3,
                "geolocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
                },
                "airport": {
                    "name": "Istanbul, Istanbul International Airport, Turkey (IST)",
                    "id": "IST",
                    "code": "IST"
                },
                "provider": 3
            },
            {
                "type": 3,
                "geolocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                },
                "airport": {
                    "name": "Istanbul, Sabiha Gokcen International Airport, Turkey (SAW)",
                    "id": "SAW",
                    "code": "SAW"
                },
                "provider": 3
            }
        ]
    }
}
```

-----------------------------
##GetArrivalAutocomplete Method

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivalautocomplete```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "query": "Ant",
    "productType": 13,
    "masterProductTypes": [
        2,
        3
    ],
    "culture": "en-US"
}

```

###Response Sample

```
{
  "header": {
        "requestId": "6f54b18a-9c18-41a0-a4ca-e53a4ed11e69",
        "success": true,
        "responseTime": "2022-04-18T13:41:59.1392434Z",
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
                "country": {
                    "id": "ES",
                    "name": "Spain"
                },
                "city": {
                    "id": "10298",
                    "name": "Costa de Cantabria"
                },
                "provider": 2
            },
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
                "provider": 2
            },
            {
                "type": 1,
                "geolocation": {
                    "longitude": "9.686374",
                    "latitude": "39.98629"
                },
                "country": {
                    "id": "IT",
                    "name": "Italy"
                },
                "state": {
                    "id": "10536",
                    "name": "Sardinia"
                },
                "city": {
                    "id": "49301",
                    "name": "Santa Maria Navarrese"
                },
                "provider": 2
            },
            {
                "type": 1,
                "geolocation": {
                    "longitude": "36.16915",
                    "latitude": "36.20515"
                },
                "country": {
                    "id": "TR",
                    "name": "Turkey"
                },
                "state": {
                    "id": "10832",
                    "name": "inland"
                },
                "city": {
                    "id": "26131",
                    "name": "Antakya"
                },
                "provider": 2
            },
            {
                "type": 1,
                "geolocation": {
                    "longitude": "47.52138",
                    "latitude": "-18.90412"
                },
                "country": {
                    "id": "MG",
                    "name": "Madagascar"
                },
                "state": {
                    "id": "10615",
                    "name": "Madagascar"
                },
                "city": {
                    "id": "38433",
                    "name": "Antananarivo"
                },
                "provider": 2
            },
            {
                "type": 1,
                "country": {
                    "id": "IT",
                    "name": "Italy"
                },
                "state": {
                    "id": "10542",
                    "name": "Aosta Valley"
                },
                "city": {
                    "id": "53728",
                    "name": "Antagnod"
                },
                "provider": 2
            }
        ]
    }
}
```

-----------------------------

##GetCheckinDates Method
This method is gives available check in dates.

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getcheckindates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "arrivalLocations": [
    {
      "id": "10298",
      "type": 2
    }
  ],
  "productType": 13,
  "masterProductTypes": [
    2,
    3
  ],
  "includeSubLocations": true
}
```

###Response Sample

```
{
    "header": {
        "requestId": "333d9b48-6f9a-4b81-bb2f-1e32d37ff846",
        "success": true,
        "responseTime": "2022-04-18T13:43:38.9448295Z",
        "messages": [
            {
                "id": 10000000,
                "code": "OperationCompleted",
                "messageType": 2,
                "message": "Operasyon Başarıyla Tamamlandı"
            }
        ]
    },
    "body": {
        "dates": [
            "2022-04-18T00:00:00+03:00",
            "2022-04-19T00:00:00+03:00",
            "2022-04-20T00:00:00+03:00",
            "2022-04-21T00:00:00+03:00",
            "2022-04-22T00:00:00+03:00",
            "2022-04-23T00:00:00+03:00",
            "2022-04-24T00:00:00+03:00",
            "2022-04-25T00:00:00+03:00",
            "2022-04-26T00:00:00+03:00",
            "2022-04-27T00:00:00+03:00",
            "2022-04-28T00:00:00+03:00",
            "2022-04-29T00:00:00+03:00",
            "2022-04-30T00:00:00+03:00",
            "2022-05-01T00:00:00+03:00",
            "2022-05-02T00:00:00+03:00",
            "2022-05-03T00:00:00+03:00",
            "2022-05-04T00:00:00+03:00",
            "2022-05-05T00:00:00+03:00",
            "2022-05-06T00:00:00+03:00",
            "2022-05-07T00:00:00+03:00",
            "2022-05-08T00:00:00+03:00",
            "2022-05-09T00:00:00+03:00",
            "2022-05-10T00:00:00+03:00",
            "2022-05-11T00:00:00+03:00",
            "2022-05-12T00:00:00+03:00",
            "2022-05-13T00:00:00+03:00",
            "2022-05-14T00:00:00+03:00",
            "2022-05-15T00:00:00+03:00",
            "2022-05-16T00:00:00+03:00",
            "2022-05-17T00:00:00+03:00",
            "2022-05-18T00:00:00+03:00",
            "2022-05-19T00:00:00+03:00",
            "2022-05-20T00:00:00+03:00",
            "2022-05-21T00:00:00+03:00",
            "2022-05-22T00:00:00+03:00",
            "2022-05-23T00:00:00+03:00",
            "2022-05-24T00:00:00+03:00",
            "2022-05-25T00:00:00+03:00",
            "2022-05-26T00:00:00+03:00",
            "2022-05-27T00:00:00+03:00",
            "2022-05-28T00:00:00+03:00",
            "2022-05-29T00:00:00+03:00",
            "2022-05-30T00:00:00+03:00",
            "2022-05-31T00:00:00+03:00"
        ]
    }
}
```

-----------------------------
##GetNights Method

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getnights```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "checkIn": "2022-04-18T00:00:00",
  "arrivalLocations": [
    {
      "id": "10298",
      "type": 2
    }
  ],
  "productType": 13,
  "masterProductTypes": [
    2,
    3
  ],
  "includeSubLocations": true
}
```

###Response Sample

```
{
    "header": {
        "requestId": "4a9bb265-c377-45f8-8e62-f331f62f206e",
        "success": true,
        "responseTime": "2022-04-18T13:44:53.0755476Z",
        "messages": [
            {
                "id": 10000000,
                "code": "OperationCompleted",
                "messageType": 2,
                "message": "Operasyon Başarıyla Tamamlandı"
            }
        ]
    },
    "body": {
        "nights": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30
        ]
    }
}
```

-----------------------------
##PriceSearch Method 

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/pricesearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample ( For A Certain Location )
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "productType": 13,
    "arrivalLocations": [
        {
            "id": "23494",
            "countryId":"TR",
            "type": 2,
            "provider": 2,
            "latitude": "36.87536",
            "longitude": "30.70838"
        }
    ],
    "departureLocations": [
        {
            "id": "IST",
            "type": 2,
            "provider": 3
        }
    ],
    "roomCriteria": [
        {
            "adult": 2,
            "child": 0
        }
    ],
    "serviceTypes": [
        "2"
    ],
    "masterProductTypes": [
        2,
        3
    ],
    "supportedFlightReponseListTypes": [
        2,
        3
    ],
    "checkIn": "2022-04-18T00:00:00",
    "night": 7,
    "nationality": "DE",
    "calculateFlightFees": true,
    "includeNearByAirports": false,
    "searchBrandedFares": true,
    "checkStopSale": true,
    "getOnlyDiscountedPrice": false,
    "getOnlyBestOffers": true,
    "forceFlightBundlePackage": false,
    "includeSubLocations": true,
    "additionalParameters": {
        "getCountry": false,
        "getTransferLocation": true
    },
    "currency": "EUR",
    "culture": "en-US"
}
```

###Request Sample ( For A Certain Hotel )
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "productType": 13,
    "products":["106674"],
    "arrivalLocations": [
        {
            "countryId":"TR",
            "provider": 2,
            "latitude": "36.88642",
            "longitude": "30.71302"
        }
    ],
    "departureLocations": [
        {
            "id": "IST",
            "type": 2,
            "provider": 3
        }
    ],
    "roomCriteria": [
        {
            "adult": 2,
            "child": 0
        }
    ],
    "serviceTypes": [
        "2"
    ],
    "masterProductTypes": [
        2,
        3
    ],
    "supportedFlightReponseListTypes": [
        2,
        3
    ],
    "checkIn": "2022-04-18T00:00:00",
    "night": 7,
    "nationality": "DE",
    "calculateFlightFees": true,
    "includeNearByAirports": false,
    "searchBrandedFares": true,
    "checkStopSale": true,
    "getOnlyDiscountedPrice": false,
    "getOnlyBestOffers": true,
    "forceFlightBundlePackage": false,
    "includeSubLocations": true,
    "additionalParameters": {
        "getCountry": false,
        "getTransferLocation": true
    },
    "currency": "EUR",
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "9e36e4ba-3682-4992-a2d6-3e4cfd04e7c6",
        "success": true,
        "responseTime": "2022-04-18T14:33:21.5317219Z",
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
        "searchId": "99569736-4e02-49cc-a32a-3e429b213735",
        "expiresOn": "2022-04-18T14:53:16.9002904Z",
        "hotels": [
            {
                "geolocation": {
                    "longitude": "30.71302",
                    "latitude": "36.88642"
                },
                "stars": 3,
                "rating": 4.05,
                "themes": [],
                "facilities": [],
                "location": {
                    "name": "Antalya",
                    "countryId": "TR",
                    "provider": 2,
                    "isTopRegion": false,
                    "id": "23494"
                },
                "city": {
                    "name": "Antalya",
                    "countryId": "TR",
                    "provider": 2,
                    "isTopRegion": false,
                    "id": "23494"
                },
                "giataInfo": {
                    "hotelId": "296725",
                    "destinationId": "930"
                },
                "offers": [
                    {
                        "night": 7,
                        "isAvailable": true,
                        "availability": 1,
                        "rooms": [
                            {
                                "roomId": "3016",
                                "roomName": "DOUBLE STANDARD",
                                "boardId": "50",
                                "boardName": "BED AND BREAKFAST",
                                "boardGroups": [
                                    {
                                        "id": "1",
                                        "name": "Breakfast"
                                    }
                                ],
                                "stopSaleGuaranteed": 0,
                                "stopSaleStandart": 0,
                                "travellers": [
                                    {
                                        "type": 1,
                                        "age": 0,
                                        "nationality": "DE",
                                        "minAge": 0,
                                        "maxAge": 0
                                    },
                                    {
                                        "type": 1,
                                        "age": 0,
                                        "nationality": "DE",
                                        "minAge": 0,
                                        "maxAge": 0
                                    }
                                ]
                            }
                        ],
                        "isRefundable": false,
                        "cancellationPolicies": [
                            {
                                "beginDate": "2022-04-18T00:00:00+03:00",
                                "price": {
                                    "percent": 100,
                                    "amount": 0,
                                    "currency": "EUR"
                                },
                                "provider": 0
                            }
                        ],
                        "supplier": {
                            "name": "FIBULA OTHER"
                        },
                        "expiresOn": "2022-04-18T14:53:16.9002904Z",
                        "offerId": "2$2$TR~^005^~23494~^005^~f8c98b75-e33b-4944-aca6-845faadfc927",
                        "checkIn": "2022-04-18T00:00:00+03:00",
                        "price": {
                            "amount": 973.42,
                            "currency": "EUR"
                        },
                        "provider": 2
                    }
                ],
                "address": "Sinan Mah. Cebesoy Cad. No 28 Antalya",
                "boardGroups": [
                    {
                        "id": "breakfast",
                        "name": "Breakfast"
                    }
                ],
                "hotelCategory": {
                    "name": "3",
                    "id": "3",
                    "code": "3"
                },
                "hasThirdPartyOwnOffer": false,
                "provider": 2,
                "thumbnail": "/images/product/2/5/0/2/2/106674;b645247101ba980ce5cdbc591f3750a5;jpg/atalla.jpg",
                "thumbnailFull": "https://media.dev.paximum.com/hotelimages/106674/b645247101ba980ce5cdbc591f3750a5.jpg",
                "description": {
                    "text": ""
                },
                "id": "106674",
                "name": "Atalla"
            }
        ],
        "flights": [
            {
                "provider": 13,
                "id": "PC2017",
                "items": [
                    {
                        "segmentNumber": 2,
                        "flightNo": "PC2017",
                        "pnlName": "PC2017",
                        "flightDate": "2022-04-25T17:05:00",
                        "airline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "marketingAirline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "duration": 75,
                        "dayChange": 0,
                        "departure": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Antalya",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "AYT"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "30.8",
                                    "latitude": "36.89"
                                },
                                "name": "Antalya International Airport",
                                "id": "AYT",
                                "code": "AYT"
                            },
                            "date": "2022-04-25T17:05:00",
                            "geoLocation": {
                                "longitude": "30.8",
                                "latitude": "36.89"
                            }
                        },
                        "arrival": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Istanbul",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "IST"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "29.309219",
                                    "latitude": "40.898553"
                                },
                                "name": "Sabiha Gokcen International Airport",
                                "id": "SAW",
                                "code": "SAW"
                            },
                            "date": "2022-04-25T18:20:00",
                            "geoLocation": {
                                "longitude": "29.309219",
                                "latitude": "40.898553"
                            }
                        },
                        "flightClass": {
                            "type": 1,
                            "name": "Economy",
                            "id": "Y",
                            "code": "Y"
                        },
                        "route": 2,
                        "segments": [
                            {
                                "id": "F:AYT|SAW|20220425170500|PC2017",
                                "flightNo": "PC2017",
                                "pnlName": "PC2017",
                                "flightClass": {
                                    "type": 1,
                                    "name": "Economy",
                                    "id": "Y",
                                    "code": "Y"
                                },
                                "airline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "marketingAirline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "departure": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Antalya",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "AYT"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "30.8",
                                            "latitude": "36.89"
                                        },
                                        "name": "Antalya International Airport",
                                        "id": "AYT",
                                        "code": "AYT"
                                    },
                                    "date": "2022-04-25T17:05:00",
                                    "geoLocation": {
                                        "longitude": "30.8",
                                        "latitude": "36.89"
                                    }
                                },
                                "arrival": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Istanbul",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "IST"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "29.309219",
                                            "latitude": "40.898553"
                                        },
                                        "name": "Sabiha Gokcen International Airport",
                                        "id": "SAW",
                                        "code": "SAW"
                                    },
                                    "date": "2022-04-25T18:20:00",
                                    "geoLocation": {
                                        "longitude": "29.309219",
                                        "latitude": "40.898553"
                                    }
                                },
                                "duration": 75,
                                "baggageInformations": [
                                    {
                                        "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                        "weight": 20,
                                        "piece": 1,
                                        "baggageType": 1,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    },
                                    {
                                        "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                        "weight": 8,
                                        "piece": 1,
                                        "baggageType": 2,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    }
                                ],
                                "services": [
                                    {
                                        "segments": [
                                            "F:AYT|SAW|20220425170500|PC2017"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Checked baggage allowance 20 kg",
                                        "name": "Checked baggage allowance 20 kg"
                                    },
                                    {
                                        "segments": [
                                            "F:AYT|SAW|20220425170500|PC2017"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Carry on baggage allowance 8 kg",
                                        "name": "Carry on baggage allowance 8 kg"
                                    }
                                ],
                                "aircraft": ""
                            }
                        ],
                        "stopCount": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "baggageInformations": [
                            {
                                "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "passengers": [
                            {
                                "type": 1,
                                "ages": [],
                                "count": 2
                            }
                        ],
                        "flightType": 0
                    }
                ],
                "offers": [
                    {
                        "segmentNumber": 0,
                        "singleAdultPrice": {
                            "amount": 3.03,
                            "currency": "EUR"
                        },
                        "priceBreakDown": {
                            "items": [
                                {
                                    "passengerType": 1,
                                    "passengerCount": 2,
                                    "price": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    },
                                    "airportTax": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "serviceFee": {
                            "amount": 0,
                            "currency": "EUR"
                        },
                        "seatInfo": {
                            "availableSeatCount": 9,
                            "availableSeatCountType": 0
                        },
                        "flightClassInformations": [
                            {
                                "type": 1,
                                "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                "name": "Economy",
                                "id": "Y",
                                "code": "Y"
                            }
                        ],
                        "baggageInformations": [
                            {
                                "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:AYT|SAW|20220425170500|PC2017",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "services": [
                            {
                                "segments": [
                                    "F:AYT|SAW|20220425170500|PC2017"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Checked baggage allowance 20 kg",
                                "name": "Checked baggage allowance 20 kg"
                            },
                            {
                                "segments": [
                                    "F:AYT|SAW|20220425170500|PC2017"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Carry on baggage allowance 8 kg",
                                "name": "Carry on baggage allowance 8 kg"
                            }
                        ],
                        "reservableInfo": {
                            "reservable": true,
                            "optionDate": "2022-04-18T17:33:17.218Z"
                        },
                        "groupKeys": [
                            "-"
                        ],
                        "fees": {
                            "key": "PXMPCN",
                            "oneWay": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            },
                            "roundTrip": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            }
                        },
                        "offerIds": [
                            {
                                "groupKey": "-",
                                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJml0Ojk6NHU6bDI0dGhmZWc6ZmxpZ2h0ZW1kc1hnZGtCdjpucHlldAAmb2Y6OTo0dTpsMjR0aGZlZzpmbGlnaHRQTnFjUVRTRWRLOjYxbGV0AChBQUFCZ0QwWGt3TUFBQUFBbTR2bnhzcXNQRm4xMTNvUzc0eEdKUT09",
                                "provider": {
                                    "displayName": "Paximum Pegasus NDC",
                                    "type": 2,
                                    "id": "PXMPCN",
                                    "name": "Paximum Pegasus NDC"
                                }
                            }
                        ],
                        "isPackageOffer": false,
                        "hasBrand": true,
                        "route": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "flightBrandInfo": {
                            "id": "9.pc.20kg",
                            "name": "Baggage Allowance 20KG"
                        },
                        "expiresOn": "2022-04-18T18:03:20.939514Z",
                        "price": {
                            "amount": 6.07,
                            "currency": "EUR"
                        },
                        "provider": 13
                    }
                ],
                "reservableInfo": {
                    "reservable": false
                },
                "groupKeys": [
                    "-"
                ]
            },
            {
                "provider": 13,
                "id": "PC2009",
                "items": [
                    {
                        "segmentNumber": 2,
                        "flightNo": "PC2009",
                        "pnlName": "PC2009",
                        "flightDate": "2022-04-25T12:25:00",
                        "airline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "marketingAirline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "duration": 75,
                        "dayChange": 0,
                        "departure": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Antalya",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "AYT"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "30.8",
                                    "latitude": "36.89"
                                },
                                "name": "Antalya International Airport",
                                "id": "AYT",
                                "code": "AYT"
                            },
                            "date": "2022-04-25T12:25:00",
                            "geoLocation": {
                                "longitude": "30.8",
                                "latitude": "36.89"
                            }
                        },
                        "arrival": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Istanbul",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "IST"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "29.309219",
                                    "latitude": "40.898553"
                                },
                                "name": "Sabiha Gokcen International Airport",
                                "id": "SAW",
                                "code": "SAW"
                            },
                            "date": "2022-04-25T13:40:00",
                            "geoLocation": {
                                "longitude": "29.309219",
                                "latitude": "40.898553"
                            }
                        },
                        "flightClass": {
                            "type": 1,
                            "name": "Economy",
                            "id": "Y",
                            "code": "Y"
                        },
                        "route": 2,
                        "segments": [
                            {
                                "id": "F:AYT|SAW|20220425122500|PC2009",
                                "flightNo": "PC2009",
                                "pnlName": "PC2009",
                                "flightClass": {
                                    "type": 1,
                                    "name": "Economy",
                                    "id": "Y",
                                    "code": "Y"
                                },
                                "airline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "marketingAirline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "departure": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Antalya",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "AYT"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "30.8",
                                            "latitude": "36.89"
                                        },
                                        "name": "Antalya International Airport",
                                        "id": "AYT",
                                        "code": "AYT"
                                    },
                                    "date": "2022-04-25T12:25:00",
                                    "geoLocation": {
                                        "longitude": "30.8",
                                        "latitude": "36.89"
                                    }
                                },
                                "arrival": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Istanbul",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "IST"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "29.309219",
                                            "latitude": "40.898553"
                                        },
                                        "name": "Sabiha Gokcen International Airport",
                                        "id": "SAW",
                                        "code": "SAW"
                                    },
                                    "date": "2022-04-25T13:40:00",
                                    "geoLocation": {
                                        "longitude": "29.309219",
                                        "latitude": "40.898553"
                                    }
                                },
                                "duration": 75,
                                "baggageInformations": [
                                    {
                                        "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                        "weight": 20,
                                        "piece": 1,
                                        "baggageType": 1,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    },
                                    {
                                        "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                        "weight": 8,
                                        "piece": 1,
                                        "baggageType": 2,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    }
                                ],
                                "services": [
                                    {
                                        "segments": [
                                            "F:AYT|SAW|20220425122500|PC2009"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Checked baggage allowance 20 kg",
                                        "name": "Checked baggage allowance 20 kg"
                                    },
                                    {
                                        "segments": [
                                            "F:AYT|SAW|20220425122500|PC2009"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Carry on baggage allowance 8 kg",
                                        "name": "Carry on baggage allowance 8 kg"
                                    }
                                ],
                                "aircraft": ""
                            }
                        ],
                        "stopCount": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "baggageInformations": [
                            {
                                "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "passengers": [
                            {
                                "type": 1,
                                "ages": [],
                                "count": 2
                            }
                        ],
                        "flightType": 0
                    }
                ],
                "offers": [
                    {
                        "segmentNumber": 0,
                        "singleAdultPrice": {
                            "amount": 3.03,
                            "currency": "EUR"
                        },
                        "priceBreakDown": {
                            "items": [
                                {
                                    "passengerType": 1,
                                    "passengerCount": 2,
                                    "price": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    },
                                    "airportTax": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "serviceFee": {
                            "amount": 0,
                            "currency": "EUR"
                        },
                        "seatInfo": {
                            "availableSeatCount": 9,
                            "availableSeatCountType": 0
                        },
                        "flightClassInformations": [
                            {
                                "type": 1,
                                "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                "name": "Economy",
                                "id": "Y",
                                "code": "Y"
                            }
                        ],
                        "baggageInformations": [
                            {
                                "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:AYT|SAW|20220425122500|PC2009",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "services": [
                            {
                                "segments": [
                                    "F:AYT|SAW|20220425122500|PC2009"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Checked baggage allowance 20 kg",
                                "name": "Checked baggage allowance 20 kg"
                            },
                            {
                                "segments": [
                                    "F:AYT|SAW|20220425122500|PC2009"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Carry on baggage allowance 8 kg",
                                "name": "Carry on baggage allowance 8 kg"
                            }
                        ],
                        "reservableInfo": {
                            "reservable": true,
                            "optionDate": "2022-04-18T17:33:17.218Z"
                        },
                        "groupKeys": [
                            "-"
                        ],
                        "fees": {
                            "key": "PXMPCN",
                            "oneWay": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            },
                            "roundTrip": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            }
                        },
                        "offerIds": [
                            {
                                "groupKey": "-",
                                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJml0Ojk6NHU6bDI0dGhmZWc6ZmxpZ2h0RzZkb3BZV1pJNDpucHlkdAAmb2Y6OTo0dTpsMjR0aGZlZzpmbGlnaHR5bW5zNEVzM3E3OjYxbGR0AChBQUFCZ0QwWGt3TUFBQUFBbTR2bnhzcXNQRm4xMTNvUzc0eEdKUT09",
                                "provider": {
                                    "displayName": "Paximum Pegasus NDC",
                                    "type": 2,
                                    "id": "PXMPCN",
                                    "name": "Paximum Pegasus NDC"
                                }
                            }
                        ],
                        "isPackageOffer": false,
                        "hasBrand": true,
                        "route": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "flightBrandInfo": {
                            "id": "9.pc.20kg",
                            "name": "Baggage Allowance 20KG"
                        },
                        "expiresOn": "2022-04-18T18:03:20.939514Z",
                        "price": {
                            "amount": 6.07,
                            "currency": "EUR"
                        },
                        "provider": 13
                    }
                ],
                "reservableInfo": {
                    "reservable": false
                },
                "groupKeys": [
                    "-"
                ]
            },
            {
                "provider": 13,
                "id": "PC2026",
                "items": [
                    {
                        "segmentNumber": 1,
                        "flightNo": "PC2026",
                        "pnlName": "PC2026",
                        "flightDate": "2022-04-18T22:25:00",
                        "airline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "marketingAirline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "duration": 75,
                        "dayChange": 0,
                        "departure": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Istanbul",
                                "countryId": "TR",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "IST"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "29.309219",
                                    "latitude": "40.898553"
                                },
                                "name": "Sabiha Gokcen International Airport",
                                "id": "SAW",
                                "code": "SAW"
                            },
                            "date": "2022-04-18T22:25:00",
                            "geoLocation": {
                                "longitude": "29.309219",
                                "latitude": "40.898553"
                            }
                        },
                        "arrival": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Antalya",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "AYT"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "30.8",
                                    "latitude": "36.89"
                                },
                                "name": "Antalya International Airport",
                                "id": "AYT",
                                "code": "AYT"
                            },
                            "date": "2022-04-18T23:40:00",
                            "geoLocation": {
                                "longitude": "30.8",
                                "latitude": "36.89"
                            }
                        },
                        "flightClass": {
                            "type": 1,
                            "name": "Economy",
                            "id": "Y",
                            "code": "Y"
                        },
                        "route": 1,
                        "segments": [
                            {
                                "id": "F:SAW|AYT|20220418222500|PC2026",
                                "flightNo": "PC2026",
                                "pnlName": "PC2026",
                                "flightClass": {
                                    "type": 1,
                                    "name": "Economy",
                                    "id": "Y",
                                    "code": "Y"
                                },
                                "airline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "marketingAirline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "departure": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Istanbul",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "IST"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "29.309219",
                                            "latitude": "40.898553"
                                        },
                                        "name": "Sabiha Gokcen International Airport",
                                        "id": "SAW",
                                        "code": "SAW"
                                    },
                                    "date": "2022-04-18T22:25:00",
                                    "geoLocation": {
                                        "longitude": "29.309219",
                                        "latitude": "40.898553"
                                    }
                                },
                                "arrival": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Antalya",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "AYT"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "30.8",
                                            "latitude": "36.89"
                                        },
                                        "name": "Antalya International Airport",
                                        "id": "AYT",
                                        "code": "AYT"
                                    },
                                    "date": "2022-04-18T23:40:00",
                                    "geoLocation": {
                                        "longitude": "30.8",
                                        "latitude": "36.89"
                                    }
                                },
                                "duration": 75,
                                "baggageInformations": [
                                    {
                                        "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                        "weight": 20,
                                        "piece": 1,
                                        "baggageType": 1,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    },
                                    {
                                        "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                        "weight": 8,
                                        "piece": 1,
                                        "baggageType": 2,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    }
                                ],
                                "services": [
                                    {
                                        "segments": [
                                            "F:SAW|AYT|20220418222500|PC2026"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Checked baggage allowance 20 kg",
                                        "name": "Checked baggage allowance 20 kg"
                                    },
                                    {
                                        "segments": [
                                            "F:SAW|AYT|20220418222500|PC2026"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Carry on baggage allowance 8 kg",
                                        "name": "Carry on baggage allowance 8 kg"
                                    }
                                ],
                                "aircraft": ""
                            }
                        ],
                        "stopCount": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "baggageInformations": [
                            {
                                "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "passengers": [
                            {
                                "type": 1,
                                "ages": [],
                                "count": 2
                            }
                        ],
                        "flightType": 0
                    }
                ],
                "offers": [
                    {
                        "segmentNumber": 0,
                        "singleAdultPrice": {
                            "amount": 3.50,
                            "currency": "EUR"
                        },
                        "priceBreakDown": {
                            "items": [
                                {
                                    "passengerType": 1,
                                    "passengerCount": 2,
                                    "price": {
                                        "amount": 6.99,
                                        "currency": "EUR"
                                    },
                                    "airportTax": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "serviceFee": {
                            "amount": 0,
                            "currency": "EUR"
                        },
                        "seatInfo": {
                            "availableSeatCount": 9,
                            "availableSeatCountType": 0
                        },
                        "flightClassInformations": [
                            {
                                "type": 1,
                                "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                "name": "Economy",
                                "id": "Y",
                                "code": "Y"
                            }
                        ],
                        "baggageInformations": [
                            {
                                "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:SAW|AYT|20220418222500|PC2026",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "services": [
                            {
                                "segments": [
                                    "F:SAW|AYT|20220418222500|PC2026"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Checked baggage allowance 20 kg",
                                "name": "Checked baggage allowance 20 kg"
                            },
                            {
                                "segments": [
                                    "F:SAW|AYT|20220418222500|PC2026"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Carry on baggage allowance 8 kg",
                                "name": "Carry on baggage allowance 8 kg"
                            }
                        ],
                        "reservableInfo": {
                            "reservable": true,
                            "optionDate": "2022-04-18T17:33:17.218Z"
                        },
                        "groupKeys": [
                            "-"
                        ],
                        "fees": {
                            "key": "PXMPCN",
                            "oneWay": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            },
                            "roundTrip": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            }
                        },
                        "offerIds": [
                            {
                                "groupKey": "-",
                                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0Ojk6NHU6bDI0dGhmZWc6ZmxpZ2h0cEJ4VDlmMHlUUzpucHlndAAmb2Y6OTo0dTpsMjR0aGZlZzpmbGlnaHR2NnFwT1BXcTVLOjYxbGN0AChBQUFCZ0QwWGt3TUFBQUFBbTR2bnhzcXNQRm4xMTNvUzc0eEdKUT09",
                                "provider": {
                                    "displayName": "Paximum Pegasus NDC",
                                    "type": 2,
                                    "id": "PXMPCN",
                                    "name": "Paximum Pegasus NDC"
                                }
                            }
                        ],
                        "isPackageOffer": false,
                        "hasBrand": true,
                        "route": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "flightBrandInfo": {
                            "id": "9.pc.20kg",
                            "name": "Baggage Allowance 20KG"
                        },
                        "expiresOn": "2022-04-18T18:03:20.939514Z",
                        "price": {
                            "amount": 6.99,
                            "currency": "EUR"
                        },
                        "provider": 13
                    }
                ],
                "reservableInfo": {
                    "reservable": false
                },
                "groupKeys": [
                    "-"
                ]
            },
            {
                "provider": 13,
                "id": "PC2022",
                "items": [
                    {
                        "segmentNumber": 1,
                        "flightNo": "PC2022",
                        "pnlName": "PC2022",
                        "flightDate": "2022-04-18T20:05:00",
                        "airline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "marketingAirline": {
                            "internationalCode": "PC",
                            "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                            "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                            "id": "PC",
                            "name": "Pegasus"
                        },
                        "duration": 75,
                        "dayChange": 0,
                        "departure": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Istanbul",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "IST"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "29.309219",
                                    "latitude": "40.898553"
                                },
                                "name": "Sabiha Gokcen International Airport",
                                "id": "SAW",
                                "code": "SAW"
                            },
                            "date": "2022-04-18T20:05:00",
                            "geoLocation": {
                                "longitude": "29.309219",
                                "latitude": "40.898553"
                            }
                        },
                        "arrival": {
                            "country": {
                                "name": "Turkey",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "TR"
                            },
                            "city": {
                                "name": "Antalya",
                                "provider": 3,
                                "isTopRegion": false,
                                "id": "AYT"
                            },
                            "airport": {
                                "geolocation": {
                                    "longitude": "30.8",
                                    "latitude": "36.89"
                                },
                                "name": "Antalya International Airport",
                                "id": "AYT",
                                "code": "AYT"
                            },
                            "date": "2022-04-18T21:20:00",
                            "geoLocation": {
                                "longitude": "30.8",
                                "latitude": "36.89"
                            }
                        },
                        "flightClass": {
                            "type": 1,
                            "name": "Economy",
                            "id": "Y",
                            "code": "Y"
                        },
                        "route": 1,
                        "segments": [
                            {
                                "id": "F:SAW|AYT|20220418200500|PC2022",
                                "flightNo": "PC2022",
                                "pnlName": "PC2022",
                                "flightClass": {
                                    "type": 1,
                                    "name": "Economy",
                                    "id": "Y",
                                    "code": "Y"
                                },
                                "airline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "marketingAirline": {
                                    "internationalCode": "PC",
                                    "thumbnail": "/images/other/3/5/0/3/2/PC/pegasus.jpg",
                                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/PC.gif",
                                    "logo": "/images/other/3/5/0/3/1/PC/pegasus.jpg",
                                    "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/PC.png",
                                    "id": "PC",
                                    "name": "Pegasus"
                                },
                                "departure": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Istanbul",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "IST"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "29.309219",
                                            "latitude": "40.898553"
                                        },
                                        "name": "Sabiha Gokcen International Airport",
                                        "id": "SAW",
                                        "code": "SAW"
                                    },
                                    "date": "2022-04-18T20:05:00",
                                    "geoLocation": {
                                        "longitude": "29.309219",
                                        "latitude": "40.898553"
                                    }
                                },
                                "arrival": {
                                    "country": {
                                        "name": "Turkey",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "TR"
                                    },
                                    "city": {
                                        "name": "Antalya",
                                        "provider": 3,
                                        "isTopRegion": false,
                                        "id": "AYT"
                                    },
                                    "airport": {
                                        "geolocation": {
                                            "longitude": "30.8",
                                            "latitude": "36.89"
                                        },
                                        "name": "Antalya International Airport",
                                        "id": "AYT",
                                        "code": "AYT"
                                    },
                                    "date": "2022-04-18T21:20:00",
                                    "geoLocation": {
                                        "longitude": "30.8",
                                        "latitude": "36.89"
                                    }
                                },
                                "duration": 75,
                                "baggageInformations": [
                                    {
                                        "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                        "weight": 20,
                                        "piece": 1,
                                        "baggageType": 1,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    },
                                    {
                                        "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                        "weight": 8,
                                        "piece": 1,
                                        "baggageType": 2,
                                        "unitType": 0,
                                        "passengerType": 1,
                                        "description": "CarryOn"
                                    }
                                ],
                                "services": [
                                    {
                                        "segments": [
                                            "F:SAW|AYT|20220418200500|PC2022"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Checked baggage allowance 20 kg",
                                        "name": "Checked baggage allowance 20 kg"
                                    },
                                    {
                                        "segments": [
                                            "F:SAW|AYT|20220418200500|PC2022"
                                        ],
                                        "explanations": [],
                                        "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                        "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                        "id": "Carry on baggage allowance 8 kg",
                                        "name": "Carry on baggage allowance 8 kg"
                                    }
                                ],
                                "aircraft": ""
                            }
                        ],
                        "stopCount": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "baggageInformations": [
                            {
                                "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "passengers": [
                            {
                                "type": 1,
                                "ages": [],
                                "count": 2
                            }
                        ],
                        "flightType": 0
                    }
                ],
                "offers": [
                    {
                        "segmentNumber": 0,
                        "singleAdultPrice": {
                            "amount": 3.50,
                            "currency": "EUR"
                        },
                        "priceBreakDown": {
                            "items": [
                                {
                                    "passengerType": 1,
                                    "passengerCount": 2,
                                    "price": {
                                        "amount": 6.99,
                                        "currency": "EUR"
                                    },
                                    "airportTax": {
                                        "amount": 6.07,
                                        "currency": "EUR"
                                    }
                                }
                            ]
                        },
                        "serviceFee": {
                            "amount": 0,
                            "currency": "EUR"
                        },
                        "seatInfo": {
                            "availableSeatCount": 9,
                            "availableSeatCountType": 0
                        },
                        "flightClassInformations": [
                            {
                                "type": 1,
                                "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                "name": "Economy",
                                "id": "Y",
                                "code": "Y"
                            }
                        ],
                        "baggageInformations": [
                            {
                                "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                "weight": 20,
                                "piece": 1,
                                "baggageType": 1,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            },
                            {
                                "segmentId": "F:SAW|AYT|20220418200500|PC2022",
                                "weight": 8,
                                "piece": 1,
                                "baggageType": 2,
                                "unitType": 0,
                                "passengerType": 1,
                                "description": "CarryOn"
                            }
                        ],
                        "services": [
                            {
                                "segments": [
                                    "F:SAW|AYT|20220418200500|PC2022"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_20_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Checked baggage allowance 20 kg",
                                "name": "Checked baggage allowance 20 kg"
                            },
                            {
                                "segments": [
                                    "F:SAW|AYT|20220418200500|PC2022"
                                ],
                                "explanations": [],
                                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                                "id": "Carry on baggage allowance 8 kg",
                                "name": "Carry on baggage allowance 8 kg"
                            }
                        ],
                        "reservableInfo": {
                            "reservable": true,
                            "optionDate": "2022-04-18T17:33:17.218Z"
                        },
                        "groupKeys": [
                            "-"
                        ],
                        "fees": {
                            "key": "PXMPCN",
                            "oneWay": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            },
                            "roundTrip": {
                                "items": [
                                    {
                                        "passengerType": 1,
                                        "quantity": 2,
                                        "originalPrice": 0,
                                        "rate": 0,
                                        "price": 3.00,
                                        "totalPrice": 6.00
                                    }
                                ],
                                "price": {
                                    "amount": 6.00,
                                    "currency": "EUR"
                                }
                            }
                        },
                        "offerIds": [
                            {
                                "groupKey": "-",
                                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0Ojk6NHU6bDI0dGhmZWc6ZmxpZ2h0b3dCU2hVRVJUdjpucHlmdAAmb2Y6OTo0dTpsMjR0aGZlZzpmbGlnaHRJT0p6cFg5eHk4OjYxbGJ0AChBQUFCZ0QwWGt3TUFBQUFBbTR2bnhzcXNQRm4xMTNvUzc0eEdKUT09",
                                "provider": {
                                    "displayName": "Paximum Pegasus NDC",
                                    "type": 2,
                                    "id": "PXMPCN",
                                    "name": "Paximum Pegasus NDC"
                                }
                            }
                        ],
                        "isPackageOffer": false,
                        "hasBrand": true,
                        "route": 0,
                        "flightProvider": {
                            "displayName": "Paximum Pegasus NDC",
                            "type": 2,
                            "id": "PXMPCN",
                            "name": "Paximum Pegasus NDC"
                        },
                        "flightBrandInfo": {
                            "id": "9.pc.20kg",
                            "name": "Baggage Allowance 20KG"
                        },
                        "expiresOn": "2022-04-18T18:03:20.939514Z",
                        "price": {
                            "amount": 6.99,
                            "currency": "EUR"
                        },
                        "provider": 13
                    }
                ],
                "reservableInfo": {
                    "reservable": false
                },
                "groupKeys": [
                    "-"
                ]
            }
        ],
        "details": {
            "flightResponseListType": 3,
            "enablePaging": false
        }
    }
}
```

-----------------------------
##GetProductInfo Method

You can use GetProductInfo for getting hotel media information without prices.

Update Date	  |      18.04.2023
----------------------|--------------------
    Method Adress    | ```/api/productservice/getproductInfo```  
    Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 2,
  
  <!--If working a single provider is not required. But it is required if you work with multiple provider.
  e.g. TourVisio + Paximum hotels. This value in pricesearchresponse. hotel.provider-->
  "ownerProvider": 2,
  
  <!--This value in pricesearchresponse. hotel.id-->
  "product": "106674",

  "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "83d1088c-8dbb-4f98-9f8a-3a6117d45845",
        "success": true,
        "responseTime": "2022-04-18T14:36:17.8531854Z",
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
        "hotel": {
            "seasons": [
                {
                    "name": "General",
                    "mediaFiles": [
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;b645247101ba980ce5cdbc591f3750a5;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/b645247101ba980ce5cdbc591f3750a5.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;3387c0f09f11e85ef17725d3a3bba58f;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/3387c0f09f11e85ef17725d3a3bba58f.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;599a97069a0564716ddb1f00f93e8d83;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/599a97069a0564716ddb1f00f93e8d83.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;c192c926f8763a8701fe8b48b0f5f3c5;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/c192c926f8763a8701fe8b48b0f5f3c5.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;dfb4d52d0f084de7487d5f68f177e8ae;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/dfb4d52d0f084de7487d5f68f177e8ae.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;016da3601ea2b516784b5dd37d33bf60;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/016da3601ea2b516784b5dd37d33bf60.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;c95cbaa738cd4d33d73514b849772bef;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/c95cbaa738cd4d33d73514b849772bef.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;dcc949d8e63dc2d2f13e91eea55527d0;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/dcc949d8e63dc2d2f13e91eea55527d0.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;0c01994210619fd202c140c0c4acdbfb;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/0c01994210619fd202c140c0c4acdbfb.jpg"
                        },
                        {
                            "fileType": 1,
                            "url": "/images/product/2/5/0/2/2/106674;a6ff4698e666e631be71d76297248790;jpg/atalla.jpg",
                            "urlFull": "https://media.dev.paximum.com/hotelimages/106674/a6ff4698e666e631be71d76297248790.jpg"
                        }
                    ]
                }
            ],
            "address": {
                "city": {
                    "name": "Antalya",
                    "provider": 0,
                    "isTopRegion": false
                },
                "addressLines": [
                    "Sinan Mah. Cebesoy Cad. No 28",
                    "Antalya"
                ],
                "street": "Sinan Mah. Cebesoy Cad.",
                "streetNumber": "28",
                "geolocation": {
                    "longitude": "30.71302",
                    "latitude": "36.88642"
                }
            },
            "faxNumber": "+902423219111",
            "phoneNumber": "+902423214666",
            "homePage": "http://www.atallahotel.com/default.aspx",
            "stopSaleGuaranteed": 0,
            "stopSaleStandart": 0,
            "geolocation": {
                "longitude": "30.71302",
                "latitude": "36.88642"
            },
            "stars": 3,
            "rating": 4.05,
            "themes": [],
            "location": {
                "name": "Antalya",
                "latitude": "36.87536",
                "longitude": "30.70838",
                "provider": 2,
                "isTopRegion": false,
                "id": "23494"
            },
            "country": {
                "name": "Turkey",
                "provider": 0,
                "isTopRegion": false,
                "id": "TR"
            },
            "city": {
                "name": "Antalya",
                "latitude": "36.87536",
                "longitude": "30.70838",
                "provider": 2,
                "isTopRegion": false,
                "id": "23494"
            },
            "giataInfo": {
                "hotelId": "296725",
                "destinationId": "930"
            },
            "provider": 2,
            "thumbnail": "/images/product/2/5/0/2/2/106674;b645247101ba980ce5cdbc591f3750a5;jpg/atalla.jpg",
            "thumbnailFull": "https://media.dev.paximum.com/hotelimages/106674/b645247101ba980ce5cdbc591f3750a5.jpg",
            "description": {
                "text": ""
            },
            "id": "106674",
            "name": "Atalla"
        }
    }
}
```

-----------------------------
##GetOffers Method 

Update Date	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getoffers```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType":2,
    "productId":"106674",
    "searchId":"99569736-4e02-49cc-a32a-3e429b213735",
    "offerId":"2$2$TR~^005^~23494~^005^~417fd3b2-2a1d-4dfd-8023-29cf00d87c4b",
    "offerCount":10,
    "currency":"EUR",
    "culture":"en-US"
}
```

###Response Sample

```
{
    "body": {
        "offers": [
            {
                "night": 7,
                "isAvailable": true,
                "availability": 1,
                "rooms": [
                    {
                        "roomId": "3016",
                        "roomName": "DOUBLE STANDARD",
                        "boardId": "50",
                        "boardName": "BED AND BREAKFAST",
                        "boardGroups": [
                            {
                                "id": "1",
                                "name": "Breakfast"
                            }
                        ],
                        "stopSaleGuaranteed": 0,
                        "stopSaleStandart": 0,
                        "travellers": [
                            {
                                "type": 1,
                                "age": 0,
                                "nationality": "DE",
                                "minAge": 0,
                                "maxAge": 0
                            },
                            {
                                "type": 1,
                                "age": 0,
                                "nationality": "DE",
                                "minAge": 0,
                                "maxAge": 0
                            }
                        ]
                    }
                ],
                "isRefundable": false,
                "cancellationPolicies": [
                    {
                        "dueDate": "2022-04-17T20:00:00",
                        "price": {
                            "amount": 973.42,
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
                                "date": "2022-04-18T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-19T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-20T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-21T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-22T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-23T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-24T00:00:00Z",
                                "price": {
                                    "amount": 146.01,
                                    "currency": "EUR"
                                }
                            }
                        ]
                    }
                ],
                "supplier": {
                    "name": "FIBULA OTHER"
                },
                "thirdPartyOwnOffer": false,
                "expiresOn": "2022-04-18T15:03:02.1244441Z",
                "offerId": "2$2$TR~^005^~23494~^005^~417fd3b2-2a1d-4dfd-8023-29cf00d87c4b",
                "checkIn": "2022-04-18T00:00:00Z",
                "price": {
                    "amount": 973.42,
                    "currency": "EUR"
                }
            },
            {
                "night": 7,
                "isAvailable": true,
                "availability": 1,
                "rooms": [
                    {
                        "roomId": "3016",
                        "roomName": "DOUBLE STANDARD",
                        "boardId": "50",
                        "boardName": "BED AND BREAKFAST",
                        "boardGroups": [
                            {
                                "id": "1",
                                "name": "Breakfast"
                            }
                        ],
                        "stopSaleGuaranteed": 0,
                        "stopSaleStandart": 0,
                        "travellers": [
                            {
                                "type": 1,
                                "age": 0,
                                "nationality": "DE",
                                "minAge": 0,
                                "maxAge": 0
                            },
                            {
                                "type": 1,
                                "age": 0,
                                "nationality": "DE",
                                "minAge": 0,
                                "maxAge": 0
                            }
                        ]
                    }
                ],
                "isRefundable": false,
                "cancellationPolicies": [
                    {
                        "dueDate": "2022-04-17T20:00:00",
                        "price": {
                            "amount": 467.44,
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
                                "date": "2022-04-18T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-19T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-20T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-21T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-22T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-23T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "roomNumber": "1",
                                "date": "2022-04-24T00:00:00Z",
                                "price": {
                                    "amount": 162.24,
                                    "currency": "EUR"
                                }
                            }
                        ]
                    }
                ],
                "supplier": {
                    "name": "FIBULA OTHER"
                },
                "thirdPartyOwnOffer": false,
                "expiresOn": "2022-04-18T15:03:02.1244441Z",
                "offerId": "2$2$TR~^005^~23494~^005^~eea478eb-a0e1-4198-8777-c6e6844b7ecf",
                "checkIn": "2022-04-18T00:00:00Z",
                "price": {
                    "amount": 1081.56,
                    "currency": "EUR"
                }
            }
        ],
        "information": {
            "total": 2
        },
        "productId": "106674"
    },
    "header": {
        "requestId": "385d0e59-6a7f-4a85-b967-3c7355eb4c35",
        "success": true,
        "responseTime": "2022-04-18T14:46:01.2161069Z",
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

