----------------
#General

##Service Address

You can use below address for testing services.

http://webservice.tourvisio.com/v2

###Api Response Structure

All service methods have same response structure.

###Response Sample
```
{
   "header":    {
      "requestId": "cc613521-3f4b-4388-9291-17379b46ed4a",
      "success": true,
      "messages": [
        {
         "code": 1,
         "messageType": 2,
         "message": "Operation was completed successfully"
        }
      ]
   },
   "body": {
    // Body goes here
   }
  }
}
```

###Description

* header : Some details about responses. All responses contains this property.
	* requestId : TourVisio Web Service creates a unique id for each request.
	* success : This property will inform you about the result.
	* messages : This property contains more than one message
		* code : Message code. Please click for all message codes.
		* messageType : Message Type, please click for all message types.
		* message : Message content.
* body : The response from target service method.

###Searching Workflow

![img](img/searchingworkflow.jpg)

###Booking Workflow

![img1](img/bookingworkflow.jpg)
-------------------------------------------------------------------------------
##Authentication

We are using bearer token for authentication.
The token must be included in the header of every request Please use Login method with your user credential for getting token.

###Header

```Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBRyI6IkIyQyIsIk1SIjoiR0VSTUFOIiwiT0YiOiJC```

All service methods have same response structure.

###Login Method

