jQuery(document).ready(function() {

    var navOffset = jQuery(".menubar").offset().top;
    
    jQuery(".menubar").wrap('<div class="nav-placeholder"></div>');
    jQuery(".nav-placeholder").height(jQuery(".menubar").outerHeight());
    
    jQuery(".menubar").wrapInner('<div class="nav-inner"></div>');
    
    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();
        
        if (scrollPos >= navOffset) {
        
            jQuery(".menubar").addClass("fixed");
        } else {
            jQuery(".menubar").removeClass("fixed");
        }
        
    });
    
});

// Text scroll letter by letter //
var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function () { 
 
  showText("#subscript", "A testing page for various animations and javascript functions", 0, 100);    
 
}); 



// ----------other-scripts---------- \\


//        jQuery(".status").html(scrollPos);
//        alert(navOffset);



//jQuery(document).ready(function() {
//    jQuery(".dropbtn").click(function() {
//        jQuery(".grid3").hide();
//    });
//});