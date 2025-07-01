
#Rent a Car Product

Access real-time, comprehensive rent a car rates, availability and booking options with Rent a car.


-----------------------------
##GetActiveVehicleServiceProviders Method


Update Date	  |      02.11.2023
----------------------|--------------------
     Method Adress    | ```/api/commonservice/invoke```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
 
  "provider": 2,

  <!--This value is fixed.-->
  "target": "GetActiveVehicleServiceProviders",
  "currency": "EUR",
  "culture": "en-US"
}
```

###Response Sample

```
{
 "header": {
    "requestId": "2ef84b7d-dd0c-42fb-aa6a-caf385ddf95b",
    "success": true,
    "responseTime": "2020-03-03T08:25:50.6303085Z",
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
    "data": [
      {
        "name": "GARENTA",
        "id": "833692ac-7466-4069-95bb-23d120854c9b",
        "code": "GARENTA"
      },
      {
        "name": "CARNECT",
        "id": "1365be90-b480-4f07-811e-77f0812edfd9",
        "code": "CARNECT"
      }
    ]
  }
}
```


##GetArrivalAutocomplete Method


Update Date	  |      27.05.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivalautocomplete```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
  "productType": 14,
  "query": "ayt",
  "thirdPartyProviderId": "CARNECT",
  "culture": "en-US"
}
```

###Response Sample

```
{
 "header": {
    "requestId": "69eb439a-4339-4ae9-8db2-9f3c4a0ac1f1",
    "success": true,
    "responseTime": "2020-03-02T11:23:20.1123037Z",
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
        "type": 3,
        "geolocation": {
          "longitude": "30.800461",
          "latitude": "36.898731"
        },
        "country": {
          "id": "10",
          "name": "TR"
        },
        "airport": {
          "name": "Antalya Airport (AYT)",
          "id": "282",
          "code": "AYT"
        },
        "provider": 2
      },
      {
        "type": 1,
        "geolocation": {
          "longitude": "30.7133233",
          "latitude": "36.8968908"
        },
        "country": {
          "id": "10",
          "name": "TR"
        },
        "city": {
          "id": "1421",
          "name": "Antalya"
        },
        "provider": 2
      }
    ]
  }
}
```

-----------------------------
##PriceSearch Method

You can use PriceSearch for getting rent a car prices.

Update Date	  |      02.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/pricesearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample ( For A Airport )

```
{
    "productType": 14,   
    "arrivalLocations": [
        {
            "type": 5,
            "id": "282",
            "provider": 2
        }
    ],
    "departureLocations": [
        {
            "type": 5,
            "id": "282",
            "provider": 2
        }
    ],
	
	<!-- This values in GetActiveVehicleServiceProviders response. data.id -->
    "rentingProvider": "1365be90-b480-4f07-811e-77f0812edfd9",
    "checkIn": "2022-05-10T11:00",
    "checkInTo": "2022-05-14T11:00",
    "driverAge": "24",
    "nationality": "DE",
    "currency": "EUR",
    "culture": "en-US"
}
```
###Request Sample ( For A City )

```
{
  "productType": 14,
  "arrivalLocations": [
    {
      "type": 2,
      "id": "1421",
      "provider": 2
    }
  ],
  "departureLocations": [
    {
      "type": 2,
      "id": "1421",
      "provider": 2
    }
  ],

  <!-- This values in GetActiveVehicleServiceProviders response. data.id -->
  "rentingProvider": "1365be90-b480-4f07-811e-77f0812edfd9",
  "checkIn": "2022-05-10T11:00",
  "checkInTo": "2022-05-14T11:00",
  "driverAge": "24",
  "nationality": "DE",
  "currency": "EUR",
  "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
    "requestId": "d0a1bfb7-71da-4b73-9857-3b97b50f6688",
    "success": true,
    "responseTime": "2020-03-03T07:31:17.6852378Z",
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
    "searchId": "b5d7d818-1fde-4635-87de-8c211fc6d817",
    "expiresOn": "2020-03-03T07:46:10.9205161Z",
    "rentings": [
      {
        "offer": {
          "provider": 2,
          "checkInTo": "2020-04-25T11:00:00Z",
          "availability": 1,
          "isRefundable": true,
          "cancellationPolicies": [
            {
              "dueDate": "2020-04-08T11:00:00Z",
              "price": {
                "amount": 339.135,
                "currency": "EUR"
              },
              "description": "Die Stornierung ist kostenfrei bis 08.04.2023 11:00. Eine Stornogebühr von 100 Prozent wird von 08.04.2023 11:00 bis 15.04.2023 11:00 erhoben. Bei No-Show wird eine Gebühr von 100 Prozent erhoben."
            }
          ],
          "priceBreakdowns": [
            {
              "productType": 14,
              "priceBreakdowns": [
                {
                  "date": "2020-04-15T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-16T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-17T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-18T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-19T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-20T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-21T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-22T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-23T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                },
                {
                  "date": "2020-04-24T11:00:00Z",
                  "price": {
                    "amount": 33.91,
                    "currency": "EUR"
                  }
                }
              ]
            }
          ],
          "offerId": "2$14$0$2f225076-faa8-4e3c-aec8-7842d525efc0$1",
          "checkIn": "2020-04-15T11:00:00Z",
          "price": {
            "amount": 339.135,
            "currency": "EUR"
          }
        },
        "vehicle": {
          "image": {
            "listImage": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9jYXIvRW50ZXJwcmlzZS9zbWFsbC90X0VETVJfVFIuanBn/30C1620446582A82.jpg"
          },
          "category": "Car",
          "size": "Economy",
          "model": "FORD FIESTA",
          "hasGps": false,
          "hasAirCondition": true,
          "transmissionType": 0,
          "passangerCapacity": 5,
          "doors": "4",
          "luggageCapacity": 1,
          "fuelType": "Unspecified",
          "vendorCarType": "EDMR",
          "driveType": "Unspecified",
          "distanceLimit": {
            "unlimited": true,
            "unitName": "Mile"
          },
          "description": "-or similar"
        },
        "supplier": {
          "logo": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9zdXBwbGllci9sb2dvL2xvZ282MS5wbmc=/381311606CDA906D.png",
          "pickUpInfo": {
            "locationType": 0,
            "id": "7588601",
            "name": "SIDE DOWNTOWN"
          },
          "dropOffInfo": {
            "locationType": 0,
            "id": "7588601",
            "name": "SIDE DOWNTOWN"
          },
          "id": "ET",
          "name": "Enterprise"
        },
        "coverages": [
          {
            "description": "pro Anmietung: 34,08 EUR",
            "isIncludedInPrice": true,
            "price": {
              "amount": 34.08,
              "currency": "EUR"
            },
            "type": "Tax",
            "codeDescription": "pro Anmietung",
            "id": "418",
            "name": "Weitere Steuern und Gebühren"
          },
          {
            "description": "Selbstbeteiligung bis zu 200 EUR",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Damage",
            "codeDescription": "Selbstbeteiligung bis zu 200 EUR",
            "id": "CDW",
            "name": "Haftungsreduzierung / Vollkaskoversicherung"
          },
          {
            "description": "Gesetzlich vorgeschriebene Versicherung für Schäden am gegnerischen Fahrzeug, Personen und Sachgegenständen- diese Leistung ist in diesem Angebot enthalten!",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Insurance",
            "codeDescription": "Gesetzlich vorgeschriebene Versicherung für Schäden am gegnerischen Fahrzeug, Personen und Sachgegenständen- diese Leistung ist in diesem Angebot enthalten!",
            "id": "SLI",
            "name": "Haftpflichtversicherung"
          },
          {
            "description": "Selbstbeteiligung bis zu 200 EUR",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Protection",
            "codeDescription": "Selbstbeteiligung bis zu 200 EUR",
            "id": "TP",
            "name": "Diebstahlschutz"
          },
          {
            "description": "Es entstehen keine weiteren Kosten durch gefahrene Kilometer.",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Mileage",
            "codeDescription": "Es entstehen keine weiteren Kosten durch gefahrene Kilometer",
            "id": "UNL",
            "name": "Unbegrenzte Kilometer"
          },
          {
            "description": "Einige Flughäfen erheben eine Servicegebühr- diese Leistung ist in diesem Angebot enthalten!",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Service",
            "codeDescription": "Einige Flughäfen erheben eine Servicegebühr- diese Leistung ist in diesem Angebot enthalten!",
            "id": "ASC",
            "name": "Flughafengebühr"
          },
          {
            "description": "Vollgetankt erhalten/abgeben: Übernahme und Rückgabe mit vollem Tank. Falls das Fahrzeug nicht mit vollem Tank abgegeben wird, berechnet der Anbieter das fehlende Benzin zzgl. einer Gebühr für den Betankungsservice.",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Fuel",
            "codeDescription": "Vollgetankt erhalten/abgeben",
            "id": "F2F",
            "name": "Tankregelung"
          },
          {
            "description": "Der Betrag entspricht dem Mehrwertsteuersatz des jeweiligen Landes.",
            "isIncludedInPrice": true,
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "type": "Tax",
            "codeDescription": "Der Betrag entspricht dem Mehrwertsteuersatz des jeweiligen Landes",
            "id": "TAX",
            "name": "Mehrwertsteuer"
          }
        ],
        "provider": 2,
        "thumbnail": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9jYXIvRW50ZXJwcmlzZS9zbWFsbC90X0VETVJfVFIuanBn/30C1620446582A82.jpg",
        "id": "2f225076-faa8-4e3c-aec8-7842d525efc0"
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

You can use GetProductInfo for getting rent a car media information.

Update Date	  |      02.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductinfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType": 14,
	
	<!-- This values in PriceSearch response. rentings[].id -->
    "product": "2f225076-faa8-4e3c-aec8-7842d525efc0",
    "currency": "EUR",
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
        "requestId": "32830a1c-eb92-4d36-a143-cecc343653b6",
        "success": true,
        "responseTime": "2020-03-03T07:33:41.8006674Z",
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
        "renting": {
            "pickUpInfo": {
                "internationalCode": "AYT",
                "name": "Antalya",
                "type": 2,
                "latitude": "36.8968908",
                "longitude": "30.7133233",
                "countryId": "TR",
                "provider": 0,
                "isTopRegion": false,
                "id": "1421"
            },
            "dropOffInfo": {
                "internationalCode": "AYT",
                "name": "Antalya",
                "type": 2,
                "latitude": "36.8968908",
                "longitude": "30.7133233",
                "countryId": "TR",
                "provider": 0,
                "isTopRegion": false,
                "id": "1421"
            },
            "pickUpDate": "2020-04-15T11:00:00Z",
            "dropOffDate": "2020-04-25T11:00:00Z",
            "supplier": {
                "logo": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9zdXBwbGllci9sb2dvL2xvZ282MS5wbmc=/381311606CDA906D.png",
                "pickUpInfo": {
                    "locationType": 0,
                    "address": " ,1013 SK. KAZIM KARABEKIR CAD., 07330, SIDE / Türkei",
                    "phone": [
                        "5304334041"
                    ],
                    "additionalNote": "",
                    "operationHours": [
                        {
                            "dayName": "Monday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Tuesday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Wednesday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Thursday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Friday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Saturday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Sunday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        }
                    ],
                    "latitude": "36.781034",
                    "longitude": "31.402344",
                    "id": "7588601",
                    "name": "SIDE DOWNTOWN"
                },
                "dropOffInfo": {
                    "locationType": 0,
                    "address": " ,1013 SK. KAZIM KARABEKIR CAD., 07330, SIDE / Türkei",
                    "phone": [
                        "5304334041"
                    ],
                    "additionalNote": "",
                    "operationHours": [
                        {
                            "dayName": "Monday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Tuesday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Wednesday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Thursday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Friday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Saturday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        },
                        {
                            "dayName": "Sunday",
                            "start": "08:00",
                            "end": "18:00",
                            "isOpen": true
                        }
                    ],
                    "latitude": "36.781034",
                    "longitude": "31.402344",
                    "id": "7588601",
                    "name": "SIDE DOWNTOWN"
                },
                "id": "ET",
                "name": "Enterprise"
            },
            "rentalPeriod": 10,
            "vehicle": {
                "image": {
                    "listImage": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9jYXIvRW50ZXJwcmlzZS9zbWFsbC90X0VETVJfVFIuanBn/30C1620446582A82.jpg",
                    "detailImage": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9jYXIvRW50ZXJwcmlzZS9sYXJnZS90X0VETVJfVFIuanBn/5C83C5932CCB34CF.jpg"
                },
                "category": "Car",
                "size": "Economy",
                "model": "FORD FIESTA",
                "hasGps": false,
                "hasAirCondition": true,
                "transmissionType": 0,
                "passangerCapacity": 5,
                "doors": "4",
                "luggageCapacity": 1,
                "fuelType": "Unspecified",
                "vendorCarType": "EDMR",
                "driveType": "Unspecified",
                "distanceLimit": {
                    "unlimited": true,
                    "unitName": "Mile"
                },
                "description": "-or similar"
            },
            "paymentType": 0,
            "pickupType": 1,
            "coverages": [
                {
                    "description": "pro Anmietung: 34,08 EUR",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 34.08,
                        "currency": "EUR"
                    },
                    "type": "Tax",
                    "codeDescription": "pro Anmietung",
                    "id": "418",
                    "name": "Weitere Steuern und Gebühren"
                },
                {
                    "description": "Selbstbeteiligung bis zu 200 EUR",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Damage",
                    "codeDescription": "Selbstbeteiligung bis zu 200 EUR",
                    "id": "CDW",
                    "name": "Haftungsreduzierung / Vollkaskoversicherung"
                },
                {
                    "description": "Gesetzlich vorgeschriebene Versicherung für Schäden am gegnerischen Fahrzeug, Personen und Sachgegenständen- diese Leistung ist in diesem Angebot enthalten!",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Insurance",
                    "codeDescription": "Gesetzlich vorgeschriebene Versicherung für Schäden am gegnerischen Fahrzeug, Personen und Sachgegenständen- diese Leistung ist in diesem Angebot enthalten!",
                    "id": "SLI",
                    "name": "Haftpflichtversicherung"
                },
                {
                    "description": "Selbstbeteiligung bis zu 200 EUR",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Protection",
                    "codeDescription": "Selbstbeteiligung bis zu 200 EUR",
                    "id": "TP",
                    "name": "Diebstahlschutz"
                },
                {
                    "description": "Es entstehen keine weiteren Kosten durch gefahrene Kilometer.",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Mileage",
                    "codeDescription": "Es entstehen keine weiteren Kosten durch gefahrene Kilometer",
                    "id": "UNL",
                    "name": "Unbegrenzte Kilometer"
                },
                {
                    "description": "Einige Flughäfen erheben eine Servicegebühr- diese Leistung ist in diesem Angebot enthalten!",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Service",
                    "codeDescription": "Einige Flughäfen erheben eine Servicegebühr- diese Leistung ist in diesem Angebot enthalten!",
                    "id": "ASC",
                    "name": "Flughafengebühr"
                },
                {
                    "description": "Vollgetankt erhalten/abgeben: Übernahme und Rückgabe mit vollem Tank. Falls das Fahrzeug nicht mit vollem Tank abgegeben wird, berechnet der Anbieter das fehlende Benzin zzgl. einer Gebühr für den Betankungsservice.",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Fuel",
                    "codeDescription": "Vollgetankt erhalten/abgeben",
                    "id": "F2F",
                    "name": "Tankregelung"
                },
                {
                    "description": "Der Betrag entspricht dem Mehrwertsteuersatz des jeweiligen Landes.",
                    "isIncludedInPrice": true,
                    "price": {
                        "amount": 0.00,
                        "currency": "EUR"
                    },
                    "type": "Tax",
                    "codeDescription": "Der Betrag entspricht dem Mehrwertsteuersatz des jeweiligen Landes",
                    "id": "TAX",
                    "name": "Mehrwertsteuer"
                }
            ],
            "providerNotes": [
                {
                    "title": "Estimated deposit amount",
                    "text": "Für die Abholung des Mietwagens muss eine gültige Kreditkarte des Hauptfahrers (Mieters) vorgelegt werden. Bei Abschluss des Mietvertrages wird eine Kaution auf der Kreditkarte reserviert. Die Höhe der Kaution wird durch die von Ihnen reservierte Fahrzeugkategorie der angegebenen Selbstbeteiligung im Schadensfall zuzüglich dem Wert einer Tankfüllung bestimmt.\r\nWir weisen darauf hin, dass manche Mietwagenanbieter keine Kreditkarten von American Express,  Carte Bleue,  Union Pay, Visa Premier oder Diners Club akzeptieren.\r\nKann das Fahrzeug aufgrund fehlender gültiger Kreditkarte oder unzureichendem Kreditrahmen nicht an Sie übergeben werden, so gilt dies als \"Nichterscheinen\", was bedeutet, dass kein Anrecht auf eine Rückerstattung besteht.\r\nFür Fahrzeuge der Luxusklasse kann vom Autovermieter die Vorlage von zwei Kreditkarten verlangt werden. Die Kreditkarten dürfen nicht vom gleichen Kreditinstitut stammen.Voraussichtliche Kaution: EUR 350",
                    "bodyType": 2
                },
                {
                    "title": "MicronNexus Mitbedingungen",
                    "text": "https://static.carhire-solutions.com/pdf/cnx_tac_de-de.pdf",
                    "bodyType": 0
                },
                {
                    "title": "Produkt Information",
                    "text": "https://createpdf.cnx-uat.com/de-de/products/BAD-6jMAI",
                    "bodyType": 0
                }
            ],
            "cancellationPolicies": [
                {
                    "dueDate": "2020-04-08T11:00:00Z",
                    "price": {
                        "amount": 339.1350000,
                        "currency": "EUR"
                    }
                }
            ],
            "rentalTerms": [
                {
                    "title": "TermsConditions",
                    "text": "https://static.carhire-solutions.com/pdf/cnx_tac_de-de.pdf",
                    "bodyType": 0
                }
            ],
            "thirdPartySupplier": {
                "name": "CARNECT",
                "id": "1365be90-b480-4f07-811e-77f0812edfd9",
                "code": "CARNECT"
            },
            "pickUpLocationType": 0,
            "provider": 2,
            "thumbnail": "/images/gateway/aHR0cHM6Ly9zdGF0aWMuY2FyaGlyZS1zb2x1dGlvbnMuY29tL2ltYWdlcy9jYXIvRW50ZXJwcmlzZS9zbWFsbC90X0VETVJfVFIuanBn/30C1620446582A82.jpg",
            "id": "2f225076-faa8-4e3c-aec8-7842d525efc0",
            "name": "FORD FIESTA"
        }
    }
}
```

-----------------------------
##GetOffers Method
You have to use this method before starting the booking process for any offer that you had received by using price search method. This method is going to show you whether or not that offer was still valid. At the same time, using this method, you can get cancellation rules about an offer which you couldn't get via price search.

<i><b>Attention, don't continue to the booking step without checking validity of the offer!</b></i>

Update Date	  |      02.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getoffers```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "productType": 14,
    "productId": "2f225076-faa8-4e3c-aec8-7842d525efc0",
    "searchId": "b5d7d818-1fde-4635-87de-8c211fc6d817",
    "offerId": "2$14$0$2f225076-faa8-4e3c-aec8-7842d525efc0$1",
    "offerCount": 10,
    "currency": "EUR",
    "culture": "en-US"
}
```

###Response Sample

```
{
   "header": {
        "requestId": "d4ec10d3-b083-4ca6-8619-1d4d24e870a9",
        "success": true,
        "responseTime": "2020-03-03T07:35:28.2899928Z",
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
                "provider": 2,
                "checkInTo": "2020-04-25T11:00:00Z",
                "availability": 1,
                "isRefundable": true,
                "cancellationPolicies": [
                    {
                        "dueDate": "2020-04-08T11:00:00Z",
                        "price": {
                            "amount": 339.1350000,
                            "currency": "EUR"
                        },
                        "description": "Die Stornierung ist kostenfrei bis 08.04.2023 11:00. Eine Stornogebühr von 100 Prozent wird von 08.04.2023 11:00 bis 15.04.2023 11:00 erhoben. Bei No-Show wird eine Gebühr von 100 Prozent erhoben."
                    }
                ],
                "priceBreakdowns": [
                    {
                        "productType": 14,
                        "priceBreakdowns": [
                            {
                                "date": "2020-04-15T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-16T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-17T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-18T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-19T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-20T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-21T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-22T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-23T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-24T11:00:00Z",
                                "price": {
                                    "amount": 33.91,
                                    "currency": "EUR"
                                }
                            }
                        ]
                    }
                ],
                "offerId": "2$14$0$2f225076-faa8-4e3c-aec8-7842d525efc0$1",
                "checkIn": "2020-04-15T11:00:00Z",
                "price": {
                    "amount": 339.1350000,
                    "currency": "EUR"
                }
            },
            {
                "provider": 2,
                "checkInTo": "2020-04-25T11:00:00Z",
                "availability": 1,
                "isRefundable": true,
                "cancellationPolicies": [
                    {
                        "dueDate": "2020-04-08T11:00:00Z",
                        "price": {
                            "amount": 439.8750000,
                            "currency": "EUR"
                        },
                        "description": "Die Stornierung ist kostenfrei bis 08.04.2023 11:00. Eine Stornogebühr von 100 Prozent wird von 08.04.2023 11:00 bis 15.04.2023 11:00 erhoben. Bei No-Show wird eine Gebühr von 100 Prozent erhoben."
                    }
                ],
                "priceBreakdowns": [
                    {
                        "productType": 14,
                        "priceBreakdowns": [
                            {
                                "date": "2020-04-15T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-16T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-17T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-18T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-19T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-20T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-21T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-22T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-23T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            },
                            {
                                "date": "2020-04-24T11:00:00Z",
                                "price": {
                                    "amount": 43.99,
                                    "currency": "EUR"
                                }
                            }
                        ]
                    }
                ],
                "insurance": {
                    "price": {
                        "amount": 100.7400000,
                        "currency": "EUR"
                    },
                    "policy": {
                        "policyName": "Komplettschutz",
                        "description": {
                            "text": "Sie müssen während Ihrer Reise eventuell mit unerwarteten Kosten rechnen, da bestimmte Reparaturarten und -kosten nicht durch Ihre Autovermietung gedeckt sind. RentalCover.com hingegen deckt jegliche zusätzlich entstehenden Kosten, wenn etwas schief laufen sollte.",
                            "bodyType": 2
                        },
                        "detailedInformation": {
                            "text": "Sie müssen während Ihrer Reise eventuell mit unerwarteten Kosten rechnen, da bestimmte Reparaturarten und -kosten nicht durch Ihre Autovermietung gedeckt sind. RentalCover.com hingegen deckt jegliche zusätzlich entstehenden Kosten, wenn etwas schief laufen sollte.",
                            "bodyType": 2
                        },
                        "inclusionBreakdown": {
                            "text": "<ul><li>Zusätzliche Autofahrer, die zusätzlich zu Ihnen im Vertrag mit der Autovermietung angegeben wurden, sind kostenlos mitversichert.</li>\r<li>Kann bis zu Ihrem Reiseantritt storniert werden.</li>\r<li>Fahrzeugarten, die versichert sind: Auto.</li>\r</ul>\r\r<b>Sie sind für folgendes versichert</b> (meistens durch die Versicherung Ihrer Autovermietung ausgeschlossen):<ul>\r<li>Jegliche Einzel- & Mehrfachunfälle sowie Fahrzeugreparaturen einschliesslich Karosserieschäden, Windschutzscheiben, Reifen, Dach- und Fahrwerkschäden.</li>\r<li>Verlust/Ersatz von Schlüsseln.</li>\r<li>Teure unfallverbundene Kosten wie z.B. Nutzungsausfall- und Bearbeitungsgebühren.</li>\r\r</li>\r</ul>\r\r<b>Für folgendes sind Sie nicht versichert:</b>\r<ul>\r<ul><li>Wohnmobile/sog. RVs (Fahrzeuge, die eine Toilette & Dusche haben), Campervans (Fahrzeuge mit Schlafmöglichkeiten), Fahrzeuge mit Allradantrieb, die auf unasphaltierten Strassen gefahren werden, Kleinbusse, die nur mit einer zusätzlichen Führerscheinerlaubnis gefahren werden dürfen, kleine LKWs. Diese können jedoch jederzeit zu Ihrer Versicherung hinzugefügt werden.</li>\r<li>Schäden, die durch die Verletzung von Vertragsbedingungen der Autovermietung oder von örtlichen Gesetzen verursacht worden sind.</li>\r</ul>",
                            "bodyType": 1
                        },
                        "inclusionsList": [
                            {
                                "title": "Selbstbehalt für Schäden.",
                                "text": "Ihr Mietfahrzeug beinhaltet einen Selbstbehalt in Höhe von 3.300,00 €. Dies ist der Betrag, der Ihnen für Reparaturen an der Karosserie Ihres Fahrzeugs berechnet werden kann, oder wenn es gestohlen wird. RentalCover.com deckt den kompletten Selbstbehalt. Es gibt keine Forderungsgebühr.",
                                "bodyType": 2
                            },
                            {
                                "title": "Autoschäden, die häufig durch Autovermietungen ausgeschlossen werden. .",
                                "text": "Die Teilkaskoversicherung Ihrer Autovermietung schliesst oft Reparaturen/den Ersatz von Fenstern, Reifen, Rädern, Spiegeln/Glas, Dächern, Fahrwerk, das Anfahren von Tieren usw. aus. RentalCover.com deckt diese Reparatur- & Ersatzkosten komplett ab.",
                                "bodyType": 2
                            },
                            {
                                "title": "Pannenhilfenreparaturen.",
                                "text": "Autovermietungen bieten Ihnen eine Pannenhilfendeckung für einen zusätzlichen Betrag in Höhe von 4.49 - 8.98 pro Tag an. Dies ist bereits kostenlos in dieser RentalCover.com Versicherungspolice beinhaltet und deckt das Abschleppen Ihres Fahrzeugs, Schlüsselverlust & -ersatz, Beschlagnahmungskosten, das Aussperren aus Ihrem Mietwagen & weitere Pannenhilfendienste.",
                                "bodyType": 2
                            },
                            {
                                "title": "Zusätzlich anfallende Kosten, wenn Ihr Mietfahrzeug beschädigt wurde.",
                                "text": "Wenn Schäden an Ihrem Mietfahrzeug verursacht worden sind, werden Ihnen immer Bearbeitungsgebühren berechnet, und Neuzuweisungs- & sog. Nutzungsausfallkosten. RentalCover.com deckt all diese, Sie müssen sich also nicht unnötig Sorgen machen!",
                                "bodyType": 2
                            },
                            {
                                "title": "Zusätzliche Autofahrer, die ausser Ihnen im Vertrag mit der Autovermietung angegeben wurden, sind automatisch mitversichert.",
                                "text": "",
                                "bodyType": 2
                            },
                            {
                                "title": "Stornierung mit 100%iger Kostenrückerstattung bis zum Reiseantritt möglich.",
                                "text": "",
                                "bodyType": 2
                            }
                        ],
                        "policyUrl": "http://staging.rentalcover.com/pds/H35P-25YH-INS",
                        "insuranceSupplier": "RentalCover.com",
                        "underwriter": "Collinson",
                        "disclaimer": {
                            "text": "Ich habe die <a href=\"http://staging.rentalcover.com/pds/H35P-25YH-INS\" target=\"_blank\">Vertragsbedingungen dieser Versicherungspolice</a> gelesen & akzeptiert. Diese <a href=\"http://staging.rentalcover.com/pds/H35P-25YH-INS\">Versicherungspolice</a> ist von RentalCover.com ausgestellt und von Atrenska Insurance Limited unterschrieben.",
                            "bodyType": 1
                        }
                    },
                    "id": "413",
                    "name": "Vollständiger Versicherungschutz"
                },
                "offerId": "2$14$1$2f225076-faa8-4e3c-aec8-7842d525efc0$1",
                "checkIn": "2020-04-15T11:00:00Z",
                "price": {
                    "amount": 439.8750000,
                    "currency": "EUR"
                }
            }
        ],
        "productId": "2f225076-faa8-4e3c-aec8-7842d525efc0"
    }
}
```