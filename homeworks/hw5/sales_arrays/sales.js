var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var $ = function (id) {
	return document.getElementById(id);
}

var quarterClicker = function (){
    //alert("you clicked");
    var quarters = [0,0,0,0];
    
    for(var i=0;i<4;i++){
        quarters[i]=r1[i]+r2[i]+r3[i]+r4[i]+r5[i];
        //alert(quarters[i]);
        
    }
    $("results").innerHTML="Sales by Quarter\nQ1: "+quarters[0]+"\nQ2: "+quarters[1]+"\nQ3: "+quarters[2]+"\nQ4: "+quarters[3];
    
    
}

var regionClicker = function (){
    var regions = [r1,r2,r3,r4,r5];
    var regionMoneys = [0,0,0,0,0];
    for(var i=0;i<5;i++){
        var temp = 0;
        for(var j=0;j<4;j++){
            temp = temp + regions[i][j];
            
        }
        regionMoneys[i]=temp;
    }
    
    $("results").innerHTML="Sales by Region\nRegion 1: "+regionMoneys[0]+"\nRegion 2: "+regionMoneys[1]+"\nRegion 3: "+regionMoneys[2]+"\nRegion 4: "+regionMoneys[3]+"\nRegion 5: "+regionMoneys[4];
    
}

var totalClicker = function(){
    var regions = [r1,r2,r3,r4,r5];
    var regionMoneys = [0,0,0,0,0];
    var total = 0;
    
    for(var i=0;i<5;i++){
        var temp = 0;
        for(var j=0;j<4;j++){
            temp = temp + regions[i][j];
            
        }
        regionMoneys[i]=temp;
        total = total + temp;
    }
    $("results").innerHTML="Total sales: "+total;
    
    
    
}



window.onload = function () {
    $("show_quarter").onclick = quarterClicker;
    $("show_region").onclick = regionClicker;
    $("show_total").onclick = totalClicker;

}


