$(function() {
    /*
	$('#content-slider-wrapper').cycle({
        fx:     'fade',
        speed:  'slow',
        nowrap:  1,
        timeout: 0,
        cleartypeNoBg: true,
        pager:  '#slider-navigation',
        activePagerClass: 'activeSlide',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#slider-navigation li:eq(' + (idx) + ') a';
        }
    });
	*/
});

$(document).ready(function() { 
    $('ul.sf-menu').superfish({ 
          delay:       1000,                            // one second delay on mouseout 
          animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
          speed:       'fast',                          // faster animation speed 
          autoArrows:  false,                           // disable generation of arrow mark-up 
          dropShadows: false                            // disable drop shadows 
    }); 
    
    //jQuery('a.fancy').fancybox();
    
    jQuery('div.gallery-picture > div.image img').hover(function(){
	jQuery(this).stop().fadeTo(500, 0.4);
	}, function() {
		jQuery(this).stop().fadeTo(300, 1);
	});
});
