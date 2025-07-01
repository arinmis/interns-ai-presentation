-----------------------------
#Holiday Package

![img](img/holiday_package.png)

-----------------------------
##GetDepartures Method

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getdepartures```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"39883142-aadb-4e78-a035-373d66084843",
      "success":true,
      "responseTime":"2018-03-01T11:49:03.6019466Z",
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
      "locations":[
         {
            "name":"Istanbul",
            "type":2,
            "parentId":"5",
            "isProductLocation":true,
            "provider":1,
            "id":"20"
         },
         {
            "code":"TR",
            "name":"TURKEY",
            "type":1,
            "latitude":"11.000000000",
            "parentId":"5",
            "countryId":"5",
            "isProductLocation":true,
            "provider":1,
            "id":"5"
         },
         {
            "name":"Koln",
            "type":2,
            "parentId":"3629",
            "isProductLocation":true,
            "provider":1,
            "id":"15184"
         },
         {
            "code":"3629",
            "name":"Germany",
            "type":1,
            "parentId":"3629",
            "countryId":"3629",
            "isProductLocation":true,
            "provider":1,
            "id":"3629"
         }
      ]
   }
}
```

-----------------------------
##GetArrivals Method

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getarrivals```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
      
   <!--This values in GetDepartures response.-->
   "DepartureLocations":[
      {
         "Type":2,
         "Id":"15184"
      }
   ],
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"afa26729-a161-4efe-a1c1-3c1f4b891602",
      "success":true,
      "responseTime":"2018-03-01T11:49:08.5072199Z",
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
      "locations":[
         {
            "name":"BELEK TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3694"
         },
         {
            "code":"AYT",
            "name":"Antalya",
            "type":2,
            "latitude":"36.898731000",
            "parentId":"5",
            "countryId":"5",
            "isProductLocation":true,
            "provider":1,
            "id":"22177"
         },
         {
            "code":"TR",
            "name":"TURKEY",
            "type":1,
            "latitude":"11.000000000",
            "parentId":"5",
            "countryId":"5",
            "provider":1,
            "id":"5"
         },
         {
            "name":"ALANYA TV",
            "type":3,
            "parentId":"22177",
            "isProductLocation":true,
            "provider":1,
            "id":"3695"
         },
         {
            "name":"BOGAZKENT",
            "type":4,
            "parentId":"3694",
            "isProductLocation":true,
            "provider":1,
            "id":"3706"
         }
      ]
   }
}
```

-----------------------------

##GetCheckinDates Method
This method is gives available check in dates.

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getcheckindates```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
   
   <!--This values in GetDepartures response.-->
   "DepartureLocations":[
      {
         "Id":"15184",
         "Type":2
      }
   ],
   
   <!--This values in GetArrivals response.-->
   "ArrivalLocations":[
      {
         "Id":"22177",
         "Type":2
      }
   ],
   "IncludeSubLocations":true,
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"f753652b-aefb-46e7-8b3c-853f772f3caf",
      "success":true,
      "responseTime":"2018-03-01T11:49:12.4494719Z",
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
      "dates":[
         "2018-03-02T00:00:00",
         "2018-10-24T00:00:00"
      ]
   }
}
```

-----------------------------
##GetNights Method

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getnights```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
   "DepartureLocations":[
      {
         "Id":"15184",
         "Type":2
      }
   ],
   "ArrivalLocations":[
      {
         "Id":"22177",
         "Type":2
      }
   ],
   "IncludeSubLocations":true,
   "CheckIn":"2018-10-24",
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"fd4bb907-aa9d-41f4-bbce-a5fed9a17149",
      "success":true,
      "responseTime":"2018-03-01T11:49:16.5486878Z",
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
      "nights":[
         7
      ]
   }
}
```

-----------------------------

##PriceSearch Method

