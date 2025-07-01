
#General
-------------------------
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
		* code : Message code. Please [click](../enumarations/#Message-Codes) for all message codes.
		* messageType : Message Type, please [click](../enumarations/#Message-Types) for all message types.
		* message : Message content.
* body : The response from target service method.