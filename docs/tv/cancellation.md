
#Cancellation

Cancellation process consists of two steps. In first step, you have to query for cancellation penalty (GetCancellationPenalty). This is going to return cancellation prices according to cancellation reasons. In second step, you can call cancellation method (CancelReservation). This method is going to execute cancellation operation and return the last status about reservation.

-----------------------------
##GetCancellationPenalty Method
Update Date	  |      02.05.2023
----------------------|--------------------
     Method Address   | ```/api/bookingservice/getcancellationpenalty```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
   "reservationNumber":"SB003074"
}
```
###Response Sample

```
{
  {
   "header":{
      "requestId":"dfbd6ffd-f911-4364-92ed-3dddabfa829f",
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
      "cancelPenalties":[
         {
            "reason":{
               "comment":"",
               "id":"2",
               "name":"TEST REASON"
            },
            "services":[
               {
                  "provider":1,
                  "id":"1",
                  "code":"SAMELIA",
                  "productType":2,
                  "name":"SALES Amelia Beach Resort",
                  "price":{
                     "amount":0.0,
                     "currency":"TRY"
                  },
                  "isCancelable":true,
                  "relatedServices":[

                  ],
                  "priceDetail":{
                     "totalSalePrice":{
                        "amount":385.88,
                        "currency":"TRY"
                     },
                     "penalty":{
                        "amount":0.0,
                        "currency":"TRY"
                     },
                     "mainServiceFee":{
                        "amount":0.0,
                        "currency":"TRY"
                     }
                  }
               }
            ],
            "price":{
               "amount":0.0,
               "currency":"TRY"
            },
            "isCancelable":true
         },
         {
            "reason":{
               "id":"6",
               "name":"NO REASON"
            },
            "services":[
               {
                  "provider":1,
                  "id":"1",
                  "code":"SAMELIA",
                  "productType":2,
                  "name":"SALES Amelia Beach Resort",
                  "price":{
                     "amount":0.0,
                     "currency":"TRY"
                  },
                  "isCancelable":true,
                  "relatedServices":[

                  ],
                  "priceDetail":{
                     "totalSalePrice":{
                        "amount":385.88,
                        "currency":"TRY"
                     },
                     "penalty":{
                        "amount":0.0,
                        "currency":"TRY"
                     },
                     "mainServiceFee":{
                        "amount":0.0,
                        "currency":"TRY"
                     }
                  }
               }
            ],
            "price":{
               "amount":0.0,
               "currency":"TRY"
            },
            "isCancelable":true
         }
      ]
   }
}
```

-----------------------------
##CancelReservation Method

Update Date	  |      15.07.2023
----------------------|--------------------
     Method Adress    | ```/api/bookingservice/cancelreservation```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
```
{
   "reservationNumber":"SB003073",
   
	<!--This values in GetCancellationPenalty response. cancelPenalties[].reason.id -->
   "reason":"6",

   <!--This values optional -->
   "serviceIds": [
       "1",
       "2",
       "3"
   ]
}
```
###Response Sample
```
{
   "header":{
      "requestId":"b5788d35-ee95-45df-bf91-3672c4cefe09",
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
      "reservationStatus":2
   }
}
```