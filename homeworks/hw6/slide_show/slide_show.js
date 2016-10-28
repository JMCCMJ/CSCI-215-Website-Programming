var $ = function (id) { 
	return document.getElementById(id); 
}

var imageCounter = 0;

var previous = function(id){
    var listNode = $("image_list");    
    var captionNode = $("caption");
    var imageNode = $("image");
        
    var links = listNode.getElementsByTagName("a");
    
    // Process image links
    var i, linkNode, image;
    var imageCache = [];
    for ( i = 0; i < links.length; i++ ) {  
        linkNode = links[i];
        // Preload image and copy title properties
        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.title = linkNode.getAttribute("title");
        imageCache.push(image);
    }

    // Start slide show   
    //Exception for first picture
    if(imageCounter==0){
        imageCounter = imageCache.length-1;
        image = imageCache[imageCounter];
        imageNode.src = image.src;
        captionNode.firstChild.nodeValue = image.title;
    }
    else{
        imageCounter = (imageCounter - 1) % imageCache.length;
        image = imageCache[imageCounter];
        imageNode.src = image.src;
        captionNode.firstChild.nodeValue = image.title;
    }
    
    //Time Handling
    clearTimeout(timer);
    timer = setTimeout ( next, 5000);
}

var next = function(id){
    var listNode = $("image_list");    
    var captionNode = $("caption");
    var imageNode = $("image"); 
    var links = listNode.getElementsByTagName("a");
    // Process image links
    var i, linkNode, image;
    var imageCache = [];
    for ( i = 0; i < links.length; i++ ) {
        linkNode = links[i];
        // Preload image and copy title properties
        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.title = linkNode.getAttribute("title");
        imageCache.push(image);
    }
    // Start slide show  
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    imageNode.src = image.src;
    captionNode.firstChild.nodeValue = image.title;  
    
    //Time Handling
    clearTimeout(timer);
    timer = setTimeout ( next, 5000);
}

window.onload = function () {
    $("next").onclick = next;
    $("previous").onclick = previous;
    //Initialize Timer
    timer = setTimeout ( next, 5000);          
    
}
