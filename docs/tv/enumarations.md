##Enumerations
-------------------------------------------------------------------------------
###Passenger Types

| Value | Description |
|-------|-------------|
| 1     | Adult       |  
| 2     | Child       |
| 3     | Infant      |
| 4     | Senior      |
| 5     | Student     |
| 6     | Young       |
| 7     | Military    |
| 8     | Teacher     |
| 9     | Medical     |

###Traveller Types

| Value | Description |
|-------|-------------|
| 1     | Adult       |  
| 2     | Child       |
| 3     | Infant      |

###Traveller Titles

| 	Value | Description |
|---------|-------------|
| 1       | Mr          |  
| 2       | Ms          |
| 3       | Mrs         |
| 4       | Miss        |  
| 5       | Child       |
| 6       | Infant      |

###Gender

| 	Value | Description |
|---------|-------------|
| 0       | Female      |  
| 1       | Male        |


###Message Types

| Value  | Description |
|--------|-------------|
| 1		 | 	   Error   |
| 2		 | 	  Success  |
| 3		 | Information |
| 4		 | 	  Warning  |

###Message Codes

| Value  | Description                          |
|--------|--------------------------------------|
| 1      | Operation was completed successfully |     

###Product Types

| Value | Description       |
|-------|-------------------|
| 1     | HolidayPackage    |  
| 2     | Hotel             |
| 3     | Flight            |
| 4     | Excursion         |
| 5     | Transfer          |
| 6     | Tour              |
| 7     | Cruise            |
| 8     | Transport         |
| 9     | Ferry             |
| 10    | Visa              |
| 11    | AdditionalService |
| 12    | Insurance         |
| 13    | Dynamic           |
| 14    | Renting           |

###Autocomplete Response Types

|		Value         |    Description   |
|---------------------|------------------|
|		  1			  |        City      |  
|		  2			  | 	  Hotel      |
|		  3			  |		 Airport     |
|		  4			  |	      Town       |
|		  5			  |	     Village     |
|		  6			  |	    Excursion    |
|		  7			  |	    Category     |
|		  8			  |	    Country      |
|		  9			  |	    Transfer     |
|		 10			  |	ExcursionPackage |

###Location Types

|		Value         |    Description   |
|---------------------|------------------|
|		  1			  | 	  Country    |
|		  2			  |		   City      |
|		  3			  |		   Town      |
|		  4			  |		  Village    |
|		  5			  |		  Airport    |



###Mapping For Autocomplete & Location Types

<table class="docutils">

<tbody><tr>
  <th colspan="2">Autocomplete Response Types</th>
  <th colspan="2">Location Types</th>
</tr>

<tr>
<th>Value</th>
<th>Description</th>
<th>Value</th>
<th>Description</th>
</tr>

<tr>
<td>8</td>
<td>Country</td>
<td>1</td>
<td>Country</td>
</tr>

<tr>
<td>1</td>
<td>City</td>
<td>2</td>
<td>City</td>
</tr>

<tr>
<td>4</td>
<td>Town</td>
<td>3</td>
<td>Town</td>
</tr>

<tr>
<td>5</td>
<td>Village</td>
<td>4</td>
<td>Village</td>
</tr>

<tr>
<td>3</td>
<td>Airport</td>
<td>5</td>
<td>Airport</td>
</tr>

</tbody></table> 

###File Types

|		Value         |      Description   |
|---------------------|--------------------|
|		  1			  | 	   Image       |
|		  2			  | 	    PDF        |


###Document Types 

|	Value    |    Description   |
|------------|------------------|
|     1		 | 	     Invoice    |
|     2		 | 	    Voucher     |
|     3		 |    Insurance     |
|     4		 |   FlightTicket   |
|     5		 | 	   Contract     |
|     6		 |AgencyConfirmation|
|     7		 | ExcursionVoucher |
|     8		 | TransferVoucher  |
|     9		 | 	    Receipt     |

###Payment Option 

