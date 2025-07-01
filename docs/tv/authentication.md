
#Authentication

We are using bearer token for authentication.
The token must be included in the header of every request Please use Login method with your user credential for getting token.

### Header

```Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBRyI6IkIyQyIsIk1SIjoiR0VSTUFOIiwiT0YiOiJC```

All service methods have same response structure.

-------------------------------------------------------------------------------
##Login Method

You can use this method for getting token by using your credential.

Update Date	  |      31.06.2023
----------------------|--------------------
     Method Adress    | ```/api/authenticationservice/login```  
      Method Type     | 	```POST```
    Token Required    |		```NO```


###Request Sample

```
{
  "Agency" : "B2B", // Agency Code
  "User" : "B2B", // user Code
  "Password" : "123456" // Password
}
```

###Response Sample

```
{
   "header":{
      "requestId":"5f744db2-bd48-43de-9a97-fe8e18eaa0f9",
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
      "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJBRyI6IkIyQiIsIk1SIjoiR0VSTUFOIi",
      "expiresOn": "2020-12-31T18:29:18.1031152Z",
      "tokenId":866292,
      "userInfo":{
         "code":"B2B",
         "name":"B2B",
         "mainAgency":{

         },
         "agency":{
            "code":"B2B",
            "name":"B2B",
            "registerCode":"140368089"
         },
         "office":{
            "code":"BER",
            "name":"BERLIN OFFICE"
         },
         "operator":{
            "code":"SAN",
            "name":"SAN TSG",
            "thumbnail":"/images/other/1/6/1/1/san_tsg.png"
         },
         "market":{
            "code":"GERMAN",
            "name":" GERMAN EN-US",
            "favicon":"/images/other/1/9/0/1/favicon.ico"
         }
      }
   }
}
```