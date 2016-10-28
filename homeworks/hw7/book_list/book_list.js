var imgSRC;
$(document).ready(function() {
    
    
	
	// runs when an h2 heading is clicked
	$("h2:first").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().toggle(500);
            $("img").attr('src',"" );
            
           
            
	    }
    ); // end toggle
    
    $("h2:eq(1)").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().toggle(500);
            $("img").attr('src',"" );
	    }
    ); // end toggle
    
    $("h2:last").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().toggle(500);
            $("img").attr('src',"" );
	    }
    ); // end toggle
    
    $('a').click(
        function(){
            imgSRC = $(this).attr('href');
            //alert(imgSRC);
            //$(this).removeAttr('href');
            //alert(imgSRC);
            $("img").attr('src',imgSRC );
            //alert(imgSRC);
            return false;
            
        
        });
    
    
    // runs when the page is ready
   
    
}); // end ready