You can use this method for hetting token by using your credential.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/authenticationservice/login```  
      Method Type     | 	```POST```
    Token Required    |		```NO```

###Request Sample

```
{
  "Agency" : "B2C", // Agency Code
  "User" : "B2C", // user Code
  "Password" : "123456" // Password
}
```

###Response Sample

```
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBRyI6IkIyQyIsIk1SIjoiR0VSTUFOIiwiT0YiOiJC",
    "userInfo": {
        "id": "1",
        "userName": "B2C USER",
        "agencyName": "B2C AGENCY",
        "marketName": "GERMAN MARKET",
        "operatorName": "SAN TSG",
        "officeName": "BERLIN OFFICE",
        "operatorOffice": "BER",
        "operatorOfficeName": "BERLIN OFFICE",
        "phone": "",
        "mobile": "",
        "email": "",
        "address": "",
        "user": "B2C",
        "agency": "B2C",
        "market": "GERMAN",
        "operator": "SAN",
        "office": "BER"
    }
}
```
-------------------------------------------------------------------------------
##Enumarations

###Message Types

|	Value    |  Description  |
|------------|---------------|
|     1		 | 	   Error     |
|     2		 | 	  Success    |
|     3		 | Information   |
|	  4		 |	  Warning    |

###Message Codes

|	Value    |  			Description           |
|------------|------------------------------------|
|     1		 |Operation was completed successfully|     

###Product Types

|		Value         |    Description   |
|---------------------|------------------|
|		  1			  |   HolidayPackage |  
|		  2			  | 	  Hotel      |
|		  3			  |		 Flight      |
|		  4			  |	   Excursion     |
|		  5			  |	    Transfer     |
|		  6			  |	      Tour       |
|		  7			  |	     Cruise      |
|		  8			  |	   Transport     |
|		  9			  |	     Ferry       |
|		 10			  |	      Visa       |
|		 11			  |AdditionalService |
|		 12			  |	   Insurance     |

###Location Types

|		Value         |    Description   |
|---------------------|------------------|
|		  0			  | 	   None      |  
|		  1			  | 	  Country    |
|		  2			  |		   City      |
|		  3			  |		   Town      |
|		  4			  |		  Village    |

###Media Types

|		Value         |      Description   |
|---------------------|--------------------|
|		  1			  |    HolidayPackage  |
|		  2			  | 	   Hotel       |
|		  3			  |		  Flight       |
|		  4			  | ExcursionMainImage |
|		  5			  |	     Transfer      |
|		  6			  |	      Cruise       |
|		  8			  |	    Transport      |
|		  9			  |	      Ferry        |
|		 10			  |	       Visa        |
|		 11			  | AdditionalService  |
|		 12			  |	    MainService    |
|		 13			  |	      Location     |
|		 14			  |	        Room       |
|		 15			  |	      Renting      |
|		 16			  |	   ExtraService    |
|		 17			  |	     Brouchure     |
|		 18			  |	  ExcursionMedia   |

###File Types

|		Value         |      Description   |
|---------------------|--------------------|
|		  1			  | 	   Image       |
|		  2			  | 	    PDF        |

-------------------------------------------------------------------------------
##Excursion Product

Excursion is a reservation feature that offers travel experts access to comprehensive excursion activities content.

###GetArrivalCountries Method

You can use this method GetArrivalCountries for getting arrival countries for excursion without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivalCountries```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "Product": null
}
```

###Response Sample

```
{
    "countries": [
        {
            "name": "TURKEY",
            "id": "5"
        },
        {
            "name": "GREECE",
            "id": "26"
        }
    ]
}
```

###GetArrivals Method

You can use this method GetArrivals for getting arrival locations for excursions without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivals```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "ArrivalLocations": [
        {
            "Id": "1",
            "Type": 5
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "locations": [
        {
            "name": "ANTALIA",
            "type": 2,
            "parentId": "5",
            "isProductLocation": true,
            "id": "7"
        }
    ]
}
```

###GetCheckInDates Method

You can use this method GetCheckInDates for getting all checkin dates for excursions without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetCheckInDates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "Product": null,
    "IncludeSubLocations": true,
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ]
}
```

###Response Sample

```
{
    "dates": [
        "2021-09-23T00:00:00+03:00"
    ]
}
```

###GetProducts Method

You can use this method GetProducts for getting excursions without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProducts```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "ServiceType": null,
    "Product": null,
    "CheckIn": null,
    "CheckInTo": null,
    "IncludeSubLocations": true,
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ]
}
```

###Response Sample

```
{
    "products": [
        {
            "id": "1",
            "name": "PAMUKALE CITY TOUR"
        }
    ]
}
```

###GetProductInfo Method

You can use this method GetProductInfo for getting detailed excursion information (presentation text, media files, etc.) without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProductInfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "Product": "1"
}
```

###Response Sample

```
{
    "excursion": {
        "textCategories": [],
        "mediaFiles": [
            {
                "fileType": 1,
                "url": "/media/images/product/1/4/2/1/pamukale_city_tour_1.jpg",
                "orderNumber": 0
            },
            {
                "fileType": 1,
                "url": "/media/images/product/1/4/2/2/pamukale_city_tour_2.jpg",
                "orderNumber": 0
            },
            {
                "fileType": 1,
                "url": "/media/images/product/1/4/2/3/pamukale_city_tour_3.jpg",
                "orderNumber": 0
            },
            {
                "fileType": 1,
                "url": "/media/images/product/1/4/2/4/pamukale_city_tour_4.jpg",
                "orderNumber": 0
            },
            {
                "fileType": 1,
                "url": "/media/images/product/1/4/2/5/pamukale_city_tour_5.jpg",
                "orderNumber": 0
            }
        ],
        "itenaries": [],
        "categories": [
            {
                "id": "1",
                "name": "PAMUKALE CITY TOUR"
            },
            {
                "id": "2",
                "name": "PAMUKALE CITY TOUR"
            }
        ],
        "thumbnail": "/media/images/product/1/4/1/1/pamukale_city_tour.jpg",
        "id": "1",
        "name": "PAMUKALE CITY TOUR"
    }
}
```

###PriceSearch Method

You can use PriceSearch for getting excursion prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/PriceSearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 4,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2021-01-01",
    "ServiceType": null,
    "Products": [],
    "ProductCategories": [],
    "IncludeSubLocations": true,
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Adult": 2,
    "ChildAges": [
        1,
        2
    ],
    "ShowAllotment": false,
    "CheckAllotment": false
}
```

###Response Sample

```
{
    "excursions": [
        {
            "geolocation": {
                "longitude": 39.25568,
                "latitude": 39.25556
            },
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "offerId": "1-4--0-2-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 35,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/4/1/2/aspendos.jpg",
            "id": "2",
            "name": "ASPENDOS"
        },
        {
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "DENIZLI",
                        "id": "21"
                    },
                    "offerId": "1-4--0-7-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 35,
                        "currency": "EUR"
                    }
                },
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "offerId": "1-4--0-3-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 35,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/4/1/3/myra_tour.jpg",
            "id": "3",
            "name": "MYRA TOUR"
        },
        {
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "DENIZLI",
                        "id": "21"
                    },
                    "offerId": "1-4--0-5-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 13,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/4/1/5/pamukkale_tour.jpg",
            "id": "5",
            "name": "PAMUKKALE TOUR"
        },
        {
            "categories": [
                {
                    "id": "1",
                    "name": "ACTION & SPORT"
                },
                {
                    "id": "2",
                    "name": "TRAVEL"
                }
            ],
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "offerId": "1-4--0-1-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 35,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/4/1/1/pamukale_city_tour.jpg",
            "id": "1",
            "name": "PAMUKALE CITY TOUR"
        },
        {
            "categories": [
                {
                    "id": "1",
                    "name": "ACTION & SPORT"
                },
                {
                    "id": "3",
                    "name": "SIGHTSEEING"
                }
            ],
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "town": {
                        "name": "KEMER",
                        "id": "17"
                    },
                    "village": {
                        "name": "TEKIROVA",
                        "id": "1032"
                    },
                    "offerId": "1-4--0-8-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 15,
                        "currency": "EUR"
                    }
                }
            ],
            "id": "6",
            "name": "SAKLIKENT"
        },
        {
            "categories": [
                {
                    "id": "3",
                    "name": "SIGHTSEEING"
                }
            ],
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "offerId": "1-4--0-4-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 35,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/4/1/4/world_pool.jpg",
            "id": "4",
            "name": "WORLD POOL"
        }
    ],
    "productCount": 6
}
```

