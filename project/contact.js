


$(document).ready(function() {
	$("#email_1").focus();
    $("#email_form").validate({
        rules:{
            email_1:{
                required: true,
                email:true
            },
            first_name:{
                required: true
            },
            zip:{
                required: true,
                maxlength:5,
                minlength:5,
                digits:true
                
            }
        },
       
        messages:{
            email_1:{
                required: "Please supply an email address.",
                email:"This is not a valid email address."
            },
            first_name:{
                required:"Please enter a first name."
            },
            zip:{
                required:"Please enter a 5 digit zip code.",
                maxlength:"A zip code must be 5 digits long.",
                minlength:"A zip code must be 5 digits long.",
                digits:"A zip code can only contain digits."
            }
 
        }
        

    });	
    
    
}); // end ready
