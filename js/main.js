$(document).ready(function(){
    $(".panel-heading").click(function(){
        $(".panel-heading").not(this).removeClass("active");
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    });
    
    $('.question').popover();

    if($(window).width()>=768){
        $('.green-popover').popover({
            template: '<div class="popover green" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
        });
    }

    if($(window).width()>=768){
        $('.red-popover').popover({
            template: '<div class="popover red" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>'
        });
    }
});




