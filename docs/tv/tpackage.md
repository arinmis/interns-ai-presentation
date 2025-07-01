-----------------------------
#Tour Culture Package



-----------------------------
##GetArrivalAutoComplete Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivalautocomplete```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "currency": "EUR",
    "culture": "en-US",
    "productType": 6,
    "includeSubLocations": true
}
```

###Response Sample

```
{
    "body": {
        "items": [
            {
                "type": 2,
                "country": {
                    "id": "5",
                    "name": "TURKEY"
                },
                "city": {
                    "id": "22177",
                    "name": "Antalya US"
                },
                "hotel": {
                    "id": "7575",
                    "name": "BIR SÜRÜ ODALI OTELL"
                },
                "provider": 1
            },
            {
                "type": 11,
                "tour": {
                    "code": "TESTTOUR",
                    "id": "1008",
                    "name": "Test Tour Culture Package"
                },
                "provider": 1
            },
            {
                "type": 7,
                "category": {
                    "id": "1",
                    "name": "ADVENTURE"
                },
                "provider": 1
            },
            {
                "type": 8,
                "geolocation": {
                    "longitude": "11.000000000",
                    "latitude": "11.000000000"
                },
                "country": {
                    "id": "5",
                    "name": "TURKEY"
                },
                "provider": 1
            },
            {
                "type": 1,
                "geolocation": {
                    "longitude": "30.800461000",
                    "latitude": "36.898731000"
                },
                "country": {
                    "id": "5",
                    "name": "TURKEY"
                },
                "city": {
                    "id": "22177",
                    "name": "Antalya US"
                },
                "provider": 1
            }
        ]
    },
    "header": {
        "requestId": "68e2b2b0-8b63-4f27-9f49-5e1b62995940",
        "success": true,
        "responseTime": "2023-01-23T08:39:42.1110283Z",
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
##GetDepartures Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getdepartures```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "ProductType": 6,
    "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"afa26729-a161-4efe-a1c1-3c1f4b891602",
      "success":true,
      "responseTime":"2018-03-01T11:49:08.5072199Z",
      "messages":[
         {
            "id":10000000,
            "code":"OperationCompleted",
            "messageType":2,
            "message":"Operation was completed successfully"
         }
      ]
   },
   "body":{
      "locations":[
         {
            "name":"BELEK TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3694"
         },
         {
            "code":"AYT",
            "name":"Antalya",
            "type":2,
            "latitude":"36.898731000",
            "parentId":"5",
            "countryId":"5",
            "isProductLocation":true,
            "provider":1,
            "id":"22177"
         },
         {
            "code":"TR",
            "name":"TURKEY",
            "type":1,
            "latitude":"11.000000000",
            "parentId":"5",
            "countryId":"5",
            "provider":1,
            "id":"5"
         },
         {
            "name":"ALANYA TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3695"
         },
         {
            "name":"BOGAZKENT",
            "type":4,
            "parentId":"3694",
            "isProductLocation":true,
            "provider":1,
            "id":"3706"
         }
      ]
   }
}
```

-----------------------------
##GetArrivals Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivals```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
      
   <!--This values in GetDepartures response.-->
   "DepartureLocations":[
      {
         "Type":2,
         "Id":"15184"
      }
   ],
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"afa26729-a161-4efe-a1c1-3c1f4b891602",
      "success":true,
      "responseTime":"2018-03-01T11:49:08.5072199Z",
      "messages":[
         {
            "id":10000000,
            "code":"OperationCompleted",
            "messageType":2,
            "message":"Operation was completed successfully"
         }
      ]
   },
   "body":{
      "locations":[
         {
            "name":"BELEK TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3694"
         },
         {
            "code":"AYT",
            "name":"Antalya",
            "type":2,
            "latitude":"36.898731000",
            "parentId":"5",
            "countryId":"5",
            "isProductLocation":true,
            "provider":1,
            "id":"22177"
         },
         {
            "code":"TR",
            "name":"TURKEY",
            "type":1,
            "latitude":"11.000000000",
            "parentId":"5",
            "countryId":"5",
            "provider":1,
            "id":"5"
         },
         {
            "name":"ALANYA TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3695"
         },
         {
            "name":"BOGAZKENT",
            "type":4,
            "parentId":"3694",
            "isProductLocation":true,
            "provider":1,
            "id":"3706"
         }
      ]
   }
}
```

-----------------------------

##GetCheckinDates Method
This method is gives available check in dates.

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getcheckindates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "currency": "EUR",
    "culture": "en-US",
    "productType": 6,
    "holidayPackage": {
        "code": "TESTTOUR"
    },
    "packageCategory": "1",
    "arrivalLocations": [
        {
            "id": "22177",
            "type": 2,
            "uiName": "Antalya US"
        }
    ]
}
```

