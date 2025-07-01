#Payment

-----------------------------
##GetPaymentOptions

| Update Date:  | 21.07.2023                                         |
|--------------------|----------------------------------------------------|
| Method Adress      | ```/api/agencyservice/getpaymentoptions```         |
| Method Type        | ```POST```                                         |
| Token Required     | ```YES```                                          |
| **Releated Links** | [Payment Options](../enumarations/#payment-option) |

***Request Sample***

```
{
   "transactionId": "aab69692-a73d-4e54-8f21-d22763fa3fb9"
}
```

***Response Sample***

```
{
    "body": {
        "options": [
            0,
            2,
            3,
            4,
            7,
            8,
            10,
            11,
            13,
            14,
            15,
            16,
            17,
            18,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33
        ]
    },
    "header": {
        "requestId": "4c05f957-2e1c-46c6-be40-b0d645f2e6a4",
        "success": true,
        "responseTime": "2022-07-18T11:31:20.3630846Z",
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
##GetPaymentOptionDetail

| Update Date:  | 21.07.2023                                         |
|--------------------|----------------------------------------------------|
| Method Adress      | ```/api/agencyservice/getpaymentoptiondetail```    |
| Method Type        | ```POST```                                         |
| Token Required     | ```YES```                                          |
| **Releated Links** | [Payment Options](../enumarations/#payment-option) |

***Request Sample***

```
{
  "transactionId":"aab69692-a73d-4e54-8f21-d22763fa3fb9",
   "PaymentOption":"3"
}
```

***Response Sample***

```
{
  "header": {
    "requestId": "37efbea7-a2bc-4e6a-939d-61eb12857946",
    "success": true,
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
    "detail": [
      {
        "options": [
          {
            "thumbnail": "/images/other/1/8/1/1009/akbank.jpg",
            "paymentTypes": [
              {
                "paymentCurrency": "EUR",
                "secure3D": true,
                "instalment": [
                  1
                ],
                "price": {
                  "amount": 828,
                  "currency": "EUR"
                },
                "pricebyBankCurrency": {
                  "amount": 3400.411,
                  "currency": "TRY"
                },
                "creditCardName": "VISA",
                "id": "1022",
                "name": "AKBANK EUR"
              }
            ],
            "id": "AKBANK",
            "name": "AKBANK"
          },
          {
            "thumbnail": "/images/other/1/8/1/1/finansbank.jpg",
            "paymentTypes": [
              {
                "paymentCurrency": "EUR",
                "secure3D": true,
                "instalment": [
                  1
                ],
                "price": {
                  "amount": 828,
                  "currency": "EUR"
                },
                "pricebyBankCurrency": {
                  "amount": 3400.411,
                  "currency": "TRY"
                },
                "creditCardName": "CARDFINANS",
                "id": "2",
                "name": "CREDIT CARD PAYMENT"
              },
              {
                "paymentCurrency": "EUR",
                "secure3D": true,
                "instalment": [
                  1,
                  2,
                  3
                ],
                "price": {
                  "amount": 828,
                  "currency": "EUR"
                },
                "pricebyBankCurrency": {
                  "amount": 3400.411,
                  "currency": "TRY"
                },
                "creditCardName": "CARDFINANS",
                "id": "4",
                "name": "CREDIT CARD PAYMENT 3 TAKSIT"
              }
            ],
            "id": "FINANS",
            "name": "FINANSBANK"
          },
          {
            "thumbnail": "/images/other/1/8/1/1014/garanti_bankasi.jpg",
            "paymentTypes": [
              {
                "paymentCurrency": "EUR",
                "secure3D": true,
                "instalment": [
                  1
                ],
                "price": {
                  "amount": 828,
                  "currency": "EUR"
                },
                "pricebyBankCurrency": {
                  "amount": 3400.411,
                  "currency": "TRY"
                },
                "creditCardName": "GARANTI CARD",
                "id": "1026",
                "name": "GARANTI EUR 1"
              }
            ],
            "id": "GARANTI_",
            "name": "GARANTI BANKASI"
          },
          {
            "thumbnail": "/images/other/1/8/1/1023/denizbank.jpg",
            "paymentTypes": [
              {
                "paymentCurrency": "EUR",
                "secure3D": true,
                "instalment": [
                  1
                ],
                "price": {
                  "amount": 828,
                  "currency": "EUR"
                },
                "pricebyBankCurrency": {
                  "amount": 3400.411,
                  "currency": "TRY"
                },
                "creditCardName": "DENIZBANKCARD",
                "id": "1033",
                "name": "DENIZBANK 1"
              }
            ],
            "id": "DENIZ",
            "name": "DENIZBANK"
          }
        ],
        "id": "3",
        "name": "Credit Card"
      }
    ]
  }
}
```

-----------------------------
##BeginPaymentTransaction

| Update Date:  | 18.07.2023                                                                                                                                                                                                                                                                           |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method Adress      | ```/api/paymentservice/beginpaymenttransaction```                                                                                                                                                                                                                                    |
| Method Type        | ```POST```                                                                                                                                                                                                                                                                           |
| Token Required     | ```YES```                                                                                                                                                                                                                                                                            |
| **Releated Links** | [Payment Options](../enumarations/#payment-option)<br/>[Payment Providers](../enumarations/#payment-providers)<br/>[Payment Transaction Type](../enumarations/#payment-transaction-type)<br/>[Payment Transaction Response Type](../enumarations/#payment-transaction-response-type) |

**Payment transaction request object properties**

| Attribute                              | Type               |
|----------------------------------------|--------------------|
| transactionId                          | string             |
| paymentOption                          | enmPaymentOption   |
| reservationNumber                      | string             |
| paymentTypeId                          | string             |
| successUrl                             | string             |
| errorUrl                               | string             |
| language                               | string             |
| accountName                            | string             |
| deviceType                             | string             |
| timeoutSeconds                         | int : nullable     |
| makeCommitTransactionAfterPayment      | boolean            |
| makeCommitTransactionAfterPaymentAsync | boolean            |
| termsAndConditionsUrl                  | string             |
| non3DPayment                           | boolean : nullable |


###**Agency Credit**

```json title="Request"
{
  "currency": "EUR",
  "culture": "en-GB",
  "transactionId": "61962cb0-3505-49d9-811b-ef6e68d1ef02",
  "paymentOption": 2,
  "successUrl": "http://localhost:8080/PaymentResult/Success",
  "termsAndConditionsUrl": "http://localhost:8080/Content/RenderContent/TermsAndConditions",
  "errorUrl": "http://localhost:8080/PaymentResult/Error",
  "non3DPayment": false
}
```

```json title="Response"
{
  "header": {
    "requestId": "a3f2893f-bc84-47c8-9a31-c747d8ecbdb5",
    "success": true,
    "responseTime": "2021-03-17T11:51:55.5052693Z",
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
    "paymentTransactionType": 4,
    "paymentTransactionId": "1331501D210317N00004"
  }
}
```

###**Credit Card**

CardInfo attribute just need to use with credit card payment option.

```json title="Request"
{
   "TransactionId":"37efbea7-a2bc-4e6a-939d-61eb12857946",
   "PaymentOption":3,
   "PaymentTypeId":"1033",
   "Installment":1,
   "CardInfo":{
      "ExpiryMonth":"11",
      "ExpiryYear":"2021",
      "CardNo":"4090700102323514",
      "CardHolderFirstName":"AAA",
      "CardHolderLastName":"BBBB",
      "CvvNo":"834"
   },
   "SuccessUrl":"http://localhost:8080/secure3DSuccess.html",
   "ErrorUrl":"http://localhost:8080/secure3DError.html"
}

```

```json title="Response"
{
    "header": {
        "requestId": "eacfcec8-ccbe-4f04-9694-3dc97c219d33",
        "success": true,
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
        "html": "<input type=\"hidden\" name=\"Lang\" value=\"tr\" />\r\n<input type=\"hidden\" name=\"SecureType\" value=\"3DPay\" />\r\n<input type=\"hidden\" name=\"InstallmentCount\" value=\"\" />\r\n<input type=\"hidden\" name=\"TxnType\" value=\"PreAuth\" />\r\n<input type=\"hidden\" name=\"Hash\" value=\"fJZm4mU5nVl3e9i/zz5lCtP17IM=\" />\r\n<input type=\"hidden\" name=\"Rnd\" value=\"636411829726123772\" />\r\n<input type=\"hidden\" name=\"FailUrl\" value=\"http://192.168.2.191/TourVisio.WebService.Media/payment/DenizbankResponse\" />\r\n<input type=\"hidden\" name=\"Pan\" value=\"4090700102323514\" />\r\n<input type=\"hidden\" name=\"Cvv2\" value=\"834\" />\r\n<input type=\"hidden\" name=\"Expiry\" value=\"1121\" />\r\n<input type=\"hidden\" name=\"BonusAmount\" value=\"\" />\r\n<input type=\"hidden\" name=\"CardType\" value=\"0\" />\r\n<input type=\"hidden\" name=\"ShopCode\" value=\"3123\" />\r\n<input type=\"hidden\" name=\"PurchAmount\" value=\"225.87\" />\r\n<input type=\"hidden\" name=\"Currency\" value=\"949\" />\r\n<input type=\"hidden\" name=\"OrderId\" value=\"0a5650fbb60445b895854412bf1bee1f\" />\r\n<input type=\"hidden\" name=\"OkUrl\" value=\"http://192.168.2.191/TourVisio.WebService.Media/payment/DenizbankResponse\" />\r\n",
        "postUrl": "https://sanaltest.denizbank.com/MPI/Default.aspx",
        "paymentTransactionType": 2,
        "paymentTransactionId": "0a5650fbb60445b895854412bf1bee1f"
    }
}
```

###**Third Party Providers**

```json title="Request"
{
    "Currency": "EUR",
    "Culture": "en-US",
    "TransactionId": "YourTransactionId",
    "PaymentOption": 18,
    "PaymentTypeId": "GetPaymentOptionDetail - body.detail.options[*].paymentOptions[*].paymentTypeId",
    "MakeCommitTransactionAfterPaymentAsync": true,
    "SuccessUrl": "https://www.yourwebsite.com/payment-status?paymentStatus=0",
    "ErrorUrl": "https://www.yourwebsite.com/payment-status?paymentStatus=1"
}
```

```json title="1. Response - Post Form"
{
	"body": {
		"html": "<input type=\"hidden\" name=\"trans_id\" value=\"C6Khj7DRFEXQlAPWgdIku6nXXTs=\" />\n",
		"postUrl": "https://ecomm.maib.md:7443/ecomm2/ClientHandler",
		"paymentTransactionType": 2,
		"paymentTransactionId": "1331501D220719N00010"
	},
	"header": {
		"requestId": "6c2da0c1-00e1-475e-8113-a4a8a25e36e6",
		"success": true,
		"responseTime": "2022-07-19T10:59:59.9608529Z",
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

```json title="2. Response - Post Url"
{
	"body": {
		"postUrl": "https://paypage.sandbox.ngenius-payments.com/?code=fdfccf699ccd14da&slim=true",
		"paymentTransactionType": 3,
		"paymentTransactionId": "1331501D220719N00011",
		"responseType": 2
	},
	"header": {
		"requestId": "295217ca-99e1-42d0-bc97-f66ef02539ff",
		"success": true,
		"responseTime": "2022-07-19T11:05:49.2689709Z",
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

```json title="3. Response - Redirect"
{
    "body": {
        "postUrl": "https://ipgtest.monri.com/v2/payment/WyI4MDlhNDU1YTE5ODIzNjIyYWI3ZjcxNDA1ZmY3MTI0NTE1ODI5ZTU1IiwiMTMzMTUwMUQyMjA3MTlOMDAwMDciXQ/form",
        "paymentTransactionType": 5,
        "paymentTransactionId": "1331501D220719N00007",
        "responseType": 2
    },
    "header": {
        "requestId": "773d69ef-3368-46fa-b156-ce9db2c382c7",
        "success": true,
        "responseTime": "2022-07-19T09:04:35.3570693Z",
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

```json title="3. Response - Render Html"
{
	"body": {
		"html": "<form action=\"https://preprod-services.tourvisio.com/media/Payment/AllSecureResponse\" class=\"paymentWidgets\" data-brands=\"VISA MASTER MAESTRO\"></form>",
		"scriptUrls": [
			"https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=DF22EEA6BD75E4CB0E3E82509AFD99C3.uat01-vm-tx01"
		],
		"paymentTransactionType": 6,
		"paymentTransactionId": "1331501D220719N00013"
	},
	"header": {
		"requestId": "2018ecbc-4146-4a5d-a520-ea58c3a4d5c8",
		"success": true,
		"responseTime": "2022-07-19T11:11:52.4963745Z",
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

MakeCommitTransaction (boolean): If you use this property will be first create reservation then you will get redirect to success or error url address.

MakeCommitTransactionAfterPaymentAsync (boolean): If you use this property will be redirect to success url address.


###**Third Party Providers - Partial Payment**

```json title="Request"
{
 "transactionId": "077f5bc3-9e89-416e-8bb1-907bf2e63cd3",
 "totalPriceToPay": {
    "amount": "50",
    "currency": "EUR"
 },
 "paymentOption": 2,
}
```
To use partial payment, payment plan must be initilized on TourVisio to the amout that wanted to be charged. Payment amount cannot be less then initilized first payment plan amount.
Please update "paymentOption" parameter's value according to your payment option before sending request. 
Parameter's value can be found through link [Payment Options](../enumarations/#payment-option)



##**Get Transaction Status**


| Update Date:             | 01.02.2023                                                                                                                                                                               |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Method Adress            | ```/api/TransactionService/GetTransactionStatus```                                                                                                                             |
| Method Type              | ```POST```                                                                                                                                                                     |
| Token Required           | ```YES```                                                                                                                                                                      |
| **Releated Links*        |[Booking Transaction Process Status](../enumarations/#booking-transaction-process-status) <br/>[Booking Transaction Status](../enumarations/#booking-transaction-status)|
| Description              | ```Is used with asynchronous payment type to check transaction status, because some payment integrations may not return an answer immediately, so when API expects an answer from payment integration, this method's process status stays on waiting status until answer comes from payment integration. On this stage returned page should continuously ask to the API for status changes until process status changes to Completed or Errored. Additionally status parameter can be checked for payment status. Parameters returns in numeric values. Referring enumerations can be found on the links above.```                                                                                                                                                                   |


```json title="Request"
{
    "transactionId": "a59d531a-0c7e-4859-a7f7-10a1749ad880"
}
```


```json title="Response"
{
    "body": {
        "processStatus": 1,
        "status": 1,
        "transactionType": 0
    },
    "header": {
        "requestId": "52854652-7804-4613-b36c-d6f993ec1551",
        "success": true,
        "responseTime": "2023-02-01T07:57:15.0195532Z",
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

##**Check Payment Status (Conditional)**


| Update Date:       |                23.07.2023                                                           |
|--------------------|---------------------------------------------------------------------------|
| Method Adress      | ```/api/PaymentService/CheckPayment```                                    |
| Method Type        | ```POST```                                                                |
| Token Required     | ```YES```                                                                 |
| **Releated Links** | [Payment Transaction Status](../enumarations/#payment-transaction-status) |
| Description        | ```Is used with asynchronous payment type to check transaction status, because some payment integrations may not return an answer immediately, so when API expects an answer from payment integration, this method's process status stays on waiting status until answer comes from payment integration. On this stage returned page should continuously ask to the API for status changes until process status changes to Completed or Errored. Additionally status parameter can be checked for payment status. Parameters returns in numeric values. Referring enumerations can be found on the links above.```                           



```json title="Request"
{
    "paymentTransactionId": "1331501D220719N00007"
}
```

```json title="Response"
{
    "body": {
        "paymentTransactionId": "1331501D220719N00007",
        "status": 0
    },
    "header": {
        "requestId": "72e0f4c5-3061-40df-b74d-50e48830ea6e",
        "success": true,
        "responseTime": "2022-07-19T09:07:56.9501787Z",
        "messages": [
            {
                "id": 10000000,
                "code": "OperationCompleted",
                "messageType": 2,
                "message": "Operasyon Başarıyla Tamamlandı"
            }
        ]
    }
}
```