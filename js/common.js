/*
 * index.js
 */
$(function() {
    $('[placeholder]').ahPlaceholder({
        placeholderColor : 'silver',
        placeholderAttr : 'placeholder',
        likeApple : false
    });
    
    $("#nav").tinyNav({
        active: 'selected'
    });
    SyntaxHighlighter.all();
});

$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: false,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
    $('.flexslider1').flexslider({
        animation: "slide",
        //animationLoop: false,
        //controlNav: false,
        //itemWidth: 546,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});