##Hotel Product

Access real-time, comprehensive hotel rates, availability and booking options with Hotels.

###GetArrivalCountries Method

You can use GetArrivalCountries for getting all hotels locations without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivalCountries```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
  "ProductType": 2
}
```

###Response Sample

```
{
    "countries": [
        {
            "internationalCode": "AD",
            "name": "Andorra",
            "id": "AD"
        }
    ]
}
```

###GetArrivals Method

You can use GetArrivalCountries for getting all hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivals```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 2,
    "ArrivalLocations": [
        {
            "Id": "TR",
            "Type": 1
        }
    ]
}
```

###Response Sample

```
{
    "locations": [
        {
            "name": "Turkish Riviera",
            "id": "10828"
        }
    ]
}
```

###GetCheckinDates Method

You can use GetCheckinDates for getting all checkin possibilties for hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetCheckInDates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
	"ProductType": 2
```

###Response Sample

```
{
    "dates": [
        "2021-09-22T00:00:00+03:00"
    ]
}
```

###GetNights Method

You can use GetNights for getting all night possibilties for hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetNights```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 2
}
```

###Response Sample

```
{
    "nights": [
        1,
        2,
        20,
        30
    ]
}
```

###GetProducts

You can use GetProducts for getting hotel names without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProducts```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 2,
    "ArrivalLocations": [
        {
            "Id": "TR",
            "Type": 1
        }
    ]
}
```

###Response Sample

```
{
    "products": [
        {
            "id": "107244",
            "name": "Almera Park Apart"
        }
    ]
}
```

###GetProductInfo

You can use GetProductInfo for getting hotel media information without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductInfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 2,
    "Product": "104068"
}
```

###Response Sample

```
{
    "hotel": {
        "seasons": [
            {
                "name": "General",
                "textCategories": [
                    {
                        "name": "General",
                        "presentations": [
                            {
                                "textType": 0,
                                "text": "The city hotel is located in the Lara district, approximately 8 km east of the city centre and 4 km from the beach, though the cliffs above the Mediterranean are only about 80 metres away. Shops, restaurants, cafés and bars can be found within about 10-15 minutes’ walk from the hotel. Area attractions include the Antalya Museum and the Düden Waterfalls. Antalya Airport is about 8 km away."
                            }
                        ]
                    }
                ],
                "facilityCategories": [
                    {
                        "name": "General",
                        "facilities": [
                            {
                                "name": "Air conditioning"
                            }
                        ]
                    }
                ],
                "mediaFiles": [
                    {
                        "fileType": 1,
                        "url": "/media/images/product/2/2/2/105841-021128a_hb_a_002/green_beyza.jpg"
                    }
                ]
            }
        ],
        "geolocation": {
            "longitude": 30.77078,
            "latitude": 36.84889
        },
        "stars": 3,
        "rating": 3.875,
        "country": {
            "name": "Turkey",
            "id": "TR"
        },
        "city": {
            "name": "Antalya",
            "id": "23494"
        },
        "thumbnail": "/media/images/product/2/2/2/105841-021128a_hb_a_002/green_beyza.jpg",
        "id": "105841",
        "name": "Green Beyza"
    }
}
```

###PriceSearch Method

