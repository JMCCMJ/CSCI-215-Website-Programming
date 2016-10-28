$(document).ready(function() {
	
	// runs when an h2 heading is clicked
	$("h2:first").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().toggle(2000, "easeInOutBounce");
	    }
    ); // end toggle
    
    $("h2:eq(1)").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().fadeToggle(2000,"easeInOutBounce");
	    }
    ); // end toggle
    
    $("h2:last").click(
		function() {
			$(this).toggleClass("minus");
		    $(this).next().slideToggle(2000,"easeInElastic");
	    }
    ); // end toggle
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "450%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: "0" }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click(function() {
		$(this).animate( { fontSize: "450%", opacity: 1, left: "+=375" }, 2000 )  
			   .animate( { fontSize: "175%", left: "0" }, 1000 );
	}); // end click
    
}); // end ready
