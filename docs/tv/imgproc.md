
#Image Processing

API contains it’s own image processing module. In this way, you can obtain an image the way you need it. So that, you can both reduce your network traffic and provide a faster data access.

Let’s say you’re going to list the thumbnails ( 200 x 200 ) of hotels on a page and let’s assume average size of each and every hotel's image was 75 KB. When you used the original size of the images for a 200 x 200 display, there would be 7500 KB data transfer for 100 hotels. When you requested images in 200 x 200 format, averagely 10 KB data transfer would happen-which means, for 100 hotels, in total of 1000 KB data transfer. So you get average of 7.5 times less data traffic and faster data transfer.

API supporting Six different types of resizing methods are available:

* Pad(default)
* BoxPad
* Crop
* Min
* Max
* Stretch

-----------------------------
##Resize Pad

Passing a single dimension will automatically preserve the aspect ratio of the original image. If the requested aspect ratio is different then the image will be padded to fit. Widths and heights can optionally also be passed as a ratio.

*   center(default)
*   top
*   right
*   bottom
*   left
*   topleft
*   topright
*   bottomleft
*   bottomright

###Samples

```
{
  <!--Automatic height based on width-->
http://your-image?width=600
<!--Automatic width based on height-->
http://your-image?height=250
<!--Both dimensions specified-->
http://your-image?width=600&height=250
<!--Both dimensions specified with the image anchored to the top-->
http://your-image?width=600&height=250&anchor=top
<!--Height ratio passed for automatic scaling-->
http://your-image?width=600&heightratio=0.416
<!--Width ratio passed for automatic scaling-->
http://your-image?widthratio=2.4&height=250
<!--Background color added to padded image-->
http://your-image?width=600&height=250&bgcolor=fff
}
```

-----------------------------

##Resize BoxPad

When upscaling an image the image pixels themselves are not resized, rather the image is padded to fit the given dimensions. BoxPad mode also offers optional anchor positions:

*   center(default)
*   top
*   right
*   bottom
*   left
*   topleft
*   topright
*   bottomleft
*   bottomright

###Samples
```
{
 <!--Automatic height based on width-->
http://your-image?width=600&mode=boxpad
<!--Automatic width based on height-->
http://your-image?height=250&mode=boxpad
<!--Both dimensions specified-->
http://your-image?width=600&height=250&mode=boxpad
<!--Both dimensions specified with the image anchored to the top-->
http://your-image?width=600&height=250&anchor=top&mode=boxpad
<!--Height ratio passed for automatic scaling-->
http://your-image?width=600&heightratio=0.416&mode=boxpad
<!--Width ratio passed for automatic scaling-->
http://your-image?widthratio=2.4&height=250&mode=boxpad
}
```

-----------------------------

##Resize Crop

Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is cropped to match the new aspect ratio. Crop mode also offers optional anchor positions:

*   center(default)
*   top
*   right
*   bottom
*   left
*   topleft
*   topright
*   bottomleft
*   bottomright

You may specify a center as a fraction from the top-left corner of the image in y,x format. Fractions are specified as a decimal between 0 and 1. This point will be as close to the center of your crop as possible while keeping the crop within the image

###Samples
```
<!--Standard-->
http://your-image?width=300&height=300&mode=crop
<!--Crop anchored to the top-->
http://your-image?width=300&height=300&mode=crop&anchor=top
<!-- Center -->
http://your-image?width=300&height=300&mode=crop&center=0.25,0.30
```

-----------------------------

##Resize Min
Resizes the image until the shortest side reaches the set given dimension. This will maintain the aspect ratio of the original image. Upscaling is disabled in this mode and the original image will be returned if attempted.

###Sample
```
http://your-image?width=500&height=500&mode=min
```

-----------------------------

##Resize Max

Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is resized to the maximum possible value in each direction while maintaining the original aspect ratio.

###Sample
```
http://your-image?width=500&height=500&mode=max
```

-----------------------------

##Resize Stretch

Resizes the image to the given dimensions. If the set dimensions do not match the aspect ratio of the original image then the output is stretched to match the new aspect ratio.
###Sample
```
{
http://your-image?width=500&height=500&mode=stretch
}
```