Update Date	  |      23.07.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/pricesearch```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
   "ProductType":1,
   "DepartureLocations":[
      {
         "Id":"15184",
         "Type":2
      }
   ],
   "ArrivalLocations":[
      {
         "Id":"22177",
         "Type":2
      }
   ],
   "IncludeSubLocations":true,
   "CheckIn":"2022-12-24",
   "Night":7,
   "Products":[

   ],
   "RoomCriteria":[
      {
         "Adult":2,
         "ChildAges":[

         ]
      },
      {
         "Adult":2,
         "ChildAges":[
            1
         ]
      }
   ],
   "CheckAllotment":false,
   "CheckStopSale":false,
   "Nationality":"TR",
   "currency": "EUR",
   "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"8667f0a9-b242-4f5a-9667-e5b722dbfcbf",
      "success":true,
      "responseTime":"2018-03-01T11:49:22.5240232Z",
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
      "searchId":"41a98f9a-8db1-4179-a040-6b1df7f4a8cf",
      "expiresOn":"2018-03-01T12:49:22.4690268Z",
      "hotels":[
         {
            "stars":5.0,
            "country":{
               "name":"TURKEY",
               "latitude":"11.000000000",
               "longitude":"11.000000000",
               "provider":0,
               "id":"5"
            },
            "city":{
               "name":"Antalya",
               "latitude":"36.898731000",
               "longitude":"30.800461000",
               "provider":0,
               "id":"22177"
            },
            "offers":[
               {
                  "night":7,
                  "isAvailable":false,
                  "availability":2,
                  "rooms":[
                     {
                        "roomId":"STDSV",
                        "roomName":"STANDARD ROOM SEEVIEW",
                        "roomGroups":[

                        ],
                        "accomId":"PXMACC02",
                        "accomName":"2 PAX",
                        "boardId":"AI",
                        "boardName":"ALL INCLUSIVE",
                        "boardGroups":[
                           {
                              "id":"ALLINC",
                              "name":"ALL INCLUSIVE"
                           }
                        ],
                        "allotment":10000,
                        "stopSaleGuaranteed":0,
                        "stopSaleStandart":0,
                        "price":{
                           "amount":600.00,
                           "currency":"EUR"
                        },
                        "travellers":[
                           {
                              "type":1
                           },
                           {
                              "type":1
                           }
                        ],
                        "transportation":{
                           "outbound":{
                              "code":"A1",
                              "availableSeatCount":300
                           },
                           "return":{
                              "code":"B1",
                              "availableSeatCount":300
                           }
                        },
                        "services":[
                           {
                              "name":"FLIGHT"
                           },
                           {
                              "name":"HOTEL"
                           },
                           {
                              "name":"FLIGHT"
                           }
                        ]
                     },
                     {
                        "roomId":"STDSV",
                        "roomName":"STANDARD ROOM SEEVIEW",
                        "roomGroups":[

                        ],
                        "accomId":"PXMACC02",
                        "accomName":"2 PAX",
                        "boardId":"AI",
                        "boardName":"ALL INCLUSIVE",
                        "boardGroups":[
                           {
                              "id":"ALLINC",
                              "name":"ALL INCLUSIVE"
                           }
                        ],
                        "allotment":10000,
                        "stopSaleGuaranteed":0,
                        "stopSaleStandart":0,
                        "price":{
                           "amount":600.00,
                           "currency":"EUR"
                        },
                        "travellers":[
                           {
                              "type":1
                           },
                           {
                              "type":1
                           },
                           {
                              "type":2
                           }
                        ],
                        "transportation":{
                           "outbound":{
                              "code":"A1",
                              "availableSeatCount":300
                           },
                           "return":{
                              "code":"B1",
                              "availableSeatCount":300
                           }
                        },
                        "services":[
                           {
                              "name":"FLIGHT"
                           },
                           {
                              "name":"HOTEL"
                           },
                           {
                              "name":"FLIGHT"
                           }
                        ]
                     }
                  ],
                  "isRefundable":false,
                  "expiresOn":"2018-03-01T12:49:22.4590228Z",
                  "offerId":"1-1-201803011249-TR-0|66-11-6270-1812-A1-B1-2|66-11-6270-1813-A1-B1-2-1",
                  "checkIn":"2018-10-24T00:00:00",
                  "price":{
                     "amount":1200.00,
                     "currency":"EUR"
                  }
               }
            ],
            "address":"",
            "provider":1,
            "thumbnail":"/images/product/1/2/1/4826/amf_cruise.jpg",
            "mediaProvider":1,
            "id":"4826",
            "name":"AMF CRUISE"
         }
      ],
      "criterias":{
         "productType":1,
         "checkIn":"2018-10-24T00:00:00",
         "night":7,
         "includeSubLocations":true,
         "departureLocations":[
            {
               "type":2,
               "provider":0,
               "id":"15184"
            }
         ],
         "arrivalLocations":[
            {
               "type":2,
               "provider":0,
               "id":"22177"
            }
         ],
         "products":[

         ],
         "roomCriteria":[
            {
               "adult":2,
               "childAges":[

               ]
            },
            {
               "adult":2,
               "childAges":[
                  1
               ]
            }
         ],
         "checkAllotment":false,
         "checkStopSale":false,
         "showAllotment":false,
         "showStopSale":false,
         "getOnlyDiscountedPrice":false,
         "getOnlyBestOffers":false,
         "pagingOption":{
            "productType":0,
            "pageRowCount":12,
            "currentPage":1,
            "sort":12,
            "getFilters":true,
            "isNewPagingRequest":false,
            "getOnlyDefaultProducts":false
         },
         "nationality":"TR",
         "showOnlyNonStopFlight":false,
         "compulsory":false,
         "id":"8667f0a9-b242-4f5a-9667-e5b722dbfcbf",
         "dataSource":0,
         "currency":"EUR",
         "culture":"en-US",
         "provider":7
      }
   }
}
```