###Response Sample

```
{
    "body": {
        "dates": [
            "2023-01-28T00:00:00",
            "2023-02-04T00:00:00",
            "2023-02-11T00:00:00",
            "2023-02-18T00:00:00",
			...
        ]
    },
    "header": {
        "requestId": "f84b07ef-4913-440b-a3c4-fb81d5232055",
        "success": true,
        "responseTime": "2023-01-24T11:22:25.8995917Z",
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

##PriceSearch Method

Update Date	  |      23.07.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/pricesearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "currency": "EUR",
    "culture": "en-US",
    "getOnlyBestOffers": true,
    "includeSubLocations": true,
    "productType": 6,
    "roomCriteria": [
        {
            "adult": 2,
            "child": 0
        }
    ],
    "nationality": "TR",
    "checkIn": "2023-03-25",
    "checkInTo": "2023-03-25",
    "holidayPackage": {
        "code": "TESTTOUR"
    },
    "packageCategory": "1",
    "arrivalLocations": [
        {
            "id": "22177",
            "type": 2,
            "uiName": "Antalya US"
        }
    ]
}
```

###Response Sample

```
{
    "body": {
        "searchId": "cc91d141-8acb-46e6-9d61-7c61dd786080",
        "expiresOn": "2023-01-26T11:04:14.4792034Z",
        "hotels": [
            {
                "location": {
                    "name": "Antalya US",
                    "latitude": "36.898731000",
                    "longitude": "30.800461000",
                    "countryId": "5",
                    "provider": 1,
                    "isTopRegion": false,
                    "id": "22177"
                },
                "city": {
                    "name": "Antalya US",
                    "latitude": "36.898731000",
                    "longitude": "30.800461000",
                    "provider": 1,
                    "isTopRegion": false,
                    "id": "22177"
                },
                "giataInfo": {
                    "hotelId": "123456789"
                },
                "offers": [
                    {
                        "night": 7,
                        "isAvailable": true,
                        "availability": 1,
                        "rooms": [
                            {
                                "roomId": "STD",
                                "roomName": "Standard room",
                                "roomGroups": [],
                                "accomId": "DBL",
                                "accomName": "DOUBLE ROOM",
                                "boardId": "AI",
                                "boardName": "ALL INCLUSIVE EN-US",
                                "boardGroups": [],
                                "allotment": 10000,
                                "stopSaleGuaranteed": 0,
                                "stopSaleStandart": 0,
                                "priceList": {
                                    "id": 2410,
                                    "salePeriod": {
                                        "from": "2022-11-22T00:00:00",
                                        "to": "2023-12-31T00:00:00"
                                    }
                                },
                                "price": {
                                    "oldAmount": 2000.00,
                                    "percent": 0,
                                    "amount": 2000.00,
                                    "currency": "EUR"
                                },
                                "travellers": [
                                    {
                                        "type": 1,
                                        "minAge": 0,
                                        "maxAge": 0
                                    },
                                    {
                                        "type": 1,
                                        "minAge": 0,
                                        "maxAge": 0
                                    }
                                ],
                                "transportation": {
                                    "outbound": {
                                        "provider": 1,
                                        "productType": 0,
                                        "seatInfo": {},
                                        "availableSeatCount": 100,
                                        "departure": {
                                            "id": "22177"
                                        },
                                        "arrival": {
                                            "id": "22177"
                                        },
                                        "flightClass": "Y"
                                    },
                                    "return": {
                                        "provider": 1,
                                        "productType": 0,
                                        "seatInfo": {},
                                        "availableSeatCount": 100,
                                        "departure": {
                                            "id": "22177"
                                        },
                                        "arrival": {
                                            "id": "22177"
                                        },
                                        "flightClass": "Y"
                                    }
                                },
                                "services": [
                                    {
                                        "name": "HOTEL"
                                    }
                                ]
                            }
                        ],
                        "isRefundable": false,
                        "holidayPackage": {
                            "name": "Test Tour Culture Package",
                            "id": "1008",
                            "code": "TESTTOUR"
                        },
                        "accomodationCheckIn": "2023-01-28T00:00:00",
                        "accomodationNight": 7,
                        "expiresOn": "2023-01-26T11:04:14.4266961Z",
                        "offerId": "1$6$202301261104$TR$0|2410$1$19$4278$$$0$0$2",
                        "checkIn": "2023-01-28T00:00:00",
                        "price": {
                            "oldAmount": 2000.00,
                            "percent": 0,
                            "amount": 2000.00,
                            "currency": "EUR"
                        },
                        "ownOffer": true,
                        "provider": 1
                    }
                ],
                "address": "Pınarbaşı Mahallesi Hürriyet Caddesi Akdeniz Üniversitesi Ar-Ge 2 Uluğbey Binası No:3A/31 Konyaaltı/Antalya",
                "boardGroups": [],
                "hotelCategory": {
                    "name": "APART",
                    "id": "2041",
                    "code": "APART"
                },
                "transferLocation": {
                    "id": "22389",
                    "name": "LARA*"
                },
                "distanceFromSea": {
                    "value": 100,
                    "unitType": 0
                },
                "code": "OGUZHAN",
                "provider": 1,
                "thumbnail": "/images/product/1/5/636885225000000000/2/1/7575/bir_suru_odali_otell.jpg",
                "thumbnailFull": "https://preprod-services.tourvisio.com/media/images/product/1/5/636885225000000000/2/1/7575/bir_suru_odali_otell.jpg",
                "id": "7575",
                "name": "BIR SÜRÜ ODALI OTELL"
            }
        ],
        "tours": [
            {
                "code": "TESTTOUR",
                "id": "1008",
                "name": "Test Tour Culture Package"
            }
        ],
        "details": {
            "enablePaging": false
        }
    },
    "header": {
        "requestId": "4215397d-a87f-4535-b6dc-d2dd59055afc",
        "success": true,
        "responseTime": "2023-01-26T10:44:14.534325Z",
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

##GetProductInfo Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductinfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
    "currency": "EUR",
    "culture": "en-US",
    "productType": 6,
    "ownerProvider": 1,
    "mediaProvider": 1,
    "product": "TESTTOUR"
}
```

