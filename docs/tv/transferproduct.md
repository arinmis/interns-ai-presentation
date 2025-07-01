-----------------------------
#Transfer

Access real-time, comprehensive transfer rates, availability and booking options with Transfers.

![img](img/transfer.png)

-----------------------------
##GetAdditionalPriceSearchParameters Method

| Update Date | 11.07.2023                                                  |
| ---------------- | ----------------------------------------------------------- |
| Method Adress    | ```/api/lookupservice/getadditionalpricesearchparameters``` |
| Method Type      | ```POST```                                                  |
| Token Required   | ```YES```                                                   |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productTypes": [
    5
  ],
  "getDirections": true
}
```

###Response Sample

```
{
   "header": {
    "requestId": "41950849-59ca-415d-979b-53849a357f40",
    "success": true,
    "responseTime": "2021-10-11T06:58:00.1744954Z",
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
    "directions": [
      {
        "productType": 5,
        "name": "Forward",
        "id": "1",
        "code": "F"
      },
      {
        "productType": 5,
        "name": "Backward",
        "id": "2",
        "code": "B"
      },
      {
        "productType": 5,
        "name": "RoundTrip",
        "id": "3",
        "code": "R"
      }
    ]
  }  
}
```

-----------------------------
##GetAvailableThirdPartyProviders Method

| Update Date | 11.07.2023                                                  |
| ---------------- | ----------------------------------------------------------- |
| Method Adress    | ```/api/commonservice/invoke``` |
| Method Type      | ```POST```                                                  |
| Token Required   | ```YES```                                                   |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "target": "GetAvailableThirdPartyProviders",
  "provider": 2,
  "param": {
    "productType": 5
  }
}
```

###Response Sample

```
{
  "header": {
    "requestId": "c0406211-adeb-4fd3-bd64-1d452a32cdc9",
    "success": true,
    "responseTime": "2021-10-11T17:45:47.7407114Z",
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
        "name": "PXDRIVE",
        "id": "19291ac5-33a8-4cde-894c-49e5df8d0147",
        "code": "PXDRIVE"
      }
    ]
  }
}
```

-----------------------------
##GetDepartures Method

| Update Date | 11.07.2023                              |
| ---------------- | --------------------------------------- |
| Method Adress    | ```/api/productservice/getdepartures``` |
| Method Type      | ```POST```                              |
| Token Required   | ```YES```                               |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "direction": "1"
}
```

###Response Sample

```
{
    "header": {
    "requestId": "492d5634-23de-4dfa-8e21-fd5949efd487",
    "success": true,
    "responseTime": "2021-10-11T06:58:00.4203993Z",
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
    "locations": [
      {
        "code": "TR",
        "name": "",
        "internationalName": "TURKEY",
        "type": 1,
        "latitude": "11.000000000",
        "longitude": "11.000000000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": false,
        "provider": 1,
        "isTopRegion": false,
        "id": "5"
      },
      {
        "code": "AYT",
        "name": "Antalya",
        "internationalName": "Antalya 22177",
        "type": 2,
        "latitude": "36.898731000",
        "longitude": "30.800461000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "22177"
      },
      {
        "code": "AYTPORT",
        "name": "Antalya International Airport",
        "internationalName": "Antalya International Airport",
        "type": 3,
        "parentId": "22177",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "22366"
      },
      {
        "name": "ANTALYA INTERNATIONAL AIRPORT",
        "type": 5,
        "latitude": "36.898731000",
        "longitude": "30.800461000",
        "parentId": "22177",
        "provider": 1,
        "isTopRegion": false,
        "id": "1089"
      },
      {
        "code": "3604",
        "name": "Belek",
        "internationalName": "Belek",
        "type": 2,
        "latitude": "36.842770000",
        "longitude": "31.087880000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "3604"
      },
      {
        "name": "Istanbul International Airport",
        "type": 5,
        "latitude": "40.976922000",
        "longitude": "28.814606000",
        "parentId": "20",
        "provider": 1,
        "isTopRegion": false,
        "id": "1084"
      },
      {
        "code": "IST",
        "name": "Istanbul UK-UK",
        "internationalName": "Istanbul 20",
        "type": 2,
        "latitude": "41.014630000",
        "longitude": "28.979560000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "20"
      },
      {
        "code": "3740",
        "name": "Konya",
        "internationalName": "Konya",
        "type": 2,
        "latitude": "37.874641000",
        "longitude": "32.493156000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "3740"
      },
      {
        "name": "Konya Airport",
        "type": 5,
        "latitude": "37.979000000",
        "longitude": "32.561861000",
        "parentId": "3740",
        "provider": 1,
        "isTopRegion": false,
        "id": "20263"
      },
      {
        "name": "London Airport",
        "type": 5,
        "latitude": "43.033056000",
        "longitude": "-81.151111000",
        "parentId": "22234",
        "provider": 1,
        "isTopRegion": false,
        "id": "17648"
      },
      {
        "name": "London Stansted Airport",
        "type": 5,
        "latitude": "51.885000000",
        "longitude": "0.235000000",
        "parentId": "22234",
        "provider": 1,
        "isTopRegion": false,
        "id": "1140"
      },
      {
        "name": "London-Corbin Airport/Magee Field",
        "type": 5,
        "latitude": "37.086888900",
        "longitude": "-84.077388900",
        "parentId": "22234",
        "provider": 1,
        "isTopRegion": false,
        "id": "12542"
      },
      {
        "code": "22234",
        "name": "London1",
        "internationalName": "London1",
        "type": 2,
        "latitude": "51.874722000",
        "longitude": "-0.368333000",
        "parentId": "3601",
        "countryId": "3601",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "22234"
      },
      {
        "name": "Luton Airport",
        "type": 5,
        "latitude": "51.874722000",
        "longitude": "-0.368333000",
        "parentId": "22234",
        "provider": 1,
        "isTopRegion": false,
        "id": "20869"
      },
      {
        "name": "Sabiha Gökçen International Airport",
        "type": 5,
        "latitude": "40.898553000",
        "longitude": "29.309219000",
        "parentId": "20",
        "provider": 1,
        "isTopRegion": false,
        "id": "1088"
      },
      {
        "code": "3601",
        "name": "United kingdom",
        "internationalName": "United kingdom",
        "type": 1,
        "parentId": "3601",
        "countryId": "3601",
        "isProductLocation": false,
        "provider": 1,
        "isTopRegion": false,
        "id": "3601"
      }
    ]
  }
}
```

-----------------------------

-----------------------------
##GetArrivals Method

| Update Date | 11.07.2023                             |
| ---------------- | ------------------------------------- |
| Method Adress    | ```/api/productservice/getarrivals``` |
| Method Type      | ```POST```                            |
| Token Required   | ```YES```                             |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "direction": "1",
  <!--This values in GetDepartures response.-->
  "departureLocations": [
    {
      "type": 2,
      "id": "22177"
    }
  ]
}
```

###Response Sample

```
{
    "header": {
    "requestId": "faa2b630-0e95-419f-8420-99eeabe5a80c",
    "success": true,
    "responseTime": "2021-10-11T06:58:00.5388343Z",
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
    "locations": [
      {
        "code": "TR",
        "name": "",
        "internationalName": "TURKEY",
        "type": 1,
        "latitude": "11.000000000",
        "longitude": "11.000000000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": false,
        "provider": 1,
        "isTopRegion": false,
        "id": "5"
      },
      {
        "code": "AYT",
        "name": "Antalya",
        "internationalName": "Antalya 22177",
        "type": 2,
        "latitude": "36.898731000",
        "longitude": "30.800461000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "22177"
      },
      {
        "code": "KEMER",
        "name": "Kemer TV",
        "internationalName": "Kemer TV",
        "type": 3,
        "latitude": "36.686800000",
        "longitude": "31.608400000",
        "parentId": "22177",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "3697"
      },
      {
        "code": "ALANYA",
        "name": "Alanya UK",
        "internationalName": "ALANYA Name",
        "type": 3,
        "latitude": "36.525213930",
        "longitude": "31.974851300",
        "parentId": "22177",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "3695"
      },
      {
        "name": "ANTALYA INTERNATIONAL AIRPORT",
        "type": 5,
        "latitude": "36.898731000",
        "longitude": "30.800461000",
        "parentId": "22177",
        "provider": 1,
        "isTopRegion": false,
        "id": "1089"
      },
      {
        "code": "22340",
        "name": "LARA-KUNDU",
        "internationalName": "LARA-KUNDU",
        "type": 2,
        "latitude": "36.856240000",
        "longitude": "30.906570000",
        "parentId": "5",
        "countryId": "5",
        "isProductLocation": true,
        "provider": 1,
        "isTopRegion": false,
        "id": "22340"
      }
    ]
  }
}
```

-----------------------------

##GetDepartureAutocomplete Method

| Update Date | 11.07.2023                                           |
| ---------------- | ---------------------------------------            |
| Method Adress    | ```/api/productservice/getdepartureautocomplete``` |
| Method Type      | ```POST```                                         |
| Token Required   | ```YES```                                          |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "query": "Antalya Havalimanı (AYT)",
  "thirdPartyProviderId": "19291ac5-33a8-4cde-894c-49e5df8d0147",
  "targetProvider": 2
}
```

###Response Sample

```
{
  "header": {
    "requestId": "4d10d5d5-d8a3-4403-a06b-cd4b699b7c15",
    "success": true,
    "responseTime": "2021-10-11T17:45:48.3604425Z",
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
        "airport": {
          "name": "Antalya Havalimanı (AYT)",
          "id": "AYT"
        },
        "provider": 2
      }
    ]
  }
}
```

-----------------------------

##GetArrivalAutocomplete Method

| Update Date | 11.07.2023                                           |
| ---------------- | ---------------------------------------            |
| Method Adress    | ```/api/productservice/getarrivalautocomplete``` |
| Method Type      | ```POST```                                         |
| Token Required   | ```YES```                                          |

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "query": "Alanya",
  "thirdPartyProviderId": "19291ac5-33a8-4cde-894c-49e5df8d0147",
  "targetProvider": 2
}
```

###Response Sample

```
{
  "header": {
    "requestId": "a3dd49d9-be88-4455-a579-fabcf242ee24",
    "success": true,
    "responseTime": "2021-10-11T17:45:48.9877938Z",
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
        "type": 1,
        "city": {
          "id": "23487",
          "name": "Alanya"
        },
        "provider": 2
      },
      {
        "type": 3,
        "airport": {
          "name": "Gazipaşa Alanya Havalimanı",
          "id": "GZP"
        },
        "provider": 2
      }
    ]
  }
}
```

-----------------------------

##GetCheckinDates Method 
This method is gives available check in dates.

| Update Date | 11.07.2023                                  |
| ---------------- | ----------------------------------------- |
| Method Adress    | ```/api/productservice/getcheckindates``` |
| Method Type      | ```POST```                                |
| Token Required   | ```YES```                                 |

###Request Sample (TOURVISIO)
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "productType": "5",
   "IncludeSubLocations":true,
   "direction": "1",
   <!--This values in GetDepartures response.-->
   "DepartureLocations":[
      {
         "Id": "22177",
         "Type":2
      }
   ],
   
   <!--This values in GetArrivals response.-->
   "ArrivalLocations":[
      {
         "Id":"22177",
         "Type":2
      }
   ]
}
```

###Request Sample (PAXIMUM)
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": "5",
  "targetProvider": 2,
  "thirdPartyProviderId": "19291ac5-33a8-4cde-894c-49e5df8d0147",
  "includeSubLocations": true,
  "departureLocations": [
    {
      "id": "AYT",
      "type": 5
    }
  ],
  "arrivalLocations": [
    {
      "id": "23487",
      "type": 2
    }
  ]
}
```

###Response Sample

