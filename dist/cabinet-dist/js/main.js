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
});




