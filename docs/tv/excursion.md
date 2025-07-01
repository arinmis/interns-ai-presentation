
#Excursion Product

Access real-time, comprehensive excursion rates, availability and booking options with Excursion.


-----------------------------
##GetArrivalAutocomplete Method


Update Date	  |      20.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivalautocomplete```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType": 4,
    "includeSubLocations": true,
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
    "requestId": "d1d8e983-3e7e-47ac-966b-adbde29a1f34",
    "success": true,
    "responseTime": "2022-04-18T13:24:38.0775801Z",
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
        "type": 6,
        "excursion": {
          "id": "210",
          "name": "ANATOLIAN BALLOONS"
        },
        "provider": 1
      },
      {
        "type": 6,
        "excursion": {
          "id": "215",
          "name": "Antalya City Tour"
        },
        "provider": 1
      },
      {
        "type": 6,
        "excursion": {
          "id": "29",
          "name": "Berlin WelcomeCard: free public transport and museum discounts"
        },
        "provider": 1
      },
      {
        "type": 6,
        "excursion": {
          "id": "213",
          "name": "CITY TOURS DEMET "
        },
        "provider": 1
      },
      {
        "type": 6,
        "excursion": {
          "id": "216",
          "name": "DOLPHIN"
        },
        "provider": 1
      }
    ]
  }
}
```


-----------------------------
##GetCheckinDates Method

This method is gives available check in dates.

Update Date	  |      20.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getcheckindates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType": 4,
    "product": 210,
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "dab049f0-268b-4488-ac1c-6302957b08e3",
        "success": true,
        "responseTime": "2022-04-18T13:28:46.3720742Z",
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
        "dates": [
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
##PriceSearch Method

You can use PriceSearch for getting excursion prices.

Update Date	  |      20.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/pricesearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample 

```
{
    "productType": 4,
    "checkIn": "2022-04-19T00:00:00",
    "checkInTo": "2022-04-24T00:00:00",
    "products": [
        "210"
    ],
    "adult": 2,
    "childAges":[
      3
    ],
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
    "requestId": "7d1cf744-a5ca-4792-a842-cb0083ba6e9a",
    "success": true,
    "responseTime": "2022-04-18T13:31:54.6776829Z",
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
    "searchId": "61f8ed98-a124-44d1-9797-ae2f66d6ac41",
    "expiresOn": "2022-04-18T13:51:54.6768765Z",
    "excursions": [
      {
        "categories": [
          {
            "id": "2",
            "name": "TRAVEL"
          }
        ],
        "offers": [
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220419$2",
            "checkIn": "2022-04-19T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220419$2",
            "checkIn": "2022-04-19T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220420$2",
            "checkIn": "2022-04-20T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220420$2",
            "checkIn": "2022-04-20T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220421$2",
            "checkIn": "2022-04-21T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220421$2",
            "checkIn": "2022-04-21T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220422$2",
            "checkIn": "2022-04-22T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 3,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220422$2",
            "checkIn": "2022-04-22T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 1,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220423$2",
            "checkIn": "2022-04-23T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 1,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220423$2",
            "checkIn": "2022-04-23T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 1,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220424$2",
            "checkIn": "2022-04-24T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
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
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "duration": "1",
            "category": {
              "id": "8",
              "name": "A"
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                },
                {
                  "type": 1,
                  "price": {
                    "amount": 100,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "isRefundable": false,
            "availability": 1,
            "offerType": 0,
            "treatAsAdult": false,
            "offerId": "1$4$$DE$1$240$20220424$2",
            "checkIn": "2022-04-24T00:00:00+03:00",
            "price": {
              "amount": 200,
              "currency": "EUR"
            },
            "provider": 1
          }
        ],
        "cancellationPolicyText": {
          "text": "Non-Refundable"
        },
        "webReleaseDay": 5,
        "provider": 1,
        "thumbnail": "/images/product/1/5/637439339400000000/4/1/210/anatolian_balloons.jpg",
        "description": {
          "text": "SEARCH EN",
          "smartTextItems": [
            {
              "title": "key1",
              "content": "value1",
              "textType": 0
            },
            {
              "title": "key2",
              "content": "value2",
              "textType": 0
            }
          ]
        },
        "id": "210",
        "name": "ANATOLIAN BALLOONS"
      }
    ],
    "details": {
      "enablePaging": false
    }
  }
}
```

-----------------------------
##GetProductInfo Method

You can use GetProductInfo for getting excursion media information.

Update Date	  |      20.04.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductinfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType": 4,
    "ownerProvider": 1,
    "product": "210",
    "offerId": "1$4$$DE$1$240$20220419$2",
    "currency": "EUR",
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "33edd79a-7347-4470-a06e-e256bd12ba38",
        "success": true,
        "responseTime": "2022-04-18T13:33:27.3416257Z",
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
        "excursion": {
            "textCategories": [
                {
                    "code": "GENELBILG",
                    "name": "GENEL BILGILER",
                    "presentations": [
                        {
                            "textType": 1,
                            "text": "<p><b><i>EN-US</i></b></p><p></p><p><b>Flying in a Hot Air Balloon is an exquisite feeling anywhere in the world. But flying in Cappadocia is actually a privilege. The sort of Cappadocia Balloon Flights we do here can not be done anywhere else in the whole world.</b></p><p> </p>Here in Cappadocia we fly within the valleys and around the fairy chimneys, very close to the ground, and the flights are so perfect, one would think that the balloon actually had steering facilities. But the explanation is rather simple. Cappadocia being in the middle of what is known as continental climate, there is a great difference of temperature between night and day. We are proud to offer the best services to our passengers.<br/><br/>During the night, there accumulates a mass of cold air within the valleys. This mass begins to flow just like a river around sunrise time. It is thanks to this reliable flow that we manage to perform the astonishing flights that we do almost every day of the year. Anatolian Balloons Cappadocia Balloon Ride Company employs experienced pilots, ground teams and office staff specialized in their respective fields. We are proud to offer the best services to our passengers.<p></p>"
                        }
                    ]
                },
                {
                    "code": "INC",
                    "name": "Included",
                    "presentations": [
                        {
                            "textType": 1,
                            "text": "<p>EN-US</p>DAhil servisler<p></p>"
                        }
                    ]
                },
                {
                    "code": "NOTINC",
                    "name": "Not Included",
                    "presentations": [
                        {
                            "textType": 1,
                            "text": "<p>EN-US</p>Dahil olmayan servisler<p></p>"
                        }
                    ]
                },
                {
                    "code": "PIC",
                    "name": "PiC",
                    "presentations": [
                        {
                            "textType": 3,
                            "text": "testtset"
                        },
                        {
                            "textType": 1,
                            "text": "<p>&nbsp;PIC EN</p>"
                        }
                    ]
                },
                {
                    "code": "SEARCH",
                    "name": "SEARCH",
                    "presentations": [
                        {
                            "textType": 4,
                            "textItems": [
                                {
                                    "title": "key1",
                                    "content": "value1",
                                    "textType": 0
                                },
                                {
                                    "title": "key2",
                                    "content": "value2",
                                    "textType": 0
                                }
                            ]
                        },
                        {
                            "textType": 3,
                            "text": "SEARCH EN"
                        },
                        {
                            "textType": 3,
                            "text": "Test123"
                        }
                    ]
                },
                {
                    "code": "SMART",
                    "name": "SMART",
                    "presentations": [
                        {
                            "textType": 4,
                            "textItems": [
                                {
                                    "title": "key",
                                    "content": "value",
                                    "textType": 0
                                }
                            ]
                        }
                    ]
                }
            ],
            "mediaFiles": [
                {
                    "fileType": 1,
                    "url": "/images/product/1/5/0/4/2/68/anatolian_balloons_68.jpg"
                },
                {
                    "fileType": 1,
                    "url": "/images/product/1/5/0/4/2/69/anatolian_balloons_69.jpg"
                },
                {
                    "fileType": 1,
                    "url": "/images/product/1/5/0/4/2/70/anatolian_balloons_70.jpg"
                }
            ],
            "itenaries": [],
            "categories": [
                {
                    "id": "2",
                    "name": "ANATOLIAN BALLOONS"
                }
            ],
            "cancellationPolicyText": {
                "text": "Non-Refundable"
            },
            "webReleaseDay": 5,
            "code": "ANABALL",
            "provider": 1,
            "thumbnail": "/images/product/1/5/637439339400000000/4/1/210/anatolian_balloons.jpg",
            "id": "210",
            "name": "ANATOLIAN BALLOONS"
        }
    }
}
```
