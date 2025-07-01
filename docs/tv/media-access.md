
##Media Access

During integration, you are going to need the medias such as product images, brochures, travel documents etc. API methods are going to give you the necessary path to access such medias.

After this step, to access to the medias, all you have to do is to use media endpoint.
If you don't know your endpoint address, you can use that simple logic down below:

*Above: Cupcake indexer in progress*

  *	Service endpoint

```
  http(s)://<domain>/v2
```


  * Media endpoint

```
  http(s)://<domain>/media
```

### Importants

*	Make sure you used all lowercase for media access!
*	Please visit below link for image progressing features. It will help you about bandwidth optimisation. 
    +	<http://docs.santsg.com/tourvisio/imgproc>
    

###Sample Api Response

  ```
  /images/product/2/2/2/104017-f753c38e59f2eb1d012d8885d9af338f/adalia_boutique.jpg
  ```

###Sample Media Url

  ```
  http://service.stage.paximum.com/media/images/product/2/2/2/104017-f753c38e59f2eb1d012d8885d9af338f/adalia_boutique.jpg
  ```