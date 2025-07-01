-----------------------------
#Insurance Product

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nisi, voluptate aut saepe inventore provident aliquid quos suscipit pariatur neque doloribus placeat, soluta. Veritatis excepturi, harum accusantium rerum exercitationem debitis.

-----------------------------
##GetArrivalCountries Method

You can use this method GetArrivalCountries for getting arrival countries for excursion without prices.

Update Date: 	  |      22.02.2023
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
-----------------------------
##GetArrivals Method

```NOT IMPLEMENTED```

-----------------------------
##GetCheckInDates Method

You can use this method GetCheckInDates for getting all checkin dates for excursions without prices.

Update Date:	  |      22.02.2023
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
        "2016-09-22T00:00:00+03:00"
    ]
}
```

-----------------------------
##GetProducts Method

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quam dolore, qui aliquid praesentium tenetur! Harum ad fugiat, consequuntur maiores totam. Eligendi perferendis quos ut, dignissimos provident maiores quaerat, unde.

Update Date:	  |      22.02.2023
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

-----------------------------
##GetProductInfo Method

You can use this method GetProductInfo for getting detailed excursion information (presentation text, media files, etc.) without prices.

Update Date:	  |      22.02.2023
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

-----------------------------
##PriceSearch Method

You can use PriceSearch for getting excursion prices.

Update Date:	  |      22.02.2023
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