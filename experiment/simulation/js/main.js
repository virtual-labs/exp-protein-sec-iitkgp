/* Lab name: Experimental Biochemistry
Exp name: Protein purification by size exclusion chromatography (SEC)
File name: main.js
Developer: Prakriti Dhang */


function start(){
    document.getElementById("step1").disabled=false; 
}

function proteinsample(){

    document.getElementById("falcon").setAttribute("onclick", "zoomprotein()");
    document.getElementById("step1").disabled=true;
    document.getElementById("Check1").disabled=false;
}

function zoomprotein(){
    var image = document.getElementById("falconzoom");

    // Function to increase width
   
      var currentWidth = image.width;
      var newWidth = currentWidth + 12; // You can adjust the value as needed
      image.style.width = newWidth + "%";
      image.style.top= 2+ "%";
      image.style.left= 7+ "%";
  

    // Example: Increase width when the image is clicked
  //  image.addEventListener("click", increaseWidth);

    
}

function showbuffer(){
    document.getElementById("buffer").style.display="block";
    document.getElementById("step21").disabled=false;
}

var imgobj1 = null;
var imgobj2 = null;
function injectbuffer(){
   
    document.getElementById("Check1").checked=false;
    document.getElementById("step21").disabled=true;
    var image = document.getElementById("inject");
    var image1 = document.getElementById("injection");
    var currentleft= 50;
    var currentlefti= 57;
    clearInterval(imgobj1);
    imgobj1 = setInterval(frame, 30);

    function frame() {
        if (currentleft == 40) {
            clearInterval(imgobj1);
        }
        else {
            currentleft--; 
            image.style.left = currentleft + '%'; 
            imgobj1 = setInterval(framei, 40);
        }
    }

function framei(){
    if (currentlefti == 47) {
        clearInterval(imgobj2);
        document.getElementById("injection").setAttribute("onclick", "injectpush()");
    }
    else {
        currentlefti--; 
        image1.style.left = currentlefti + '%'; 
        
    }
}
    /*image.style.left= 40+ "%";
    var image1 = document.getElementById("injection");
    image1.style.left= 47.5+ "%";
    document.getElementById("injection").setAttribute("onclick", "injectpush()");
*/
}

var imgobj3 = null;
 function injectpush(){
    document.getElementById("buffer").style.display="none";
    var currentleft= 47;
    var image = document.getElementById("inject");
    var image1 = document.getElementById("injection");
    clearInterval(imgobj3);
    imgobj3 = setInterval(frame, 30);

    function frame() {
        if (currentleft == 46) {
            clearInterval(imgobj3);
            image.style.zIndex= 12;
            document.getElementById("Check2").disabled=false;
            document.getElementById("Check1").disabled=true;
        }
        else {
            currentleft--; 
            image1.style.left = currentleft + '%'; 
            
        }
    }
   /* var image = document.getElementById("inject");
    var image1 = document.getElementById("injection");
    image1.style.left= 46+ "%";
    image.style.zIndex= 12;*/
 }
 function showprotein(){
    document.getElementById("falconzoom").style.display="none";
    document.getElementById("step22").disabled=false;
    document.getElementById("inject").style.display="none";
    document.getElementById("injection").style.display="none"; 
    document.getElementById("injectps").style.display="block";
    document.getElementById("injectionps").style.display="block"; 
   
 }
 
var imgps=null;
var imgpsi=null;
function injectps(){
    document.getElementById("Check2").checked=false;

    var image = document.getElementById("injectps");
    var image1 = document.getElementById("injectionps");
    var currentleft= 50;
    var currentlefti= 57;
    clearInterval(imgps);
    imgps = setInterval(frame, 30);

    function frame() {
        if (currentleft == 40) {
            clearInterval(imgps);
        }
        else {
            currentleft--; 
            image.style.left = currentleft + '%'; 
            imgps = setInterval(framei, 40);
        }
    }

function framei(){
    if (currentlefti == 47) {
        clearInterval(imgpsi);
        document.getElementById("injectionps").setAttribute("onclick", "injectpushps()");
       
    }
    else {
        currentlefti--; 
        image1.style.left = currentlefti + '%'; 
        
    }
}
}



var imgobjips = null;
 function injectpushps(){
 
    var currentleft= 47;
    var image = document.getElementById("injectps");
    var image1 = document.getElementById("injectionps");
    clearInterval(imgobjips);
    imgobjips = setInterval(frame, 30);

    function frame() {
        if (currentleft == 46) {
            clearInterval(imgobjips);
            image.style.zIndex= 12;
            document.getElementById("Check2").disabled=true;
            document.getElementById("step3").disabled=false;
        }
        else {
            currentleft--; 
            image1.style.left = currentleft + '%'; 
            
        }
    }
}


function elution(){
    document.getElementById("step4").disabled=false;
}

window.onload=function(){

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,  
        title:{
            text: "Testing Graph view"
        },
        axisY: {
            title: "A (mAU)",
          
            valueFormatString: "#0,,.",
            //suffix: "mn",
            //stripLines: [{
            //	value: 3366500,
            //	label: "Average"
            //}]
        },
        axisX: {
            title: "Volume (ml)",
            //valueFormatString: "#0,,.",
        },
        data: [{
            yValueFormatString: "#,### Units",
            xValueFormatString: "Y",
            type: "spline",
            dataPoints: [
               
            ]
        }]
    });
    chart.render();
    
}