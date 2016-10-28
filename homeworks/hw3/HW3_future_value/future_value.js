var $ = function (id) {
    return document.getElementById(id);
}

function getName(name){
    return document.getElementsByName(name);
}

function calculate() {
    
    if($("rate").value==="" ||$("investment").value===""||$("years").value===""){
        alert("You can not leave Investment Amount, Annual Interest Rate, or Number of Years blank!");
    }
    
    else if( isNaN($("rate").value)  ||  isNaN($("years").value) || isNaN($("investment").value)){
        alert("You must enter a number for Investment Amount, Annual Interest Rate, and Number of Years!");
    }
    else if($("rate").value < 0 ||$("investment").value < 0||$("years").value < 0){
        alert("You must enter a non negative number for Investment Amount, Annual Interest Rate, and Number of Years!");
        
        
    }
    else{
        var investment = $("investment").value;
        var interest = $("rate").value;
        var years = $("years").value;
        var future_value = (1 + interest);
        future_value = Math.pow(future_value,years);
        future_value = future_value*investment;
        document.getElementById("future_value").value=future_value;
        console.log(future_value);
        
    }
    
    
    
}
    
    
    
    
    
    
    
    
    