###Response Sample

```
{
    "body": {
        "tour": {
            "mediaFiles": [
                {
                    "fileType": 1,
                    "url": "/images/product/1/5/0/6/2/79/test_tour_culture_package.jpg"
                }
            ],
            "code": "TESTTOUR",
            "id": "1008",
            "name": "Test Tour Culture Package"
        }
    },
    "header": {
        "requestId": "a2be11f0-1f88-447d-93f1-3b41fe52dc3b",
        "success": true,
        "responseTime": "2023-01-26T07:50:02.6512218Z",
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

##GetOffers Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getoffers```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "currency": "EUR",
    "culture": "en-US",
    "searchId": "cc91d141-8acb-46e6-9d61-7c61dd786080",
    "productType": 6,
    "productId": "7575",
    "holidayPackage": {
        "code": "TESTTOUR"
    },
    "offerCount": 10
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
                        "roomId": "STD",
                        "roomName": "Standard room",
                        "roomGroups": [],
                        "accomId": "DBL",
                        "accomName": "DOUBLE ROOM",
                        "boardId": "AI",
                        "boardName": "ALL INCLUSIVE EN-US",
                        "boardGroups": [],
                        "allotment": 10000,
                        "stopSaleGuaranteed": 0,
                        "stopSaleStandart": 0,
                        "priceList": {
                            "id": 2410,
                            "salePeriod": {
                                "from": "2022-11-22T00:00:00",
                                "to": "2023-12-31T00:00:00"
                            }
                        },
                        "price": {
                            "oldAmount": 2000.00,
                            "percent": 0,
                            "amount": 2000.00,
                            "currency": "EUR"
                        },
                        "travellers": [
                            {
                                "type": 1,
                                "minAge": 0,
                                "maxAge": 0
                            },
                            {
                                "type": 1,
                                "minAge": 0,
                                "maxAge": 0
                            }
                        ],
                        "transportation": {
                            "outbound": {
                                "provider": 1,
                                "productType": 0,
                                "seatInfo": {},
                                "availableSeatCount": 100,
                                "departure": {
                                    "name": "Antalya US",
                                    "id": "22177"
                                },
                                "arrival": {
                                    "name": "Antalya US",
                                    "id": "22177"
                                },
                                "flightClass": "Y"
                            },
                            "return": {
                                "provider": 1,
                                "productType": 0,
                                "seatInfo": {},
                                "availableSeatCount": 100,
                                "departure": {
                                    "name": "Antalya US",
                                    "id": "22177"
                                },
                                "arrival": {
                                    "name": "Antalya US",
                                    "id": "22177"
                                },
                                "flightClass": "Y"
                            }
                        },
                        "services": [
                            {
                                "name": "HOTEL"
                            }
                        ]
                    }
                ],
                "isRefundable": true,
                "cancellationPolicies": [
                    {
                        "roomNumber": "1",
                        "beginDate": "2023-01-28T00:00:00",
                        "dueDate": "2023-01-26T00:00:00Z",
                        "price": {
                            "amount": 6.00,
                            "currency": "EUR"
                        },
                        "provider": 1
                    }
                ],
                "holidayPackage": {
                    "name": "Test Tour Culture Package",
                    "id": "1008",
                    "code": "TESTTOUR"
                },
                "accomodationCheckIn": "2023-01-28T00:00:00",
                "accomodationNight": 7,
                "expiresOn": "2023-01-26T11:06:11.7865608Z",
                "offerId": "1$6$202301261106$TR$0|2410$1$19$4278$$$0$0$2",
                "checkIn": "2023-01-28T00:00:00",
                "price": {
                    "oldAmount": 2000.00,
                    "percent": 0,
                    "amount": 2000.00,
                    "currency": "EUR"
                },
                "ownOffer": true,
                "provider": 1
            }
        ],
        "information": {
            "total": 1
        },
        "productId": "7575"
    },
    "header": {
        "requestId": "bcd5c253-80cc-4855-9936-e95fc07d746d",
        "success": true,
        "responseTime": "2023-01-26T10:46:11.8486041Z",
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

##GetOfferDetails Method

Update Date	  |      26.01.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getofferdetails```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "currency": "CHF",
    "culture": "en-US",
    "offerIds": [
        "1$6$202301261106$TR$0|2410$1$19$4278$$$0$0$2"
    ],
    "getProductInfo": true
}
```

###Response Sample

```
{
    "body": {
        "offerDetails": [
            {
                "expiresOn": "2023-01-26T11:06:00Z",
                "offerId": "1$6$202301261106$TR$0|2410$1$19$4278$$$0$0$2",
                "checkIn": "2023-01-28T00:00:00",
                "checkOut": "2023-02-04T00:00:00",
                "isSpecial": false,
                "isAvailable": true,
                "isRefundable": false,
                "hotels": [
                    {
                        "seasons": [
                            {
                                "id": 1219,
                                "name": "mka test",
                                "beginDate": "2022-09-26T00:00:00",
                                "endDate": "2022-12-31T00:00:00",
                                "facilityCategories": [
                                    {
                                        "name": "Undefined Facility Category",
                                        "facilities": [
                                            {
                                                "id": "23",
                                                "name": "Doctor",
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
                                                "id": "41",
                                                "name": "MINI BAR",
                                                "note": "",
                                                "isPriced": false,
                                                "highlighted": false
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "address": {
                            "addressLines": [
                                "Pınarbaşı Mahallesi Hürriyet Caddesi Akdeniz Üniversitesi Ar-Ge 2 Uluğbey Binası No:3A/31 Konyaaltı/Antalya"
                            ]
                        },
                        "faxNumber": "",
                        "phoneNumber": "",
                        "homePage": "http://www.google.com",
                        "stopSaleGuaranteed": 0,
                        "stopSaleStandart": 0,
                        "paymentPlanInfo": [
                            {
                                "id": 1,
                                "phase": 1,
                                "day": 1,
                                "paymentTimeStatus": 1,
                                "price": {
                                    "percent": 30.00,
                                    "amount": 0
                                }
                            },
                            {
                                "id": 2,
                                "phase": 2,
                                "day": 7,
                                "paymentTimeStatus": 0,
                                "price": {
                                    "percent": 40.00,
                                    "amount": 0
                                }
                            },
                            {
                                "id": 3,
                                "phase": 2,
                                "day": 2,
                                "paymentTimeStatus": 0,
                                "price": {
                                    "percent": 30.00,
                                    "amount": 0
                                }
                            }
                        ],
                        "option": {
                            "minAgeRestriction": 17
                        },
                        "handicaps": [],
                        "location": {
                            "name": "Antalya US",
                            "latitude": "36.898731000",
                            "longitude": "30.800461000",
                            "provider": 0,
                            "isTopRegion": false,
                            "id": "22177"
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
                            "name": "Antalya US",
                            "latitude": "36.898731000",
                            "longitude": "30.800461000",
                            "provider": 0,
                            "isTopRegion": false,
                            "id": "22177"
                        },
                        "offers": [
                            {
                                "isAvailable": true,
                                "availability": 1,
                                "rooms": [
                                    {
                                        "roomId": "STD",
                                        "roomName": "STANDARD ROOM",
                                        "accomId": "DBL",
                                        "accomName": "DOUBLE ROOM",
                                        "boardId": "AI",
                                        "boardName": "ALL INCLUSIVE",
                                        "price": {
                                            "amount": 1993.40,
                                            "currency": "CHF"
                                        },
                                        "travellers": [
                                            {
                                                "type": 1,
                                                "minAge": 0,
                                                "maxAge": 0
                                            },
                                            {
                                                "type": 1,
                                                "minAge": 0,
                                                "maxAge": 0
                                            }
                                        ],
                                        "transportation": {
                                            "outbound": {
                                                "provider": 0,
                                                "productType": 0
                                            },
                                            "return": {
                                                "provider": 0,
                                                "productType": 0
                                            }
                                        }
                                    }
                                ],
                                "isRefundable": false,
                                "holidayPackage": {
                                    "code": "TESTTOUR"
                                }
                            }
                        ],
                        "hotelCategory": {
                            "name": "APART",
                            "id": "2041",
                            "code": "APART"
                        },
                        "code": "OGUZHAN",
                        "provider": 1,
                        "thumbnail": "/images/product/1/5/636885225000000000/2/1/7575/bir_suru_odali_otell.jpg",
                        "thumbnailFull": "https://preprod-services.tourvisio.com/media/images/product/1/5/636885225000000000/2/1/7575/bir_suru_odali_otell.jpg",
                        "id": "7575",
                        "name": "BIR SÜRÜ ODALI OTELL"
                    }
                ],
                "flights": [],
                "transports": [],
                "priceBreakdowns": [
                    {
                        "roomNumber": "1",
                        "date": "2023-01-28T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-01-29T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-01-30T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-01-31T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-02-01T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-02-02T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    },
                    {
                        "roomNumber": "1",
                        "date": "2023-02-03T00:00:00",
                        "price": {
                            "amount": 283.83,
                            "currency": "CHF"
                        }
                    }
                ],
                "provider": 1
            }
        ]
    },
    "header": {
        "requestId": "07eb45dd-b9d8-4b6e-9910-b0bee595e22e",
        "success": true,
        "responseTime": "2023-01-26T10:46:27.4155438Z",
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