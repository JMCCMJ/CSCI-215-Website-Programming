var appear = function(){
    $(this).next().removeClass("hidden");
    
}
var hide = function(){
    $(this).next().addClass("hidden");
    
}




$(document).ready(function() {
    $("h2").hover(appear,hide);
    

}); // end ready