You can use PriceSearch for getting hotel prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/PriceSearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
   "ProductType": 2,
   "CheckIn": "2021-01-01",
   "Night": 1,
   "Products": null,
   "ArrivalLocations": [
      {
         "Id": "10830"
      }
   ],
   "RoomCriteria": [
      {
         "Adult": 2,
         "ChildAges": []
      },
      {
         "Adult": 1,
         "ChildAges": []
      }
   ],
   "Currency": "EUR",
   "CheckAllotment": false,
   "CheckStopSale": false,
   "CustomerNationality": "TR",
   "GetOnlyDiscountedPrice": false,
   "GetOnlyBestOffer": false
}
```

###Response Sample

```
{
    "hotels": [
        {
            "geolocation": {
                "longitude": 28.97556,
                "latitude": 41.00377
            },
            "stars": 3,
            "rating": 3.7,
            "themes": [
                {
                    "id": "1",
                    "name": "Cityhotel"
                }
            ],
            "facilities": [
                {
                    "id": "1",
                    "name": "Klimaanlage"
                }
            ],
            "country": {
                "internationalCode": "TR",
                "name": "Turkey"
            },
            "city": {
                "name": "Istanbul",
                "id": "23472"
            },
            "offers": [
                {
                    "night": 1,
                    "isAvailable": true,
                    "rooms": [
                        {
                            "roomId": "0",
                            "roomName": "IQSP#1411162a-0e29-4d20-9c17-eae7d36908d6:SINGLE ECONOMY",
                            "boardId": "14",
                            "boardName": "Continental Breakfast",
                            "travellers": [
                                {
                                    "type": 1,
                                    "age": 0,
                                    "nationality": "DE"
                                }
                            ]
                        }
                    ],
                    "expiresOn": "2021-09-22T13:15:08.2554506Z",
                    "offerId": "2-2-ed6d494b-3de1-4266-b3fc-e696b65f9537",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 81.6,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/2/2/2/103606-1399124_0x0/istanbul_holiday.jpg",
            "description": {
                "text": "Das Hotel genießt eine herrliche Lage im Viertel Sultanahmet in Istanbul. Die Blaue Moschee lässt sich schon nach rund 250 m erreichen, während das Hagia Sophia Museum und der Topkapi Palast rund 10 bis 15 min zu Fuß entfernt gelegen sind. In der Nähe des Hotels gibt es Restaurants, Cafés und einige Bars. Nach etwa 350 m erreichen die Gäste Anschlüsse an die öffentlichen Verkehrsmittel, mit denen sie den Rest der Stadt erkunden können. Einkaufsmöglichkeiten sind etwa 700 m vom Hotel entfernt gelegen, zum Großen Basar sind es etwa 1,1 km. Bis zum Bahnhof Sirkeci sind es etwa 1,6 km, zur Metrostation Aksaray etwa 2,7 km, zur Istiklal Straße mit ihren Nachtlokalen etwa 4,2 km und zum Taksim-Platz rund 5 km. Der internationale Flughafen Istanbul Atatürk liegt ungefähr 18 km entfernt, der Flughafen Sabiha Gökçen kann nach ca. 46 km erreicht werden."
            },
            "id": "103606",
            "name": "Istanbul Holiday"
        }
    ],
    "productCount": 195
}
```

##Transfer Product

//Introduction.

###GetArrivalCountries Method

You can use GetArrivalCountries for getting all hotels locations without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivalCountries```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceType": null,
    "Direction": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01"
}
```

###Response Sample

```
{
    "countries": [
        {
            "name": "TURKEY",
            "id": "5"
        },
        {
            "name": "EGYPT",
            "id": "13"
        }
    ]
}
```

###GetArrivals Method

You can use GetArrivalCountries for getting all hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivals```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceType": null,
    "Direction": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "IncludeSubLocations": true,
    "DepartureLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "locations": [
        {
            "name": "ANTALIA",
            "type": 2,
            "parentId": "5",
            "isProductLocation": true,
            "id": "7"
        }
    ]
}
```

###GetCheckinDates Method

You can use GetCheckinDates for getting all checkin possibilties for hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetCheckInDates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceType": null,
    "Direction": null,
    "IncludeSubLocations": true,
    "DepartureLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "dates": [
        "2021-09-22T00:00:00+03:00"
    ]
}
```

###GetNights Method

```NOT IMPLEMENTED```

###GetProducts

You can use GetProducts for getting hotel names without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProducts```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceTypes": null,
    "Direction": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "IncludeSubLocations": true,
    "DepartureLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "products": [
        {
            "id": "4",
            "name": "ALI TRANSFER"
        }
    ]
}
```

###GetProductInfo

You can use GetProductInfo for getting hotel media information without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductInfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "Product": "1"
}
```

###Response Sample

```
{
    "transfer": {
        "type": {
            "id": "1",
            "name": "GROUP TRANSFER"
        },
        "direction": {
            "id": "R",
            "name": "Round Trip"
        },
        "thumbnail": "/media/images/product/1/5/1/1/group_trf.jpg",
        "id": "1",
        "name": "GROUP TRF"
    }
}
```

###PriceSearch Method

You can use PriceSearch for getting hotel prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/PriceSearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceTypes": null,
    "Direction": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2021-01-01",
    "IncludeSubLocations": true,
    "DepartureLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Products": []
}
```

###Response Sample

```
{
    "transfers": [
        {
            "type": {
                "id": "1",
                "name": "GROUP TRANSFER"
            },
            "direction": {
                "id": "R",
                "name": "Round Trip"
            },
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "minimumPax": 1,
                    "maximumPax": 99,
                    "departureCity": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "city": {
                        "name": "ANTALIA",
                        "latitude": 36.89682,
                        "longitude": 30.7093487,
                        "id": "7"
                    },
                    "offerId": "1-4--3-20200101-",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 0,
                        "currency": "EUR"
                    }
                }
            ],
            "thumbnail": "/media/images/product/1/5/1/1/group_trf.jpg",
            "description": {},
            "id": "1",
            "name": "GROUP TRF"
        }
    ],
    "productCount": 3
}
```

##Insurance Product

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nisi, voluptate aut saepe inventore provident aliquid quos suscipit pariatur neque doloribus placeat, soluta. Veritatis excepturi, harum accusantium rerum exercitationem debitis.

###GetArrivalCountries Method

You can use this method GetArrivalCountries for getting arrival countries for excursion without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivalCountries```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 12,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01"
}
```

###Response Sample

```
{
    "countries": [
        {
            "name": "TURKEY",
            "id": "5"
        },
        {
            "name": "ITALY",
            "id": "6"
        },
        {
            "name": "EGYPT",
            "id": "13"
        }
    ]
}
```

###GetArrivals Method

```NOT IMPLEMENTED```

###GetCheckInDates Method

You can use this method GetCheckInDates for getting all checkin dates for excursions without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetCheckInDates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 12,
    "ServiceType": null,
    "ArrivalLocations": [
        {
            "Type": 1,
            "Id": "5"
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "dates": [
        "2021-09-22T00:00:00+03:00"
    ]
}
```

###GetProducts Method

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam dolore, qui aliquid praesentium tenetur! Harum ad fugiat, consequuntur maiores totam. Eligendi perferendis quos ut, dignissimos provident maiores quaerat, unde.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProducts```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 12,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "ArrivalLocations": [
        {
            "Type": 1,
            "Id": "5"
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "products": [
        {
            "id": "2",
            "name": "CANCELLATION"
        },
        {
            "id": "1",
            "name": "TRAVEL INSURANCE"
        }
    ]
}
```

###GetProductInfo Method

You can use this method GetProductInfo for getting detailed excursion information (presentation text, media files, etc.) without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProductInfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
  "ProductType": 12,
  "Product": "1",
}
```

###Response Sample

```
{
    "insurance": {
        "mediaFiles": [
            {
                "fileType": 0,
                "url": "/media/images/product/1/12/2/2/travel_insurance.jpg",
                "orderNumber": 0
            }
        ],
        "presentations": [
            {
                "textType": 1,
                "text": "<p>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ullamcorper tellus, ut sagittis ipsum accumsan et. Nulla vulputate luctus neque quis sodales.</p>"
            }
        ],
        "type": {
            "id": "0"
        },
        "id": "1",
        "name": "TRAVEL INSURANCE"
    }
}
```

###PriceSearch Method

You can use PriceSearch for getting excursion prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/PriceSearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 12,
    "ServiceTypes": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2021-01-01",
    "ArrivalLocations": [
        {
            "Type": 1,
            "Id": "5"
        }
    ],
    "Products": [],
    "Adult": 2,
    "ChildAges": [
        1,
        2
    ],
    "Night": null,
    "Currency": null
}
```

###Response Sample

```
{
    "insurances": [
        {
            "type": {
                "id": "0"
            },
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "offerId": "1-12--1-20200101-2-1-2",
                    "checkIn": "2021-01-01T00:00:00",
                    "price": {
                        "amount": 100,
                        "currency": "EUR"
                    }
                }
            ],
            "description": {
                "text": "<p>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ullamcorper tellus, ut sagittis ipsum accumsan et. Nulla vulputate luctus neque quis sodales.</p>"
            },
            "id": "1",
            "name": "TRAVEL INSURANCE"
        }
    ],
    "description": {
        "text": "<p>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ullamcorper tellus, ut sagittis ipsum accumsan et. Nulla vulputate luctus neque quis sodales.</p>"
    },
    "id": "2",
    "name": "CANCELLATION"
}
```

##Visa Product

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dignissimos praesentium in natus maxime id ducimus ratione, nam dolores quaerat distinctio sit, blanditiis eum doloremque laborum, alias voluptas debitis fuga!

###GetArrivalCountries Method

You can use GetArrivalCountries for getting all hotels locations without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetArrivalCountries```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 10,
    "ServiceType": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01"
}
```

###Response Sample

```
{
    "countries": [
        {
            "name": "TURKEY",
            "id": "5"
        }
    ]
}
```

###GetArrivals Method

```NOT IMPLEMENTED```

###GetCheckInDates Method

You can use GetCheckinDates for getting all checkin possibilties for hotels without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetCheckInDates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 10,
    "ServiceType": null,
    "ArrivalLocations": [
        {
            "Type": 1,
            "Id": "5"
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "dates": [
        "2021-09-22T00:00:00+03:00"
    ]
}
```

###GetNights Method

```NOT IMPLEMENTED```

###GetProducts

You can use GetProducts for getting hotel names without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/GetProducts```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 5,
    "ServiceTypes": null,
    "Direction": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "IncludeSubLocations": true,
    "DepartureLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "ArrivalLocations": [
        {
            "Id": "5",
            "Type": 1
        }
    ],
    "Product": null
}
```

###Response Sample

```
{
    "products": [
        {
            "id": "1",
            "name": "VISA 1"
        }
    ]
}
```

###GetProductInfo

You can use GetProductInfo for getting hotel media information without prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductInfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 10,
    "Product": "1"
}
```

###Response Sample

```
{
    "visa": {
        "id": "1",
        "name": "VISA 1"
    }
}
```

###PriceSearch Method

You can use PriceSearch for getting hotel prices.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/PriceSearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "ProductType": 10,
    "ServiceTypes": null,
    "CheckIn": "2021-01-01",
    "CheckInTo": "2031-01-01",
    "ArrivalLocations": [
        {
            "Type": 1,
            "Id": "5"
        }
    ],
    "Products": [],
    "Adult": 2,
    "ChildAges": [
        1,
        2
    ],
    "Currency": null
}
```

###Response Sample

```
{
    "visas": [
        {
            "type": {},
            "offers": [
                {
                    "country": {
                        "name": "TURKEY",
                        "id": "5"
                    },
                    "offerId": "1-10--1-20160921-2-1-2",
                    "checkIn": "2021-09-21T00:00:00",
                    "price": {
                        "amount": 400,
                        "currency": "EUR"
                    }
                }
            ],
            "id": "1",
            "name": "VISA 1"
        }
    ],
    "productCount": 1
}
```

##Booking

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit laborum, impedit, sequi nihil minima aliquid saepe cupiditate, quos quibusdam unde harum quisquam cumque modi rem dignissimos illo consectetur dolorem? Odio.

