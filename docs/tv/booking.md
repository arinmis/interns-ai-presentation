-----------------------------
#Booking

![img](img/Book_Simple.png)

-----------------------------
##BeginTransaction

You can use the BeginTransaction method to start the booking process.

| Update Date: | 18.04.2023                                 |
|-------------------|--------------------------------------------|
| Method Adress     | ```/api/bookingservice/begintransaction``` |
| Method Type       | ```POST```                                 |
| Token Required    | ```YES```                                  |

### With offer

```json title="Request"
{
  "offerIds": [
    "2$2$TR~^005^~23494~^005^~70a3f435-bcaa-4890-baf3-ef10caaa22e5"
  ],
  "currency": "EUR",
  "culture": "en-US"
}
```

### With exists reservation

```json title="Begin new transaction with exists reservation"
{
  "currency": "EUR",
  "culture": "en-US",
  "reservationNumber": "KI00001"
}
```

```json title="Response"
{
  "header": {
    "requestId": "4e6edecb-0a6b-4803-978d-c99ac4cd9a2d",
    "success": true,
    "responseTime": "2022-04-18T15:25:40.4232201Z",
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
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "expiresOn": "2022-04-18T15:45:24.517Z",
    "reservationData": {
      "travellers": [
        {
          "travellerId": "1",
          "type": 1,
          "title": 1,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "availableAcademicTitles": [
            {
              "Id": "1",
              "Name": "Dr."
            },
            {
              "Id": "2",
              "Name": "Prof."
            },
            {
              "Id": "3",
              "Name": "Prof. Dr."
            }
          ],
          "isLeader": true,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "contactPhone": {},
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 1,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "1",
            "travellerUniqueID": "EC308451C1D095C528CFA3C009EA7235",
            "tourVisio_TravellerId": "1",
            "paximum_TravellerId": "e2a4ba97-9fc5-43af-82c1-f5de4ef90844",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        },
        {
          "travellerId": "2",
          "type": 1,
          "title": 3,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "isLeader": false,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "phone": "",
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 2,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "2",
            "travellerUniqueID": "AB35E84A215F0F711ED629C2ABB9EFA0",
            "tourVisio_TravellerId": "2",
            "paximum_TravellerId": "8ac585ae-a098-4e52-82f0-77dd14878400",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        }
      ],
      "reservationInfo": {
        "bookingNumber": "2347408a-e",
        "agency": {
          "code": "B2B",
          "name": "B2B Agency",
          "country": {
            "internationalCode": "CAN",
            "provider": 0,
            "isTopRegion": false
          },
          "address": {
            "country": {
              "internationalCode": "CAN",
              "name": "Kanada",
              "provider": 0,
              "isTopRegion": false,
              "id": "3608"
            },
            "city": {
              "name": "Germansen",
              "latitude": "55.767154000",
              "longitude": "-124.691168000",
              "provider": 0,
              "isTopRegion": false,
              "id": "19068"
            },
            "addressLines": [
              "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
            ],
            "zipCode": "07200",
            "email": "",
            "phone": "+90 850 777 07 29",
            "address": "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
          },
          "ownAgency": false,
          "aceExport": true
        },
        "agencyUser": {
          "office": {
            "code": "BER",
            "name": "MURAT OFFICE"
          },
          "operator": {
            "code": "SAN",
            "name": "SANTSG",
            "agencyCanDiscountCommission": true
          },
          "market": {
            "code": "GERMAN",
            "name": " GERMAN MARKET en-US"
          },
          "agency": {
            "code": "B2B",
            "name": "B2B Agency",
            "ownAgency": false,
            "aceExport": false
          },
          "name": "B2B User",
          "code": "B2B"
        },
        "beginDate": "2022-04-18T00:00:00",
        "endDate": "2022-04-25T00:00:00",
        "note": "",
        "salePrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "supplementDiscount": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerAmountToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyAmountToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "discount": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyBalance": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerBalance": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 10,
          "amount": 34,
          "currency": "EUR"
        },
        "brokerCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "promotionAmount": {
          "amount": 0,
          "currency": "EUR"
        },
        "priceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyPriceToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerPriceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "totalPrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "documents": [],
        "otherDocuments": [],
        "reservableInfo": {
          "reservable": false
        },
        "paymentFrom": 1,
        "departureCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "departureCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "arrivalCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "arrivalCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "createDate": "2022-04-18T18:25:38",
        "additionalFields": {
          "smsLimit": "3",
          "priceChanged": "0",
          "allowSalePriceEdit": "1",
          "sendFlightSms": "false"
        },
        "additionalCode1": "",
        "additionalCode2": "",
        "additionalCode3": "",
        "additionalCode4": "",
        "agencyDiscount": 0,
        "hasAvailablePromotionCode": true
      },
      "services": [
        {
          "orderNumber": 1,
          "note": " .  Check-in hour 14:00-05:30.Car park YES (without additional debit notes).Minimum check-in age 18.Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv (15/05/2020-30/06/2022) \r\nConditions:\r\n1. Late Check-in. Some hotels do not have 24 hour reception service. If you are going to arrive to property after 08:00 pm or later please contact to hotel and inform them your arrival time. In case you'll arrive to hotel after midnight and didn't inform hotel could result cancelling your room by hotel and no-show.\r\n2. Requests. Bedding types for Double/Twin rooms, Specific room types cannot be guaranteed and are subject to availability at the time of check in. Extra bed depends on bedding type or condition of the hotel , there will be an additional charge for extra beds.\r\n3. Hotel surcharges. Resort fees, city taxes or any other surcharges due to the country regulations must be paid to the hotel directly. Our agency is not responsible for any extra hotel fees.\r\n4. Early check in & Late Check out. Hotels in general check the guests in to property after 02:00 pm and Check Out could be latest 11:00 am.  Hotel could charge extra for the special requests.\r\nSupplier original board:ROOM ONLY\r\nSupplier original room(s): DOUBLE STANDARD",
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "1",
            "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
            "hotelDetail": {
              "address": {
                "addressLines": [
                  null
                ]
              },
              "transferLocation": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "stopSaleGuaranteed": 0,
              "stopSaleStandart": 0,
              "geolocation": {
                "longitude": "30.687310000",
                "latitude": "36.887740000"
              },
              "location": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "country": {
                "code": "TR",
                "name": "TURKIYE",
                "type": 1,
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
              },
              "city": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
              "id": "3091",
              "name": "Laguna Suite"
            },
            "night": 7,
            "room": "DOUBLE STANDARD",
            "board": "Room Only",
            "accom": "2 PAX",
            "geoLocation": {
              "longitude": "30.687310000",
              "latitude": "36.887740000"
            }
          },
          "partnerServiceId": "102576",
          "isMainService": false,
          "isRefundable": false,
          "bundle": false,
          "cancellationPolicies": [
            {
              "beginDate": "2022-04-18T00:00:00Z",
              "dueDate": "2022-04-17T20:00:00",
              "price": {
                "amount": 146.29,
                "currency": "EUR"
              },
              "provider": 2
            }
          ],
          "documents": [],
          "encryptedServiceNumber": "sH4fWNuukB0XROrAzIvw",
          "priceBreakDowns": [],
          "commission": 0,
          "reservableInfo": {
            "reservable": false
          },
          "unit": 1,
          "conditionalSpos": [],
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 2,
          "createServiceTypeIfNotExists": true,
          "id": "1",
          "code": "PXM102576",
          "name": "Laguna Suite",
          "beginDate": "2022-04-18T00:00:00",
          "endDate": "2022-04-25T00:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 339,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 2,
          "travellers": [
            "1",
            "2"
          ],
          "thirdPartyRecord": true,
          "recordId": 1,
          "additionalFields": {
            "isRefundable": "0",
            "reservableInfo": "{\"Reservable\":false}",
            "isEditable": "0"
          }
        }
      ],
      "paymentDetail": {
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2022-04-18T00:00:00",
            "price": {
              "percent": 100,
              "amount": 339,
              "currency": "EUR"
            },
            "paymentStatus": false
          }
        ],
        "paymentInfo": []
      },
      "invoices": []
    },
    "status": 4,
    "transactionType": 0
  }
}
```

