var $ = function (id) {
    return document.getElementById(id);
}

var calculate_tax = function() {
	var income = parseFloat( $("income").value );
	var tax;
    
    //alert(income);
	if (isNaN(income) || income <=0) { 
		alert("Income must be a valid number greater than zero"); 
	}
	else {
		if (income <= 8700) {
			tax = parseFloat(income * .10);//+income; 
		}
		else if (income > 8700 && income <= 35350) { 
			tax = 870 + parseFloat((income - 8700) * .15);
		}	
		else if (income > 35350 && income <= 85650) {
			tax = 4867 + parseFloat((income - 35650 ) * .25);
		}
		else if (income > 85650 && income <= 178000) {
			tax = 17442 + parseFloat((income - 85650) * .28);
		}
		else if (income > 178650 && income <= 388350) {
			tax = 43482 + parseFloat((income - 178650) * .33);
		}
		else if (income > 388350) {
			tax = 112683 + parseFloat((income - 388350) * .35);
		}
		$("tax").value = tax.toFixed(2);
	}
}




window.onload = function () {
    $("calculate").onclick = calculate_tax;
    
}