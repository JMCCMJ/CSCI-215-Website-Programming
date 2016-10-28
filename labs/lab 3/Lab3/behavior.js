var $ = function (id) {
	return document.getElementById(id);
}
function getName(name){
    return document.getElementsByName(name);
}
function calculate() {
    
    
    if(!getName("sex")[1].checked && !getName("sex")[0].checked){
        alert("You must check male or female!");
    }
    else if($("weight").value==="" ||$("height").value===""){
        alert("You must enter a valid number for both weight and height!");
    }
    
    else if(isNaN($("weight").value)  ||  isNaN($("height").value)){
        alert("You must enter a valid number for both weight and height!");
    }
    else{
        
    
    
    

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;
    
    var weight = ($("weight").value);
    var height = ($("height").value);
    
    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );
    
    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm
    
    var KG_CONVERSION = 0.454 * weight;
    var METER_SQUARED_CONVERSION = Math.pow((0.0254 * height),2);
    var CM_CONVERSION = 2.54 * height;
    

    // ==========================================
    // Todo: Perform conversion calculations here
    
    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------
    
    var BSA = 0;
    BSA = Math.sqrt((CM_CONVERSION*KG_CONVERSION)/3600);

    // ==========================================
    // Todo: Perform BSA calculation here
    
    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------
    
    var IBW = 0;
    
    if ( female ) {
        
        IBW = 45.5+2.3*(height-60);

	// ==========================================
    	// Todo: Perform female IBW calculation here
        
        
    } else if ( male ) {
        
        IBW = 50+2.3*(height-60);
        
	// ==========================================
    	// Todo: Perform male IBW calculation here

    }
    
    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------
    
    var BMI = 0;

    // ==========================================
    // Todo: Perform BMI calculation here
    BMI = KG_CONVERSION / METER_SQUARED_CONVERSION;


    // Do not modify this function call
    display( BSA, IBW, BMI );
    }
    
}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {
    
    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';
    
    document.getElementById("output").innerHTML=message;
    
}
