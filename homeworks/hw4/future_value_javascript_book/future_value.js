var $ = function (id) {
    return document.getElementById(id);
}

var calculateClick = function (){ 
    
    var income = parseFloat($("investment").value);
    var rate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
    
    if (isNaN(income) || income <=0) { 
		alert("One-time investment must be a valid number greater than zero."); 
	}
    else if (isNaN(rate) || rate <=0 || rate >= 20) { 
		alert("Annual interest rate must be a valid number greater than zero but less than 20."); 
	}
    else if (isNaN(years) || years <=0 || years >= 50) { 
        alert("Number of years must be a valid number greater than zero but less than 50."); 
    }
    else{
        rate = rate / 100;
        var count = years * 12;
        var future_value = income;
        var addRate; 

//        for (var i=0; i<count;i++){
//            future_value = future_value + (future_value * rate)/12;
//        }
        for (var i=0; i<years;i++){
            addRate = (future_value * rate)/12;
            for (var j=0; j<12;j++){
                future_value = future_value + addRate;
            }
            
        }
        
        $("futureValue").value = future_value.toFixed(0);  
    }
    
    
}

var clear = function() {
    
    $("futureValue").value = null;
    $("investment").value = null;
    $("years").value = null;
    $("rate").value = null;
    
    
}

var clearElement=function (){
    this.value="";
    
}

window.onload = function () {
    $("investment").focus();
    $("calculate").onclick = calculateClick;
    $("clear").onclick = clear;
    //$("investment").ondblclick=clearElement("investment");
    $("investment").ondblclick=clearElement;
    $("rate").ondblclick=clearElement;
    $("years").ondblclick=clearElement;
    
    
}