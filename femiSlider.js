(function($){
    $.fn.extend({
        // change 'femiSlider' to your plugin name (duh)
        femiSlider: function(options) {

            // options for the plugin
            var defaults = {
                width: 300,
                height: 250
            }

            var options =  $.extend(defaults, options);

            return this.each(function() {
                $('#slider ul, #slider li').css('width',options.width);
                $('#slider ul, #slider li').css('height',options.height);
                $('#slider ul > li').css('right',-options.width);
                $('#slider').css('max-width',options.width);
                $('#slider').css('max-height',options.height);
                $('#slider').css('height',options.height);
                function tslider(){
                $('#slider  ul > li.first').addClass('nextlast');
                $('#slider li.nextlast').removeClass('first');
                
                
                $('#slider  ul > li.second').addClass('nextfirst');
                $('#slider li.nextfirst').removeClass('second');
                
                
                $('#slider  ul > li.last').addClass('nextsecond');
                $('#slider li.nextsecond').removeClass('last');
                
                
                $('#slider li.nextlast').addClass('last');
                $('#slider li.last').removeClass('nextlast');
                
                $('#slider li.nextfirst').addClass('first');
                $('#slider li.first').removeClass('nextfirst');
                
                $('#slider li.nextsecond').addClass('second');
                $('#slider li.second').removeClass('nextsecond');
                }
                
                setInterval(function(){
                  tslider();  
                },5000);
            });
        }
    });
})(jQuery);
