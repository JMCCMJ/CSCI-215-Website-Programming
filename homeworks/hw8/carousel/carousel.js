var imgSRC;
var imgALT;
$(document).ready(function() {
	
	var slider = $("#image_list");                     // slider = ul element
	var leftProperty, newleftProperty;
		
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 300 <= -900) {
			newLeftProperty = 0; }
		else {
			newLeftProperty = leftProperty - 300; }
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));
		
		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 300;
		}
		else {
			newLeftProperty = 0;
		}
		
		// use the animate function to change the left property
		slider.animate( {left: newLeftProperty}, 1000);				
	});  // end click	
    $('a').click(
        function(evt){
            imgSRC = $(this).attr('href');
            imgALT = $(this).attr('alt');
            //alert(imgSRC);
            //$(this).removeAttr('href');
            //alert(imgSRC);
            $("#image").animate({marginLeft: -205,opacity: 0},1000,function(){
                $("img:first").attr('src',imgSRC );
                $("img:first").attr('alt',imgALT );
                
            });
            $("#image").animate({marginLeft: 105,opacity: 1},1000);
            
            //alert(imgSRC);
            evt.preventDefault();
            
        
        });
	
}); // end ready