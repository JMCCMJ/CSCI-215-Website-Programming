$(document).ready(function() {
    $.validator.addMethod('positiveNumber',
    function (value) { 
        return Number(value) > 0;
    }, 'Enter a positive number.');
    
    $("#arrival_date").focus();
    $("#reservation_form").validate({
        rules:{
            arrival_date:{
                required: true,
                //email:true
                date:true
            },
            email:{
                required: true,
                email:true
                //equalTo:"#email_1"
            },
            name:{
                required: true
            },
            //last_name:{
              //  required: true
            //},
            nights:{
                required: true,
                //maxlength:2,
                //minlength:2
                positiveNumber:true
                
            },
            phone:{
                required: true,
                phoneUS:true
                
            }
        },
       
        messages:{
            arrival_date:{
                required: "Please enter an arrival date.",
                date:"Please enter a valid date in the format mm/dd/yyyy"
               // email:"This is not a valid email address."
            },
            email:{
                required:"Please enter a valid email.",
                email:"This is not a valid email address."
            },
            //last_name:{
              //  required:"Please enter a last name."
            //},
            name:{
                required:"Please enter a name"
                
            },
            nights:{
                required:"Please enter the amount of nights.",
                digits:"Nights must be a number."
            },
            phone:{
                required:"Please enter a phone number."
            }
 
        }
       
       
        
        
    });

}); // end ready
