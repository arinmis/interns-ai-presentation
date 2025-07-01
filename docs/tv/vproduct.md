-----------------------------
#Visa Product

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dignissimos praesentium in natus maxime id ducimus ratione, nam dolores quaerat distinctio sit, blanditiis eum doloremque laborum, alias voluptas debitis fuga!

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
-----------------------------
##GetArrivals Method

```NOT IMPLEMENTED```

-----------------------------
##GetCheckInDates Method

You can use GetCheckinDates for getting all checkin possibilties for hotels without prices.

Update Date:	  |      22.02.2023
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
            "id": "1",
            "name": "VISA 1"
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