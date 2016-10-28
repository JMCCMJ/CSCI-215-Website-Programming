
$(document).ready(function() {
    
    $('a').click(
        function(){
            
            $(this).prev().toggleClass("hide");//Toggle the text
            
            if($(this).text() == "Show more"){//Test for the title
                $(this).text("Show less");
            }
            else{
                $(this).text("Show more");
            }
            
        
        });
    
    
    // runs when the page is ready
   
    
}); // end ready
