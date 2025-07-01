#Document Processing

All documents are accessed via media address. That's why we recommend reading the [media access](../media-access) part firstly. All document types accessed [here](../enumarations/#document-types)

-----------------------------
###Sample Documents

Documents are in the **documents** response object. For example, the documents is inside the                        [getreservationdetail](../booking/#getreservationdetail-method), [begintransaction](../booking/#begintransaction-method), etc.

```
"documents": [
  {
    "documentType": 1,
    "url": "/documents/1/3084/21/920dce49-05ae-4bea-b341-645f99295db3/1",
    "name": "CONTRACT"
  },
  {
    "documentType": 6,
    "url": "/documents/1/3084/6/920dce49-05ae-4bea-b341-645f99295db3/27",
    "name": "AGENCY CONFIRMATION"
  }
]
```
###Sample Usage

All documents are accessed in the same way.

```
{
<!--{Media address}/{document url}-->
http://service.stage.paximum.com/media/documents/1/2/6/25251252-f72d-495c-87f3-015db18be201/4
}
```
