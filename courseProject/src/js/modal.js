$(function(){
    $(".header-phone__button").click(function() {
        $(".over").css("display", "flex")
    })
    $(".modal-window-close").click(function() {
        $(".over").css("display", "none")
    })
    $(".over").click(function() {
        $(".over").css("display", "none")
    })
    $(".modal-window").click(function(event){
        event.stopPropagation()
    })
    
})