-----------------------------
#Content Management

-----------------------------
##GetContents Method

Update Date:	  |      25.02.2023
----------------------|--------------------
     Method Adress    | ```/api/contentmanagementservice/getcontents```  
      Method Type     | 	```POST```
    Token Required    |		```NO```

###Request Sample

```
{
  
}
```

###Response Sample

```
 {
 "header": {
    "requestId": "a2343947-f2c6-4636-80be-b858d09c4e52",
    "success": true,
    "responseTime": "2021-02-25T09:06:59.2447578Z",
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
    "contents": [
      {
        "code": "TermsOfUseContent_for_B2B",
        "name": "Terms Of Use Content for B2B",
        "contentType": 0
      },
      {
        "code": "TermsAndConditions",
        "name": "Terms And Conditions",
        "contentType": 0
      }
    ]
  }
 }
```

-----------------------------
##GetContentDetail Method

Update Date:	  |      25.02.2023
----------------------|--------------------
     Method Adress    | ```/api/contentmanagementservice/getcontentdetail```  
      Method Type     | 	```POST```
    Token Required    |		```NO```

###Request Sample

```
{
  "Code": "TermsOfUseContent_for_B2B",
  "Culture": "tr-TR" // optional
}
```

###Response Sample

```
 {
  "header": {
    "requestId": "cbb34470-38c4-4a82-bdb3-b3aaf573f913",
    "success": true,
    "responseTime": "2021-02-25T09:18:12.7017088Z",
    "messages": [
      {
        "id": 10000000,
        "code": "OperationCompleted",
        "messageType": 2,
        "message": "Operasyon Başarıyla Tamamlandı"
      }
    ]
  },
  "body": {
    "contentDetail": {
      "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur maximus cursus. Duis lacinia bibendum eros, eget facilisis lorem molestie ut. Vestibulum volutpat dolor ut eros feugiat, ac porta lectus laoreet. Morbi dictum feugiat euismod. Etiam ornare mauris vitae nisi pellentesque, nec congue nisl fringilla. Etiam facilisis consectetur nisi, mollis vehicula est elementum varius. Quisque mi dolor, hendrerit egestas ex vitae, blandit tincidunt velit. Etiam a sapien venenatis, dignissim lectus vel, aliquet mi. Cras viverra lobortis feugiat. Donec vitae purus diam. Sed massa elit, tincidunt ac ligula non, tristique interdum sapien. Duis aliquam augue vitae varius rhoncus. Maecenas purus enim, interdum vitae elit in, ullamcorper suscipit erat. Morbi accumsan semper est, a porttitor erat iaculis non. Mauris ultricies tincidunt justo id elementum.</p>\n\n<p>Ut eleifend nisi sit amet lorem malesuada, id placerat nunc feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum id aliquet mi. Aenean ac felis varius, laoreet mauris at, mattis metus. Duis hendrerit, odio eu tempor interdum, nulla dolor ultricies ligula, nec placerat turpis quam elementum felis. Integer sit amet auctor odio. Aliquam ac mattis odio. Proin commodo sodales ligula, a vestibulum nunc interdum et. Donec quis sodales velit. Mauris at enim ut nisi hendrerit tincidunt. Etiam efficitur neque turpis, in iaculis nisl rhoncus a. Curabitur molestie laoreet massa, ac vestibulum nibh ullamcorper at. Curabitur lectus lorem, laoreet ut felis non, tincidunt imperdiet magna. Duis rutrum libero et lacus lacinia, nec posuere quam bibendum.</p>\n\n<p>Vestibulum quis consequat mauris, non placerat lacus. Quisque ornare lacus at maximus tincidunt. Donec efficitur, velit a semper consectetur, neque elit tempus mauris, nec blandit mauris eros sit amet lectus. Ut a ornare ligula, sit amet tempus purus. In eget leo nisi. Etiam vitae lacinia dolor. In pharetra elementum augue non facilisis. Cras consectetur nisi nulla, ut iaculis purus vulputate sit amet. Maecenas interdum orci justo, non interdum elit pulvinar quis. Nulla sed neque ac odio rutrum malesuada. Proin venenatis convallis ullamcorper.</p>\n\n<p>Donec rhoncus egestas dolor ornare fringilla. Integer non scelerisque nisi. Duis accumsan congue ipsum et pharetra. Fusce hendrerit convallis sapien, sed euismod lacus. Sed fermentum placerat orci in rhoncus. Suspendisse ornare lacus a lorem faucibus laoreet. Maecenas sed purus sodales metus euismod tristique in mollis enim. Donec tincidunt, libero eget ornare eleifend, diam urna tempor metus, sed accumsan turpis enim id augue. Aliquam erat volutpat.</p>\n\n<p>Ut volutpat libero scelerisque justo gravida auctor. Morbi tincidunt pharetra felis sit amet tempus. Cras at velit sit amet libero commodo consequat dignissim quis diam. Donec non nunc ut augue elementum auctor a sit amet velit. Nulla facilisi. Morbi ut turpis blandit, malesuada sapien ac, fermentum sapien. Curabitur at orci porta, ultrices dui nec, condimentum dui. Vivamus non fermentum nibh. Vestibulum sit amet elit dapibus, fringilla massa non, aliquam leo. Quisque dignissim odio quis consequat sollicitudin. Vivamus elementum ligula pharetra velit vehicula suscipit. Donec fermentum dolor a tortor lobortis cursus. Sed vitae aliquet augue. Maecenas varius diam at felis congue condimentum. Sed at enim sit amet dui accumsan ullamcorper. Sed in placerat arcu, in cursus turpis.</p>\n"
    }
  }
}
```

-----------------------------