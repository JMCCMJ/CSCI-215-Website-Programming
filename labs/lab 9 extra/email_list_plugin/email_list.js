


$(document).ready(function() {
	$("#email").focus();
    $("#email_form").validate({
        rules:{
            email_1:{
                required: true,
                email:true
            },
            email_2:{
                required: true,
                email:true,
                equalTo:"#email_1"
            },
            first_name:{
                required: true
            },
            last_name:{
                required: true
            },
            state:{
                required: true,
                maxlength:2,
                minlength:2
                
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
            last_name:{
                required:"Please enter a last name."
            },
            state:{
                required:"Please enter a 2 letter state code.",
                maxlength:"A state code must be 2 letters long.",
                minlength:"A state code must be 2 letters long."
                
            },
            zip:{
                required:"Please enter a 5 digit zip code.",
                maxlength:"A zip code must be 5 digits long.",
                minlength:"A zip code must be 5 digits long.",
                digits:"A zip code can only contain digits."
            }
 
        }
        submitHandler: function(form) {
    
  }
       
       
        
        
    });
    
	
}); // end ready
