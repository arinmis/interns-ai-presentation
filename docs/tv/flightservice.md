#Flight Service

##GetFareRules Method

This method is used to get fare rule information of third party flight (SanFlight) services.


Update Date	  |      25.04.2023
----------------------|--------------------
     Method Adress    | ```/api/flightservice/getfarerules```  
      Method Type     | 	```POST```
    Token Required    |		```YES```


###Request Sample With Transaction Id


```
{
    "transactionId": "c89c8c94-da29-4c49-bbb0-92e1b1649ec3",
    "serviceId": "1",
    "segment": {
        "id": "1"
    },
    "culture": "en-US"
}
```

###Request Sample With Reservation Number


```
{
    "reservationNumber": "RC00231C",
    "serviceId": "1",
    "segment": {
        "id": "1"
    },
    "culture": "en-US"
}
```

###Response Sample

```
{
  "header": {
    "requestId": "ff2214fb-854a-489c-b759-701c87ffbef6",
    "success": true,
    "responseTime": "2022-04-25T08:30:39.0096079Z",
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
        "rules": [
      {
        "texts": [
          "FOR SUPER INSTANT PURCHASE 2ND LEVEL FARES   NOTE - RULE",
          "4011 IN IPRG100 APPLIES",
          "    ANY TIME",
          "      CHANGES PERMITTED FOR REISSUE/REVALIDATION."
        ],
        "code": "16",
        "name": "PENALTIES"
      },
      {
        "texts": [
          "RULE - 021/AJRT",
          "UNLESS OTHERWISE SPECIFIED",
          "ECONOMY CLASS AJ FARES"
        ],
        "code": "0",
        "name": "APPLICATION AND OTHER CONDITIONS"
      },
      {
        "texts": [
          "FROM/TO AMS FOR FARES WITH FOOTNOTE 9A",
          "  IF THE FARE COMPONENT INCLUDES TRAVEL WITHIN TURKEY",
          "      THEN THAT TRAVEL MUST BE ON"
        ],
        "code": "4",
        "name": "FLIGHT APPLICATION"
      }
    ]
  }
}
```