-----------------------------
##AddServices

You can use the addservices method to add services.

Update Date:	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/bookingservice/addservices```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

```json title="Request"
{
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "offers": [
        {
            "offerId": "1$4$$DE$1$240$20220419$2",
            "travellers": [
                "1",
                "2"
            ]
        }
    ],
    "currency": "EUR",
    "culture": "en-US"
}
```

```json title="Response"
{
  "header": {
    "requestId": "ce1e0e29-c534-4632-8646-36f164a15461",
    "success": true,
    "responseTime": "2022-04-18T15:26:21.6488227Z",
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
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "expiresOn": "2022-04-18T15:45:24.517Z",
    "reservationData": {
      "travellers": [
        {
          "travellerId": "1",
          "type": 1,
          "title": 1,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "isLeader": true,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "contactPhone": {},
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            },
            {
              "id": "2",
              "type": 4,
              "price": {
                "amount": 100,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 1,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "1",
            "travellerUniqueID": "EC308451C1D095C528CFA3C009EA7235",
            "tourVisio_TravellerId": "1",
            "paximum_TravellerId": "e2a4ba97-9fc5-43af-82c1-f5de4ef90844",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        },
        {
          "travellerId": "2",
          "type": 1,
          "title": 3,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "isLeader": false,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "phone": "",
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            },
            {
              "id": "2",
              "type": 4,
              "price": {
                "amount": 100,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 2,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "2",
            "travellerUniqueID": "AB35E84A215F0F711ED629C2ABB9EFA0",
            "tourVisio_TravellerId": "2",
            "paximum_TravellerId": "8ac585ae-a098-4e52-82f0-77dd14878400",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        }
      ],
      "reservationInfo": {
        "bookingNumber": "2347408a-e",
        "agency": {
          "code": "B2B",
          "name": "B2B Agency",
          "country": {
            "internationalCode": "CAN",
            "provider": 0,
            "isTopRegion": false
          },
          "address": {
            "country": {
              "internationalCode": "CAN",
              "name": "Kanada",
              "provider": 0,
              "isTopRegion": false,
              "id": "3608"
            },
            "city": {
              "name": "Germansen",
              "latitude": "55.767154000",
              "longitude": "-124.691168000",
              "provider": 0,
              "isTopRegion": false,
              "id": "19068"
            },
            "addressLines": [
              "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
            ],
            "zipCode": "07200",
            "email": "",
            "phone": "+90 850 777 07 29",
            "address": "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
          },
          "ownAgency": false,
          "aceExport": true
        },
        "agencyUser": {
          "office": {
            "code": "BER",
            "name": "MURAT OFFICE"
          },
          "operator": {
            "code": "SAN",
            "name": "SANTSG",
            "agencyCanDiscountCommission": true
          },
          "market": {
            "code": "GERMAN",
            "name": " GERMAN MARKET en-US"
          },
          "agency": {
            "code": "B2B",
            "name": "B2B Agency",
            "ownAgency": false,
            "aceExport": false
          },
          "name": "B2B User",
          "code": "B2B"
        },
        "beginDate": "2022-04-18T00:00:00",
        "endDate": "2022-04-25T00:00:00",
        "note": "",
        "salePrice": {
          "amount": 539,
          "currency": "EUR"
        },
        "supplementDiscount": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerAmountToPay": {
          "amount": 539,
          "currency": "EUR"
        },
        "agencyAmountToPay": {
          "amount": 486,
          "currency": "EUR"
        },
        "discount": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyBalance": {
          "amount": 486,
          "currency": "EUR"
        },
        "passengerBalance": {
          "amount": 539,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 10,
          "amount": 54,
          "currency": "EUR"
        },
        "brokerCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "promotionAmount": {
          "amount": 0,
          "currency": "EUR"
        },
        "priceToPay": {
          "amount": 539,
          "currency": "EUR"
        },
        "agencyPriceToPay": {
          "amount": 486,
          "currency": "EUR"
        },
        "passengerPriceToPay": {
          "amount": 539,
          "currency": "EUR"
        },
        "totalPrice": {
          "amount": 539,
          "currency": "EUR"
        },
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "documents": [],
        "otherDocuments": [],
        "reservableInfo": {
          "reservable": false
        },
        "paymentFrom": 1,
        "departureCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "departureCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "arrivalCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "arrivalCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "createDate": "2022-04-18T18:25:38",
        "additionalFields": {
          "smsLimit": "3",
          "priceChanged": "0",
          "allowSalePriceEdit": "1",
          "sendFlightSms": "false"
        },
        "additionalCode1": "",
        "additionalCode2": "",
        "additionalCode3": "",
        "additionalCode4": "",
        "agencyDiscount": 0,
        "hasAvailablePromotionCode": true
      },
      "services": [
        {
          "orderNumber": 1,
          "note": " .  Check-in hour 14:00-05:30.Car park YES (without additional debit notes).Minimum check-in age 18.Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv (15/05/2020-30/06/2022) \r\nConditions:\r\n1. Late Check-in. Some hotels do not have 24 hour reception service. If you are going to arrive to property after 08:00 pm or later please contact to hotel and inform them your arrival time. In case you'll arrive to hotel after midnight and didn't inform hotel could result cancelling your room by hotel and no-show.\r\n2. Requests. Bedding types for Double/Twin rooms, Specific room types cannot be guaranteed and are subject to availability at the time of check in. Extra bed depends on bedding type or condition of the hotel , there will be an additional charge for extra beds.\r\n3. Hotel surcharges. Resort fees, city taxes or any other surcharges due to the country regulations must be paid to the hotel directly. Our agency is not responsible for any extra hotel fees.\r\n4. Early check in & Late Check out. Hotels in general check the guests in to property after 02:00 pm and Check Out could be latest 11:00 am.  Hotel could charge extra for the special requests.\r\nSupplier original board:ROOM ONLY\r\nSupplier original room(s): DOUBLE STANDARD",
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "1",
            "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
            "hotelDetail": {
              "address": {
                "addressLines": [
                  null
                ]
              },
              "transferLocation": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "stopSaleGuaranteed": 0,
              "stopSaleStandart": 0,
              "geolocation": {
                "longitude": "30.687310000",
                "latitude": "36.887740000"
              },
              "location": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "country": {
                "code": "TR",
                "name": "TURKIYE",
                "type": 1,
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
              },
              "city": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
              "id": "3091",
              "name": "Laguna Suite"
            },
            "night": 7,
            "room": "DOUBLE STANDARD",
            "board": "Room Only",
            "accom": "2 PAX",
            "geoLocation": {
              "longitude": "30.687310000",
              "latitude": "36.887740000"
            }
          },
          "partnerServiceId": "102576",
          "isMainService": false,
          "isRefundable": false,
          "bundle": false,
          "cancellationPolicies": [
            {
              "beginDate": "2022-04-18T00:00:00Z",
              "dueDate": "2022-04-17T20:00:00",
              "price": {
                "amount": 146.29,
                "currency": "EUR"
              },
              "provider": 2
            }
          ],
          "documents": [],
          "encryptedServiceNumber": "sH4fWNuukB0XROrAzIvw",
          "priceBreakDowns": [],
          "commission": 0,
          "reservableInfo": {
            "reservable": false
          },
          "unit": 1,
          "conditionalSpos": [],
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 2,
          "createServiceTypeIfNotExists": true,
          "id": "1",
          "code": "PXM102576",
          "name": "Laguna Suite",
          "beginDate": "2022-04-18T00:00:00",
          "endDate": "2022-04-25T00:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 339,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 2,
          "travellers": [
            "1",
            "2"
          ],
          "thirdPartyRecord": true,
          "recordId": 1,
          "additionalFields": {
            "isRefundable": "0",
            "reservableInfo": "{\"Reservable\":false}",
            "isEditable": "0"
          }
        },
        {
          "orderNumber": 2,
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "2",
            "duration": "1",
            "startTime": "1899-12-30T05:00:00",
            "endTime": "1899-12-30T06:00:00",
            "priceCategory": {
              "id": "A",
              "name": "A"
            },
            "geoLocation": {},
            "excursionDetail": {
              "cancellationPolicyText": {
                "text": "Non-Refundable"
              },
              "webReleaseDay": 0,
              "id": "210",
              "name": "ANADOLU BALONLARI"
            }
          },
          "partnerServiceId": "210",
          "isMainService": false,
          "isRefundable": true,
          "bundle": false,
          "cancellationPolicies": [],
          "documents": [],
          "priceBreakDowns": [],
          "unit": 2,
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 4,
          "createServiceTypeIfNotExists": true,
          "id": "2",
          "code": "ANABALL",
          "name": "ANADOLU BALONLARI",
          "beginDate": "2022-04-19T05:00:00",
          "endDate": "2022-04-19T06:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 200,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 1,
          "travellers": [
            "1",
            "2"
          ],
          "thirdPartyRecord": false,
          "recordId": 2,
          "additionalFields": {
            "removable": "true",
            "additionalServiceUniqueId": "1455",
            "isEditable": "0"
          }
        }
      ],
      "paymentDetail": {
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2022-04-18T00:00:00",
            "price": {
              "percent": 100,
              "amount": 539,
              "currency": "EUR"
            },
            "paymentStatus": false
          }
        ],
        "paymentInfo": []
      },
      "invoices": []
    },
    "status": 4,
    "transactionType": 0
  }
}
```

-----------------------------

##RemoveServices

You can use the removeservices method to remove services.

 Update Date:	  |      18.04.2023
----------------------|--------------------
     Method Adress    | ```/api/bookingservice/removeservices```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

```json title="Request"
{
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "services": [
        "2"
    ],
    "currency": "EUR",
    "culture": "en-US"
}
```

```json title="Response"
{
  "header": {
    "requestId": "5e9a6f64-1a33-496f-97d9-f58467722302",
    "success": true,
    "responseTime": "2022-04-18T15:28:01.8343295Z",
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
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "expiresOn": "2022-04-18T15:45:24.517Z",
    "reservationData": {
      "travellers": [
        {
          "travellerId": "1",
          "type": 1,
          "title": 1,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "isLeader": true,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "contactPhone": {},
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 1,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "1",
            "travellerUniqueID": "EC308451C1D095C528CFA3C009EA7235",
            "tourVisio_TravellerId": "1",
            "paximum_TravellerId": "e2a4ba97-9fc5-43af-82c1-f5de4ef90844",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        },
        {
          "travellerId": "2",
          "type": 1,
          "title": 3,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "isLeader": false,
          "birthDate": "0001-01-01T00:00:00",
          "nationality": {
            "twoLetterCode": "DE"
          },
          "identityNumber": "",
          "passportInfo": {
            "expireDate": "0001-01-01T00:00:00",
            "issueDate": "0001-01-01T00:00:00",
            "citizenshipCountryCode": ""
          },
          "address": {
            "phone": "",
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "orderNumber": 2,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "2",
            "travellerUniqueID": "AB35E84A215F0F711ED629C2ABB9EFA0",
            "tourVisio_TravellerId": "2",
            "paximum_TravellerId": "8ac585ae-a098-4e52-82f0-77dd14878400",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        }
      ],
      "reservationInfo": {
        "bookingNumber": "2347408a-e",
        "agency": {
          "code": "B2B",
          "name": "B2B Agency",
          "country": {
            "internationalCode": "CAN",
            "provider": 0,
            "isTopRegion": false
          },
          "address": {
            "country": {
              "internationalCode": "CAN",
              "name": "Kanada",
              "provider": 0,
              "isTopRegion": false,
              "id": "3608"
            },
            "city": {
              "name": "Germansen",
              "latitude": "55.767154000",
              "longitude": "-124.691168000",
              "provider": 0,
              "isTopRegion": false,
              "id": "19068"
            },
            "addressLines": [
              "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
            ],
            "zipCode": "07200",
            "email": "",
            "phone": "+90 850 777 07 29",
            "address": "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
          },
          "ownAgency": false,
          "aceExport": true
        },
        "agencyUser": {
          "office": {
            "code": "BER",
            "name": "MURAT OFFICE"
          },
          "operator": {
            "code": "SAN",
            "name": "SANTSG",
            "agencyCanDiscountCommission": true
          },
          "market": {
            "code": "GERMAN",
            "name": " GERMAN MARKET en-US"
          },
          "agency": {
            "code": "B2B",
            "name": "B2B Agency",
            "ownAgency": false,
            "aceExport": false
          },
          "name": "B2B User",
          "code": "B2B"
        },
        "beginDate": "2022-04-18T00:00:00",
        "endDate": "2022-04-25T00:00:00",
        "note": "",
        "salePrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "supplementDiscount": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerAmountToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyAmountToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "discount": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyBalance": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerBalance": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 10,
          "amount": 34,
          "currency": "EUR"
        },
        "brokerCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "promotionAmount": {
          "amount": 0,
          "currency": "EUR"
        },
        "priceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyPriceToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerPriceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "totalPrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "documents": [],
        "otherDocuments": [],
        "reservableInfo": {
          "reservable": false
        },
        "paymentFrom": 1,
        "departureCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "departureCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "arrivalCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "arrivalCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "createDate": "2022-04-18T18:25:38",
        "additionalFields": {
          "smsLimit": "3",
          "priceChanged": "0",
          "allowSalePriceEdit": "1",
          "sendFlightSms": "false"
        },
        "additionalCode1": "",
        "additionalCode2": "",
        "additionalCode3": "",
        "additionalCode4": "",
        "agencyDiscount": 0,
        "hasAvailablePromotionCode": true
      },
      "services": [
        {
          "orderNumber": 1,
          "note": " .  Check-in hour 14:00-05:30.Car park YES (without additional debit notes).Minimum check-in age 18.Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv (15/05/2020-30/06/2022) \r\nConditions:\r\n1. Late Check-in. Some hotels do not have 24 hour reception service. If you are going to arrive to property after 08:00 pm or later please contact to hotel and inform them your arrival time. In case you'll arrive to hotel after midnight and didn't inform hotel could result cancelling your room by hotel and no-show.\r\n2. Requests. Bedding types for Double/Twin rooms, Specific room types cannot be guaranteed and are subject to availability at the time of check in. Extra bed depends on bedding type or condition of the hotel , there will be an additional charge for extra beds.\r\n3. Hotel surcharges. Resort fees, city taxes or any other surcharges due to the country regulations must be paid to the hotel directly. Our agency is not responsible for any extra hotel fees.\r\n4. Early check in & Late Check out. Hotels in general check the guests in to property after 02:00 pm and Check Out could be latest 11:00 am.  Hotel could charge extra for the special requests.\r\nSupplier original board:ROOM ONLY\r\nSupplier original room(s): DOUBLE STANDARD",
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "1",
            "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
            "hotelDetail": {
              "address": {
                "addressLines": [
                  null
                ]
              },
              "transferLocation": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "stopSaleGuaranteed": 0,
              "stopSaleStandart": 0,
              "geolocation": {
                "longitude": "30.687310000",
                "latitude": "36.887740000"
              },
              "location": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "country": {
                "code": "TR",
                "name": "TURKIYE",
                "type": 1,
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
              },
              "city": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
              "id": "3091",
              "name": "Laguna Suite"
            },
            "night": 7,
            "room": "DOUBLE STANDARD",
            "board": "Room Only",
            "accom": "2 PAX",
            "geoLocation": {
              "longitude": "30.687310000",
              "latitude": "36.887740000"
            }
          },
          "partnerServiceId": "102576",
          "isMainService": false,
          "isRefundable": false,
          "bundle": false,
          "cancellationPolicies": [
            {
              "beginDate": "2022-04-18T00:00:00Z",
              "dueDate": "2022-04-17T20:00:00",
              "price": {
                "amount": 146.29,
                "currency": "EUR"
              },
              "provider": 2
            }
          ],
          "documents": [],
          "encryptedServiceNumber": "sH4fWNuukB0XROrAzIvw",
          "priceBreakDowns": [],
          "commission": 0,
          "reservableInfo": {
            "reservable": false
          },
          "unit": 1,
          "conditionalSpos": [],
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 2,
          "createServiceTypeIfNotExists": true,
          "id": "1",
          "code": "PXM102576",
          "name": "Laguna Suite",
          "beginDate": "2022-04-18T00:00:00",
          "endDate": "2022-04-25T00:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 339,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 2,
          "travellers": [
            "1",
            "2"
          ],
          "thirdPartyRecord": true,
          "recordId": 1,
          "additionalFields": {
            "isRefundable": "0",
            "reservableInfo": "{\"Reservable\":false}",
            "isEditable": "0"
          }
        }
      ],
      "paymentDetail": {
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2022-04-18T00:00:00",
            "price": {
              "percent": 100,
              "amount": 339,
              "currency": "EUR"
            },
            "paymentStatus": false
          }
        ],
        "paymentInfo": []
      },
      "invoices": []
    },
    "status": 4
  }
}
```

-----------------------------
##SetReservationInfo

You can use the method SetReservationInfo to set and to update informations about reservations.

| Update Date: | 18.04.2023                                  |
|-------------------|---------------------------------------------|
| Method Adress     | ```api/bookingservice/setreservationinfo``` |
| Method Type       | ```POST```                                  |
| Token Required    | ```YES```                                   |

```json title="Request"
{
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "travellers": [
        {
            "travellerId": "1",
            "type": 1,
            "title": 1,
			"academicTitle": {
                "id": 1
            },
            "passengerType": 1,
            "name": "Name",
            "surname": "Surname",
            "isLeader": true,
            "birthDate": "1990-10-10T00:00:00",
            "nationality": {
                "twoLetterCode": "DE"
            },
            "identityNumber": "",
            "passportInfo": {
                "serial": "a",
                "number": "13",
                "expireDate": "2030-01-01T00:00:00",
                "issueDate": "2020-01-01T00:00:00",
                "citizenshipCountryCode": ""
            },
            "address": {
                "contactPhone": {
                    "countryCode": "90",
                    "areaCode": "555",
                    "phoneNumber": "5555555"
                },
                "email": "email@test.com",
                "address": "",
                "zipCode": "",
                "city": {
                    "id": "",
                    "name": ""
                },
                "country": {
                    "id": "",
                    "name": ""
                }
            },
            "destinationAddress": {},
            "orderNumber": 1,
            "documents": [],
            "insertFields": [],
            "status": 0,
            "gender": 0
        },
        {
            "travellerId": "2",
            "type": 1,
            "passengerType": 1,
            "title": 3,
            "name": "SecondName",
            "surname": "Surname",
            "isLeader": false,
            "birthDate": "1990-01-01T00:00:00",
            "nationality": {
                "twoLetterCode": "DE"
            },
            "identityNumber": "",
            "passportInfo": {
                "serial": "a",
                "number": "19",
                "expireDate": "2030-01-01T00:00:00",
                "issueDate": "2020-01-01T00:00:00",
                "citizenshipCountryCode": ""
            },
            "address": {
                "phone": "",
                "email": "",
                "address": "",
                "zipCode": "",
                "city": {
                    "id": "",
                    "name": ""
                },
                "country": {
                    "id": "",
                    "name": ""
                }
            },
            "destinationAddress": {},
            "orderNumber": 2,
            "documents": [],
            "insertFields": [],
            "status": 0,
            "gender": 1
        }
    ],
    <!--customerInfo not Required-->
    "customerInfo": {
    "isCompany": false,
    "passportInfo": {},
    "address": {
        "city": {
        "name": "Antalya"
        },
        "country": {
        "name": "Turkey"
        },
        "email": "customer@customer.com",
        "phone": "+902222222222",
        "address": "Customer test",
        "zipCode": "07000"
    },
    "taxInfo": {
      "taxOffice": "Antalya",
      "taxNumber": "123456"
    },
    "title": 1,
    "name": "Customer name",
    "surname": "Customer surname",
    "birthDate": "1996-01-01",
    "identityNumber": "11111111111"
    },
    "reservationNote": "Reservation note",
    "agencyReservationNumber": "Agency reservation number text"
}
```

```json title="Response"
{
  "header": {
    "requestId": "219465bf-9e67-41b4-8921-8f448ca65b8e",
    "success": true,
    "responseTime": "2022-04-18T15:28:40.9565848Z",
    "messages": [
      {
        "id": 30000103,
        "code": "DuplicateReservationFound",
        "messageType": 4,
        "message": "Bu kriterleri aynı kılan yinelenen rezervasyonlarınız var. Devam etmek istiyor musun?"
      }
    ]
  },
  "body": {
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "expiresOn": "2022-04-18T15:45:24.517Z",
    "reservationData": {
      "travellers": [
        {
          "travellerId": "1",
          "type": 1,
          "title": 1,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "name": "Name",
          "surname": "SURNAME",
          "isLeader": true,
          "birthDate": "1990-10-10T00:00:00",
          "age": 31,
          "nationality": {
            "name": "Germany",
            "twoLetterCode": "DE",
            "threeLetterCode": "DEU",
            "numericCode": "276",
            "isdCode": "49"
          },
          "identityNumber": "",
          "passportInfo": {
            "serial": "a",
            "number": "13",
            "expireDate": "2030-01-01T00:00:00",
            "issueDate": "2020-01-01T00:00:00",
            "citizenshipCountryCode": "DE"
          },
          "address": {
            "contactPhone": {
              "countryCode": "90",
              "phoneNumber": "5555555555"
            },
            "email": "email@test.com",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "gender": 1,
          "orderNumber": 1,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "1",
            "travellerUniqueID": "EC308451C1D095C528CFA3C009EA7235",
            "tourVisio_TravellerId": "1",
            "paximum_TravellerId": "e2a4ba97-9fc5-43af-82c1-f5de4ef90844",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        },
        {
          "travellerId": "2",
          "type": 1,
          "title": 3,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "name": "Secondname",
          "surname": "SURNAME",
          "isLeader": false,
          "birthDate": "1990-01-01T00:00:00",
          "age": 32,
          "nationality": {
            "name": "Germany",
            "twoLetterCode": "DE",
            "threeLetterCode": "DEU",
            "numericCode": "276",
            "isdCode": "49"
          },
          "identityNumber": "",
          "passportInfo": {
            "serial": "a",
            "number": "19",
            "expireDate": "2030-01-01T00:00:00",
            "issueDate": "2020-01-01T00:00:00",
            "citizenshipCountryCode": "DE"
          },
          "address": {
            "contactPhone": {},
            "phone": "",
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "gender": 0,
          "orderNumber": 2,
          "birthDateFrom": "1923-04-19T02:00:00+02:00",
          "birthDateTo": "2010-04-18T03:00:00+03:00",
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "2",
            "travellerUniqueID": "AB35E84A215F0F711ED629C2ABB9EFA0",
            "tourVisio_TravellerId": "2",
            "paximum_TravellerId": "8ac585ae-a098-4e52-82f0-77dd14878400",
            "birthDateFrom": "1923-04-19T00:00:00.0000000Z",
            "birthDateTo": "2010-04-18T00:00:00.0000000Z"
          },
          "insertFields": [],
          "status": 0
        }
      ],
      "reservationInfo": {
        "bookingNumber": "2347408a-e",
        "agency": {
          "code": "B2B",
          "name": "B2B Agency",
          "country": {
            "internationalCode": "CAN",
            "provider": 0,
            "isTopRegion": false
          },
          "address": {
            "country": {
              "internationalCode": "CAN",
              "name": "Kanada",
              "provider": 0,
              "isTopRegion": false,
              "id": "3608"
            },
            "city": {
              "name": "Germansen",
              "latitude": "55.767154000",
              "longitude": "-124.691168000",
              "provider": 0,
              "isTopRegion": false,
              "id": "19068"
            },
            "addressLines": [
              "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
            ],
            "zipCode": "07200",
            "email": "",
            "phone": "+90 850 777 07 29",
            "address": "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
          },
          "ownAgency": false,
          "aceExport": true
        },
        "agencyUser": {
          "office": {
            "code": "BER",
            "name": "MURAT OFFICE"
          },
          "operator": {
            "code": "SAN",
            "name": "SANTSG",
            "agencyCanDiscountCommission": true
          },
          "market": {
            "code": "GERMAN",
            "name": " GERMAN MARKET en-US"
          },
          "agency": {
            "code": "B2B",
            "name": "B2B Agency",
            "ownAgency": false,
            "aceExport": false
          },
          "name": "B2B User",
          "code": "B2B"
        },
        "beginDate": "2022-04-18T00:00:00",
        "endDate": "2022-04-25T00:00:00",
        "note": "Reservation note",
        "agencyReservationNumber": "Agency reservation number text",
        "salePrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "supplementDiscount": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerAmountToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyAmountToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "discount": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyBalance": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerBalance": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 10,
          "amount": 34,
          "currency": "EUR"
        },
        "brokerCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "promotionAmount": {
          "amount": 0,
          "currency": "EUR"
        },
        "priceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyPriceToPay": {
          "amount": 306,
          "currency": "EUR"
        },
        "passengerPriceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "totalPrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "documents": [],
        "otherDocuments": [],
        "reservableInfo": {
          "reservable": false
        },
        "paymentFrom": 1,
        "departureCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "departureCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "arrivalCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "arrivalCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "createDate": "2022-04-18T18:25:38",
        "additionalFields": {
          "smsLimit": "3",
          "priceChanged": "0",
          "allowSalePriceEdit": "1",
          "sendFlightSms": "false"
        },
        "additionalCode1": "",
        "additionalCode2": "",
        "additionalCode3": "",
        "additionalCode4": "",
        "agencyDiscount": 0,
        "hasAvailablePromotionCode": true
      },
      "services": [
        {
          "orderNumber": 1,
          "note": " .  Check-in hour 14:00-05:30.Car park YES (without additional debit notes).Minimum check-in age 18.Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv (15/05/2020-30/06/2022) \r\nConditions:\r\n1. Late Check-in. Some hotels do not have 24 hour reception service. If you are going to arrive to property after 08:00 pm or later please contact to hotel and inform them your arrival time. In case you'll arrive to hotel after midnight and didn't inform hotel could result cancelling your room by hotel and no-show.\r\n2. Requests. Bedding types for Double/Twin rooms, Specific room types cannot be guaranteed and are subject to availability at the time of check in. Extra bed depends on bedding type or condition of the hotel , there will be an additional charge for extra beds.\r\n3. Hotel surcharges. Resort fees, city taxes or any other surcharges due to the country regulations must be paid to the hotel directly. Our agency is not responsible for any extra hotel fees.\r\n4. Early check in & Late Check out. Hotels in general check the guests in to property after 02:00 pm and Check Out could be latest 11:00 am.  Hotel could charge extra for the special requests.\r\nSupplier original board:ROOM ONLY\r\nSupplier original room(s): DOUBLE STANDARD",
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "1",
            "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
            "hotelDetail": {
              "address": {
                "addressLines": [
                  null
                ]
              },
              "transferLocation": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "stopSaleGuaranteed": 0,
              "stopSaleStandart": 0,
              "geolocation": {
                "longitude": "30.687310000",
                "latitude": "36.887740000"
              },
              "location": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "country": {
                "code": "TR",
                "name": "TURKIYE",
                "type": 1,
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
              },
              "city": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "thumbnail": "/images/product/2/5/0/2/2/102576;80b3e329100e6cb8ca6012f29607f1f3;jpg/laguna_suite.jpg",
              "id": "3091",
              "name": "Laguna Suite"
            },
            "night": 7,
            "room": "DOUBLE STANDARD",
            "board": "Room Only",
            "accom": "2 PAX",
            "geoLocation": {
              "longitude": "30.687310000",
              "latitude": "36.887740000"
            }
          },
          "partnerServiceId": "102576",
          "isMainService": false,
          "isRefundable": false,
          "bundle": false,
          "cancellationPolicies": [
            {
              "beginDate": "2022-04-18T00:00:00Z",
              "dueDate": "2022-04-17T20:00:00",
              "price": {
                "amount": 146.29,
                "currency": "EUR"
              },
              "provider": 2
            }
          ],
          "documents": [],
          "encryptedServiceNumber": "sH4fWNuukB0XROrAzIvw",
          "priceBreakDowns": [],
          "commission": 0,
          "reservableInfo": {
            "reservable": false
          },
          "unit": 1,
          "conditionalSpos": [],
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 2,
          "createServiceTypeIfNotExists": true,
          "id": "1",
          "code": "PXM102576",
          "name": "Laguna Suite",
          "beginDate": "2022-04-18T00:00:00",
          "endDate": "2022-04-25T00:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 339,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 2,
          "travellers": [
            "1",
            "2"
          ],
          "thirdPartyRecord": true,
          "recordId": 1,
          "additionalFields": {
            "isRefundable": "0",
            "reservableInfo": "{\"Reservable\":false}",
            "isEditable": "0"
          }
        }
      ],
      "paymentDetail": {
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2022-04-18T00:00:00",
            "price": {
              "percent": 100,
              "amount": 339,
              "currency": "EUR"
            },
            "paymentStatus": false
          }
        ],
        "paymentInfo": []
      },
      "invoices": []
    },
    "status": 4,
    "transactionType": 0
  }
}
```

##CommitTransaction

**! Please be sure that the payment has been received BEFORE finalizing committransaction method** 

You can use the method CommitTransaction to complete transactions.

| Update Date:  | 11.10.2023                                         |
|--------------------|----------------------------------------------------|
| Method Adress      | ```api/bookingservice/committransaction```         |
| Method Type        | POST                                               |
| Token Required     | ```YES```                                          |
| **Releated Links** | [Payment Options](../enumarations/#payment-option) |

```json title="Request"
{
  "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14"
}
```

```json title="Request (Optional)"
{
  "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
  "paymentOption": 6
}
```

Request Sample (With External Payment Integration Request Sample)
[Click](../lookup/#getpaymenttypes-method) to reach the GetPaymentTypes method.

```json title="Request"
{
  "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14",
  "PaymentInformation": {
    "AccountName": "SanTSG",
    "PaymentTypeId": 1,  // api/AgencyService/GetPaymentTypes
    "PaymentPrice": {  
      "Amount": 100,
      "Curreny": "EUR"
    },
    "InstallmentCount": "1",
    "PaymentDate":"2023-10-09",
    "ReceiptType":"0",
    "Reference": "2da27310-34fe-4e81-b561-b90abaa21ad8",
    "PaymentToken": "2da27310-34fe-4e81-b561-b90abaa21ad8"
  }
}
```

```json title="Response"
{
  "header": {
    "requestId": "81e75074-ea8f-4944-b836-bdb19efe8932",
    "success": true,
    "responseTime": "2022-04-18T15:30:20.9092629Z",
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
    "reservationNumber": "RC002576",
    "encryptedReservationNumber": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "transactionId": "fad80a51-3ed0-4502-b623-31992a73aa14"
  }
}
```

-----------------------------
##GetReservationDetail

You can use the method GetReservationDetail to obtain reservation details.

| Update Date: | 22.06.2023                                    |
|-------------------|-----------------------------------------------|
| Method Adress     | ```api/bookingservice/getreservationdetail``` |
| Method Type       | ```POST```                                    |
| Token Required    | ```YES```                                     |

```json title="Request"
{
  "ReservationNumber": "RC002576",
}
```

```json title="Response"
{
  "header": {
    "requestId": "537a2f81-23ae-459e-9d01-f8e2807a06ce",
    "success": true,
    "responseTime": "2022-04-18T15:31:48.5713109Z",
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
    "reservationNumber": "RC002576",
    "encryptedReservationNumber": "fad80a51-3ed0-4502-b623-31992a73aa14",
    "transactionId": "00000000-0000-0000-0000-000000000000",
    "reservationData": {
      "travellers": [
        {
          "travellerId": "50141",
          "type": 1,
          "title": 1,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "name": "Name",
          "surname": "SURNAME",
          "isLeader": true,
          "birthDate": "1990-10-10T00:00:00",
          "age": 31,
          "nationality": {
            "name": "Germany",
            "twoLetterCode": "DE",
            "threeLetterCode": "DEU",
            "numericCode": "276",
            "isdCode": "49"
          },
          "identityNumber": "",
          "passportInfo": {
            "serial": "a",
            "number": "13",
            "expireDate": "2030-01-01T00:00:00",
            "issueDate": "2020-01-01T00:00:00",
            "citizenshipCountryCode": "DE"
          },
          "address": {
            "contactPhone": {
              "countryCode": "90",
              "phoneNumber": "5555555555"
            },
            "email": "email@test.com",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "ticketNo": "RC002576",
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "gender": 1,
          "orderNumber": 1,
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "1",
            "travellerUniqueID": "EC308451C1D095C528CFA3C009EA7235",
            "tourVisio_TravellerId": "50141"
          },
          "insertFields": [],
          "status": 0
        },
        {
          "travellerId": "50142",
          "type": 1,
          "title": 3,
          "availableTitles": [
            {
              "id": "1",
              "name": "Mr"
            },
            {
              "id": "2",
              "name": "Ms"
            },
            {
              "id": "3",
              "name": "Mrs"
            },
            {
              "id": "4",
              "name": "Miss"
            }
          ],
		  "academicTitle": {
			"id": "1"
		  },
		  "availableAcademicTitles": [
		    {
			  "id": "1",
				"name": "Dr."
		    },
		    {
			  "id": "2",
			  "name": "Prof."
		    },
		    {
			  "id": "3",
			  "name": "Prof. Dr."
		    }
	      ],
          "name": "Secondname",
          "surname": "SURNAME",
          "isLeader": false,
          "birthDate": "1990-01-01T00:00:00",
          "age": 32,
          "nationality": {
            "name": "Germany",
            "twoLetterCode": "DE",
            "threeLetterCode": "DEU",
            "numericCode": "276",
            "isdCode": "49"
          },
          "identityNumber": "",
          "passportInfo": {
            "serial": "a",
            "number": "19",
            "expireDate": "2030-01-01T00:00:00",
            "issueDate": "2020-01-01T00:00:00",
            "citizenshipCountryCode": "DE"
          },
          "address": {
            "contactPhone": {},
            "phone": "",
            "email": "",
            "address": "",
            "zipCode": "",
            "city": {
              "id": "",
              "name": ""
            },
            "country": {
              "id": "",
              "name": ""
            }
          },
          "destinationAddress": {},
          "services": [
            {
              "id": "1",
              "type": 2,
              "ticketNo": "RC002576",
              "price": {
                "amount": 169.5,
                "currency": "EUR"
              },
              "passengerType": 1
            }
          ],
          "gender": 0,
          "orderNumber": 2,
          "requiredFields": [
            "travellerId",
            "type",
            "title",
            "name",
            "surname",
            "isleader",
            "birthDate",
            "leaderEmail",
            "nationality"
          ],
          "documents": [],
          "passengerType": 1,
          "additionalFields": {
            "travellerTypeOrder": "2",
            "travellerUniqueID": "AB35E84A215F0F711ED629C2ABB9EFA0",
            "tourVisio_TravellerId": "50142"
          },
          "insertFields": [],
          "status": 0
        }
      ],
      "reservationInfo": {
        "bookingNumber": "RC002576",
        "encryptedBookingNumber": "fad80a51-3ed0-4502-b623-31992a73aa14",
        "market": {
          "code": "TRMAR"
        },
        "operator": {
          "code": "TROP"
        },
        "agency": {
          "code": "B2B",
          "name": "B2B Agency",
          "country": {
            "internationalCode": "CAN",
            "provider": 0,
            "isTopRegion": false
          },
          "address": {
            "country": {
              "internationalCode": "CAN",
              "name": "Kanada",
              "provider": 0,
              "isTopRegion": false,
              "id": "3608"
            },
            "city": {
              "name": "Germansen",
              "latitude": "55.767154000",
              "longitude": "-124.691168000",
              "provider": 0,
              "isTopRegion": false,
              "id": "19068"
            },
            "addressLines": [
              "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
            ],
            "zipCode": "07200",
            "email": "",
            "phone": "+90 850 777 07 29",
            "address": "Akdeniz Üniversitesi Teknokent Arge 1 Binası"
          },
          "ownAgency": false,
          "aceExport": true
        },
        "agencyUser": {
          "office": {
            "code": "BER",
            "name": "MURAT OFFICE"
          },
          "operator": {
            "code": "SAN",
            "name": "SANTSG",
            "agencyCanDiscountCommission": true
          },
          "market": {
            "code": "GERMAN",
            "name": " GERMAN MARKET en-US"
          },
          "agency": {
            "code": "B2B",
            "name": "B2B Agency",
            "ownAgency": false,
            "aceExport": false
          },
          "name": "B2B User",
          "code": "B2B"
        },
        "beginDate": "2022-04-18T00:00:00",
        "endDate": "2022-04-25T00:00:00",
        "note": "Reservation note",
        "agencyReservationNumber": "Agency reservation number text",
        "salePrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "supplementDiscount": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyEB": {
          "amount": 0,
          "currency": "EUR"
        },
        "passengerAmountToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyAmountToPay": {
          "amount": 305.1,
          "currency": "EUR"
        },
        "discount": {
          "amount": 0,
          "currency": "EUR"
        },
        "agencyBalance": {
          "amount": 305.1,
          "currency": "EUR"
        },
        "passengerBalance": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyCommission": {
          "percent": 10,
          "amount": 33.9,
          "currency": "EUR"
        },
        "brokerCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "agencySupplementCommission": {
          "percent": 0,
          "amount": 0,
          "currency": "EUR"
        },
        "promotionAmount": {
          "amount": 0,
          "currency": "EUR"
        },
        "priceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "agencyPriceToPay": {
          "amount": 305.1,
          "currency": "EUR"
        },
        "passengerPriceToPay": {
          "amount": 339,
          "currency": "EUR"
        },
        "totalPrice": {
          "amount": 339,
          "currency": "EUR"
        },
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "documents": [
          {
            "documentType": 1,
            "url": "/documents/1/5/21/fad80a51-3ed0-4502-b623-31992a73aa14/9",
            "name": "PASSENGER",
            "isDefault": false,
            "proforma": true,
            "fromToType": 0
          },
          {
            "documentType": 1,
            "url": "/documents/1/5/21/fad80a51-3ed0-4502-b623-31992a73aa14/23",
            "name": "NEW PASSENGER INV",
            "isDefault": true,
            "proforma": true,
            "fromToType": 0
          },
          {
            "documentType": 1,
            "url": "/documents/1/5/1/fad80a51-3ed0-4502-b623-31992a73aa14/93",
            "name": "albena_pass_invoice",
            "isDefault": false,
            "proforma": false,
            "fromToType": 0
          },
          {
            "documentType": 5,
            "url": "/documents/1/5/5/fad80a51-3ed0-4502-b623-31992a73aa14/100",
            "name": "oguzhan",
            "isDefault": false,
            "proforma": false,
            "fromToType": 0
          },
          {
            "documentType": 6,
            "url": "/documents/1/5/6/fad80a51-3ed0-4502-b623-31992a73aa14/18",
            "name": "TEST",
            "isDefault": false,
            "proforma": false,
            "fromToType": 0
          },
          {
            "documentType": 6,
            "url": "/documents/1/5/6/fad80a51-3ed0-4502-b623-31992a73aa14/27",
            "name": "NEW AGENCY CONFIRMATION",
            "isDefault": true,
            "proforma": false,
            "fromToType": 0
          }
        ],
        "otherDocuments": [],
        "reservableInfo": {
          "reservable": false
        },
        "paymentFrom": 1,
        "departureCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "departureCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "arrivalCountry": {
          "code": "TR",
          "internationalCode": "TUR",
          "name": "TURKIYE",
          "type": 1,
          "latitude": "11.000000000",
          "longitude": "11.000000000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "5"
        },
        "arrivalCity": {
          "code": "AYT",
          "name": "Antalya TR",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        },
        "createDate": "2022-04-18T18:25:38",
		"changeDate": "2022-09-20T17:03:52.74",
        "additionalFields": {
          "smsLimit": "3",
          "priceChanged": "0",
          "allowSalePriceEdit": "1",
          "allowAgencyCanRes": "1"
        },
        "additionalCode1": "",
        "additionalCode2": "",
        "additionalCode3": "",
        "additionalCode4": "",
        "agencyDiscount": 0,
        "hasAvailablePromotionCode": false
      },
      "services": [
        {
          "orderNumber": 1,
          "note": " .  Check-in hour 14:00-05:30.Car park YES (without additional debit notes).Minimum check-in age 18.Due to the pandemic, many accommodation and service providers may implement processes and policies to help protect the safety of all of us. This may result in the unavailability or changes in certain services and amenities that are normally available from them. More info here https://cutt.ly/MT8BJcv (15/05/2020-30/06/2022) \r\nConditions:\r\n1. Late Check-in. Some hotels do not have 24 hour reception service. If you are going to arrive to property after 08:00 pm or later please contact to hotel and inform them your arrival time. In case you'll arrive to hotel after midnight and didn't inform hotel could result cancelling your room by hotel and no-show.\r\n2. Requests. Bedding types for Double/Twin rooms, Specific room types cannot be guaranteed and are subject to availability at the time of check in. Extra bed depends on bedding type or condition of the hotel , there will be an additional charge for extra beds.\r\n3. Hotel surcharges. Resort fees, city taxes or any other surcharges due to the country regulations must be paid to the hotel directly. Our agency is not responsible for any extra hotel fees.\r\n4. Early check in & Late Check out. Hotels in general check the guests in to property after 02:00 pm and Check Out could be latest 11:00 am.  Hotel could charge extra for the special requests.\r\nSupplier original board:ROOM ONLY\r\nSupplier original room(s): DOUBLE STANDARD",
          "departureCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "departureCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "arrivalCountry": {
            "code": "TR",
            "internationalCode": "TUR",
            "name": "TURKIYE",
            "type": 1,
            "latitude": "11.000000000",
            "longitude": "11.000000000",
            "parentId": "5",
            "countryId": "5",
            "provider": 1,
            "isTopRegion": false,
            "id": "5"
          },
          "arrivalCity": {
            "name": "Antalya TR",
            "type": 2,
            "provider": 0,
            "isTopRegion": false,
            "id": "22177"
          },
          "serviceDetails": {
            "serviceId": "69219",
            "hotelDetail": {
              "address": {
                "addressLines": [
                  null
                ]
              },
              "transferLocation": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "stopSaleGuaranteed": 0,
              "stopSaleStandart": 0,
              "geolocation": {
                "longitude": "30.687310000",
                "latitude": "36.887740000"
              },
              "location": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "country": {
                "code": "TR",
                "name": "TURKIYE",
                "type": 1,
                "latitude": "11.000000000",
                "longitude": "11.000000000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "5"
              },
              "city": {
                "code": "AYT",
                "name": "Antalya TR",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "parentId": "5",
                "countryId": "5",
                "provider": 0,
                "isTopRegion": false,
                "id": "22177"
              },
              "id": "3091",
              "name": "Laguna Suite"
            },
            "night": 7,
            "room": "DOUBLE STANDARD",
            "board": "SADECE ODA",
            "accom": "2 PAX",
            "geoLocation": {
              "longitude": "30.687310000",
              "latitude": "36.887740000"
            }
          },
          "isMainService": true,
          "isRefundable": false,
          "bundle": false,
          "cancellationPolicies": [
            {
              "dueDate": "2022-04-17T00:00:00",
              "price": {
                "amount": 146.29,
                "currency": "EUR"
              },
              "provider": 2
            }
          ],
          "documents": [
            {
              "documentType": 2,
              "url": "/documents/1/5/2/fad80a51-3ed0-4502-b623-31992a73aa14/2",
              "name": "VOUCHER",
              "isDefault": true,
              "proforma": false,
              "fromToType": 0
            }
          ],
          "providerBookingID": "f996460a-9262-4bcb-a228-91364a21d4e4",
          "supplierBookingNumber": "108426",
          "encryptedServiceNumber": "sH4fWNuukB0XROrAzIvw",
          "priceBreakDowns": [],
          "commission": 0,
          "reservableInfo": {
            "reservable": false
          },
          "unit": 1,
          "confirmationStatus": 1,
          "serviceStatus": 0,
          "productType": 2,
          "createServiceTypeIfNotExists": true,
          "id": "1",
          "code": "PXM102576",
          "name": "Laguna Suite",
          "beginDate": "2022-04-18T00:00:00",
          "endDate": "2022-04-25T00:00:00",
          "adult": 2,
          "child": 0,
          "infant": 0,
          "price": {
            "amount": 339,
            "currency": "EUR"
          },
          "includePackage": false,
          "compulsory": false,
          "isExtraService": false,
          "provider": 2,
          "travellers": [
            "50141",
            "50142"
          ],
          "thirdPartyRecord": true,
          "recordId": 69219,
          "additionalFields": {
            "isRefundable": "0",
            "reservableInfo": "{\"Reservable\":false}",
            "isEditable": "0"
          }
        }
      ],
      "paymentDetail": {
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2022-04-18T00:00:00",
            "price": {
              "percent": 100,
              "amount": 339,
              "currency": "EUR"
            },
            "paymentStatus": false
          }
        ]
      },
      "invoices": []
    },
    "status": 1
  }
}
```

-----------------------------
##GetReservationList

You can use the method GetReservationList to obtain reservation lists.

| Update Date: | 29.07.2023                                  |
|-------------------|---------------------------------------------|
| Method Adress     | ```api/bookingservice/getreservationlist``` |
| Method Type       | ```POST```                                  |
| Token Required    | ```YES```                                   |

[Click](../enumarations/#date-criteria-types) to reach the date criteria types.  [Click](../enumarations/#reservation-status) to reach the reservation status.

```json title="Request"
{
  "culture": "en-US",
  "dateCriterias": [
    {
      "type": 1,
      "from": "2021-07-10",
      "to": "2021-07-20"
    }
  ],
  "reservationStatus": 1,
  "limit": 300,
  "pageRowCount":  100,
  "maxIndexNumber": 100,
  "minIndexNumber":0
}
```

```json title="Response"
{
   "header": {
    "requestId": "5adf6ce9-8bdf-4532-8073-0180eca5567e",
    "success": true,
    "responseTime": "2020-10-13T10:23:42.1500006Z",
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
    "reservations": [
      {
        "reservationNumber": "PX277881",
        "encryptedReservationNumber": "dbcbd5af-3ae6-4476-b205-49b5eb00101a",
        "beginDate": "2020-10-16T00:00:00",
        "endDate": "2020-10-17T00:00:00",
        "night": 1,
        "leaderName": "KONTER GÜÇLÜ",
        "agency": "PAXIMUM MUNFERIT SATIS ACENTASI",
        "adult": 1,
        "child": 0,
        "registerDate": "2020-10-13T10:52:00",
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "salePrice": {
          "amount": 220,
          "currency": "TRY"
        },
        "departureCity": {
          "name": "ISTANBUL",
          "provider": 0,
          "isTopRegion": false,
          "id": "6"
        },
        "arrivalCity": {
          "name": "ISTANBUL",
          "provider": 0,
          "isTopRegion": false,
          "id": "6"
        },
        "reservationNote": "",
        "readByOperator": true,
        "readByOperatorUser": "",
        "serviceTypes": "TRANSFER",
        "newComment": false,
        "agencyPayment": 0,
        "discount": 0,
        "agencyCommission": 0,
        "agencyDiscountCommission": 0,
        "agencyEarlyBooking": 0,
        "agencyAmountToPay": 220,
        "passengerAmountToPay": 220,
        "passengerEarlyBooking": 0,
        "passengerBonus": 0,
        "usedPassengerBonus": 0,
        "agencyBonus": 0,
        "usedAgencyBonus": 0,
        "userBonus": 0,
        "usedUserBonus": 0,
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2020-10-13T00:00:00",
            "price": {
              "percent": 100,
              "amount": 220,
              "currency": "TRY"
            },
            "paymentStatus": false
          }
        ],
        "documents": [
          {
            "documentType": 1,
            "url": "/documents/1/13/1/dbcbd5af-3ae6-4476-b205-49b5eb00101a/0",
            "isDefault": false,
            "proforma": false
          }
        ],
        "agencyReservationNumber": "",
        "ticketNos": "",
        "services": [
          {
            "code": "TRF",
            "name": "TRANSFER",
            "productType": 5,
            "serviceType": "TRANSFER",
            "sendSupplier": "W",
            "statConf": 1
          }
        ],
        "hasMessageHistory": false,
        "invoiceStatus": 2,
        "rowNumber": 1,
        "ownSupplier": false,
        "createDate": "2020-10-13T10:53:33.717",
        "confirmationDate": "2020-10-13T10:54:00"
      },
      {
        "reservationNumber": "PX277324",
        "encryptedReservationNumber": "d62fcce7-631f-493b-a874-aa7152369652",
        "beginDate": "2020-10-09T00:00:00",
        "endDate": "2020-10-09T00:00:00",
        "night": 0,
        "leaderName": "TURK MUSTAFA",
        "agency": "PAXIMUM MUNFERIT SATIS ACENTASI",
        "agencyUser": "PAXIMUM MT/ET",
        "adult": 1,
        "child": 0,
        "registerDate": "2020-10-09T17:40:35",
        "reservationStatus": 0,
        "confirmationStatus": 1,
        "paymentStatus": 2,
        "salePrice": {
          "amount": 298.99,
          "currency": "TRY"
        },
        "departureCity": {
          "name": "ISTANBUL",
          "provider": 0,
          "isTopRegion": false,
          "id": "6"
        },
        "arrivalCity": {
          "name": "Antalya",
          "provider": 0,
          "isTopRegion": false,
          "id": "733"
        },
        "reservationNote": "",
        "readByOperator": false,
        "serviceTypes": "FLIGHT",
        "newComment": false,
        "agencyPayment": 0,
        "discount": 0,
        "agencyCommission": 0,
        "agencyDiscountCommission": 0,
        "agencyEarlyBooking": 0,
        "agencyAmountToPay": 298.99,
        "passengerAmountToPay": 298.99,
        "passengerEarlyBooking": 0,
        "passengerBonus": 0,
        "usedPassengerBonus": 0,
        "agencyBonus": 0,
        "usedAgencyBonus": 0,
        "userBonus": 0,
        "usedUserBonus": 0,
        "paymentPlan": [
          {
            "paymentNo": 1,
            "dueDate": "2020-10-09T00:00:00",
            "price": {
              "percent": 100,
              "amount": 298.99,
              "currency": "TRY"
            },
            "paymentStatus": false
          }
        ],
        "documents": [
          {
            "documentType": 1,
            "url": "/documents/1/13/1/d62fcce7-631f-493b-a874-aa7152369652/0",
            "isDefault": false,
            "proforma": false
          }
        ],
        "pnrNo": "UC5WRC",
        "ticketNos": "2352419502755",
        "services": [
          {
            "code": "TK7540",
            "name": "TK7540",
            "productType": 3,
            "serviceType": "FLIGHT",
            "statConf": 1
          }
        ],
        "hasMessageHistory": false,
        "invoiceStatus": 2,
        "rowNumber": 2,
        "ownSupplier": false,
        "createDate": "2020-10-09T17:38:35",
        "confirmationDate": "2020-10-09T17:41:42.397"
      }
    ],
    "totalCount": 200,
    "maxIndexNumber": 200,
    "minIndexNumber": 1
  }
}
```