###BeginTransaction Method

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```/api/bookingservice/BeginTransaction```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "OfferIds": [
        "2-2-5dbefb4c-9351-471f-8142-123431463417",
        "1-4--1-40-20160903-2"
    ]
}
```

###Response Sample

```
{
    "transactionId": "5a77b56d-8b0f-419f-a93f-5c0870ef1b70",
    "reservationData": {
        "travellers": [
            {
                "travellerId": "1",
                "type": 1,
                "title": 1,
                "name": "",
                "surname": "",
                "isLeader": true,
                "birthDate": "0001-01-01T00:00:00",
                "age": 0,
                "email": "",
                "phone": "",
                "address": "",
                "postalCode": "",
                "cityName": "",
                "countryName": "",
                "nationality": "",
                "services": [
                    {
                        "type": 4,
                        "id": "16"
                    },
                    {
                        "type": 2,
                        "id": "103533"
                    }
                ]
            },
            {
                "travellerId": "2",
                "type": 1,
                "title": 2,
                "name": "",
                "surname": "",
                "isLeader": false,
                "birthDate": "0001-01-01T00:00:00",
                "age": 0,
                "nationality": "",
                "services": [
                    {
                        "type": 4,
                        "id": "16"
                    },
                    {
                        "type": 2,
                        "id": "103533"
                    }
                ]
            },
            {
                "travellerId": "3",
                "type": 1,
                "title": 1,
                "isLeader": false,
                "birthDate": "0001-01-01T00:00:00",
                "age": 0,
                "nationality": "",
                "services": [
                    {
                        "type": 2,
                        "id": "103533"
                    }
                ]
            }
        ],
        "reservationInfo": {
            "bookingNumber": "dbe9bd08-9",
            "beginDate": "2021-09-03T00:00:00",
            "endDate": "2021-09-03T00:00:00",
            "salePrice": {
                "amount": 399.88,
                "currency": "EUR"
            },
            "passengerAmountToPay": {
                "amount": 399.88,
                "currency": "EUR"
            },
            "agencyAmountToPay": {
                "amount": 399.88,
                "currency": "EUR"
            },
            "discount": {
                "amount": 0,
                "currency": "EUR"
            },
            "reservationStatus": 0,
            "confirmationStatus": 0,
            "documents": []
        },
        "services": [
            {
                "arrivalCountry": {
                    "id": "107"
                },
                "arrivalCity": {
                    "id": "107"
                },
                "serviceDetails": {
                    "thumbnail": "/media/images/product/1/4/1/16/cliffs_of_moher_tagestour.jpg",
                    "duration": "",
                    "geoLocation": {
                        "longitude": -6.260945,
                        "latitude": 53.3437767
                    }
                },
                "cancellationPolicies": [],
                "documents": [],
                "productType": 4,
                "id": "16",
                "name": "Cliffs of Moher Tagestour",
                "beginDate": "2021-09-03T00:00:00",
                "endDate": "2021-09-04T00:00:00",
                "adult": 2,
                "child": 0,
                "price": {
                    "amount": 100,
                    "currency": "EUR"
                },
                "includePackage": false,
                "compulsory": false,
                "isExtraService": false,
                "supplier": "EXTREMEIRE",
                "provider": 1,
                "travellers": [
                    "1",
                    "2"
                ],
                "thirdPartyRecord": false
            },
            {
                "arrivalCountry": {
                    "id": "278"
                },
                "arrivalCity": {
                    "id": "278"
                },
                "serviceDetails": {
                    "thumbnail": "/media/images/product/2/2/2/103533-533418/fors.jpg",
                    "night": 1,
                    "room": "IQSP#1411162a-0e29-4d20-9c17-eae7d36908d6:Twin Room",
                    "board": "English Breakfast",
                    "star": "3"
                },
                "cancellationPolicies": [],
                "documents": [],
                "productType": 2,
                "id": "103533",
                "name": "Fors",
                "beginDate": "2021-09-06T00:00:00",
                "endDate": "2021-09-07T00:00:00",
                "adult": 2,
                "child": 0,
                "price": {
                    "amount": 49.98,
                    "currency": "EUR"
                },
                "includePackage": false,
                "compulsory": false,
                "isExtraService": false,
                "supplier": "PXMSUP01",
                "provider": 2,
                "travellers": [
                    "1",
                    "2"
                ],
                "thirdPartyRecord": true
            },
            {
                "arrivalCountry": {
                    "id": "278"
                },
                "arrivalCity": {
                    "id": "278"
                },
                "serviceDetails": {
                    "thumbnail": "/media/images/product/2/2/2/103533-533418/fors.jpg",
                    "night": 1,
                    "room": "IQSP#1411162a-0e29-4d20-9c17-eae7d36908d6:Single Room",
                    "board": "English Breakfast",
                    "star": "3"
                },
                "cancellationPolicies": [],
                "documents": [],
                "productType": 2,
                "id": "103533",
                "name": "Fors",
                "beginDate": "2021-09-06T00:00:00",
                "endDate": "2021-09-07T00:00:00",
                "adult": 1,
                "child": 0,
                "price": {
                    "amount": 49.98,
                    "currency": "EUR"
                },
                "includePackage": false,
                "compulsory": false,
                "isExtraService": false,
                "supplier": "PXMSUP01",
                "provider": 2,
                "travellers": [
                    "3"
                ],
                "thirdPartyRecord": true
            }
        ]
    }
}
```

###SetReservationInfo Method

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime reprehenderit ad aspernatur facere commodi cupiditate saepe obcaecati beatae quam voluptatibus deleniti ipsa consequatur iure praesentium, deserunt, sint odio. Fugiat, earum.

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```api/bookingservice/setreservationinfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "TransactionId": "b903e349-d100-45cb-8b79-1fde9ea1ede8",
    "Travellers": [
        {
            "BirthDate": "1991-08-28T00:00:00",
            "Email": "test.test@santsg.com",
            "Phone": null,
            "Mobile": "0 (000) 000 00 00",
            "Nationality": "TUR",
            "PassportSerial": null,
            "PassportNumber": null,
            "PassportExpireDate": null,
            "PassportGivenName": null,
            "IdentityNumber": "11122556988",
            "TravellerNo": "1",
            "Type": 1,
            "Title": 1,
            "Name": "Koray",
            "Surname": "UYSAL",
            "IsLeader": true
        }
    ],
    "ReservationNote": ""
}
```

###Response Sample

```
{
    "header": {
        "requestId": "76e6d559-46a9-4865-b27c-295a17980a05",
        "success": true,
        "messages": [
            {
                "code": 1,
                "messageType": 2,
                "message": "Operation was completed successfully"
            }
        ]
    },
    "body": {}
}
```

###GetReservationDetail Method

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quos nisi aut libero magnam unde reiciendis velit perferendis debitis adipisci obcaecati quis, quo alias placeat incidunt, aspernatur possimus ducimus officiis?

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```api/bookingservice/getreservationdetail```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "TransactionId": "8301c1ae-4159-4e65-9819-ab7d2e703f61",
    "ReservationNumber": null
}
```

