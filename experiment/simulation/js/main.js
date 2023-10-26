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
var canvass11, ctxgs11;
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
           canvass11 = document.getElementById("canvascolumn");
          ctxgs11 = canvass11.getContext("2d");
            var posY = 0;
            var speed = 0.2;
          
          
          
            function drawLine() {
             
          
               ctxgs11.strokeStyle = '#97BDFE';
              ctxgs11.lineWidth = 600;
              ctxgs11.beginPath();
              ctxgs11.moveTo(0, posY); /*  */
              ctxgs11.lineTo(0, 0);
              ctxgs11.stroke();
            }
          
            function moveLine() {
              posY += speed;
          
              if (posY < 0 || posY > canvass11.height) {
                speed = speed * -1;
              }
            }
          
            function loop() {
              // clear old frame;
               //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
              moveLine();
              drawLine();
              cancelani = requestAnimationFrame(loop);
            }
            requestAnimationFrame(loop);

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

var canvasp1,ctxgp1;
var canvasp2,ctxgp2;
var canvasp3,ctxgp3;
var canvasp4,ctxgp4;

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


//p1
            canvasp1 = document.getElementById("canvascolumnpa");
            ctxgp1 = canvasp1.getContext("2d");
              var posYp1 = 0;
              var speedp1 = 0.2;
            
            
            
              function drawLinep1() {
               
            
                 ctxgp1.strokeStyle = '#B1008E';
                ctxgp1.lineWidth = 600;
                ctxgp1.beginPath();
                ctxgp1.moveTo(0, posYp1); /*  */
                ctxgp1.lineTo(0, 0);
                ctxgp1.stroke();
              }
            
              function moveLinep1() {
                posYp1 += speedp1;
            
                if (posYp1 < 0 || posYp1 > canvasp1.height) {
                  speedp1 = speedp1 * -1;
                }
              }
            
              function loopp1() {
                // clear old frame;
                 //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
                moveLinep1();
                drawLinep1();
                cancelani = requestAnimationFrame(loopp1);
              }
              requestAnimationFrame(loopp1);


              // p2

          
            canvasp2 = document.getElementById("canvascolumnpb");
            ctxgp2 = canvasp2.getContext("2d");
              var posYp2 = 0;
              var speedp2 = 0.2;
            
            
            
              function drawLinep2() {
               
            
                 ctxgp2.strokeStyle = '#61D9FF';
                ctxgp2.lineWidth = 600;
                ctxgp2.beginPath();
                ctxgp2.moveTo(0, posYp2); /*  */
                ctxgp2.lineTo(0, 0);
                ctxgp2.stroke();
              }
            
              function moveLinep2() {
                posYp2 += speedp2;
            
                if (posYp2 < 0 || posYp2 > canvasp2.height) {
                  speedp2 = speedp2 * -1;
                }
              }
            
              function loopp2() {
                // clear old frame;
                 //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
                moveLinep2();
                drawLinep2();
                cancelani = requestAnimationFrame(loopp2);
              }
              requestAnimationFrame(loopp2);

              

//p3
canvasp3 = document.getElementById("canvascolumnpc");
ctxgp3 = canvasp3.getContext("2d");
  var posYp3 = 0;
  var speedp3 = 0.2;



  function drawLinep3() {
   

     ctxgp3.strokeStyle = '#73FE32';
    ctxgp3.lineWidth = 600;
    ctxgp3.beginPath();
    ctxgp3.moveTo(0, posYp3); /*  */
    ctxgp3.lineTo(0, 0);
    ctxgp3.stroke();
  }

  function moveLinep3() {
    posYp3 += speedp3;

    if (posYp3 < 0 || posYp3 > canvasp3.height) {
      speedp3 = speedp3 * -1;
    }
  }

  function loopp3() {
    // clear old frame;
     //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
    moveLinep3();
    drawLinep3();
    cancelani = requestAnimationFrame(loopp3);
  }
  requestAnimationFrame(loopp3);

  //p4
  canvasp4 = document.getElementById("canvascolumnpd");
  ctxgp4 = canvasp4.getContext("2d");
    var posYp4 = 0;
    var speedp4 = 0.2;
  
  
  
    function drawLinep4() {
     
  
       ctxgp4.strokeStyle = ' #FEDC32 ';
      ctxgp4.lineWidth = 600;
      ctxgp4.beginPath();
      ctxgp4.moveTo(0, posYp4); /*  */
      ctxgp4.lineTo(0, 0);
      ctxgp4.stroke();
    }
  
    function moveLinep4() {
      posYp4 += speedp4;
  
      if (posYp4 < 0 || posYp4 > canvasp4.height) {
        speedp4 = speedp4 * -1;
      }
    }
  
    function loopp4() {
      // clear old frame;
       //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
      moveLinep4();
      drawLinep4();
      cancelani = requestAnimationFrame(loopp4);
    }
    requestAnimationFrame(loopp4);


        }
        else {
            currentleft--; 
            image1.style.left = currentleft + '%'; 
            
        }
    }
}

