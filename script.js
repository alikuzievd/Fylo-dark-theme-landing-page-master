$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 1px)");
    if (desktopSize.matches){
        $(".error").hide();
        $(".btn-3").click(function(){
            $(".error").show(0)
        })
    }
    else {
        
    }
});