```
{
  "header": {
    "requestId": "331be1e5-1d51-4278-aed9-662d2a655b44",
    "success": true,
    "responseTime": "2021-10-11T06:58:00.5651227Z",
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
      "2021-10-11T00:00:00+03:00",
      "2021-10-12T00:00:00+03:00",
      "2021-10-13T00:00:00+03:00",
      "2021-10-14T00:00:00+03:00",
      "2021-10-15T00:00:00+03:00",
      "2021-10-16T00:00:00+03:00",
      "2021-10-17T00:00:00+03:00",
      "2021-10-18T00:00:00+03:00",
      "2021-10-19T00:00:00+03:00",
      "2021-10-20T00:00:00+03:00",
      "2021-10-21T00:00:00+03:00",
      "2021-10-22T00:00:00+03:00",
      "2021-10-23T00:00:00+03:00",
      "2021-10-24T00:00:00+03:00",
      "2021-10-25T00:00:00+03:00",
      "2021-10-26T00:00:00+03:00",
      "2021-10-27T00:00:00+03:00",
      "2021-10-28T00:00:00+03:00",
      "2021-10-29T00:00:00+03:00",
      "2021-10-30T00:00:00+03:00",
      "2021-10-31T00:00:00+03:00",
      "2021-11-01T00:00:00+03:00",
      "2021-11-02T00:00:00+03:00",
      "2021-11-03T00:00:00+03:00",
      "2021-11-04T00:00:00+03:00",
      "2021-11-05T00:00:00+03:00",
      "2021-11-06T00:00:00+03:00",
      "2021-11-07T00:00:00+03:00",
      "2021-11-08T00:00:00+03:00",
      "2021-11-09T00:00:00+03:00",
      "2021-11-10T00:00:00+03:00",
      "2021-11-11T00:00:00+03:00",
      "2021-11-12T00:00:00+03:00",
      "2021-11-13T00:00:00+03:00",
      "2021-11-14T00:00:00+03:00",
      "2021-11-15T00:00:00+03:00",
      "2021-11-16T00:00:00+03:00",
      "2021-11-17T00:00:00+03:00",
      "2021-11-18T00:00:00+03:00",
      "2021-11-19T00:00:00+03:00",
      "2021-11-20T00:00:00+03:00",
      "2021-11-21T00:00:00+03:00",
      "2021-11-22T00:00:00+03:00",
      "2021-11-23T00:00:00+03:00",
      "2021-11-24T00:00:00+03:00",
      "2021-11-25T00:00:00+03:00",
      "2021-11-26T00:00:00+03:00",
      "2021-11-27T00:00:00+03:00",
      "2021-11-28T00:00:00+03:00",
      "2021-11-29T00:00:00+03:00",
      "2021-11-30T00:00:00+03:00",
      "2021-12-01T00:00:00+03:00",
      "2021-12-02T00:00:00+03:00",
      "2021-12-03T00:00:00+03:00",
      "2021-12-04T00:00:00+03:00",
      "2021-12-05T00:00:00+03:00",
      "2021-12-06T00:00:00+03:00",
      "2021-12-07T00:00:00+03:00",
      "2021-12-08T00:00:00+03:00",
      "2021-12-09T00:00:00+03:00",
      "2021-12-10T00:00:00+03:00",
      "2021-12-11T00:00:00+03:00",
      "2021-12-12T00:00:00+03:00",
      "2021-12-13T00:00:00+03:00",
      "2021-12-14T00:00:00+03:00",
      "2021-12-15T00:00:00+03:00",
      "2021-12-16T00:00:00+03:00",
      "2021-12-17T00:00:00+03:00",
      "2021-12-18T00:00:00+03:00",
      "2021-12-19T00:00:00+03:00",
      "2021-12-20T00:00:00+03:00",
      "2021-12-21T00:00:00+03:00",
      "2021-12-22T00:00:00+03:00",
      "2021-12-23T00:00:00+03:00",
      "2021-12-24T00:00:00+03:00",
      "2021-12-25T00:00:00+03:00",
      "2021-12-26T00:00:00+03:00",
      "2021-12-27T00:00:00+03:00",
      "2021-12-28T00:00:00+03:00",
      "2021-12-29T00:00:00+03:00",
      "2021-12-30T00:00:00+03:00",
      "2021-12-31T00:00:00+03:00"
    ]
  }
}
```

-----------------------------

##PriceSearch Method 

| Update Date | 28.07.2023                                           |
| ---------------- | ---------------------------------------            |
| Method Adress    | ```/api/productservice/pricesearch``` |
| Method Type      | ```POST```                                         |
| Token Required   | ```YES```                                          |

###OneWay Request Sample (TOURVISIO)
[Click](../enumarations/#Product-Types) to reach the product types.
[Click](../enumarations/#transfer-direction) to reach the transfer directions.

```
{
  "productType": 5,
  "direction": "1",
  "departureLocations": [
    {
      "type": 2,
      "id": "22177"
    }
  ],
  "arrivalLocations": [
    {
      "type": 2,
      "id": "22177"
    }
  ],
  "checkIn": "2022-06-20",
  "adult": 2,
  "childAges":[
    3
  ],
  "includeSubLocations": true,
  "additionalParameters": {
    "getCountry": false,
    "getTransferLocation": true
  },
  "currency":"EUR",
  "culture":"en-US"
}
```

###Roundtrip Request Sample (TOURVISIO)
[Click](../enumarations/#Product-Types) to reach the product types.
[Click](../enumarations/#transfer-direction) to reach the transfer directions.

```
{
  "productType": 5,
  "direction": "3",
  "departureLocations": [
    {
      "type": 2,
      "id": "22177"
    }
  ],
  "arrivalLocations": [
    {
      "type": 2,
      "id": "22177"
    }
  ],
  "checkIn": "2022-06-20",
  "checkOut": "2022-06-25",
  "adult": 2,
  "childAges":[
    3
  ],
  "includeSubLocations": true,
  "additionalParameters": {
    "getCountry": false,
    "getTransferLocation": true
  },
  "currency":"EUR",
  "culture":"en-US"
}
```

###Request Sample (PAXIMUM)
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "targetProvider": 2,
  "thirdPartyProviderId": "19291ac5-33a8-4cde-894c-49e5df8d0147",
  "departureLocations": [
    {
      "id": "AYT",
      "type": 5
    }
  ],
  "arrivalLocations": [
    {
      "id": "23487",
      "type": 2
    }
  ],
  "checkIn": "2022-06-20T10:00",
  "adult": 2,
  "childAges":[
    3
  ],
  "includeSubLocations": true,
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
    "requestId": "b971ff72-0695-47be-b6c7-69b43f14a954",
    "success": true,
    "responseTime": "2021-10-11T18:30:57.3080984Z",
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
    "searchId": "36820bbf-344b-4997-adcf-3055be52f3fe",
    "expiresOn": "2021-10-11T19:00:53.3739314Z",
    "transfers": [
      {
        "type": {
          "id": "5",
          "name": "шатл трансфер"
        },
        "direction": {
          "id": 1,
          "name": "Forward"
        },
        "cancellationPolicyText": {
          "text": "TEST TRANSFER"
        },
        "offers": [
          {
            "country": {
              "name": "",
              "type": 1,
              "latitude": "11.000000000",
              "longitude": "11.000000000",
              "provider": 0,
              "isTopRegion": false,
              "id": "5"
            },
            "minimumPax": 1,
            "maximumPax": 99,
            "priceType": 1,
            "departure": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              },
              "town": {
                "name": "Antalya International Airport",
                "type": 3,
                "provider": 1,
                "isTopRegion": false,
                "id": "22366"
              }
            },
            "arrival": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              },
              "town": {
                "name": "Kemer TV",
                "type": 3,
                "latitude": "36.686800000",
                "longitude": "31.608400000",
                "provider": 1,
                "isTopRegion": false,
                "id": "3697"
              }
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 0,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "offerId": "1$5$$DE$1119$20211020$0$1",
            "checkIn": "2021-10-20T00:00:00",
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
            "country": {
              "name": "",
              "type": 1,
              "latitude": "11.000000000",
              "longitude": "11.000000000",
              "provider": 0,
              "isTopRegion": false,
              "id": "5"
            },
            "minimumPax": 1,
            "maximumPax": 99,
            "priceType": 1,
            "departure": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              },
              "town": {
                "name": "Antalya International Airport",
                "type": 3,
                "provider": 1,
                "isTopRegion": false,
                "id": "22366"
              }
            },
            "arrival": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              },
              "town": {
                "name": "Alanya UK",
                "type": 3,
                "latitude": "36.525213930",
                "longitude": "31.974851300",
                "provider": 1,
                "isTopRegion": false,
                "id": "3695"
              }
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 0,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "offerId": "1$5$$DE$1129$20211020$0$1",
            "checkIn": "2021-10-20T00:00:00",
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
            "country": {
              "name": "",
              "type": 1,
              "latitude": "11.000000000",
              "longitude": "11.000000000",
              "provider": 0,
              "isTopRegion": false,
              "id": "5"
            },
            "minimumPax": 1,
            "maximumPax": 99,
            "priceType": 1,
            "departure": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              }
            },
            "arrival": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              }
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 0,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "offerId": "1$5$$DE$1144$20211020$0$1",
            "checkIn": "2021-10-20T00:00:00",
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "provider": 1
          },
          {
            "country": {
              "name": "",
              "type": 1,
              "latitude": "11.000000000",
              "longitude": "11.000000000",
              "provider": 0,
              "isTopRegion": false,
              "id": "5"
            },
            "minimumPax": 1,
            "maximumPax": 99,
            "priceType": 1,
            "departure": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              },
              "town": {
                "name": "Antalya International Airport",
                "type": 3,
                "provider": 1,
                "isTopRegion": false,
                "id": "22366"
              }
            },
            "arrival": {
              "city": {
                "name": "Antalya",
                "type": 2,
                "latitude": "36.898731000",
                "longitude": "30.800461000",
                "provider": 1,
                "isTopRegion": false,
                "id": "22177"
              }
            },
            "priceBreakDown": {
              "items": [
                {
                  "type": 1,
                  "price": {
                    "amount": 0,
                    "currency": "EUR"
                  }
                }
              ]
            },
            "offerId": "1$5$$DE$1162$20211020$0$1",
            "checkIn": "2021-10-20T00:00:00",
            "price": {
              "amount": 0,
              "currency": "EUR"
            },
            "provider": 1
          }
        ],
        "code": "MK_DEV",
        "provider": 1,
        "thumbnail": "/images/product/1/3107/636352912437930000/5/1/1021/m_k__development_forward.jpg",
        "description": {
          "text": "<p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>&nbsp;</p>",
          "smartTextItems": [
            {
              "title": "t1",
              "content": "t1 c",
              "textType": 0
            },
            {
              "title": "t2",
              "content": "t2 c",
              "textType": 0
            }
          ]
        },
        "id": "1021",
        "name": "M.K. DEVELOPMENT forward"
      }
    ],
    "productCount": 1,
    "details": {
      "enablePaging": true
    },
    "criterias": {
      "productType": 5,
      "direction": "1",
      "checkIn": "2021-10-20T00:00:00",
      "includeSubLocations": true,
      "departureLocations": [
        {
          "code": "AYT",
          "name": "Antalya",
          "internationalName": "Antalya 22177",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "isProductLocation": true,
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        }
      ],
      "arrivalLocations": [
        {
          "code": "AYT",
          "name": "Antalya",
          "internationalName": "Antalya 22177",
          "type": 2,
          "latitude": "36.898731000",
          "longitude": "30.800461000",
          "parentId": "5",
          "countryId": "5",
          "isProductLocation": true,
          "provider": 1,
          "isTopRegion": false,
          "id": "22177"
        }
      ],
      "adult": 1,
      "childAges": [],
      "roomCriteria": [],
      "checkStopSale": true,
      "showAllotment": false,
      "showStopSale": false,
      "getOnlyDiscountedPrice": false,
      "getOnlyBestOffers": false,
      "getTransportations": false,
      "pagingOption": {
        "productType": 0,
        "pageRowCount": 0,
        "currentPage": 1,
        "sort": 0,
        "getFilters": false,
        "isNewPagingRequest": false,
        "getOnlyDefaultProducts": false,
        "getPagingCount": false
      },
      "showOnlyNonStopFlight": false,
      "compulsory": false,
      "additionalParameters": {
        "getCountry": false,
        "getTransferLocation": true
      },
      "priceSearchResponseDetails": {},
      "customer": {},
      "targetProvider": 0,
      "id": "fe983277-de37-4907-81ce-e26615fdf131",
      "dataSource": 0,
      "webRequestDetail": {
        "clientAddress": "31.223.10.72",
        "domain": "prod-services.tourvisio.com",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36",
        "referrer": "https://prod-b2b.tourvisio.com/"
      },
      "currency": "EUR",
      "culture": "en-GB",
      "provider": 7
    },
    "filters": {
      "transfer": [
        {
          "type": 1,
          "options": [
            {
              "prices": [
                {
                  "price": 0
                }
              ],
              "id": "1021",
              "name": "M.K. DEVELOPMENT forward"
            }
          ]
        },
        {
          "type": 33,
          "options": [
            {
              "id": "5",
              "name": "Шатл Трансфер"
            }
          ]
        },
        {
          "type": 8,
          "from": 0,
          "to": 0
        },
        {
          "type": 35,
          "options": [
            {
              "id": "22177",
              "name": "Antalya"
            },
            {
              "id": "22366",
              "name": "Antalya International Airport"
            }
          ]
        },
        {
          "type": 3,
          "options": [
            {
              "id": "3695",
              "name": "Alanya Uk"
            },
            {
              "id": "22177",
              "name": "Antalya"
            },
            {
              "id": "3697",
              "name": "Kemer Tv"
            }
          ]
        }
      ]
    }
  }
}
```

-----------------------------

##GetProductInfo Method 

| Update Date | 11.07.2023                                 |
| ---------------- | ---------------------------------------- |
| Method Adress    | ```/api/productservice/getproductinfo``` |
| Method Type      | ```POST```                               |
| Token Required   | ```YES```                                |

###Request Sample (TOURVISIO)
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "ownerProvider": 1,
  "product": "1021",
  "culture": "en-US",
}
```

