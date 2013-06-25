(function($) {
	$.fn.extend({
		// change 'femiSlider' to your plugin name (duh)
		femiSlider: function(options) {
			// options for the plugin
			var defaults = {
				width: 300,
				height: 250
			}
			var options = $.extend(defaults, options);
			return this.each(function() {
				$('#femiSlider ul, #femiSlider li').css('width', options.width);
				$('#femiSlider ul, #femiSlider li').css('height', options.height);
				$('#femiSlider ul > li').css('right', -options.width);
				$('#femiSlider').css('max-width', options.width);
				$('#femiSlider').css('max-height', options.height);
				$('#femiSlider').css('height', options.height);

				function tslider() {
					$('#femiSlider  ul > li.first').addClass('nextlast');
					$('#femiSlider li.nextlast').removeClass('first');
					$('#femiSlider  ul > li.second').addClass('nextfirst');
					$('#femiSlider li.nextfirst').removeClass('second');
					$('#femiSlider  ul > li.last').addClass('nextsecond');
					$('#femiSlider li.nextsecond').removeClass('last');
					$('#femiSlider li.nextlast').addClass('last');
					$('#femiSlider li.last').removeClass('nextlast');
					$('#femiSlider li.nextfirst').addClass('first');
					$('#femiSlider li.first').removeClass('nextfirst');
					$('#femiSlider li.nextsecond').addClass('second');
					$('#femiSlider li.second').removeClass('nextsecond');
				}
				setInterval(function() {
					tslider();
				}, 5000);
			});
		}
	});
})(jQuery);