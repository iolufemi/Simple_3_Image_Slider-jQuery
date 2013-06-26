Simple 3 Image Slider jQuery Plugin

Can be used as an advert rotator


give the div containing the slider in id called femiSlider,
include jQuery script and femiSlider script.
Then put this in your HTML:
default option has w width of 300px and height of 250px


<script type="text/javascript">
$(document).ready( function() {
// use default options 
$('#femiSlider').femiSlider();
// custom options
$('#femiSlider').femiSlider({width:300, height:200});
});
</script>

Sample html code:


<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="content-type" content="text/html" />
<meta name="author" content="Olanipekun Femi" />
<script src="jquery-1.7.2.min.js"></script>
<script src="femiSlider.js"></script>
<link href="femiSlider.css" rel="stylesheet" type="text/css" />
<title>My Slider</title>
</head>

<body>
<div id="femiSlider">
<ul>
<li class="first"><img src="images/1.jpg" /></li>
<li class="second"><img src="images/2.jpg" /></li>
<li class="last"><img src="images/3.jpg" /></li>

</ul>
</div>

<script type="text/javascript">

$('#femiSlider').femiSlider({width:800, height:800});
</script>

</body>
</html>