###Response Sample

```
{
    "header": {
        "requestId": "76e6d559-46a9-4865-b27c-295a17980a05",
        "success": true,
        "messages": [
            {
                "code": 1,
                "messageType": 2,
                "message": "Operation was completed successfully"
            }
        ]
    },
    "body": {
        "ReservationData": {
            "Travellers": [
                {
                    "BirthDate": "0001-01-01T00:00:00",
                    "Email": null,
                    "Phone": null,
                    "Mobile": null,
                    "Nationality": "0",
                    "PassportSerial": null,
                    "PassportNumber": null,
                    "PassportExpireDate": null,
                    "PassportGivenName": null,
                    "IdentityNumber": null,
                    "TravellerNo": "1",
                    "Type": 1,
                    "Title": 1,
                    "Name": "Koray",
                    "Surname": "UYSAL",
                    "IsLeader": true
                }
            ],
            "ReservationInfo": {
                "BookingNumber": "21471fd4-6",
                "PartnerBookingNumber": null,
                "DepartureCity": {
                    "InternationalCode": null,
                    "Name": null,
                    "Type": 2,
                    "Latitude": null,
                    "Longitude": null,
                    "ParentId": null,
                    "Id": "",
                    "Code": null
                },
                "ArrivalCity": {
                    "InternationalCode": null,
                    "Name": null,
                    "Type": 2,
                    "Latitude": null,
                    "Longitude": null,
                    "ParentId": null,
                    "Id": "90",
                    "Code": null
                },
                "BeginDate": "0001-01-01T00:00:00",
                "EndDate": "0001-01-01T00:00:00",
                "NetPrice": {
                    "Amount": 0.0,
                    "Currency": null
                },
                "SalePrice": {
                    "Amount": 0.0,
                    "Currency": ""
                },
                "TotalAmount": {
                    "Amount": 0.0,
                    "Currency": ""
                },
                "SupplierPayAmount": {
                    "Amount": 0.0,
                    "Currency": ""
                },
                "ReservationStatus": 4,
                "ConfirmationStatus": 0
            },
            "Services": [
                {
                    "DepartureLocation": {
                        "Id": "91",
                        "Code": null
                    },
                    "ArrivalLocation": {
                        "Id": "91",
                        "Code": null
                    },
                    "HotelServiceDetails": null,
                    "ExcursionServiceDetails": null,
                    "ExtraServices": [],
                    "ServiceType": 4,
                    "ServiceId": "1009",
                    "Service": "MKTEST",
                    "BeginDate": "2021-08-26T00:00:00",
                    "EndDate": "2021-08-26T00:00:00",
                    "Adult": 2,
                    "Child": 2,
                    "NetPrice": {
                        "Amount": 20.0,
                        "Currency": "EUR"
                    },
                    "SalePrice": {
                        "Amount": 10.0,
                        "Currency": "EUR"
                    },
                    "IncludePackage": false,
                    "Compulsory": false,
                    "Supplier": "ETSUK",
                    "Travellers": []
                }
            ]
        }
    }
}
```

###SaveTransaction Method

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, totam repellat ad autem delectus minus veniam iste laudantium nisi exercitationem harum, tempore voluptas reprehenderit debitis quidem earum itaque natus facere!

Update Date |      22.02.2023
----------------------|--------------------
     Method Adress    | ```api/bookingservice/savetransaction```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
    "TransactionId": "8301c1ae-4159-4e65-9819-ab7d2e703f61",
    "Name": "Test"
}
```

###Response Sample

```
{
    "header": {
        "requestId": "76e6d559-46a9-4865-b27c-295a17980a05",
        "success": true,
        "messages": [
            {
                "code": 1,
                "messageType": 2,
                "message": "Operation was completed successfully"
            }
        ]
    },
    "body": {}
}
```
