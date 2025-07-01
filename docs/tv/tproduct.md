-----------------------------
#Transfer Product

	//Introduction
-----------------------------
##GetArrivalCountries Method

You can use GetArrivalCountries for getting all hotels locations without prices.

Update Date:	  |      22.02.2023
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
-----------------------------
##GetArrivals Method

You can use GetArrivalCountries for getting all hotels without prices.

Update Date:	  |      22.02.2023
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
-----------------------------
##GetCheckinDates Method

You can use GetCheckinDates for getting all checkin possibilties for hotels without prices.

Update Date:	  |      22.02.2023
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
        "2016-09-22T00:00:00+03:00"
    ]
}
```
-----------------------------
##GetNights Method

```NOT IMPLEMENTED```

-----------------------------

##GetProducts Method

You can use GetProducts for getting hotel names without prices.

Update Date:	  |      22.02.2023
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
-----------------------------
##GetProductInfo Method

You can use GetProductInfo for getting hotel media information without prices.

Update Date:	  |      22.02.2023
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
-----------------------------
##PriceSearch Method

You can use PriceSearch for getting hotel prices.

Update Date:	  |      22.02.2023
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