| Value  | Description                          |
|--------|--------------------------------------|
| -1     | Undefined                            |
| 0      | Cash                                 |
| 1      | OpenAccount                          |
| 2      | AgencyCredit                         |
| 3      | CreditCard                           |
| 4      | BankTransfer                         |
| 5      | ExternalCreditCard                   |
| 6      | Optional                             |
| 7      | Manuel                               |
| 8      | MolliePaymentGateway                 |
| 9      | AntePAYPaymentGateway                |
| 10     | AllSecurePaymentGateway              |
| 11     | SaferpayPaymentGateway               |
| 12     | MultiCreditCard                      |
| 13     | SberBankPaymentIntegration           |
| 14     | AlfaBankPaymentIntegration           |
| 15     | KlarnaPaymentIntegration             |
| 16     | NovaPaymentIntegration               |
| 17     | RevoPaymentIntegration               |
| 18     | BankartPaymentIntegration            |
| 19     | CurrentAgencyHasLimitParentNot       |
| 20     | SafeChargePaymentGateway             |
| 21     | BoricaPaymentIntegration             |
| 22     | PayTabsPaymentGateway                |
| 23     | Aaib                                 |
| 24     | Stripe                               |
| 25     | PayTabs2PaymentGateway               |
| 26     | CibBank                              |
| 27     | VubBank                              |
| 28     | Moneta                               |
| 29     | GiroGate                             |
| 30     | Monri                                |
| 31     | Maib                                 |
| 32     | N-Genius                             |
| 33     | EcommPay							                |
| 34     | Ecom CMI & Bank Intesa               |
| 35     | Moka                                 |
| 36     | Adyen				                        |
| 37     | Mellat				                        | 
| 39     | SigmaPay				                      |
| 40     | FibBank				                      |
| 42     | EMoney				                        |
| 43     | FastPay				                      |

###Payment Providers

| Value | Description            |
|-------|------------------------|
| 1000  | Iyzico                 |  
| 1001  | NestPay                |
| 1002  | DPay                   |
| 1004  | Mellay                 |
| 1005  | MIGS                   |
| 1006  | EST                    |
| 1008  | Garanti                |
| 1009  | Denizbank              |
| 1010  | Yapı Kredi             |
| 1011  | Alfa Bank              |
| 1012  | Mollie                 |
| 1014  | All Secure             |
| 1016  | Saferpay               |
| 1017  | Sberbank               |
| 1018  | Klarna                 |
| 1019  | Finansbank             |
| 1021  | Revo                   |
| 1022  | Bankart                |
| 1023  | SafeCharge             |
| 1024  | Borica                 |
| 1025  | PayTabs                |
| 1026  | Aaib                   |
| 1027  | Stripe                 |
| 1028  | PayTabs V2             |
| 1029  | CIB Bank               |
| 1030  | VUB Bank               |
| 1031  | Vakifbank              |
| 1032  | Moneta                 |
| 1033  | GiroGate               |
| 1034  | Param                  |
| 1035  | Monri                  |
| 1036  | Maib                   |
| 1037  | NGenius                |
| 1038  | EcommPay               |
| 1039  | Ecom CMI & Bank Intesa |
| 1040  | Moka                   |
| 1041  | AdyenBank              |
| 1043  | SigmaPay               |
| 1044  | FibBank                |
| 1046  | EMoney                 |
| 1047  | FastPay                |

###Payment Transaction Type

| Value | Description       |                                                                         |
|-------|-------------------|-------------------------------------------------------------------------|
| 0     | Undefined         |                                                                         |  
| 1     | OpenModal         |                                                                         |
| 2     | PostForm          | You need create a form and send postUrl attbirute with all input values |
| 3     | PostUrl           | Just need redirect page with response postUrl attribute                 |
| 4     | Continue          |                                                                         |
| 5     | RedirectToPostUrl | This attribute is meaning need to go to redirect url address            |
| 6     | RenderHtml        | Render html is create a DOM page with code                              |

###Payment Transaction Response Type

| Value | Description                    |
|-------|--------------------------------|
| 0     | WaitPaymentStatus              |  
| 1     | CheckPaymentStatus             |
| 2     | CheckCommitTransactionResponse |

###Payment Status 

| Value  | Description |
|--------|-------------|
| 1      | None        |
| 2      | UnPaid      |
| 3      | PartlyPaid  |
| 4      | Paid        |
| 5      | Over        |

###Payment Transaction Status

| Value  | Description |
|--------|-------------|
| 0      | InComplete  |
| 1      | Complete    |
| 2      | Errored     |
| 3      | Voided      |
| 4      | Refunded    |

###Reservation Status 