var canvasst1,ctxgst1;
function elution(){
    ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
    document.getElementById("step4").disabled=false;
    document.getElementById("canvascolumnpa").style.zIndex=12;
    canvasst1 = document.getElementById("canvastube");
    ctxgst1 = canvasst1.getContext("2d");
    var posY = 0;
    var speed = 0.2;
  
  
  
    function drawLine() {
     
  
       ctxgst1.strokeStyle = '#7FA9FF';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posY); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLine() {
      posY += speed;
  
      if (posY < 0 || posY > canvasst1.height) {
        speed = speed * -1;
      }
    }
  
    function loop() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  setInterval(tubefillpa, 4000);

  function tubefillpa(){
    document.getElementById("canvastube").style.visibility="hidden";
    document.getElementById("canvascolumnpb").style.zIndex=12;
    canvasst1 = document.getElementById("canvastubep1");
    ctxgst1 = canvasst1.getContext("2d");
    var posY = 0;
    var speed = 0.2;
  
  
  
    function drawLine() {
     
  
       ctxgst1.strokeStyle = '#B1008E';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posY); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLine() {
      posY += speed;
  
      if (posY < 0 || posY > canvasst1.height) {
        speed = speed * -1;
      }
    }
  
    function loop() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  setInterval(tubefillpb, 4000);

  }

  function tubefillpb(){
    document.getElementById("canvastubep1").style.visibility="hidden";
    document.getElementById("canvascolumnpc").style.zIndex=12;
    canvasst1 = document.getElementById("canvastubep2");
    ctxgst1 = canvasst1.getContext("2d");
    var posY = 0;
    var speed = 0.2;
  
  
  
    function drawLine() {
     
  
       ctxgst1.strokeStyle = '#61D9FF';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posY); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLine() {
      posY += speed;
  
      if (posY < 0 || posY > canvasst1.height) {
        speed = speed * -1;
      }
    }
  
    function loop() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  setInterval(tubefillpc, 4000);

  }

  function tubefillpc(){
    document.getElementById("canvastubep2").style.visibility="hidden";
    document.getElementById("canvascolumnpd").style.zIndex=12;
    canvasst1 = document.getElementById("canvastubep2");
    ctxgst1 = canvasst1.getContext("2d");
    var posY = 0;
    var speed = 0.2;
  
  
  
    function drawLine() {
     
  
       ctxgst1.strokeStyle = '#73FE32';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posY); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLine() {
      posY += speed;
  
      if (posY < 0 || posY > canvasst1.height) {
        speed = speed * -1;
      }
    }
  
    function loop() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  setInterval(tubefillpd, 4000);

  }


  function tubefillpd(){
    document.getElementById("canvastubep3").style.visibility="hidden";
   // document.getElementById("canvascolumnpb").style.zIndex=12;
    canvasst1 = document.getElementById("canvastubep4");
    ctxgst1 = canvasst1.getContext("2d");
    var posY = 0;
    var speed = 0.2;
  
  
  
    function drawLine() {
     
  
       ctxgst1.strokeStyle = '#FEDC32';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posY); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLine() {
      posY += speed;
  
      if (posY < 0 || posY > canvasst1.height) {
        speed = speed * -1;
      }
    }
  
    function loop() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLine();
      drawLine();
      cancelani = requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
 

  }
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