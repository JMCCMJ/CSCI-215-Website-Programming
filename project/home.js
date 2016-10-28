 var weatherType = "hot";
$(document).ready(function() {
    /* All the javascript below is my code except for Google maps
    which I took from their tutorial.*/
    
   
    var one_counter = 0;
    var two_counter = 0;
    var three_counter = 0;
    var one_pics = ["images/dominican%20republic/dom-beach-1.jpg","images/dominican%20republic/dom-beach-2.jpg","images/dominican%20republic/dom-beach-3.jpg"]
    var two_pics = ["images/playa-del-carmen/playa-1.jpg","images/playa-del-carmen/playa-2.jpg","images/playa-del-carmen/playa-3.jpg"]
    var three_pics = ["images/miami/miami-1.jpg","images/miami/miami-2.jpg","images/miami/miami-3.jpg"];
    var hot_pics = ["images/dominican%20republic/dom-beach-1.jpg","images/dominican%20republic/dom-beach-2.jpg","images/dominican%20republic/dom-beach-3.jpg",
                   "images/playa-del-carmen/playa-1.jpg","images/playa-del-carmen/playa-2.jpg","images/playa-del-carmen/playa-3.jpg",
                   "images/miami/miami-1.jpg","images/miami/miami-2.jpg","images/miami/miami-3.jpg"];
    var cold_pics = ["images/snowmass_colorado/snowmass-1.jpg","images/snowmass_colorado/snowmass-2.jpg","images/snowmass_colorado/snowmass-3.jpg",
                    "images/zermatt_switzerland/zermatt-1.jpg","images/zermatt_switzerland/zermatt-2.jpg","images/zermatt_switzerland/zermatt-3.jpg",
                    "images/jackson-hole/jackson-1.jpg","images/jackson-hole/jackson-2.jpg","images/jackson-hole/jackson-3.jpg"];
    var all_pics = [one_pics,two_pics,three_pics];
    
    var h3_hot = ["1. The Dominican Republic","2. Playa del Carmen","3. Miami Beach"];
    var h3_cold = ["1. Snowmass Colorado","2. Zermatt Switzerland","3. Jackson Hole Wyoming"];
    
    var h3_hot_description = ["Nestled in the island of Hispaniola is the Dominican Republic. The island that Columbus landed on. Come and visit for the perfect beach and sunny weather experience!","Another paradise for beach lovers! Come stay at a nice resort and enjoy the crystal clear blue waters!","Looking for fun? Hit up spring break's hottest destination to party with your friends! Miami's white beaches and blue waters are for everyone!"];
    var h3_cold_description = ["Ready to ski down a beautiful mountain with ecstatic views? Head to the small resort town of Snowmass Colorado for the skiing adventure of a lifetime!", "Welcome to the town of Zermatt! Sitting at an elevation of 1620m above sea level, this makes it the perfect place for cold weather and mountain peaks to satisfy your skiing and snowboarding needs.","Jackson Hole Wyoming, home to the battle between skiing and sledding as the best winter activity. Which will you choose?"];
    
    $("#entire_body").fadeIn(2000);  
    
    var weather = $("#weatherSelection").val();
    
    $( "#prev1" ).click(function() {
        //alert( "Handler for .click() called." );
        one_counter--;
        if(one_counter == -1){
            one_counter = 2;
        }
        
			  //.animate( { fontSize: "175%", left: "0" }, 1000 );
       //    $("#image1").attr("src",dom_pics[dom_counter]).fadeOut(1000);
        $("#image1")
        .fadeOut(400, function() {
            $("#image1").attr('src',one_pics[one_counter]);
            
        })
        .fadeIn(400);
        
        
    });
    $( "#prev2" ).click(function() {
        //alert( "Handler for .click() called." );
        two_counter--;
        if(two_counter == -1){
            two_counter = 2;
        }
        
			  //.animate( { fontSize: "175%", left: "0" }, 1000 );
       //    $("#image1").attr("src",dom_pics[dom_counter]).fadeOut(1000);
        $("#image2")
        .fadeOut(400, function() {
            $("#image2").attr('src',two_pics[two_counter]);
            
        })
        .fadeIn(400);
        
        
    });
    $( "#prev3" ).click(function() {
        //alert( "Handler for .click() called." );
        three_counter--;
        if(three_counter == -1){
            three_counter = 2;
        }
        
			  //.animate( { fontSize: "175%", left: "0" }, 1000 );
       //    $("#image1").attr("src",dom_pics[dom_counter]).fadeOut(1000);
        $("#image3")
        .fadeOut(400, function() {
            $("#image3").attr('src',three_pics[three_counter]);
            
        })
        .fadeIn(400);
        
        
    }); 
    $( "#next1" ).click(function() {
        //alert( "Handler for .click() called." );
        one_counter++;
        if(one_counter > 2){
            one_counter = 0;
        }
        
			  //.animate( { fontSize: "175%", left: "0" }, 1000 );
       //    $("#image1").attr("src",dom_pics[dom_counter]).fadeOut(1000);
        $("#image1")
        .fadeOut(400, function() {
            $("#image1").attr('src',one_pics[one_counter]);
            
        })
        .fadeIn(400);
        
        
    });
    $( "#next2" ).click(function() {
        //alert( "Handler for .click() called." );
        two_counter++;
        if(two_counter > 2){
            two_counter = 0;
        }
        $("#image2")
        .fadeOut(400, function() {
            $("#image2").attr('src',two_pics[two_counter]);
            
        })
        .fadeIn(400);
    });
    $( "#next3" ).click(function() {
        //alert( "Handler for .click() called." );
        three_counter++;
        if(three_counter > 2){
            three_counter = 0;
        }
        $("#image3")
        .fadeOut(400, function() {
            $("#image3").attr('src',three_pics[three_counter]);
           
        })
        .fadeIn(400);
    });
    
    $("#weatherSelection").change(function () {
        if ($(this).val() === 'hotWeather') {
            weatherType="hot";
            initMap();
            var i;
            var j;
            var all_pics_count = 0;
            for(i=0;i<3;i++){
                for(j=0;j<3;j++){
                    all_pics[i][j]=hot_pics[all_pics_count];
                    all_pics_count++;
                }
            }
            all_pics_counter = 0;
            one_counter = 0;
            two_counter = 0;
            three_counter = 0;
            $("#image1").fadeOut(400, function() {
                $("#image1").attr('src',one_pics[0]);
            }).fadeIn(400);
            $("#image2").fadeOut(400, function() {
                $("#image2").attr('src',two_pics[0]);
            }).fadeIn(400);
            $("#image3").fadeOut(400, function() {
                $("#image3").attr('src',three_pics[0]);
            }).fadeIn(400);
            
            //$("h3").animate({float:"none",left: "+=6000" }, 2000);  
            //$("h3").animate({opacity: 0.25},2000);  
            //$("h3").slideUp(1000).fadeOut(1000);
            $("h3").animate({ opacity: 0,queue: false }, 400,function(){
                firsth3.innerText=h3_hot[0];
                secondh3.innerText=h3_hot[1];
                thirdh3.innerText=h3_hot[2];
                
            });
            
            $("h3").animate({ opacity: 1,queue:false},400 );
            
            $(".description").animate({ opacity: 0,queue: false }, 400,function(){
                $(".description:eq(0)").text(h3_hot_description[0]);
                $(".description:eq(1)").text(h3_hot_description[1]);
                $(".description:eq(2)").text(h3_hot_description[2]);
            });
            $(".description").animate({ opacity: 1,queue:false},400 );
            $(":button").animate({ opacity: 0,queue: false });
            $(":button").animate({ opacity: 1,queue: false });
            //$("#firstP").animate({opacity: 0, queue: false},400,function(){
                //$('#firstP').text(h3_hot_description[0]);
            //});
            //$("firstP").animate({ opacity: 1,queue:false},400 );
        }
        if ($(this).val() === 'coldWeather') {
            weatherType="cold";
            initMap();
            var i;
            var j;
            var all_pics_count = 0;
            for(i=0;i<3;i++){
                for(j=0;j<3;j++){
                    all_pics[i][j]=cold_pics[all_pics_count];
                    all_pics_count++;
                }
            }
            one_counter = 0;
            two_counter = 0;
            three_counter = 0;
            all_pics_counter = 0;
            $("#image1").fadeOut(400, function() {
                $("#image1").attr('src',one_pics[0]);
            }).fadeIn(400);
            $("#image2").fadeOut(400, function() {
                $("#image2").attr('src',two_pics[0]);
            }).fadeIn(400);
            $("#image3").fadeOut(400, function() {
                $("#image3").attr('src',three_pics[0]);
            }).fadeIn(400);
            
            $("h3").animate({ opacity: 0,queue: false }, 400,function(){
                firsth3.innerText=h3_cold[0];
                secondh3.innerText=h3_cold[1];
                thirdh3.innerText=h3_cold[2];
                
            });
            
            $("h3").animate({ opacity: 1,queue:false},400 );
            
            
            $(".description").animate({ opacity: 0,queue: false }, 400,function(){
                $(".description:eq(0)").text(h3_cold_description[0]);
                $(".description:eq(1)").text(h3_cold_description[1]);
                $(".description:eq(2)").text(h3_cold_description[2]);
            });
            $(".description").animate({ opacity: 1,queue:false},400 );
               // $("#firstP").text(h3_cold_description[0]);
            $(":button").animate({ opacity: 0,queue: false });
            $(":button").animate({ opacity: 1,queue: false });
            
        }
    });
    
    
    
    
  
    
    
  
}); // end ready


function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {center: {lat: 36.263826, lng: -41.951151},zoom: 3});
    if(weatherType=="hot"){
        var myLatLng1 = {lat:  18, lng:-72};
        var myLatLng2 = {lat:  20, lng:-87};
        var myLatLng3 = {lat:  25.76, lng:-80.19};
        
        var marker = new google.maps.Marker({position: myLatLng1,map: map,title: 'Hello World!'});
        var marker = new google.maps.Marker({position: myLatLng2,map: map,title: 'Hello World!'})
        var marker = new google.maps.Marker({position: myLatLng3,map: map,title: 'Hello World!'});;
    }
    else{
        var myLatLng4 = {lat: 39.2130, lng: -106.9378};
        var myLatLng5 = {lat: 46.0207, lng: 7.7491};
        var myLatLng6 = {lat: 43.4799, lng: -110.7624};
        var marker = new google.maps.Marker({ position: myLatLng4, map: map, title: 'Hello World!'});
        var marker = new google.maps.Marker({ position: myLatLng5, map: map, title: 'Hello World!'});
        var marker = new google.maps.Marker({ position: myLatLng6, map: map, title: 'Hello World!'});
    }
}
    