| Value  | Description |                                                                                                                                                                                                                                                                         |
|--------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0      | New         |                                                                                                                                                                                                                                                                         |
| 1      | Modified    |                                                                                                                                                                                                                                                                         |
| 2      | Cancel      | Indicates that the reservation has been cancelled without paying penalty price. Any paid amount is fully refunded.                                                                                                                                                      | 
| 3      | CancelX     | Indicates that the reservation has been cancelled but the agency had to pay a penalty price to cancel the reservation. Penalty amount could be either a portion or full amount of the reservation. This amount is received in Get Cancellation Penalty method response. |
| 9      | Draft       |                                                                                                                                                                                                                                                                         |

###Confirmation Status 

| Value  | Description |
|--------|-------------|
| 0      | Request     |
| 1      | Confirm     |
| 2      | NoConfirm   |
| 3      | NoShow      |


###Booking Transaction Process Status 

| Value  | Description |
|--------|-------------|
| 0      | Waiting     |
| 1      | Completed   |
| 2      | Errored     |



###Booking Transaction Status 

| Value  | Description         |
|--------|---------------------|
| 0      | Errored             |
| 1      | Completed           |
| 2      | ThirdPartyCompleted |
| 3      | Committing          |
| 4      | Open                |
| 5      | Expired             |
| 6      | Cancelled           |
| 7      | Reserved            |
| 8      | RollbackFailed      | 
| 9      | PartialCancel       |
| 10     | CancelX             |
| 11     | Modified            |



###Offer Availability

|  Value | Description  |                                                                                                                                                                 |
|--------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | Available    |                                                                                                                                                                 |
| 2      | Request      | This offer can be used in bookings but not confirmed right away. Operator should be in contact with the supplier, confirmation process can take up to 24 hours. |
| 3      | NotAvailable | The offer is not available right now and cannot be used for booking.                                                                                            |

###Baggage Types

|	Value    |  Description  |
|------------|---------------|
|     1		 | 	   Checkin   |
|     2		 | 	    Hand     |

###Transfer Direction

| 	Value | Description |
|--------|-------------|
| 1      | Forward     |
| 2      | Backward    |
| 3      | RoundTrip   |

###Flight Types

| 	Value | Description |
|--------|-------------|
| 0      | Regular     |
| 1      | Charter     |

###FlightRoute Types

|	Value    |  Description  |
|------------|---------------|
|     1		 | 	   Outbound  |
|     2		 | 	   Return    |

###FlightClass Types

|	Value    |  Description  |
|------------|---------------|
|     0		 | 	   PROMO  |
|     1		 | 	   ECONOMY    |
|     2		 | 	   BUSINESS    |

###Flight Brand Feature Service Group

|	Value    |  Description  |
|------------|---------------|
|     0		 |  BrandedFare  |
|     1		 |  Baggage      |
|     2		 | 	FrequentFlyer |
|     3		 | 	InFlightEntertainment |
|     4		 | 	LoungeAccess |
|     5		 | 	MealBeverage |
|     6		 | 	Pets         |
|     7		 |  Upgrades     |

###Flight Brand Pricing Type

|	Value    |  Description  |
|------------|---------------|
|     0		 | 	  Free       |
|     1		 | 	 Chargable   |
|     2		 | 	 NotOffered  |

###Flight Baggage Get Option

|	Value    |  Description  |
|------------|---------------|
|     0		 | 	  All       |
|     1		 | 	 OnlyBaggage   |
|     2		 | 	 OnlyNotBaggage  |

###Baggage Unit Type

|	Value    |  Description  |
|------------|---------------|
|     0		 | 	   KG        |
|     1		 | 	   LB        |
|     2		 | 	   Piece     |

###Date Criteria Types

|	Value    |  Description  |
|------------|---------------|
|     0		 | SERVICEDATE   |
|     1		 | REGISTER      |
|     2		 | CANCELLATIONDEADLINE |
|     3		 | OPTIONDATE    |
|     4		 | CHANGEDATE    |

###Price Types

 |	Value    |  Description  |
|------------|---------------|
|     0		 | UNDEFINED	 |
|     1		 | PERPAX		 |
|     2		 | PERSERVICE	 |
|     3		 | PERROOM		 |

###Receipt Types

|		Value         |    Description   |
|---------------------|------------------|
|		  0			  | 	  Payment    |
|		  1			  |		  Refund     |