-----------------------------

##GetProductInfo Method

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getproductinfo```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
  "productType": 2,
  "product": "31",
  "ownerProvider": 1,
  "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"621d45e6-59b1-45f3-b1eb-e64f5ad206e0",
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
      "hotel":{
         "seasons":[
            {
               "id":1028,
               "name":"NAME ALANI / ELA",
               "beginDate":"2017-03-28T00:00:00",
               "endDate":"2020-12-31T00:00:00",
               "textCategories":[
                  {
                     "code":"DETAIL1",
                     "name":"DETAIL PAGE 1 USA",
                     "presentations":[
                        {
                           "textType":1,
                           "text":"<p>wlcome</p>"
                        }
                     ]
                  },
                  {
                     "code":"SEARCH",
                     "name":"SEARCH",
                     "presentations":[
                        {
                           "textType":1,
                           "text":"<p>&nbsp;<span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus tortor sed pretium imperdiet. Aliquam facilisis pulvinar enim vel lacinia. Sed varius commodo sapien, nec egestas sapien iaculis vitae. Ut vitae luctus lacus. Quisque sodales eu massa ac faucibus. Suspendisse potenti. Mauris porta nisi ut purus consectetur vulputate.</span></p>"
                        }
                     ]
                  }
               ],
               "facilityCategories":[
                  {
                     "name":"Undefined Facility Category",
                     "facilities":[
                        {
                           "id":"16",
                           "name":"Clinic",
                           "note":"",
                           "isPriced":false
                        },
                        {
                           "id":"18",
                           "name":"Outdoor Pool",
                           "note":"",
                           "isPriced":false
                        }
                     ]
                  }
               ],
               "mediaFiles":[
                  {
                     "fileType":0,
                     "url":"/images/product/1/2/2/507/sales_amelia_beach_resort_507.jpg"
                  },
                  {
                     "fileType":0,
                     "url":"/images/product/1/2/2/518/sales_amelia_beach_resort_518.jpg"
                  }
               ],
               "themes":[
                  {
                     "id":"1",
                     "name":"FAMILY"
                  },
                  {
                     "id":"11",
                     "name":"ADULTS ONLY"
                  }
               ]
            }
         ],
         "address":{
            "addressLines":[
               "TEKNOKENT OFFICE"
            ]
         },
         "faxNumber":"",
         "phoneNumber":"",
         "homePage":"",
         "geolocation":{
            "longitude":"31.608400000",
            "latitude":"36.686800000"
         },
         "stars":4.0,
         "country":{
            "name":"TURKEY",
            "latitude":"11.000000000",
            "longitude":"11.000000000",
            "provider":0,
            "id":"5"
         },
         "city":{
            "name":"Antalya",
            "latitude":"36.898731000",
            "longitude":"30.800461000",
            "provider":0,
            "id":"22177"
         },
         "thumbnail":"/images/product/1/2/1/31/sales_amelia_beach_resort.jpg",
         "id":"31",
         "name":"SALES Amelia Beach Resort"
      }
   }
}
```