###Request Sample (PAXIMUM)
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 5,
  "ownerProvider": 2,
  "product": "2$5$fabc8f9b-6669-4f26-9cbe-d7329069719f",
  "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
    "requestId": "71445595-19a1-4148-b3a7-8e53f0175170",
    "success": true,
    "responseTime": "2021-10-11T07:21:28.1692229Z",
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
    "transfer": {
      "textCategories": [
        {
          "code": "SEARCH",
          "name": "SEARCH",
          "presentations": [
            {
              "textType": 4,
              "textItems": [
                {
                  "title": "t1",
                  "content": "t1 c",
                  "textType": 0
                },
                {
                  "title": "t2",
                  "content": "t2 c",
                  "textType": 0
                }
              ]
            },
            {
              "textType": 1,
              "text": "<p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>&nbsp;</p>"
            }
          ]
        },
        {
          "code": "VEHICLES",
          "name": "VEHICLES",
          "presentations": [
            {
              "textType": 3,
              "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          ]
        }
      ],
      "mediaFiles": [
        {
          "fileType": 1,
          "url": "/images/product/1/3107/0/5/2/12/m_k__development_forward_12.jpg"
        },
        {
          "fileType": 1,
          "url": "/images/product/1/3107/0/5/2/13/m_k__development_forward_13.jpg"
        },
        {
          "fileType": 1,
          "url": "/images/product/1/3107/0/5/2/14/m_k__development_forward_14.jpg"
        },
        {
          "fileType": 1,
          "url": "/images/product/1/3107/0/5/2/15/m_k__development_forward_15.jpg"
        },
        {
          "fileType": 1,
          "url": "/images/product/1/3107/0/5/2/16/m_k__development_forward_16.jpg"
        }
      ],
      "type": {
        "id": "5",
        "name": "шатл трансфер"
      },
      "direction": {
        "id": 1,
        "name": "Forward"
      },
      "cancellationPolicyText": {
        "text": "TEST TRANSFER"
      },
      "code": "MK_DEV",
      "thumbnail": "/images/product/1/3107/636352912437930000/5/1/1021/m_k__development_forward.jpg",
      "id": "1021",
      "name": "M.K. DEVELOPMENT forward"
    }
  }
}
```

-----------------------------
