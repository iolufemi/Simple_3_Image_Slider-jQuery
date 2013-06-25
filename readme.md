<html>
<body>
<h1>Simple 3 Image Slider jQuery Plugin</h1>
<h6>Can be used as an advert rotator</h6>
<p><code>
  
  
</code><strong><br>
  give the div containing the slider in id called femiSlider,<br>
  include jQuery script and femiSlider script.<br>
  Then put this in your HTML:<br>
default option has w width of 300px and height of 250px</strong><strong></strong></p>
<p><br>
  <em>&lt;script type=&quot;text/javascript&quot;&gt;<br>
  $(document).ready( function() {<br>
// use default options <br>
$('#femiSlider').femiSlider();<br>
// custom options<br>
$('#femiSlider').femiSlider({width:300, height:200});<br>
});<br>
&lt;/script&gt;</em></p>
<p><strong>Sample html code:</strong></p>
<p><br>
  &lt;!DOCTYPE HTML&gt;<br>
  &lt;html&gt;<br>
  &lt;head&gt;<br>
  &lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html&quot; /&gt;<br>
  &lt;meta name=&quot;author&quot; content=&quot;Olanipekun Femi&quot; /&gt;<br>
  &lt;script src=&quot;jquery-1.7.2.min.js&quot;&gt;&lt;/script&gt;<br>
  &lt;script src=&quot;femiSlider.js&quot;&gt;&lt;/script&gt;<br>
  &lt;link href=&quot;femiSlider.css&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot; /&gt;<br>
  &lt;title&gt;My Slider&lt;/title&gt;<br>
&lt;/head&gt;</p>
<p>&lt;body&gt;<br>
  &lt;div id=&quot;femiSlider&quot;&gt;<br>
  &lt;ul&gt;<br>
  &lt;li class=&quot;first&quot;&gt;&lt;img src=&quot;images/1.jpg&quot; /&gt;&lt;/li&gt;<br>
  &lt;li class=&quot;second&quot;&gt;&lt;img src=&quot;images/2.jpg&quot; /&gt;&lt;/li&gt;<br>
&lt;li class=&quot;last&quot;&gt;&lt;img src=&quot;images/3.jpg&quot; /&gt;&lt;/li&gt;</p>
<p>&lt;/ul&gt;<br>
  &lt;/div&gt;</p>
<p>&lt;script type=&quot;text/javascript&quot;&gt;</p>
<p>$('#femiSlider').femiSlider({width:800, height:800});<br>
</p>
<p>&lt;/script&gt;</p>
<p>&lt;/body&gt;<br>
  &lt;/html&gt;<br>
</p>
</body>
</html>