-----------------------------

##GetOfferDetails Method

Update Date	  |      01.03.2023
----------------------|--------------------
     Method Adress    | ```/api/productservice/getofferdetails```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample

```
{
	"offerIds": ["1-1-201803011648-DE-0|80-31-14223-239-KK279-KK179-2"],
	"getProductInfo": true,
    "currency": "EUR",
    "culture": "en-US"
}
```

###Response Sample

```
{
   "header":{
      "requestId":"485cd462-d3a3-4be8-9de4-a9654d3768c9",
      "success":true,
      "responseTime":"2018-03-01T15:49:00.3984039Z",
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
      "offerDetails":[
         {
            "expiresOn":"2018-03-01T16:48:00Z",
            "checkIn":"2018-03-23T00:00:00",
            "checkOut":"2018-03-30T00:00:00",
            "isSpecial":false,
            "isAvailable":false,
            "isRefundable":false,
            "hotels":[
               {
                  "seasons":[
                     {
                        "id":16,
                        "name":"ALL",
                        "textCategories":[
                           {
                              "code":"DETAIL1",
                              "name":"DETAIL PAGE 1 USA",
                              "presentations":[
                                 {
                                    "textType":1,
                                    "text":"<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ullamcorper tellus, ut sagittis ipsum accumsan et. Nulla vulputate luctus neque quis sodales. Sed vel massa eu risus viverra porta. Pellentesque tempus tincidunt neque. Nunc accumsan urna viverra quam fermentum, ut euismod est consectetur. Sed commodo rhoncus felis, eleifend eleifend quam finibus nec. Sed non quam convallis, dapibus dolor eget, faucibus lacus. Aenean efficitur eget mi non ultricies. Aliquam interdum justo quis libero dapibus maximus. Maecenas vel velit nec enim iaculis tempus id quis urna.</p><p> Vivamus magna ipsum, auctor nec dapibus non, aliquam quis quam. Aliquam semper mauris nibh, sed posuere leo lacinia sed. Praesent vitae velit eu eros pellentesque viverra ac et lectus.Integer pellentesque nibh non diam dignissim fringilla. Sed tincidunt vulputate finibus. Donec rhoncus, dolor eget vulputate cursus, felis nunc consectetur libero, in scelerisque massa lacus vel sapien. Sed ut erat ullamcorper lectus gravida sodales. Vivamus scelerisque condimentum cursus. Donec id tempor eros. Mauris pellentesque vulputate orci vel maximus.</p>Nunc varius convallis viverra. Vivamus vitae enim sed nibh vehicula ornare. Pellentesque imperdiet luctus metus ut congue. Morbi quis dui nibh. Quisque id egestas ligula, sit amet tincidunt tellus. Mauris non erat magna. Pellentesque a turpis sit amet tortor faucibus suscipit quis eget metus. Morbi scelerisque nunc leo, sit amet placerat diam rutrum sit amet. Donec ullamcorper pulvinar mauris, at hendrerit mauris scelerisque quis. Curabitur malesuada id sem eget dignissim. Morbi ligula ligula, iaculis eu elit id, interdum egestas orci. Donec aliquet volutpat condimentum.<p></p>"
                                 }
                              ]
                           }
                        ],
                        "facilityCategories":[
                           {
                              "name":"Undefined Facility Category",
                              "facilities":[
                                 {
                                    "id":"3",
                                    "name":"Air Condition",
                                    "note":"",
                                    "isPriced":false
                                 },
                                 {
                                    "id":"18",
                                    "name":"Outdoor Pool",
                                    "note":"",
                                    "isPriced":false
                                 }
                              ]
                           }
                        ],
                        "mediaFiles":[
                           {
                              "fileType":0,
                              "url":"/images/product/1/0/2/306/miracle_resort_306.jpg"
                           },
                           {
                              "fileType":0,
                              "url":"/images/product/1/0/2/317/miracle_resort_317.jpg"
                           }
                        ]
                     }
                  ],
                  "faxNumber":"",
                  "phoneNumber":"",
                  "homePage":"",
                  "geolocation":{
                     "longitude":"30.857891300",
                     "latitude":"36.855213300"
                  },
                  "stars":4.0,
                  "country":{
                     "name":"TURKEY",
                     "latitude":"11.000000000",
                     "longitude":"11.000000000",
                     "provider":0,
                     "id":"5"
                  },
                  "city":{
                     "name":"Antalya",
                     "latitude":"36.898731000",
                     "longitude":"30.800461000",
                     "provider":0,
                     "id":"22177"
                  },
                  "town":{
                     "name":"BELEK TV",
                     "latitude":"36.856770000",
                     "longitude":"30.851300000",
                     "provider":0,
                     "id":"3694"
                  },
                  "offers":[
                     {
                        "isAvailable":false,
                        "availability":0,
                        "rooms":[
                           {
                              "roomName":"STANDARD ROOM SEEVIEW",
                              "accomName":"DOUBLE ROOM",
                              "boardName":"BRED BREAKFAST"
                           }
                        ],
                        "isRefundable":false
                     }
                  ],
                  "thumbnail":"/images/product/1/2/1/9/miracle_resort.jpg",
                  "id":"9",
                  "name":"Miracle Resort"
               }
            ],
            "flights":[
               {
                  "id":"1285ece9-54ff-4699-9ed8-9554fd162f07",
                  "items":[
                     {
                        "flightNo":"KK279",
                        "flightDate":"2018-03-23T00:00:00",
                        "airline":{
                           "internationalCode":"38",
                           "thumbnail":"/images/other/1/3/1/99/atlas_global.jpg",
                           "logo":"/images/other/1/3/1/99/atlas_global.jpg",
                           "id":"99",
                           "name":"Atlas Global"
                        },
                        "duration":60.0,
                        "dayChange":0,
                        "departure":{
                           "city":{
                              "code":"IST",
                              "name":"Istanbul",
                              "type":2,
                              "latitude":"41.014630000",
                              "parentId":"5",
                              "countryId":"5",
                              "provider":0,
                              "id":"20"
                           },
                           "airport":{
                              "geolocation":{
                                 "longitude":"28.814606000",
                                 "latitude":"40.976922000"
                              },
                              "name":"Atatürk International Airport",
                              "id":"IST"
                           },
                           "date":"2018-03-23T13:30:00"
                        },
                        "arrival":{
                           "city":{
                              "code":"AYT",
                              "name":"Antalya",
                              "type":2,
                              "latitude":"36.898731000",
                              "parentId":"5",
                              "countryId":"5",
                              "provider":0,
                              "id":"22177"
                           },
                           "airport":{
                              "geolocation":{
                                 "longitude":"30.800461000",
                                 "latitude":"36.898731000"
                              },
                              "name":"Antalya International Airport",
                              "id":"AYT"
                           },
                           "date":"2018-03-23T14:30:00"
                        },
                        "flightClass":{
                           "id":"Y",
                           "name":"Y CLASS"
                        },
                        "route":1,
                        "segments":[
                           {
                              "id":"1",
                              "flightNo":"KK279",
                              "flightClass":{
                                 "id":"Y",
                                 "name":"Y CLASS"
                              },
                              "airline":{
                                 "internationalCode":"38",
                                 "thumbnail":"/images/other/1/3/1/99/atlas_global.jpg",
                                 "logo":"/images/other/1/3/1/99/atlas_global.jpg",
                                 "id":"99",
                                 "name":"Atlas Global"
                              },
                              "departure":{
                                 "city":{
                                    "code":"IST",
                                    "name":"Istanbul",
                                    "type":2,
                                    "latitude":"41.014630000",
                                    "parentId":"5",
                                    "countryId":"5",
                                    "provider":0,
                                    "id":"20"
                                 },
                                 "airport":{
                                    "geolocation":{
                                       "longitude":"28.814606000",
                                       "latitude":"40.976922000"
                                    },
                                    "name":"Atatürk International Airport",
                                    "id":"IST"
                                 },
                                 "date":"2018-03-23T13:30:00"
                              },
                              "arrival":{
                                 "city":{
                                    "code":"AYT",
                                    "name":"Antalya",
                                    "type":2,
                                    "latitude":"36.898731000",
                                    "parentId":"5",
                                    "countryId":"5",
                                    "provider":0,
                                    "id":"22177"
                                 },
                                 "airport":{
                                    "geolocation":{
                                       "longitude":"30.800461000",
                                       "latitude":"36.898731000"
                                    },
                                    "name":"Antalya International Airport",
                                    "id":"AYT"
                                 },
                                 "date":"2018-03-23T14:30:00"
                              },
                              "duration":60.0
                           }
                        ]
                     }
                  ],
                  "offers":[
                     {
                        "seatInfo":{
                           "availableSeatCount":9,
                           "availableSeatCountType":1
                        }
                     }
                  ]
               },
               {
                  "id":"3ab7690d-edc2-4982-a90e-96d3a1ae0375",
                  "items":[
                     {
                        "flightNo":"KK179",
                        "flightDate":"2018-03-30T00:00:00",
                        "airline":{
                           "internationalCode":"38",
                           "thumbnail":"/images/other/1/3/1/99/atlas_global.jpg",
                           "logo":"/images/other/1/3/1/99/atlas_global.jpg",
                           "id":"99",
                           "name":"Atlas Global"
                        },
                        "duration":60.0,
                        "dayChange":0,
                        "departure":{
                           "city":{
                              "code":"AYT",
                              "name":"Antalya",
                              "type":2,
                              "latitude":"36.898731000",
                              "parentId":"5",
                              "countryId":"5",
                              "provider":0,
                              "id":"22177"
                           },
                           "airport":{
                              "geolocation":{
                                 "longitude":"30.800461000",
                                 "latitude":"36.898731000"
                              },
                              "name":"Antalya International Airport",
                              "id":"AYT"
                           },
                           "date":"2018-03-30T10:00:00"
                        },
                        "arrival":{
                           "city":{
                              "code":"IST",
                              "name":"Istanbul",
                              "type":2,
                              "latitude":"41.014630000",
                              "parentId":"5",
                              "countryId":"5",
                              "provider":0,
                              "id":"20"
                           },
                           "airport":{
                              "geolocation":{
                                 "longitude":"28.814606000",
                                 "latitude":"40.976922000"
                              },
                              "name":"Atatürk International Airport",
                              "id":"IST"
                           },
                           "date":"2018-03-30T11:00:00"
                        },
                        "flightClass":{
                           "id":"Y",
                           "name":"Y CLASS"
                        },
                        "route":2,
                        "segments":[
                           {
                              "id":"1",
                              "flightNo":"KK179",
                              "flightClass":{
                                 "id":"Y",
                                 "name":"Y CLASS"
                              },
                              "airline":{
                                 "internationalCode":"38",
                                 "thumbnail":"/images/other/1/3/1/99/atlas_global.jpg",
                                 "logo":"/images/other/1/3/1/99/atlas_global.jpg",
                                 "id":"99",
                                 "name":"Atlas Global"
                              },
                              "departure":{
                                 "city":{
                                    "code":"AYT",
                                    "name":"Antalya",
                                    "type":2,
                                    "latitude":"36.898731000",
                                    "parentId":"5",
                                    "countryId":"5",
                                    "provider":0,
                                    "id":"22177"
                                 },
                                 "airport":{
                                    "geolocation":{
                                       "longitude":"30.800461000",
                                       "latitude":"36.898731000"
                                    },
                                    "name":"Antalya International Airport",
                                    "id":"AYT"
                                 },
                                 "date":"2018-03-30T10:00:00"
                              },
                              "arrival":{
                                 "city":{
                                    "code":"IST",
                                    "name":"Istanbul",
                                    "type":2,
                                    "latitude":"41.014630000",
                                    "parentId":"5",
                                    "countryId":"5",
                                    "provider":0,
                                    "id":"20"
                                 },
                                 "airport":{
                                    "geolocation":{
                                       "longitude":"28.814606000",
                                       "latitude":"40.976922000"
                                    },
                                    "name":"Atatürk International Airport",
                                    "id":"IST"
                                 },
                                 "date":"2018-03-30T11:00:00"
                              },
                              "duration":60.0
                           }
                        ]
                     }
                  ],
                  "offers":[
                     {
                        "seatInfo":{
                           "availableSeatCount":9,
                           "availableSeatCountType":1
                        }
                     }
                  ]
               }
            ],
            "transfers":[
               {
                  "textCategories":[
                     {
                        "code":"SEARCH",
                        "name":"SEARCH",
                        "presentations":[
                           {
                              "textType":4,
                              "textItems":[
                                 {
                                    "title":"t1",
                                    "content":"t1 c"
                                 },
                                 {
                                    "title":"t2",
                                    "content":"t2 c"
                                 }
                              ]
                           },
                           {
                              "textType":1,
                              "text":"<p><strong style=\"margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial;\">Lorem Ipsum</strong><span style=\"color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: normal; letter-spacing: normal; orphans: 2; text-align: justify; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;\"><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>&nbsp;</p>",
                              "textItems":[

                              ]
                           }
                        ]
                     },
                     {
                        "code":"VEHICLES",
                        "name":"VEHICLES",
                        "presentations":[
                           {
                              "textType":3,
                              "text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                              "textItems":[

                              ]
                           }
                        ]
                     }
                  ],
                  "mediaFiles":[
                     {
                        "fileType":1,
                        "url":"/images/product/1/5/2/12/m_k__development_12.jpg"
                     },
                     {
                        "fileType":1,
                        "url":"/images/product/1/5/2/16/m_k__development_16.jpg"
                     }
                  ],
                  "type":{
                     "id":"5",
                     "name":"SHUTTLE TRANSFER"
                  },
                  "direction":{
                     "id":1,
                     "name":"Forward"
                  },
                  "code":"MK_DEV",
                  "thumbnail":"/images/product/1/5/1/1021/m_k__development.jpg",
                  "id":"1021",
                  "name":"M.K. DEVELOPMENT"
               },
               {
                  "type":{
                     "id":"5",
                     "name":"SHUTTLE TRANSFER"
                  },
                  "direction":{
                     "id":2,
                     "name":"Backward"
                  },
                  "code":"MK_DEV_B",
                  "id":"1030",
                  "name":"M.K. DEVELOPMENT BACKWARD"
               }
            ]
         }
      ]
   }
}
```

-----------------------------

##GetAdditionalPriceSearchParameters Method

Update Date	  |      14.07.2023
----------------------|--------------------
     Method Adress    | ```api/lookupservice/getAdditionalPriceSearchParameters```  
      Method Type     | 	```POST```
    Token Required    |		```YES```

###Request Sample
[Click](../enumarations/#Product-Types) to reach the product types.

```
{
	"currency": "EUR",
	"culture": "en-US",
	"includeSubLocations": true,
	"departure": 22177,
	"arrival": 22177,
	"checkin": "2022-12-10",
	"night": 1,
	"productType": 1,
	"getHotels": true,
	"getBoards": true,
	"getStars": true,
	"getHolidayPackages": false,
	"packageCategory": null
}
```

###Response Sample

```
{
    "body": {
        "hotels": [
            {
                "productType": 1,
                "name": "Mka Test Hotel ",
                "id": "8007",
                "code": "TEST_MKA"
            }
        ],
        "boards": [
            {
                "productType": 1,
                "name": "Full Board",
                "id": "4",
                "code": "FB"
            },
            {
                "productType": 1,
                "name": "Full Board",
                "id": "1021",
                "code": "PXM3"
            },
            {
                "productType": 1,
                "name": "Half Board",
                "id": "1",
                "code": "HB"
            }
        ],
        "stars": [
            {
                "productType": 1,
                "name": "5 Stars",
                "id": "3",
                "code": "5STARS"
            }
        ]
    },
    "header": {
        "requestId": "de6ede1d-84fb-404a-b5cd-4bca57535225",
        "success": true,
        "responseTime": "2022-12-10T20:01:50.9213598Z",
        "messages": [
            {
                "id": 10000000,
                "code": "OperationCompleted",
                "messageType": 2,
                "message": "Operation was completed successfully"
            }
        ]
    }
}
```

-----------------------------