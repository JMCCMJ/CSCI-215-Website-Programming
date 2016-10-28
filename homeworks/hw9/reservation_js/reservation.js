$(document).ready(function() {
	
    $(":text").after("<span>*</span>");
    
    
    $("#reservation_form").submit(
		function() {
			var isValid = true;
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			} 
            
            var arrival = $("#arrival_date").val();
            if(arrival == ""){
                //console.log("nothing in arrival");
                $("#arrival_date").next().text("This field is required.");
				isValid = false;
            }
            else {
				$("#arrival_date").next().text("");
			}
            var nights = $("#nights").val();
            if(nights == ""){
                //console.log("nothing in arrival");
                $("#nights").next().text("This field is required.");
				isValid = false;
            }
            else if(isNaN(nights)){
                //console.log("nothing in arrival");
                $("#nights").next().text("Nights must be a number.");
				isValid = false;
            }
            else {
				$("#nights").next().text("");
			}
            
            var name = $("#name").val();
            if(name == ""){
                //console.log("nothing in arrival");
                $("#name").next().text("This field is required.");
				isValid = false;
            }
            else {
				$("#name").next().text("");
			}
            var phone = $("#phone").val();
            if(phone == ""){
                //console.log("nothing in arrival");
                $("#phone").next().text("This field is required.");
				isValid = false;
            }
            else if(isNaN(phone)){
                //console.log("nothing in arrival");
                $("#phone").next().text("Phone number must be a number.");
				isValid = false;
            }
            else {
				$("#phone").next().text("");
			}
			
			/*var lastName = $("#last_name").val().trim();
			if (lastName == "") {
				$("#last_name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#last_name").val(lastName);
				$("#last_name").next().text("");
			}
			
			// validate the state entry
			var state = $("#state").val();
			if (state == "") {
				$("#state").next().text("This field is required.");
				isValid = false;
			} else if ( state.length != 2 ) {
				$("#state").next().text("Use 2-character code.");
				isValid = false;
			}
			else {
				$("#state").next().text("");
			}	*/
						
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
			 			event.preventDefault();
                        $("#arrival_date").focus();
			}
		} // end function
	);
		
}); // end ready