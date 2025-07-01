
#Lookup
-----------------------------
##GetPaymentTypes Method

Update Date:	  |      03.01.2023
----------------------|--------------------
     Method Adress    | ```/api/agencyservice/getpaymenttypes```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
  "culture": "en-US",
  "transactionId": "c1c8fe73-e102-4cbf-bcac-5a2d578b31e4"
}
```

###Response Sample

```
{
  "body": {
    "paymentDate": "2020-01-02T00:00:00+03:00",
    "paymentFrom": 0,
    "paymentTypes": [
      {
        "paymentTypeName": "AKBANK EUR",
        "bankRecID": 1009,
        "market": "GERMAN",
        "bank": "AKBANK",
        "payCat": 3,
        "creditCard": "VISA",
        "sd": "N",
        "bankName": "AKBANK",
        "creditCardName": "VISA",
        "name": "AKBANK EUR",
        "id": "1022",
        "code": "AKBANKEUR"
      },
      {
        "paymentTypeName": "UGUR DISCOUNT",
        "bankRecID": 1009,
        "market": "GERMAN",
        "bank": "AKBANK",
        "payCat": 3,
        "creditCard": "VISA",
        "sd": "N",
        "bankName": "AKBANK",
        "creditCardName": "VISA",
        "name": "UGUR DISCOUNT",
        "id": "1046",
        "code": "UGUR"
      }
    ],
    "accounts": [
      {
        "name": "B2B Agency"
      }
    ],
    "currencies": [
      {
        "code": "EUR",
        "internationalCode": "EUR",
        "iconText": "EUR",
        "name": "Euro"
      },
      {
        "code": "TRY",
        "internationalCode": "TRY",
        "iconText": "",
        "name": "Turkish Lira"
      },
      {
        "code": "USD",
        "internationalCode": "USD",
        "iconText": "",
        "name": "US Dollar"
      }
    ]
  },
  "header": {
    "requestId": "5bc8379a-25a0-47f5-96ce-01de8761d7e6",
    "success": true,
    "responseTime": "2020-01-02T07:41:23.5424974Z",
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
##GetTransportations

Update Date:	  |     28.07.2023
----------------------|--------------------
     Method Adress    | ```api/lookupservice/getTransportations```  
      Method Type     | 	```POST```
    Token Required    |		```YES```


###Request Sample

```
{
    "productType":1,
    "date": "2023-07-30"
}
```

###Response Sample

```
{
  "body": {
    "transportations": [
      {
        "night": 7,
        "transportationClass": {
          "code": "Y"
        },
        "date": "2023-07-30T00:00:00",
        "outbound": {
          "productType": 3,
          "airline": {
            "thumbnail": "/images/other/1/10/0/3/1/57/sun_express.jpg",
            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/XQ.gif",
            "logo": "/images/other/1/10/0/3/2/57/sun_express.jpg",
            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/XQ.png",
            "id": "57",
            "name": "Sun Express"
          },
          "departure": {
            "date": "2023-07-30T00:00:00",
            "location": {
              "id": "3589",
              "name": "Zurich_Isv"
            },
            "airport": {
              "name": "Zurich Airport",
              "id": "1090",
              "code": "ZRH"
            }
          },
          "arrival": {
            "date": "2023-07-30T00:00:00",
            "location": {
              "id": "22177",
              "name": "Antalya"
            },
            "airport": {
              "name": "Antalya Airport",
              "id": "1089",
              "code": "AYT"
            }
          },
          "duration": 0,
          "selectableRoutes": [
            "20230030-7-3-XQ1234R-Y"
          ],
          "pnlName": "XQ1234",
          "seatInfo": {
            "availableSeatCount": 10,
            "availableSeatCountType": 0
          },
          "id": "20230030-7-3-XQ1234-Y",
          "code": "XQ1234"
        },
        "return": {
          "productType": 3,
          "airline": {
            "thumbnail": "/images/other/1/10/0/3/1/57/sun_express.jpg",
            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/XQ.gif",
            "logo": "/images/other/1/10/0/3/2/57/sun_express.jpg",
            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/XQ.png",
            "id": "57",
            "name": "Sun Express"
          },
          "departure": {
            "date": "2023-08-06T00:00:00",
            "location": {
              "id": "22177",
              "name": "Antalya"
            },
            "airport": {
              "name": "Antalya Airport",
              "id": "1089",
              "code": "AYT"
            }
          },
          "arrival": {
            "date": "2023-08-06T00:00:00",
            "location": {
              "id": "3589",
              "name": "Zurich_Isv"
            },
            "airport": {
              "name": "Zurich Airport",
              "id": "1090",
              "code": "ZRH"
            }
          },
          "duration": 0,
          "selectableRoutes": [
            "20230030-7-3-XQ1234-Y"
          ],
          "pnlName": "XQ1234R",
          "seatInfo": {
            "availableSeatCount": 10,
            "availableSeatCountType": 0
          },
          "id": "20230030-7-3-XQ1234R-Y",
          "code": "XQ1234R"
        }
      },
      {
        "night": 7,
        "transportationClass": {
          "code": "Y"
        },
        "date": "2023-07-30T00:00:00",
        "outbound": {
          "productType": 3,
          "airline": {
            "thumbnail": "/images/other/1/10/0/3/1/36/turkish_airlines.jpg",
            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
            "logo": "/images/other/1/10/0/3/2/36/turkish_airlines.jpg",
            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
            "id": "36",
            "name": "Turkish Airlines"
          },
          "departure": {
            "date": "2023-07-30T00:00:00",
            "location": {
              "id": "3630",
              "name": "Berlin"
            },
            "airport": {
              "name": "Berlin Brandenburg Airport (U.C.)",
              "id": "13702",
              "code": "BER"
            }
          },
          "arrival": {
            "date": "2023-07-30T00:00:00",
            "location": {
              "id": "22177",
              "name": "Antalya"
            },
            "airport": {
              "name": "Antalya Airport",
              "id": "1089",
              "code": "AYT"
            }
          },
          "duration": 0,
          "selectableRoutes": [
            "20230030-7-3-QF09-Y"
          ],
          "pnlName": "QF08",
          "seatInfo": {
            "availableSeatCount": 50,
            "availableSeatCountType": 0
          },
          "id": "20230030-7-3-QF08-Y",
          "code": "QF08"
        },
        "return": {
          "productType": 3,
          "airline": {
            "thumbnail": "/images/other/1/10/0/3/1/36/turkish_airlines.jpg",
            "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
            "logo": "/images/other/1/10/0/3/2/36/turkish_airlines.jpg",
            "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
            "id": "36",
            "name": "Turkish Airlines"
          },
          "departure": {
            "date": "2023-08-06T11:00:00",
            "location": {
              "id": "22177",
              "name": "Antalya"
            },
            "airport": {
              "name": "Antalya Airport",
              "id": "1089",
              "code": "AYT"
            }
          },
          "arrival": {
            "date": "2023-08-06T13:00:00",
            "location": {
              "id": "3630",
              "name": "Berlin"
            },
            "airport": {
              "name": "Berlin Brandenburg Airport (U.C.)",
              "id": "13702",
              "code": "BER"
            }
          },
          "duration": 120,
          "selectableRoutes": [
            "20230030-7-3-QF08-Y"
          ],
          "pnlName": "QF09",
          "seatInfo": {
            "availableSeatCount": 50,
            "availableSeatCountType": 0
          },
          "id": "20230030-7-3-QF09-Y",
          "code": "QF09"
        }
      }
    ]
  },
  "header": {
    "requestId": "c20b0c54-8740-471f-9815-b83a84b51d07",
    "success": true,
    "responseTime": "2023-07-28T11:31:33.019944Z",
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

##Get Exchange Rates

Update Date:	  |     01.09.2023
----------------------|--------------------
     Method Adress    | ```api/lookupservice/getexchangerates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```


###Request Sample

```
{
    "currency":"TRY"
}
```

###Response Sample

```
{
    "body": {
        "pairs": [
            {
                "baseCurrency": "TRY",
                "counterCurrency": "CZK",
                "rate": 0.8305103291316526610644257703
            },
            {
                "baseCurrency": "TRY",
                "counterCurrency": "EUR",
                "rate": 0.037951
            },
            {
                "baseCurrency": "TRY",
                "counterCurrency": "JPY",
                "rate": 5.4676559573548480046102867022
            },
            {
                "baseCurrency": "TRY",
                "counterCurrency": "RON",
                "rate": 0.1705034549065063661931333172
            },
            {
                "baseCurrency": "TRY",
                "counterCurrency": "USD",
                "rate": 0.03965878667165479895249222
            } 
        ]
    },
    "header": {
        "requestId": "8eff1189-7bd8-4598-bb56-b9e64bae80fd",
        "success": true,
        "responseTime": "2023-09-01T07:27:10.0776908Z",
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