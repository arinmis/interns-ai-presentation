-----------------------------
#Excursion Product

Excursion is a reservation feature that offers travel experts access to comprehensive excursion activities content.

-----------------------------
##GetArrivalCountries Method

You can use this method GetArrivalCountries for getting arrival countries for excursion without prices.

Update Date	  |      22.10.2023
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

-----------------------------
##GetArrivals Method

You can use this method GetArrivals for getting arrival locations for excursions without prices.

Update Date      |      22.02.2023
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

-----------------------------
##GetCheckInDates Method

You can use this method GetCheckInDates for getting all checkin dates for excursions without prices.

Update Date      |      22.02.2023
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


-----------------------------
##GetProducts Method

You can use this method GetProducts for getting excursions without prices.

Update Date      |      22.02.2023
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


-----------------------------
##GetProductInfo Method

You can use this method GetProductInfo for getting detailed excursion information (presentation text, media files, etc.) without prices.

Update Date	  |      22.02.2023
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

-----------------------------
##PriceSearch Method

You can use PriceSearch for getting excursion prices.

Update Date	  |      22.02.2023
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