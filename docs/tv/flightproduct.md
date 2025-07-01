#Flight Product 

![img](img/FlightProduct.png)

-----------------------------
##Departure Auto Complete Method

Update Date:	      |      27.05.2023
--------------------------|---------------------
Method Adress    		  |`/api/productservice/getdepartureautocomplete`
Method Type	        	  |`POST`
Token Required      	  |`YES`

###OneWay Request Sample
If service type is 1 it means one way.
```
{
  "ProductType": 3,
  "Query": "IST",
  "ServiceType": "1",
  "Culture": "en-US"
}
```
###Roundtrip Request Sample
If service type is 2 it means round trip.
```
{
  "ProductType": 3,
  "Query": "IST",
  "ServiceType": "2",
  "Culture": "en-US"
}
```

###Multicity Request Sample
If service type is 3, it means multi city.
```
{
  "ProductType": 3,
  "Query": "Antalya",
  "ServiceType": "3",
  "Culture": "en-US"
}
```

###Response Sample
The type in the response means [Autocomplete Response Types](../enumarations/#Autocomplete-Response-Types)
```
{
   "header":{
      "requestId":"925b2ff0-347b-40b0-8414-3f43f87359b7",
      "success":true,
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
      "items":[
         {
            "type":1,
            "geolocation":{
               "longitude":"28.81460600",
               "latitude":"40.97692200"
            },
            "city":{
               "id":"IST",
               "name":"Istanbul, Turkey (All)"
            },
            "provider":3
         },
         {
            "type":3,
            "geolocation":{
               "longitude":"28.81460600",
               "latitude":"40.97692200"
            },
            "airport":{
               "id":"IST",
               "name":"Istanbul, Atatürk International Airport, Turkey (IST)"
            },
            "provider":3
         },
         {
            "type":3,
            "geolocation":{
               "longitude":"29.30921900",
               "latitude":"40.89855300"
            },
            "airport":{
               "id":"SAW",
               "name":"Istanbul, Sabiha Gökçen International Airport, Turkey (SAW)"
            },
            "provider":3
         }
      ]
   }
}
```

-----------------------------
##Arrival Auto Complete Method

Update Date:	      |      27.05.2023
--------------------------|---------------------
Method Adress			  |`/api/productservice/getarrivalautocomplete`
Method Type				  |`POST`
Token Required		 	  |`YES`

###OneWay Request Sample
If service type is 1 it means one way.
```
{
  "ProductType": 3,
  "Query": "AYT",
  "ServiceType": "1",
    
  <!--This values in Departure Auto Complete response.-->
  "DepartureLocations": [
    {
      "type": 5,
      "id": "IST"
    }
  ],
  "Culture": "en-US"
}
```
###Roundtrip Request Sample
If service type is 2 it means round trip.
```
{
  "ProductType": 3,
  "Query": "AYT",
  "ServiceType": "2",
  "DepartureLocations": [
    {
      "type": 5,
      "id": "IST"
    }
  ],
  "Culture": "en-US"
}
```

###Multicity Request Sample
If service type is 3, it means multi city.
```
{
  "ProductType": 3,
  "Query": "İstanb",
  "ServiceType": "3",
  "DepartureLocations": [
    {
      "type": 5,
      "id": "AYT"
    }
  ],
  "Culture": "en-US"
}
```


###Response Sample

```
{
   "header":{
      "requestId":"a941165b-0480-4c0c-8b7a-7c7475e949ef",
      "success":true,
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
      "items":[
         {
            "type":3,
            "geolocation":{
               "longitude":"30.80046100",
               "latitude":"36.89873100"
            },
            "airport":{
               "id":"AYT",
               "name":"Antalya, Antalya International Airport, Turkey (AYT)"
            },
            "provider":3
         }
      ]
   }
}
```

-----------------------------
##Check In Dates Method

Update Date:	      |      02.05.2023
--------------------------|---------------------
Method Adress			  |`/api/productservice/getcheckindates`
Method Type				  |`POST`
Token Required	 		  |`YES`

###Request Sample

```
{
	"ProductType": 3,
    "ServiceType": "1",
	"DepartureLocations": [
	  {
		"Id": "IST",
        "Type": 5
	  }
	],
    "ArrivalLocations": [
      {
        "id": "AYT",
        "Type": 5
      }
    ]
}
```

###Response Sample

```
{
  "dates": [
    "2021-05-02T00:00:00+03:00",
    "2021-05-03T00:00:00+03:00",
    "2021-05-04T00:00:00+03:00",
    "2021-05-05T00:00:00+03:00",
    "2021-05-21T00:00:00+03:00",
    "2021-05-22T00:00:00+03:00",
    "2021-05-23T00:00:00+03:00",
    "2021-05-24T00:00:00+03:00",
    "2021-05-25T00:00:00+03:00",
    "2021-05-26T00:00:00+03:00",
    "2021-05-27T00:00:00+03:00"
  ]
}
```

-----------------------------
##Price Search Method

Update Date:  	      |      03.03.2023
--------------------------|---------------------
Method Adress			  |`/api/productservice/pricesearch`
Method Type			 	  |`POST`
Token Required	 	  	  |`NO`

###OneWay Request Sample
[Click](../enumarations/#product-types) to reach the product types. <br>
If service type is 1 it means one way. <br>
If you need to get service fee (field : fees) in price search response, you need to send "calculateFlightFees": true  in price search request. <br>
If you want to search by flight classes use "flightClasses". [Click](../enumarations/#flightclass-types) to reach the FlightClass types. <b>(Optional)</b>

```
{
  "ProductType": 3,
  "ServiceTypes": [
    "1"
  ],
  "CheckIn": "2023-02-17",
  "DepartureLocations": [
    {
      "id": "IST",
      "type": 2
    }
  ],
  "ArrivalLocations": [
    {
      "id": "AYT",
      "type": 5
    }
  ],
  "Passengers": [
    {
      "type": 1,
      "count": 1
    },
    {
      "type": 2,
      "count": 1
    },
    {
      "type": 3,
      "count": 1
    },
    {
      "type": 4,
      "count": 1
    }
  ],
  "showOnlyNonStopFlight": false,
  "additionalParameters": {
        "getOptionsParameters": {
            "flightBaggageGetOption": 0
        }
    },
  "acceptPendingProviders": false,
  "forceFlightBundlePackage": false,
  "disablePackageOfferTotalPrice": true,
  "calculateFlightFees": false,
  "flightClasses": [
    0
  ],
  "Culture": "en-US",
  "Currency": "EUR"
}
```
###OneWay Response Sample

```
{
  "body": {
    "searchId": "79453fa4-4f88-42d7-b1cd-13a7db91101e",
    "expiresOn": "2022-01-31T11:55:07.497599Z",
    "flights": [
      {
        "provider": 13,
        "id": "TK7516",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "TK7516",
            "pnlName": "TK7516",
            "flightDate": "2022-02-11T09:35:00",
            "airline": {
              "internationalCode": "AJ0",
              "thumbnail": "/images/other/3/1/0/3/2/AJ0/anadolu_jet.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/AJ0.gif",
              "logo": "/images/other/3/1/0/3/1/AJ0/anadolu_jet.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/AJ0.png",
              "id": "AJ0",
              "name": "Anadolu Jet"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
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
              "date": "2022-02-11T09:35:00",
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
              "date": "2022-02-11T10:50:00",
              "geoLocation": {
                "longitude": "30.8",
                "latitude": "36.89"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "W",
              "code": "W"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:SAW|AYT|20220211093500|TK7516",
                "flightNo": "TK7516",
                "pnlName": "TK7516",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "W",
                  "code": "W"
                },
                "airline": {
                  "internationalCode": "AJ0",
                  "thumbnail": "/images/other/3/1/0/3/2/AJ0/anadolu_jet.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/AJ0.gif",
                  "logo": "/images/other/3/1/0/3/1/AJ0/anadolu_jet.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/AJ0.png",
                  "id": "AJ0",
                  "name": "Anadolu Jet"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                  "date": "2022-02-11T09:35:00",
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
                  "date": "2022-02-11T10:50:00",
                  "geoLocation": {
                    "longitude": "30.8",
                    "latitude": "36.89"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                    "weight": 20,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                    "weight": 20,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:SAW|AYT|20220211093500|TK7516"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211093500|TK7516"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211093500|TK7516"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211093500|TK7516"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 20 kg",
                    "name": "Checked baggage allowance 20 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211093500|TK7516"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                    "id": "Seat selection",
                    "name": "Seat selection"
                  }
                ],
                "aircraft": "UNKNOWN_PLANE"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "passengers": [
              {
                "type": 1,
                "ages": [],
                "count": 1
              }
            ],
            "flightType": 0
          }
        ],
        "offers": [
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 21.27,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 21.27,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 1,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.ef.eco.fly",
              "name": "ECO FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0T0tmZXpaanNmODp4cXpqdAAmb2Y6MTo1NTprejJmZmNkcDpmbGlnaHQwcmdIU0ZIaHoyOjU2cGd0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 21.27,
              "currency": "USD"
            },
            "provider": 13
          },
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 24.76,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 24.76,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 1,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "weight": 20,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.xf.extra.fly",
              "name": "EXTRA FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0T0tmZXpaanNmODp4cXpqdAAmb2Y6MTo1NTprejJmZmNkcDpmbGlnaHQzUmlPSzVlcEhuOjU2cGZ0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 24.76,
              "currency": "USD"
            },
            "provider": 13
          },
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 29.41,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 29.41,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 1,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211093500|TK7516",
                "weight": 20,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211093500|TK7516"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.pf.prime.fly",
              "name": "PRIME FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0T0tmZXpaanNmODp4cXpqdAAmb2Y6MTo1NTprejJmZmNkcDpmbGlnaHQ0Zm0xMkRoMGRxOjU2cGh0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 29.41,
              "currency": "USD"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK7536",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "TK7536",
            "pnlName": "TK7536",
            "flightDate": "2022-02-11T20:50:00",
            "airline": {
              "internationalCode": "AJ0",
              "thumbnail": "/images/other/3/1/0/3/2/AJ0/anadolu_jet.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/AJ0.gif",
              "logo": "/images/other/3/1/0/3/1/AJ0/anadolu_jet.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/AJ0.png",
              "id": "AJ0",
              "name": "Anadolu Jet"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 70,
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
              "date": "2022-02-11T20:50:00",
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
              "date": "2022-02-11T22:00:00",
              "geoLocation": {
                "longitude": "30.8",
                "latitude": "36.89"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "W",
              "code": "W"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:SAW|AYT|20220211205000|TK7536",
                "flightNo": "TK7536",
                "pnlName": "TK7536",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "W",
                  "code": "W"
                },
                "airline": {
                  "internationalCode": "AJ0",
                  "thumbnail": "/images/other/3/1/0/3/2/AJ0/anadolu_jet.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/AJ0.gif",
                  "logo": "/images/other/3/1/0/3/1/AJ0/anadolu_jet.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/AJ0.png",
                  "id": "AJ0",
                  "name": "Anadolu Jet"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                  "date": "2022-02-11T20:50:00",
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
                  "date": "2022-02-11T22:00:00",
                  "geoLocation": {
                    "longitude": "30.8",
                    "latitude": "36.89"
                  }
                },
                "duration": 70,
                "baggageInformations": [
                  {
                    "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                    "weight": 20,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                    "weight": 20,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:SAW|AYT|20220211205000|TK7536"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211205000|TK7536"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211205000|TK7536"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211205000|TK7536"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 20 kg",
                    "name": "Checked baggage allowance 20 kg"
                  },
                  {
                    "segments": [
                      "F:SAW|AYT|20220211205000|TK7536"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                    "id": "Seat selection",
                    "name": "Seat selection"
                  }
                ],
                "aircraft": "UNKNOWN_PLANE"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "passengers": [
              {
                "type": 1,
                "ages": [],
                "count": 1
              }
            ],
            "flightType": 0
          }
        ],
        "offers": [
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 21.27,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 21.27,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 6,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.ef.eco.fly",
              "name": "ECO FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0R1JzR1J4OGVyNzp4cXp1dAAmb2Y6MTo1NTprejJmZmNkcjpmbGlnaHRhZDBLaHR5cWtiOjU2cWp0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 21.27,
              "currency": "USD"
            },
            "provider": 13
          },
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 24.76,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 24.76,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 6,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "weight": 20,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.xf.extra.fly",
              "name": "EXTRA FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0R1JzR1J4OGVyNzp4cXp1dAAmb2Y6MTo1NTprejJmZmNkcjpmbGlnaHQ1dk1vVlNjdVdLOjU2cWl0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 24.76,
              "currency": "USD"
            },
            "provider": 13
          },
          {
            "segmentNumber": 0,
            "singleAdultPrice": {
              "amount": 29.41,
              "currency": "USD"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 1,
                  "price": {
                    "amount": 29.41,
                    "currency": "USD"
                  },
                  "airportTax": {
                    "amount": 3.72,
                    "currency": "USD"
                  }
                }
              ]
            },
            "serviceFee": {
              "amount": 0,
              "currency": "USD"
            },
            "seatInfo": {
              "availableSeatCount": 6,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "name": "Economy",
                "id": "W",
                "code": "W"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:SAW|AYT|20220211205000|TK7536",
                "weight": 20,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:SAW|AYT|20220211205000|TK7536"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
             "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 6,
                    "price": 10.00,
                    "totalPrice": 60.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  },
                  {
                    "passengerType": 1,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  }
                ],
                "price": {
                  "amount": 80.00,
                  "currency": "EUR"
                }
              }
            },
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "1",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.aj.pf.prime.fly",
              "name": "PRIME FLY"
            },
            "expiresOn": "2022-01-31T11:55:07.497599Z",
            "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJml0OjE6NTU6a3oyZmZjZG86ZmxpZ2h0R1JzR1J4OGVyNzp4cXp1dAAmb2Y6MTo1NTprejJmZmNkcjpmbGlnaHRpZTNiT2E1MHJWOjU2cWt0AChBQUFCZnE4OHJiWUFBQUFBbXBDaFlERlc3OTlPM0ZwQ1lOdEpGdz09",
            "price": {
              "amount": 29.41,
              "currency": "USD"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      }
    ]
  },
  "header": {
    "requestId": "9829efe8-2040-41ab-b9a4-145131999abf",
    "success": true,
    "responseTime": "2022-01-31T08:25:23.7201582Z",
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

###Roundtrip Request Sample (Recommended)
[Click](../enumarations/#Product-Types) to reach the product types. <br>
If service type is 2 it means round trip. <br>
If you need to get service fee (field : fees) in price search response, you need to send "calculateFlightFees": true  in price search request.

```
{
  "ProductType": 3,
  "ServiceTypes": [
    "2"
  ],
  "DepartureLocations": [
    {
      "id": "IST",
      "type": 2,
      "provider": 3
    }
  ],
  "ArrivalLocations": [
    {
      "id": "AYT",
      "type": 5,
      "provider": 3
    }
  ],
  "CheckIn": "2023-02-17",
  "Night": 7,
  "Passengers": [
    {
      "type": 1,
      "count": 2
    },
    {
      "type": 2,
      "count": 1
    },
    {
      "type": 3,
      "count": 1
    }
  ],
  "acceptPendingProviders": false,
  "forceFlightBundlePackage": false,
  "disablePackageOfferTotalPrice": true,
  "supportedFlightReponseListTypes": [
    3
  ],
  "showOnlyNonStopFlight": false,
  "additionalParameters":
    {
      "getOptionsParameters":
      {
          "flightBaggageGetOption":0
      }
    },
  "calculateFlightFees": false,
  "Culture": "en-US",
  "Currency": "EUR"
}
```

###Roundtrip Response Sample (Recommended)
```
{
  "body": {
    "searchId": "2ad79664-f3aa-4cd1-902b-42a22597fb03",
    "expiresOn": "2021-05-25T10:03:42.435462Z",
    "flights": [
      {
        "provider": 13,
        "id": "it:1:e:kp3nx9qg:flightuVrmQItCP5:cgw",
        "items": [
          {
            "flightNo": "TK2408",
            "pnlName": "TK2408",
            "flightDate": "2021-08-20T06:45:00Z",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 70,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2021-08-20T06:45:00Z",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
              "date": "2021-08-20T07:55:00Z",
              "geoLocation": {
                "longitude": "30.8",
                "latitude": "36.89"
              }
            },
            "flightClass": {
              "name": "Economy",
              "id": "L",
              "code": "L"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|AYT|20210820064500|TK2408",
                "flightNo": "TK2408",
                "pnlName": "TK2408",
                "flightClass": {
                  "name": "Economy",
                  "id": "L",
                  "code": "L"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2021-08-20T06:45:00Z",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                  "date": "2021-08-20T07:55:00Z",
                  "geoLocation": {
                    "longitude": "30.8",
                    "latitude": "36.89"
                  }
                },
                "duration": 70,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 2,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 2,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 2,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:IST|AYT|20210820064500|TK2408",
                    "piece": 2,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 20 kg",
                    "name": "Checked baggage allowance 20 kg"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                    "id": "Seat selection",
                    "name": "Seat selection"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/FrequentFlyer/250_miles_bonus",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/FrequentFlyer.svg",
                    "id": "250 miles bonus",
                    "name": "250 miles bonus"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_25_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 25 kg",
                    "name": "Checked baggage allowance 25 kg"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/FrequentFlyer/500_miles_bonus",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/FrequentFlyer.svg",
                    "id": "500 miles bonus",
                    "name": "500 miles bonus"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_30_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 30 kg",
                    "name": "Checked baggage allowance 30 kg"
                  },
                  {
                    "segments": [
                      "F:IST|AYT|20210820064500|TK2408"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Lounge/business_lounge",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Lounge.svg",
                    "id": "Business Lounge",
                    "name": "Business Lounge"
                  }
                ],
                "aircraft": "UNKNOWN_PLANE"
              }
            ],
            "stopCount": 0,
            "baggageInformations": [
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "passengers": [
              {
                "type": 1,
                "count": 2
              },
              {
                "type": 2,
                "count": 1
              },
              {
                "type": 3,
                "count": 1
              },
              {
                "type": 1,
                "count": 1
              }
            ],
            "flightType": 0
          }
        ],
        "offers": [
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 26.64,
              "currency": "EUR"
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
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "name": "Economy",
                "id": "L",
                "code": "L"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJGl0OjE6ZTprcDNueDlxZzpmbGlnaHR1VnJtUUl0Q1A1OmNnd3QAJW9mOjE6ZTprcDNueDlxbDpmbGlnaHRSRm1jNmVRbnBLOjE1dWx0AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 107.78,
              "currency": "EUR"
            },
            "provider": 13,
            "flightProvider": {
             "displayName": "THY",
             "id": "1",
             "name": "THY"
            }
          },
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 30.06,
              "currency": "EUR"
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
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "name": "Economy",
                "id": "L",
                "code": "L"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/FrequentFlyer/250_miles_bonus",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/FrequentFlyer.svg",
                "id": "250 miles bonus",
                "name": "250 miles bonus"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJGl0OjE6ZTprcDNueDlxZzpmbGlnaHR1VnJtUUl0Q1A1OmNnd3QAJW9mOjE6ZTprcDNueDlxbDpmbGlnaHR6bW45T0xVcmRBOjE1dW50AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.tk.xf.extrafly",
              "name": "EXTRAFLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 121.1,
              "currency": "EUR"
            },
            "provider": 13,
             "flightProvider": {
             "displayName": "THY",
             "id": "1",
             "name": "THY"
            }
          },
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 35.43,
              "currency": "EUR"
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
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "name": "Economy",
                "id": "L",
                "code": "L"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_25_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 25 kg",
                "name": "Checked baggage allowance 25 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/FrequentFlyer/500_miles_bonus",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/FrequentFlyer.svg",
                "id": "500 miles bonus",
                "name": "500 miles bonus"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJGl0OjE6ZTprcDNueDlxZzpmbGlnaHR1VnJtUUl0Q1A1OmNnd3QAJW9mOjE6ZTprcDNueDlxbDpmbGlnaHRjZHc1dUZXMkJzOjE1dW90AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.tk.pf.primefly",
              "name": "PRIMEFLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 142.04,
              "currency": "EUR"
            },
            "provider": 13,
             "flightProvider": {
             "displayName": "THY",
             "id": "1",
             "name": "THY"
            }
          },
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 95.74,
              "currency": "EUR"
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
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "name": "Business",
                "id": "C",
                "code": "C"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 2,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 2,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 2,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:IST|AYT|20210820064500|TK2408",
                "piece": 2,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_30_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 30 kg",
                "name": "Checked baggage allowance 30 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Lounge/business_lounge",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Lounge.svg",
                "id": "Business Lounge",
                "name": "Business Lounge"
              },
              {
                "segments": [
                  "F:IST|AYT|20210820064500|TK2408"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJGl0OjE6ZTprcDNueDlxZzpmbGlnaHR1VnJtUUl0Q1A1OmNnd3QAJW9mOjE6ZTprcDNueDlxbDpmbGlnaHRQaHBHM014MWR4OjE1dW10AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.tk.bu.business",
              "name": "BUSINESS"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 373.73,
              "currency": "EUR"
            },
            "provider": 13,
            "flightProvider": {
             "displayName": "THY",
             "id": "1",
             "name": "THY"
            }
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "it:1:e:kp3nx9qi:flightEwTA0qefqn:cht",
        "items": [
          {
            "flightNo": "TK7471",
            "pnlName": "TK7471",
            "flightDate": "2021-08-27T07:50:00Z",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 70,
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
              "date": "2021-08-27T07:50:00Z",
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
              "date": "2021-08-27T09:00:00Z",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "name": "Economy",
              "id": "T",
              "code": "T"
            },
            "route": 2,
            "segments": [
              {
                "id": "F:AYT|SAW|20210827075000|TK7471",
                "flightNo": "TK7471",
                "pnlName": "TK7471",
                "flightClass": {
                  "name": "Economy",
                  "id": "T",
                  "code": "T"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                  "date": "2021-08-27T07:50:00Z",
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
                  "date": "2021-08-27T09:00:00Z",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 70,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 2
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 3
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 2,
                    "passengerType": 1
                  },
                  {
                    "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                    "piece": 1,
                    "baggageType": 2,
                    "unitType": 2,
                    "passengerType": 1
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:AYT|SAW|20210827075000|TK7471"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20210827075000|TK7471"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20210827075000|TK7471"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20210827075000|TK7471"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 20 kg",
                    "name": "Checked baggage allowance 20 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20210827075000|TK7471"
                    ],
                    "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                    "id": "Seat selection",
                    "name": "Seat selection"
                  }
                ],
                "aircraft": "BOEING 737-800"
              }
            ],
            "stopCount": 0,
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "passengers": [
              {
                "type": 1,
                "count": 2
              },
              {
                "type": 2,
                "count": 1
              },
              {
                "type": 3,
                "count": 1
              },
              {
                "type": 1,
                "count": 1
              }
            ],
            "flightType": 0
          }
        ],
        "offers": [
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 27.33,
              "currency": "EUR"
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
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "name": "Economy",
                "id": "T",
                "code": "T"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJGl0OjE6ZTprcDNueDlxaTpmbGlnaHRFd1RBMHFlZnFuOmNodHQAJW9mOjE6ZTprcDNueDlxdzpmbGlnaHRsajJzVHBrR0ViOjE1eHd0AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.aj.ef.eco.fly",
              "name": "ECO FLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 110.43,
              "currency": "EUR"
            },
            "provider": 13,
            "flightProvider": {
              "displayName": "THY",
              "id": "1",
              "name": "THY"
            }
          },
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 30.25,
              "currency": "EUR"
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
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "name": "Economy",
                "id": "T",
                "code": "T"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJGl0OjE6ZTprcDNueDlxaTpmbGlnaHRFd1RBMHFlZnFuOmNodHQAJW9mOjE6ZTprcDNueDlxdzpmbGlnaHRzbDhLYlNENkcxOjE1eHZ0AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.aj.xf.extra.fly",
              "name": "EXTRA FLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 121.85,
              "currency": "EUR"
            },
            "provider": 13,
            "flightProvider": {
              "displayName": "THY",
              "id": "1",
              "name": "THY"
            }
          },
          {
            "singleAdultPrice": { <!--deprecated-->
              "amount": 34.16,
              "currency": "EUR"
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
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "name": "Economy",
                "id": "T",
                "code": "T"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 2
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 3
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 1,
                "unitType": 2,
                "passengerType": 1
              },
              {
                "segmentId": "F:AYT|SAW|20210827075000|TK7471",
                "piece": 1,
                "baggageType": 2,
                "unitType": 2,
                "passengerType": 1
              }
            ],
            "services": [
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/checked_baggage_allowance_20_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 20 kg",
                "name": "Checked baggage allowance 20 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/SeatAssignment/seat_selection",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/SeatAssignment.svg",
                "id": "Seat selection",
                "name": "Seat selection"
              },
              {
                "segments": [
                  "F:AYT|SAW|20210827075000|TK7471"
                ],
                "thumbnail": "/vectors/3/1/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "fees": {
              "key": "PXMTK",
              "oneWay": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              },
              "roundTrip": {
                "items": [
                  {
                    "passengerType": 1,
                    "quantity": 2,
                    "price": 10.00,
                    "totalPrice": 20.00
                  },
                  {
                    "passengerType": 2,
                    "quantity": 1,
                    "price": 10.00,
                    "totalPrice": 10.00
                  },
                  {
                    "passengerType": 3,
                    "quantity": 1,
                    "price": 0.00,
                    "totalPrice": 0.00
                  }
                ],
                "price": {
                  "amount": 30.00,
                  "currency": "EUR"
                }
              }
            },
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~~ODYzMzhlNDctYTJmZi00Y2M4LWJlMjktZDMzNDgwMjMwNWQ0~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF/kYZQ3KR+CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJGl0OjE6ZTprcDNueDlxaTpmbGlnaHRFd1RBMHFlZnFuOmNodHQAJW9mOjE6ZTprcDNueDlxdzpmbGlnaHRpSE81cVB6VjJOOjE1eHh0AChBQUFCZWFJNms0UUFBQUFBc1JiWFFsSWpfNGNWUGhfRVNudEEwdz09",
                "provider": {
                  "displayName": "THY",
                  "id": "1",
                  "name": "THY"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightBrandInfo": {
              "id": "1.aj.pf.prime.fly",
              "name": "PRIME FLY"
            },
            "expiresOn": "2021-05-25T10:03:42.435462Z",
            "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "price": {
              "amount": 137.07,
              "currency": "EUR"
            },
            "provider": 13,
            "flightProvider": {
              "displayName": "THY",
              "id": "1",
              "name": "THY"
            }
          }
        ],
        "groupKeys": [
          "-"
        ]
      }
    ],
    "details": {
      "flightResponseListType": 3,
      "enablePaging": false
    }
  },
  "header": {
    "requestId": "775b654b-f526-414a-9899-6b74d74c98b1",
    "success": true,
    "responseTime": "2021-05-25T06:33:45.0116019Z",
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


###Multicity Request Sample
Service type 3 indicates that this price search for flight is multi city search.
Note that the arrival/departure locations and checkins should be in the same order for multi city flight search. They are mapped and searched according to their indices in provided list objects. 
E.g. On first checkin date, searching flights from first departure location to first arrival location, then on second checkin date, searching flights from second departure location to second arrival location.

```
{
  "serviceTypes": [
    "3"
  ],
  "productType": 3,
  "arrivalLocations": [
    {
      "type": 2,
      "id": "IST"
    },
    {
      "type": 5,
      "id": "ESB"
    }
  ],
  "departureLocations": [
    {
      "type": 5,
      "id": "AYT"
    },
    {
      "type": 2,
      "id": "IST"
    }
  ],
  "passengers": [
    {
      "type": 1,
      "count": 2
    }
  ],
  "checkIns": [
    "2022-06-05",
    "2022-06-10"
  ],
  "calculateFlightFees": false,
  "acceptPendingProviders": false,
  "forceFlightBundlePackage": false,
  "disablePackageOfferTotalPrice": true,
  "showOnlyNonStopFlight": false,
  "supportedFlightReponseListTypes": [
    3
  ],
  "culture": "en-US",
  "currency": "EUR"
}
```


###Multicity Response Sample
```
{
  "header": {
    "requestId": "b8be5cb6-56b6-43c5-b588-1b702f3bfb40",
    "success": true,
    "responseTime": "2022-05-30T12:58:22.7373169Z",
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
    "searchId": "b37e72de-4f75-4b83-935b-ac6a3553c8f8",
    "expiresOn": "2022-05-30T16:28:21.124093Z",
    "flights": [
      {
        "provider": 13,
        "id": "PC2009",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "PC2009",
            "pnlName": "PC2009",
            "flightDate": "2022-06-05T11:55:00",
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
              "date": "2022-06-05T11:55:00",
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
              "date": "2022-06-05T13:10:00",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:AYT|SAW|20220605115500|PC2009",
                "flightNo": "PC2009",
                "pnlName": "PC2009",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
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
                  "date": "2022-06-05T11:55:00",
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
                  "date": "2022-06-05T13:10:00",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20220605115500|PC2009",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": "CarryOn"
                  },
                  {
                    "segmentId": "F:AYT|SAW|20220605115500|PC2009",
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
                      "F:AYT|SAW|20220605115500|PC2009"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20220605115500|PC2009"
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605115500|PC2009",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605115500|PC2009",
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
              "amount": 18.85,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 37.7,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 10.2,
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
              "availableSeatCount": 8,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:AYT|SAW|20220605115500|PC2009",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605115500|PC2009",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605115500|PC2009",
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
                  "F:AYT|SAW|20220605115500|PC2009"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20220605115500|PC2009"
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
              "optionDate": "2022-05-30T15:58:17.247Z"
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJ2l0Ojk6NHU6bDNzcWwxbXo6ZmxpZ2h0MHZ3dGtaNHNwcDoyMGE5OHQAJm9mOjk6NHU6bDNzcWwxbXo6ZmxpZ2h0cFdsZjV1UUFXdDppaDJhdAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "Paximum Pegasus NDC",
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "flightBrandInfo": {
              "id": "9.pc.15kg",
              "name": "Baggage Allowance 15KG"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 37.7,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "PC2011",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "PC2011",
            "pnlName": "PC2011",
            "flightDate": "2022-06-05T12:35:00",
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
              "date": "2022-06-05T12:35:00",
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
              "date": "2022-06-05T13:50:00",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:AYT|SAW|20220605123500|PC2011",
                "flightNo": "PC2011",
                "pnlName": "PC2011",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
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
                  "date": "2022-06-05T12:35:00",
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
                  "date": "2022-06-05T13:50:00",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20220605123500|PC2011",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": "CarryOn"
                  },
                  {
                    "segmentId": "F:AYT|SAW|20220605123500|PC2011",
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
                      "F:AYT|SAW|20220605123500|PC2011"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20220605123500|PC2011"
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605123500|PC2011",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605123500|PC2011",
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
              "amount": 18.85,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 37.7,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 10.2,
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
                "segmentId": "F:AYT|SAW|20220605123500|PC2011",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605123500|PC2011",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605123500|PC2011",
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
                  "F:AYT|SAW|20220605123500|PC2011"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20220605123500|PC2011"
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
              "optionDate": "2022-05-30T15:58:17.247Z"
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJ2l0Ojk6NHU6bDNzcWwxbXo6ZmxpZ2h0V2xvejlpTkluQjoyMGE5OXQAJm9mOjk6NHU6bDNzcWwxbXo6ZmxpZ2h0bkpxWW1vQlZ3TjppaDJidAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "Paximum Pegasus NDC",
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "flightBrandInfo": {
              "id": "9.pc.15kg",
              "name": "Baggage Allowance 15KG"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 37.7,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "PC2017",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "PC2017",
            "pnlName": "PC2017",
            "flightDate": "2022-06-05T17:05:00",
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
              "date": "2022-06-05T17:05:00",
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
              "date": "2022-06-05T18:20:00",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:AYT|SAW|20220605170500|PC2017",
                "flightNo": "PC2017",
                "pnlName": "PC2017",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
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
                  "date": "2022-06-05T17:05:00",
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
                  "date": "2022-06-05T18:20:00",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20220605170500|PC2017",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": "CarryOn"
                  },
                  {
                    "segmentId": "F:AYT|SAW|20220605170500|PC2017",
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
                      "F:AYT|SAW|20220605170500|PC2017"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20220605170500|PC2017"
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605170500|PC2017",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605170500|PC2017",
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
              "amount": 18.85,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 37.7,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 10.2,
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
              "availableSeatCount": 7,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:AYT|SAW|20220605170500|PC2017",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605170500|PC2017",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605170500|PC2017",
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
                  "F:AYT|SAW|20220605170500|PC2017"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20220605170500|PC2017"
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
              "optionDate": "2022-05-30T15:58:17.247Z"
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJ2l0Ojk6NHU6bDNzcWwxbXo6ZmxpZ2h0NG1pNEpxVFJxRjoyMGE5YXQAJm9mOjk6NHU6bDNzcWwxbXo6ZmxpZ2h0M1J6UUR5QUQ2ZjppaDJjdAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "Paximum Pegasus NDC",
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "flightBrandInfo": {
              "id": "9.pc.15kg",
              "name": "Baggage Allowance 15KG"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 37.7,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "PC2019",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "PC2019",
            "pnlName": "PC2019",
            "flightDate": "2022-06-05T19:25:00",
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
              "date": "2022-06-05T19:25:00",
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
              "date": "2022-06-05T20:40:00",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:AYT|SAW|20220605192500|PC2019",
                "flightNo": "PC2019",
                "pnlName": "PC2019",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
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
                  "date": "2022-06-05T19:25:00",
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
                  "date": "2022-06-05T20:40:00",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20220605192500|PC2019",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": "CarryOn"
                  },
                  {
                    "segmentId": "F:AYT|SAW|20220605192500|PC2019",
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
                      "F:AYT|SAW|20220605192500|PC2019"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20220605192500|PC2019"
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605192500|PC2019",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605192500|PC2019",
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
              "amount": 18.85,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 37.7,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 10.2,
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
              "availableSeatCount": 5,
              "availableSeatCountType": 0
            },
            "flightClassInformations": [
              {
                "type": 1,
                "segmentId": "F:AYT|SAW|20220605192500|PC2019",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605192500|PC2019",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605192500|PC2019",
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
                  "F:AYT|SAW|20220605192500|PC2019"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20220605192500|PC2019"
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
              "optionDate": "2022-05-30T15:58:17.247Z"
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJ2l0Ojk6NHU6bDNzcWwxbXo6ZmxpZ2h0UFhJc3gzeGR4ODoyMGE5YnQAJm9mOjk6NHU6bDNzcWwxbXo6ZmxpZ2h0VW5NalBndnQ4YzppaDJkdAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "Paximum Pegasus NDC",
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "flightBrandInfo": {
              "id": "9.pc.15kg",
              "name": "Baggage Allowance 15KG"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 37.7,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "PC2023",
        "items": [
          {
            "segmentNumber": 1,
            "flightNo": "PC2023",
            "pnlName": "PC2023",
            "flightDate": "2022-06-05T22:10:00",
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
              "date": "2022-06-05T22:10:00",
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
              "date": "2022-06-05T23:25:00",
              "geoLocation": {
                "longitude": "29.309219",
                "latitude": "40.898553"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:AYT|SAW|20220605221000|PC2023",
                "flightNo": "PC2023",
                "pnlName": "PC2023",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
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
                  "date": "2022-06-05T22:10:00",
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
                  "date": "2022-06-05T23:25:00",
                  "geoLocation": {
                    "longitude": "29.309219",
                    "latitude": "40.898553"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "segmentId": "F:AYT|SAW|20220605221000|PC2023",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": "CarryOn"
                  },
                  {
                    "segmentId": "F:AYT|SAW|20220605221000|PC2023",
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
                      "F:AYT|SAW|20220605221000|PC2023"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:AYT|SAW|20220605221000|PC2023"
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605221000|PC2023",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605221000|PC2023",
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
              "amount": 18.85,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 37.7,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 10.2,
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
                "segmentId": "F:AYT|SAW|20220605221000|PC2023",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:AYT|SAW|20220605221000|PC2023",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": "CarryOn"
              },
              {
                "segmentId": "F:AYT|SAW|20220605221000|PC2023",
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
                  "F:AYT|SAW|20220605221000|PC2023"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:AYT|SAW|20220605221000|PC2023"
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
              "optionDate": "2022-05-30T15:58:17.247Z"
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAXQAJ2l0Ojk6NHU6bDNzcWwxbXo6ZmxpZ2h0RlBqaHhHY04xMzoyMGE5Y3QAJm9mOjk6NHU6bDNzcWwxbXo6ZmxpZ2h0QTRpYWNlUlRadDppaDJldAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "Paximum Pegasus NDC",
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
              "id": "PXMPCN",
              "name": "Paximum Pegasus NDC"
            },
            "flightBrandInfo": {
              "id": "9.pc.15kg",
              "name": "Baggage Allowance 15KG"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 37.7,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK2116",
        "items": [
          {
            "segmentNumber": 2,
            "flightNo": "TK2116",
            "pnlName": "TK2116",
            "flightDate": "2022-06-10T06:00:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 60,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2022-06-10T06:00:00",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
                "name": "Ankara",
                "provider": 3,
                "isTopRegion": false,
                "id": "ANK"
              },
              "airport": {
                "geolocation": {
                  "longitude": "32.995083",
                  "latitude": "40.128082"
                },
                "name": "Esenboga International Airport",
                "id": "ESB",
                "code": "ESB"
              },
              "date": "2022-06-10T07:00:00",
              "geoLocation": {
                "longitude": "32.995083",
                "latitude": "40.128082"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|ESB|20220610060000|TK2116",
                "flightNo": "TK2116",
                "pnlName": "TK2116",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2022-06-10T06:00:00",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                    "name": "Ankara",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "ANK"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "32.995083",
                      "latitude": "40.128082"
                    },
                    "name": "Esenboga International Airport",
                    "id": "ESB",
                    "code": "ESB"
                  },
                  "date": "2022-06-10T07:00:00",
                  "geoLocation": {
                    "longitude": "32.995083",
                    "latitude": "40.128082"
                  }
                },
                "duration": 60,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|ESB|20220610060000|TK2116",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": ""
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|ESB|20220610060000|TK2116"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 15Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610060000|TK2116"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 8Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610060000|TK2116"
                    ],
                    "explanations": [
                      {
                        "text": "MealSubCode: 0B3"
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                    "id": "Economy class meal",
                    "name": "Economy class meal"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610060000|TK2116"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  }
                ],
                "aircraft": "AIRBUS A321-231"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610060000|TK2116",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "passengers": [
              {
                "type": 1,
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
              "amount": 34.73,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 69.46,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 6.28,
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
                "segmentId": "F:IST|ESB|20220610060000|TK2116",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610060000|TK2116",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|ESB|20220610060000|TK2116"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 15Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610060000|TK2116"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 8Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610060000|TK2116"
                ],
                "explanations": [
                  {
                    "text": "MealSubCode: 0B3"
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                "id": "Economy class meal",
                "name": "Economy class meal"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610060000|TK2116"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJ2l0OjE6NHU6bDNzcWw0NTE6ZmxpZ2h0OTYzeDBhbXhYODoyMGFhbHQAJm9mOjE6NHU6bDNzcWw0NWU6ZmxpZ2h0NWY1V01xbkJiajppaDVxdAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "THY Paximum",
                  "id": "PXMTK",
                  "name": "THY Paximum"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 69.46,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK2108",
        "items": [
          {
            "segmentNumber": 2,
            "flightNo": "TK2108",
            "pnlName": "TK2108",
            "flightDate": "2022-06-10T08:00:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 60,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2022-06-10T08:00:00",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
                "name": "Ankara",
                "provider": 3,
                "isTopRegion": false,
                "id": "ANK"
              },
              "airport": {
                "geolocation": {
                  "longitude": "32.995083",
                  "latitude": "40.128082"
                },
                "name": "Esenboga International Airport",
                "id": "ESB",
                "code": "ESB"
              },
              "date": "2022-06-10T09:00:00",
              "geoLocation": {
                "longitude": "32.995083",
                "latitude": "40.128082"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|ESB|20220610080000|TK2108",
                "flightNo": "TK2108",
                "pnlName": "TK2108",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2022-06-10T08:00:00",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                    "name": "Ankara",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "ANK"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "32.995083",
                      "latitude": "40.128082"
                    },
                    "name": "Esenboga International Airport",
                    "id": "ESB",
                    "code": "ESB"
                  },
                  "date": "2022-06-10T09:00:00",
                  "geoLocation": {
                    "longitude": "32.995083",
                    "latitude": "40.128082"
                  }
                },
                "duration": 60,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|ESB|20220610080000|TK2108",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": ""
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|ESB|20220610080000|TK2108"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 15Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610080000|TK2108"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 8Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610080000|TK2108"
                    ],
                    "explanations": [
                      {
                        "text": "MealSubCode: 0B3"
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                    "id": "Economy class meal",
                    "name": "Economy class meal"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610080000|TK2108"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  }
                ],
                "aircraft": "UNKNOWN_PLANE"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610080000|TK2108",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "passengers": [
              {
                "type": 1,
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
              "amount": 34.73,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 69.46,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 6.28,
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
                "segmentId": "F:IST|ESB|20220610080000|TK2108",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610080000|TK2108",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|ESB|20220610080000|TK2108"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 15Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610080000|TK2108"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 8Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610080000|TK2108"
                ],
                "explanations": [
                  {
                    "text": "MealSubCode: 0B3"
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                "id": "Economy class meal",
                "name": "Economy class meal"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610080000|TK2108"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJ2l0OjE6NHU6bDNzcWw0NTE6ZmxpZ2h0aXkzNWU1TTdENToyMGFhb3QAJm9mOjE6NHU6bDNzcWw0NWU6ZmxpZ2h0VEdoRzV3YTNPTzppaDYxdAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "THY Paximum",
                  "id": "PXMTK",
                  "name": "THY Paximum"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 69.46,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK2154",
        "items": [
          {
            "segmentNumber": 2,
            "flightNo": "TK2154",
            "pnlName": "TK2154",
            "flightDate": "2022-06-10T14:00:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 60,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2022-06-10T14:00:00",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
                "name": "Ankara",
                "provider": 3,
                "isTopRegion": false,
                "id": "ANK"
              },
              "airport": {
                "geolocation": {
                  "longitude": "32.995083",
                  "latitude": "40.128082"
                },
                "name": "Esenboga International Airport",
                "id": "ESB",
                "code": "ESB"
              },
              "date": "2022-06-10T15:00:00",
              "geoLocation": {
                "longitude": "32.995083",
                "latitude": "40.128082"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|ESB|20220610140000|TK2154",
                "flightNo": "TK2154",
                "pnlName": "TK2154",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2022-06-10T14:00:00",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                    "name": "Ankara",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "ANK"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "32.995083",
                      "latitude": "40.128082"
                    },
                    "name": "Esenboga International Airport",
                    "id": "ESB",
                    "code": "ESB"
                  },
                  "date": "2022-06-10T15:00:00",
                  "geoLocation": {
                    "longitude": "32.995083",
                    "latitude": "40.128082"
                  }
                },
                "duration": 60,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|ESB|20220610140000|TK2154",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": ""
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|ESB|20220610140000|TK2154"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 15Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610140000|TK2154"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 8Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610140000|TK2154"
                    ],
                    "explanations": [
                      {
                        "text": "MealSubCode: 0B3"
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                    "id": "Economy class meal",
                    "name": "Economy class meal"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610140000|TK2154"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  }
                ],
                "aircraft": "AIRBUS A321-231"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610140000|TK2154",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "passengers": [
              {
                "type": 1,
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
              "amount": 34.73,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 69.46,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 6.28,
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
                "segmentId": "F:IST|ESB|20220610140000|TK2154",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610140000|TK2154",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|ESB|20220610140000|TK2154"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 15Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610140000|TK2154"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 8Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610140000|TK2154"
                ],
                "explanations": [
                  {
                    "text": "MealSubCode: 0B3"
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                "id": "Economy class meal",
                "name": "Economy class meal"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610140000|TK2154"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJ2l0OjE6NHU6bDNzcWw0NWE6ZmxpZ2h0RDYybHBlekNXRjoyMGFhc3QAJm9mOjE6NHU6bDNzcWw0NWU6ZmxpZ2h0djRQQUY5QnV6QjppaDZndAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "THY Paximum",
                  "id": "PXMTK",
                  "name": "THY Paximum"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 69.46,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK2170",
        "items": [
          {
            "segmentNumber": 2,
            "flightNo": "TK2170",
            "pnlName": "TK2170",
            "flightDate": "2022-06-10T18:00:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 65,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2022-06-10T18:00:00",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
                "name": "Ankara",
                "provider": 3,
                "isTopRegion": false,
                "id": "ANK"
              },
              "airport": {
                "geolocation": {
                  "longitude": "32.995083",
                  "latitude": "40.128082"
                },
                "name": "Esenboga International Airport",
                "id": "ESB",
                "code": "ESB"
              },
              "date": "2022-06-10T19:05:00",
              "geoLocation": {
                "longitude": "32.995083",
                "latitude": "40.128082"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "E",
              "code": "E"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|ESB|20220610180000|TK2170",
                "flightNo": "TK2170",
                "pnlName": "TK2170",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "E",
                  "code": "E"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2022-06-10T18:00:00",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                    "name": "Ankara",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "ANK"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "32.995083",
                      "latitude": "40.128082"
                    },
                    "name": "Esenboga International Airport",
                    "id": "ESB",
                    "code": "ESB"
                  },
                  "date": "2022-06-10T19:05:00",
                  "geoLocation": {
                    "longitude": "32.995083",
                    "latitude": "40.128082"
                  }
                },
                "duration": 65,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|ESB|20220610180000|TK2170",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": ""
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|ESB|20220610180000|TK2170"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 15Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610180000|TK2170"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 8Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610180000|TK2170"
                    ],
                    "explanations": [
                      {
                        "text": "MealSubCode: 0B3"
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                    "id": "Economy class meal",
                    "name": "Economy class meal"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610180000|TK2170"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  }
                ],
                "aircraft": "UNKNOWN_PLANE"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610180000|TK2170",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "passengers": [
              {
                "type": 1,
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
              "amount": 34.73,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 69.46,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 6.28,
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
                "segmentId": "F:IST|ESB|20220610180000|TK2170",
                "name": "Economy",
                "id": "E",
                "code": "E"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610180000|TK2170",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|ESB|20220610180000|TK2170"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 15Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610180000|TK2170"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 8Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610180000|TK2170"
                ],
                "explanations": [
                  {
                    "text": "MealSubCode: 0B3"
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                "id": "Economy class meal",
                "name": "Economy class meal"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610180000|TK2170"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJ2l0OjE6NHU6bDNzcWw0NWE6ZmxpZ2h0NTU1MDJpazJKUToyMGFheHQAJm9mOjE6NHU6bDNzcWw0NWY6ZmxpZ2h0MG1BbVpKZUNMOTppaDZ5dAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "THY Paximum",
                  "id": "PXMTK",
                  "name": "THY Paximum"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 69.46,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
        "groupKeys": [
          "-"
        ]
      },
      {
        "provider": 13,
        "id": "TK2118",
        "items": [
          {
            "segmentNumber": 2,
            "flightNo": "TK2118",
            "pnlName": "TK2118",
            "flightDate": "2022-06-10T07:00:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "marketingAirline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
              "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
              "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
              "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 60,
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
                  "longitude": "28.705953",
                  "latitude": "41.263852"
                },
                "name": "Istanbul International Airport",
                "id": "IST",
                "code": "IST"
              },
              "date": "2022-06-10T07:00:00",
              "geoLocation": {
                "longitude": "28.705953",
                "latitude": "41.263852"
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
                "name": "Ankara",
                "provider": 3,
                "isTopRegion": false,
                "id": "ANK"
              },
              "airport": {
                "geolocation": {
                  "longitude": "32.995083",
                  "latitude": "40.128082"
                },
                "name": "Esenboga International Airport",
                "id": "ESB",
                "code": "ESB"
              },
              "date": "2022-06-10T08:00:00",
              "geoLocation": {
                "longitude": "32.995083",
                "latitude": "40.128082"
              }
            },
            "flightClass": {
              "type": 1,
              "name": "Economy",
              "id": "O",
              "code": "O"
            },
            "route": 1,
            "segments": [
              {
                "id": "F:IST|ESB|20220610070000|TK2118",
                "flightNo": "TK2118",
                "pnlName": "TK2118",
                "flightClass": {
                  "type": 1,
                  "name": "Economy",
                  "id": "O",
                  "code": "O"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "marketingAirline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/5/0/3/2/TK/turkish_airlines.jpg",
                  "thumbnailFull": "https://media.dev.paximum.com/sanflight/airlinelogos/TK.gif",
                  "logo": "/images/other/3/5/0/3/1/TK/turkish_airlines.jpg",
                  "logoFull": "https://media.dev.paximum.com/sanflight/airlinelogos/small/TK.png",
                  "id": "TK",
                  "name": "Turkish Airlines"
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
                      "longitude": "28.705953",
                      "latitude": "41.263852"
                    },
                    "name": "Istanbul International Airport",
                    "id": "IST",
                    "code": "IST"
                  },
                  "date": "2022-06-10T07:00:00",
                  "geoLocation": {
                    "longitude": "28.705953",
                    "latitude": "41.263852"
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
                    "name": "Ankara",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "ANK"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "32.995083",
                      "latitude": "40.128082"
                    },
                    "name": "Esenboga International Airport",
                    "id": "ESB",
                    "code": "ESB"
                  },
                  "date": "2022-06-10T08:00:00",
                  "geoLocation": {
                    "longitude": "32.995083",
                    "latitude": "40.128082"
                  }
                },
                "duration": 60,
                "baggageInformations": [
                  {
                    "segmentId": "F:IST|ESB|20220610070000|TK2118",
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1,
                    "description": ""
                  }
                ],
                "services": [
                  {
                    "segments": [
                      "F:IST|ESB|20220610070000|TK2118"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 15Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Checked baggage allowance 15 kg",
                    "name": "Checked baggage allowance 15 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610070000|TK2118"
                    ],
                    "explanations": [
                      {
                        "text": "Each piece is 8Kg."
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                    "id": "Carry on baggage allowance 8 kg",
                    "name": "Carry on baggage allowance 8 kg"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610070000|TK2118"
                    ],
                    "explanations": [
                      {
                        "text": "MealSubCode: 0B3"
                      }
                    ],
                    "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                    "id": "Economy class meal",
                    "name": "Economy class meal"
                  },
                  {
                    "segments": [
                      "F:IST|ESB|20220610070000|TK2118"
                    ],
                    "explanations": [],
                    "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                    "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                    "id": "Exchange",
                    "name": "Exchange"
                  }
                ],
                "aircraft": "AIRBUS A319-100"
              }
            ],
            "stopCount": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610070000|TK2118",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "passengers": [
              {
                "type": 1,
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
              "amount": 37.67,
              "currency": "EUR"
            },
            "priceBreakDown": {
              "items": [
                {
                  "passengerType": 1,
                  "passengerCount": 2,
                  "price": {
                    "amount": 75.35,
                    "currency": "EUR"
                  },
                  "airportTax": {
                    "amount": 6.28,
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
                "segmentId": "F:IST|ESB|20220610070000|TK2118",
                "name": "Economy",
                "id": "O",
                "code": "O"
              }
            ],
            "baggageInformations": [
              {
                "segmentId": "F:IST|ESB|20220610070000|TK2118",
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1,
                "description": ""
              }
            ],
            "services": [
              {
                "segments": [
                  "F:IST|ESB|20220610070000|TK2118"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 15Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/checked_baggage_allowance_15_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Checked baggage allowance 15 kg",
                "name": "Checked baggage allowance 15 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610070000|TK2118"
                ],
                "explanations": [
                  {
                    "text": "Each piece is 8Kg."
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/Baggage/carry_on_baggage_allowance_8_kg",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Baggage.svg",
                "id": "Carry on baggage allowance 8 kg",
                "name": "Carry on baggage allowance 8 kg"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610070000|TK2118"
                ],
                "explanations": [
                  {
                    "text": "MealSubCode: 0B3"
                  }
                ],
                "thumbnail": "/vectors/3/5/1/0/MealOrBeverage/economy_class_meal",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/MealOrBeverage.svg",
                "id": "Economy class meal",
                "name": "Economy class meal"
              },
              {
                "segments": [
                  "F:IST|ESB|20220610070000|TK2118"
                ],
                "explanations": [],
                "thumbnail": "/vectors/3/5/1/0/Exchange/exchange",
                "thumbnailFull": "https://media.dev.paximum.com/sanflight/serviceicons/Exchange.svg",
                "id": "Exchange",
                "name": "Exchange"
              }
            ],
            "reservableInfo": {
              "reservable": true
            },
            "groupKeys": [
              "-"
            ],
            "offerIds": [
              {
                "groupKey": "-",
                "offerId": "13$3$0~^006^~~^006^~rO0ABXNyADhjb20uc2FudHNnLmVuZ2luZS5mbGlnaHQubW9kZWwuaW5uZXIuRW5jb2RlZE9mZmVySWRNb2RlbF_kYZQ3KR-CAgAESQANc2VnbWVudE51bWJlckwAC2l0aW5lcmFyeUlkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAHb2ZmZXJJZHEAfgABTAAIc2VhcmNoSWRxAH4AAXhwAAAAAnQAJ2l0OjE6NHU6bDNzcWw0NTE6ZmxpZ2h0VmtwTE5ycVowSDoyMGFhbnQAJm9mOjE6NHU6bDNzcWw0NWU6ZmxpZ2h0Y1g1UDBMSU5SOTppaDV4dAAoQUFBQmdSVUxzT0FBQUFBQXFRUllqWWdJV3Q1ZXg2dE82eXBJMWc9PQ",
                "provider": {
                  "displayName": "THY Paximum",
                  "id": "PXMTK",
                  "name": "THY Paximum"
                }
              }
            ],
            "isPackageOffer": false,
            "hasBrand": true,
            "route": 0,
            "flightProvider": {
              "displayName": "THY Paximum",
              "id": "PXMTK",
              "name": "THY Paximum"
            },
            "flightBrandInfo": {
              "id": "1.tk.ef.ecofly",
              "name": "ECOFLY"
            },
            "expiresOn": "2022-05-30T16:28:21.124093Z",
            "price": {
              "amount": 75.35,
              "currency": "EUR"
            },
            "provider": 13
          }
        ],
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

###Calculating the Total Price
1. If the flight is one-way, the fee for one-way is added to the price above the offer. <br><br>
2. If the flight is round trip <br>
  a. If the offer is not packaged, outbound and return offer prices are added. <br>
	b. If the offer is packaged, the price of the offer with the higher price is taken from the outbound and return offers. <br><br>
3. If there are fees on the outbound and return offers <br>
	a. If the keys on the outbound and return offer fees are the same, whichever of the round trip fees on the outbound and return offers is greater, it is added to the price. <br>
	b. If the keys on the outbound and return offer fees are different, the one-way fees on the outbound and return offers are added to the price separately. <br>


###How to use group keys in roundtrip response (Code example)
    
```
var selectedOutboundOffer = outbounds[0].offers[0];
var selectedOutboundOfferGroupKeys = selectedOutboundOffer.groupKeys;

var selectedInbound = getGroupableInbounds(selectedOutboundOfferGroupKeys, inbounds)[0];
var selectedInboundOffer = getGroupableOffers(selectedOutboundOfferGroupKeys,selectedInbound.offers)[0];

var intersectedGroupKeys = getIntersectedGroupKeys(selectedOutboundOffer.groupKeys, selectedInboundOffer.groupKeys);

selectedOutboundOfferIdItem = findOfferIdItem(intersectedGroupKeys, selectedOutboundOffer.offerIds);
var selectedOutboundOfferId = selectedOutboundOfferIdItem.offerId;
console.log('Selected outbound offer id: ' + selectedOutboundOfferId);

selectedInboundOfferIdItem = findOfferIdItem(intersectedGroupKeys, selectedInboundOffer.offerIds);
var selectedInboundOfferId = selectedInboundOfferIdItem.offerId;
console.log('Selected inbound offer id: ' + selectedInboundOfferId);

pm.environment.set("offer_id", selectedOutboundOfferId);
pm.environment.set("offer_id_2", selectedInboundOfferId);

function getGroupableInbounds(selectedOutboundOfferGroupKeys, inbounds){
    return inbounds.filter(w=> inboundIsGroupable(selectedOutboundOfferGroupKeys, w));
}

function inboundIsGroupable(selectedOutboundOfferGroupKeys, inbound){
    return getGroupableOffers(selectedOutboundOfferGroupKeys, inbound.offers);
}

function getGroupableOffers(selectedOutboundOfferGroupKeys, inboundOffers){
    return inboundOffers.filter(w=> offerIsGroupable(selectedOutboundOfferGroupKeys, w));
}

function offerIsGroupable(selectedOutboundOfferGroupKeys, inboundOffer){
    return groupKeysIsIntersected(selectedOutboundOfferGroupKeys, inboundOffer.groupKeys);
}

function getIntersectedGroupKeys(selectedOutboundOfferGroupKeys, inboundOfferGroupKeys){
    return selectedOutboundOfferGroupKeys.filter(function (v) { return inboundOfferGroupKeys.indexOf(v) >= 0; })
}

function groupKeysIsIntersected(selectedOutboundOfferGroupKeys, inboundOfferGroupKeys){
    var intersection = getIntersectedGroupKeys(selectedOutboundOfferGroupKeys,inboundOfferGroupKeys);
    return intersection.length>0;
}

function findOfferIdItem(intersectedGroupKeys, offerIds){
    return offerIds.find(w=> groupKeyIsIntercepted(intersectedGroupKeys, w.groupKey) )
}

function groupKeyIsIntercepted(intersectedGroupKeys, groupKey){
    return intersectedGroupKeys.find(w=> w===groupKey)
}
```

###Roundtrip Request Sample (Will be deprecated at the end of this year.(31.12.2021))
[Click](../enumarations/#Product-Types) to reach the product types.
If service type is 2 it means round trip.

```
{
  "ProductType": 3,
  "ServiceTypes": [
    "2"
  ],
  "CheckIn": "2023-02-17",
  "Night": 3,
  "DepartureLocations": [
    {
      "id": "IST",
      "type": 2
    }
  ],
  "ArrivalLocations": [
    {
      "id": "AYT",
      "type": 5,
      "provider": 3
    }
  ],
  "Passengers": [
    {
      "type": 1,
      "count": 2
    },
    {
      "type": 2,
      "count": 1
    },
    {
      "type": 3,
      "count": 1
    }
  ],
  "acceptPendingProviders": false,
  "Culture": "en-US",
  "Currency": "EUR"
}
```

###Roundtrip Response Sample (Will be deprecated at the end of this year.(31.12.2021))

```
{
  "body": {
    "searchId": "202baea8-f3d2-4067-8a41-d9368ca71a4b",
    "expiresOn": "2020-12-09T07:15:52.7773743Z",
    "flights": [
      {
        "provider": 3,
        "id": "95618ac4-9e3d-48ef-9390-0b02a139ec8c",
        "items": [
          {
            "flightNo": "TK2936",
            "pnlName": "TK2936",
            "flightDate": "2021-08-24T21:05:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 75,
            "dayChange": 0,
            "departure": {
              "country": {
                "name": "Turkey",
                "internationalName": "Turkey",
                "provider": 3,
                "isTopRegion": false,
                "id": "TR"
              },
              "city": {
                "name": "Istanbul",
                "internationalName": "Istanbul",
                "countryId": "TR",
                "provider": 3,
                "isTopRegion": false,
                "id": "IST"
              },
              "airport": {
                "geolocation": {
                  "longitude": "29.30921900",
                  "latitude": "40.89855300"
                },
                "name": "Sabiha Gokcen International Airport",
                "id": "SAW"
              },
              "date": "2021-08-24T21:05:00",
              "geoLocation": {
                "longitude": "29.30921900",
                "latitude": "40.89855300"
              }
            },
            "arrival": {
              "country": {
                "name": "Turkey",
                "internationalName": "Turkey",
                "provider": 3,
                "isTopRegion": false,
                "id": "TR"
              },
              "city": {
                "name": "Antalya",
                "internationalName": "Antalya",
                "countryId": "TR",
                "provider": 3,
                "isTopRegion": false,
                "id": "AYT"
              },
              "airport": {
                "geolocation": {
                  "longitude": "30.80000000",
                  "latitude": "36.89000000"
                },
                "name": "Antalya International Airport",
                "id": "AYT"
              },
              "date": "2021-08-24T22:20:00",
              "geoLocation": {
                "longitude": "29.30921900",
                "latitude": "40.89855300"
              }
            },
            "flightClass": {
              "id": "P",
              "name": "Promosyon"
            },
            "route": 1,
            "stopCount": 1,
            "segments": [
              {
                "id": "1",
                "flightNo": "TK2936",
                "pnlName": "TK2936",
                "flightClass": {
                  "id": "P",
                  "name": "Promosyon"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "departure": {
                  "country": {
                    "name": "Turkey",
                    "internationalName": "Turkey",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "TR"
                  },
                  "city": {
                    "name": "Istanbul",
                    "internationalName": "Istanbul",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "IST"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "29.30921900",
                      "latitude": "40.89855300"
                    },
                    "name": "Sabiha Gokcen International Airport",
                    "id": "SAW"
                  },
                  "date": "2021-08-24T21:05:00",
                  "geoLocation": {
                    "longitude": "29.30921900",
                    "latitude": "40.89855300"
                  }
                },
                "arrival": {
                  "country": {
                    "name": "Turkey",
                    "internationalName": "Turkey",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "TR"
                  },
                  "city": {
                    "name": "Antalya",
                    "internationalName": "Antalya",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "AYT"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "30.80000000",
                      "latitude": "36.89000000"
                    },
                    "name": "Antalya International Airport",
                    "id": "AYT"
                  },
                  "date": "2021-08-24T22:20:00",
                  "geoLocation": {
                    "longitude": "30.80000000",
                    "latitude": "36.89000000"
                  }
                },
                "duration": 75,
                "baggageInformations": [
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 2
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 3
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 4
                  }
                ],
                "services": [
                  {
                    "thumbnail": "/vectors/3/1/1/0/FS/free_seat_selection",
                    "id": "FS",
                    "name": "Free seat selection"
                  },
                  {
                    "thumbnail": "/vectors/3/1/1/0/FM/free_meals",
                    "id": "FM",
                    "name": "Free Meals"
                  }
                ],
                "departureTerminal": ""
              }
            ],
            "baggageInformations": [
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 2
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 3
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 4
              }
            ],
            "passengers": [
              {
                "type": 1,
                "count": 1
              },
              {
                "type": 2,
                "count": 1
              },
              {
                "type": 3,
                "count": 1
              },
              {
                "type": 4,
                "count": 1
              }
            ],
            "flightType": 0,
            "provider": 3
          }
        ],
        "availableSeatCount": 9,
        "availableSeatCountType": 0,
        "offer": {
          "singleAdultPrice": { <!--deprecated-->
            "amount": 25.03,
            "currency": "EUR"
          },
          "serviceFee": {
            "amount": 0,
            "currency": "EUR"
          },
          "hasBrand": true,
          "flightBrandInfo": {
            "features": [
              {
                "commercialName": "Carry On Baggage 1X8KG",
                "serviceGroup": 1,
                "pricingType": 0
              },
              {
                "commercialName": "Checked Baggage 1X15KG",
                "serviceGroup": 1,
                "pricingType": 0
              },
              {
                "commercialName": "Changable",
                "serviceGroup": 0,
                "pricingType": 1
              },
              {
                "commercialName": "Refundable",
                "serviceGroup": 0,
                "pricingType": 1
              },
              {
                "commercialName": "ECONOMY CLASS MEAL",
                "serviceGroup": 5,
                "pricingType": 0
              }
            ],
            "id": "EF",
            "name": "Eco Fly"
          },
          "expiresOn": "2019-12-09T07:15:52.7773743Z",
          "offerId": "3$3$bef7e555-a2c1-4fd8-a97b-56c55bf3ffaf|fc476e19-a01c-48de-8b26-5944f6e0eac1|35c26d5e-c0d1-46cc-9b3c-c186f8261d2e|2|20200824|20200824|1$1|2$1|3$1|4$1",
          "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
          "price": {
            "amount": 80.41,
            "currency": "EUR"
          },
          "provider": 3,
          "flightProvider": {
              "id": "PXMTK",
              "name": "Paximum THY"
            }
        },
        "reservableInfo": {
          "reservable": true
        }
      },
      {
        "provider": 3,
        "id": "0ceee674-2c88-4f1a-842b-1646b78cb7e0",
        "items": [
          {
            "flightNo": "TK2925",
            "pnlName": "TK2925",
            "flightDate": "2021-08-27T07:10:00",
            "airline": {
              "internationalCode": "TK",
              "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
              "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
              "id": "TK",
              "name": "Turkish Airlines"
            },
            "duration": 70,
            "dayChange": 0,
            "departure": {
              "country": {
                "name": "Turkey",
                "internationalName": "Turkey",
                "provider": 3,
                "isTopRegion": false,
                "id": "TR"
              },
              "city": {
                "name": "Antalya",
                "internationalName": "Antalya",
                "provider": 3,
                "isTopRegion": false,
                "id": "AYT"
              },
              "airport": {
                "geolocation": {
                  "longitude": "30.80000000",
                  "latitude": "36.89000000"
                },
                "name": "Antalya International Airport",
                "id": "AYT"
              },
              "date": "2021-08-27T07:10:00",
              "geoLocation": {
                "longitude": "30.80000000",
                "latitude": "36.89000000"
              }
            },
            "arrival": {
              "country": {
                "name": "Turkey",
                "internationalName": "Turkey",
                "provider": 3,
                "isTopRegion": false,
                "id": "TR"
              },
              "city": {
                "name": "Istanbul",
                "internationalName": "Istanbul",
                "provider": 3,
                "isTopRegion": false,
                "id": "IST"
              },
              "airport": {
                "geolocation": {
                  "longitude": "29.30921900",
                  "latitude": "40.89855300"
                },
                "name": "Sabiha Gokcen International Airport",
                "id": "SAW"
              },
              "date": "2021-08-27T08:20:00",
              "geoLocation": {
                "longitude": "30.80000000",
                "latitude": "36.89000000"
              }
            },
            "flightClass": {
              "id": "P",
              "name": "Promosyon"
            },
            "route": 2,
            "stopCount": 1,
            "segments": [
              {
                "id": "1",
                "flightNo": "TK2925",
                "pnlName": "TK2925",
                "flightClass": {
                  "id": "P",
                  "name": "Promosyon"
                },
                "airline": {
                  "internationalCode": "TK",
                  "thumbnail": "/images/other/3/1/0/3/2/TK/turkish_airlines.jpg",
                  "logo": "/images/other/3/1/0/3/1/TK/turkish_airlines.jpg",
                  "id": "TK",
                  "name": "Turkish Airlines"
                },
                "departure": {
                  "country": {
                    "name": "Turkey",
                    "internationalName": "Turkey",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "TR"
                  },
                  "city": {
                    "name": "Antalya",
                    "internationalName": "Antalya",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "AYT"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "30.80000000",
                      "latitude": "36.89000000"
                    },
                    "name": "Antalya International Airport",
                    "id": "AYT"
                  },
                  "date": "2021-08-27T07:10:00",
                  "geoLocation": {
                    "longitude": "30.80000000",
                    "latitude": "36.89000000"
                  }
                },
                "arrival": {
                  "country": {
                    "name": "Turkey",
                    "internationalName": "Turkey",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "TR"
                  },
                  "city": {
                    "name": "Istanbul",
                    "internationalName": "Istanbul",
                    "provider": 3,
                    "isTopRegion": false,
                    "id": "IST"
                  },
                  "airport": {
                    "geolocation": {
                      "longitude": "29.30921900",
                      "latitude": "40.89855300"
                    },
                    "name": "Sabiha Gokcen International Airport",
                    "id": "SAW"
                  },
                  "date": "2021-08-27T08:20:00",
                  "geoLocation": {
                    "longitude": "29.30921900",
                    "latitude": "40.89855300"
                  }
                },
                "duration": 70,
                "baggageInformations": [
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 1
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 2
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 3
                  },
                  {
                    "weight": 15,
                    "piece": 1,
                    "baggageType": 1,
                    "unitType": 0,
                    "passengerType": 4
                  }
                ],
                "services": [
                  {
                    "thumbnail": "/vectors/3/1/1/0/FS/free_seat_selection",
                    "id": "FS",
                    "name": "Free seat selection"
                  },
                  {
                    "thumbnail": "/vectors/3/1/1/0/FM/free_meals",
                    "id": "FM",
                    "name": "Free Meals"
                  }
                ],
                "departureTerminal": ""
              }
            ],
            "baggageInformations": [
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 1
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 2
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 3
              },
              {
                "weight": 15,
                "piece": 1,
                "baggageType": 1,
                "unitType": 0,
                "passengerType": 4
              }
            ],
            "passengers": [
              {
                "type": 1,
                "count": 1
              },
              {
                "type": 2,
                "count": 1
              },
              {
                "type": 3,
                "count": 1
              },
              {
                "type": 4,
                "count": 1
              }
            ],
            "flightType": 0,
            "provider": 3
          }
        ],
        "availableSeatCount": 9,
        "availableSeatCountType": 0,
        "offer": {
          "singleAdultPrice": { <!--deprecated-->
            "amount": 25.03,
            "currency": "EUR"
          },
          "serviceFee": {
            "amount": 0,
            "currency": "EUR"
          },
          "hasBrand": true,
          "flightBrandInfo": {
            "features": [
              {
                "commercialName": "Carry On Baggage 1X8KG",
                "serviceGroup": 1,
                "pricingType": 0
              },
              {
                "commercialName": "Checked Baggage 1X15KG",
                "serviceGroup": 1,
                "pricingType": 0
              },
              {
                "commercialName": "Changable",
                "serviceGroup": 0,
                "pricingType": 1
              },
              {
                "commercialName": "Refundable",
                "serviceGroup": 0,
                "pricingType": 1
              },
              {
                "commercialName": "ECONOMY CLASS MEAL",
                "serviceGroup": 5,
                "pricingType": 0
              }
            ],
            "id": "EF",
            "name": "Eco Fly"
          },
          "expiresOn": "2019-12-09T07:15:52.7773743Z",
          "offerId": "3$3$ee4ac861-51a6-4cb2-9fdc-29b722938d52|fc476e19-a01c-48de-8b26-5944f6e0eac1|a1d56f86-d741-4612-8f7a-f04d4865a50c|2|20200827|20200827|1$1|2$1|3$1|4$1",
          "priceBreakDown": { // New response property
              "items": [
                {
                  "passengerType": 7,
                  "passengerCount": 1,
                  "price": {
                    "amount": 22.37, 
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 1,
                  "passengerCount": 3,
                  "price": { // 3 Adult total price. 1 adult is amount/pasengerCount
                    "amount": 111.86,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 3,
                  "passengerCount": 1,
                  "price": {
                    "amount": 3.41,
                    "currency": "EUR"
                  }
                },
                {
                  "passengerType": 2,
                  "passengerCount": 2,
                  "price": {
                    "amount": 44.74,
                    "currency": "EUR"
                  }
                }
              ]
            },
          "price": {
            "amount": 80.41,
            "currency": "EUR"
          },
          "provider": 3,
          "flightProvider": {
            "id": "PXMTK",
             "name": "Paximum THY"
           }
        },
        "reservableInfo": {
          "reservable": true
        }
      }
    ],
    "details": {
      "flightSearchType": 2,
      "flightResponseListType": 1,
      "flightResponseType": 2,
      "enablePaging": false
    }
  },
  "header": {
    "requestId": "5dad4812-eb99-42b6-896d-438f6bcc9485",
    "success": true,
    "responseTime": "2019-12-09T06:46:52.1427404Z",
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
##Get Offers Method(Optional)

Update Date:	      |      27.05.2023
--------------------------|---------------------
Method Adress			  |`/api/productservice/getoffers`
Method Type				  |`POST`
Token Required	 		|`YES`

###Request Sample

```
{
  "productType": 3,
  "searchId": "52143f58-1fa2-4689-a8c6-59ffc1ff04e8",
  "offerIds": [
    "F0BQUFwNnZvTUZkNV96VDdER19hcFdaTXh3PT0",
    "F1BQUFwNnZvTUZkNV96VDdER19hcFdaTXh3PT1"
  ],
  "currency": "TRY",
  "culture": "en-US"
}
```

###Response Sample

```
{
  "body": {
    "offers": [
      {
        "flightId": "TK1371",
        "segmentNumber": 1,
        "flightClassInformations": [
          {
            "type": 1,
            "segmentId": "VEsxMzcxLklTVC5NTEEuMzEwNTIwMjIxNzU1",
            "name": "Economy",
            "id": "S",
            "code": "S"
          },
          {
            "type": 1,
            "segmentId": "VEsxMzcwLk1MQS5JU1QuMDkwNjIwMjIxMDI1",
            "name": "Economy",
            "id": "T",
            "code": "T"
          }
        ],
        "baggageInformations": [
          {
            "segmentId": "VEsxMzcxLklTVC5NTEEuMzEwNTIwMjIxNzU1",
            "weight": 0,
            "piece": 1,
            "baggageType": 1,
            "unitType": 0,
            "passengerType": 1
          }
        ],
        "groupKeys": [
          "-"
        ],
        "offerIds": [
          {
            "groupKey": "-",
            "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~JHteTvr9RsyiCyBKBjsdHQ=="
          }
        ],
        "isPackageOffer": true,
        "route": 1,
        "flightBrandInfo": {
          "features": [
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            },
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            }
          ],
          "id": "471.tk.cl",
          "name": "Ecofly"
        },
        "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~JHteTvr9RsyiCyBKBjsdHQ==",
        "price": {
          "amount": 4562.34,
          "currency": "TRY"
        },
        "provider": 13
      },
      {
        "flightId": "TK1370",
        "segmentNumber": 2,
        "flightClassInformations": [
          {
            "type": 1,
            "segmentId": "VEsxMzcxLklTVC5NTEEuMzEwNTIwMjIxNzU1",
            "name": "Economy",
            "id": "S",
            "code": "S"
          },
          {
            "type": 1,
            "segmentId": "VEsxMzcwLk1MQS5JU1QuMDkwNjIwMjIxMDI1",
            "name": "Economy",
            "id": "T",
            "code": "T"
          }
        ],
        "baggageInformations": [
          {
            "segmentId": "VEsxMzcwLk1MQS5JU1QuMDkwNjIwMjIxMDI1",
            "weight": 0,
            "piece": 1,
            "baggageType": 1,
            "unitType": 0,
            "passengerType": 1
          }
        ],
        "groupKeys": [
          "-"
        ],
        "offerIds": [
          {
            "groupKey": "-",
            "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~JHteTvr9RsyiCyBKBjsdHQ=="
          }
        ],
        "isPackageOffer": true,
        "route": 2,
        "flightBrandInfo": {
          "features": [
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            },
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            }
          ],
          "id": "471.tk.cl",
          "name": "Ecofly"
        },
        "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~JHteTvr9RsyiCyBKBjsdHQ==",
        "price": {
          "amount": 4562.34,
          "currency": "TRY"
        },
        "provider": 13
      },
      {
        "flightId": "TK1371",
        "segmentNumber": 1,
        "flightClassInformations": [
          {
            "type": 1,
            "segmentId": "VEsxMzcxLklTVC5NTEEuMzEwNTIwMjIxNzU1",
            "name": "Economy",
            "id": "S",
            "code": "S"
          },
          {
            "type": 1,
            "segmentId": "VEsxMzcwLk1MQS5JU1QuMDkwNjIwMjIxMDI1",
            "name": "Economy",
            "id": "T",
            "code": "T"
          }
        ],
        "baggageInformations": [
          {
            "segmentId": "VEsxMzcxLklTVC5NTEEuMzEwNTIwMjIxNzU1",
            "weight": 0,
            "piece": 1,
            "baggageType": 1,
            "unitType": 0,
            "passengerType": 1
          }
        ],
        "groupKeys": [
          "-"
        ],
        "offerIds": [
          {
            "groupKey": "-",
            "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~Bp9f8aTgTSikBe9EPKskSg=="
          }
        ],
        "isPackageOffer": true,
        "route": 1,
        "flightBrandInfo": {
          "features": [
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            },
            {
              "commercialName": "1 Piece X 8 Kg Cabin Baggage",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "1 Piece X 8 Kg Cabin Baggage"
                }
              ]
            },
            {
              "commercialName": "Meal Service",
              "serviceGroup": 0,
              "pricingType": 0,
              "explanations": [
                {
                  "text": "Meal Service"
                }
              ]
            }
          ],
          "id": "471.tk.cl",
          "name": "Ecofly"
        },
        "offerId": "13$3$1~^006^~AAABgQV4F_wAAAHXpGDEFwId3-Erp36nKWtHtAAAAYEFd9x6AAAAAK-z4tDW4raBr9kkipYvQJs=~^006^~Bp9f8aTgTSikBe9EPKskSg==",
        "price": {
          "amount": 4685.34,
          "currency": "TRY"
        },
        "provider": 13
      }
    ]
  },
  "header": {
    "requestId": "91729424-1a9c-4763-a802-95deb36c25bb",
    "success": true,
    "responseTime": "2022-05-27T12:22:45.3103617Z",
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

