$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		var caption = $(this).attr("title");
		var imageURL = $(this).attr("href");
		$("#caption").fadeOut(1000,function(){//caption animation
            $("#caption").text(caption);
        }).fadeIn(1000);
        
        
        
        $("#image").fadeOut(1000,function(){//image animation
            $("#image").attr("src", imageURL);
        }).fadeIn(1000);
		
        
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready