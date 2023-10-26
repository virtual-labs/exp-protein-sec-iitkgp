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

var canvasstb,ctxgstb;
var canvasst1,ctxgst1;
var canvasst2,ctxgst2;
var canvasst3,ctxgst3;
var canvasst4,ctxgst4;
var imgobjbuffer = null;
var imgobjipsa = null;
var imgobjipsb = null;
var imgobjipsc = null;
var imgobjipsd = null;
function elution(){
    //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
    document.getElementById("step4").disabled=false;
    document.getElementById("canvascolumnpa").style.zIndex=12;
//dropbuffer
var currenttop= 315;
document.getElementById("bdrop").style.display="block";
    var imageb = document.getElementById("bdrop");
    clearInterval(imgobjbuffer);
    imgobjbuffer = setInterval(frame, 30);

    function frame() {
        if (currenttop == 380) {
          document.getElementById("bdrop").style.display="none";
            clearInterval(imgobjbuffer);
            canvasstb = document.getElementById("canvastube");
            ctxgstb = canvasstb.getContext("2d");
            var posY = 0;
            var speed = 0.2;
          
          
          
            function drawLine() {
             
          
               ctxgstb.strokeStyle = '#7FA9FF';
              ctxgstb.lineWidth = 600;
              ctxgstb.beginPath();
              ctxgstb.moveTo(0, posY); /*  */
              ctxgstb.lineTo(0, 0);
              ctxgstb.stroke();
            }
          
            function moveLine() {
              posY += speed;
          
              if (posY < 0 || posY > canvasstb.height) {
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

        }
        else {
          currenttop++; 
          imageb.style.top = currenttop + '%'; 
          
      }
    }

   


  function tubefillpa(){
    
//dropproteina
var currenttoppa= 315;
document.getElementById("padrop").style.display="block";
    var imagepa = document.getElementById("padrop");
    clearInterval(imgobjipsa);
    imgobjipsa = setInterval(framepa, 30);

    function framepa() {
        if (currenttoppa == 380) {
          document.getElementById("padrop").style.display="none";
            clearInterval(imgobjipsa);

    document.getElementById("canvastube").style.visibility="none";
    document.getElementById("canvascolumnpb").style.zIndex=12;
    canvasst1 = document.getElementById("canvastubep1");
    ctxgst1 = canvasst1.getContext("2d");
    var posYt1 = 0;
    var speedt1 = 0.2;
  
  
  
    function drawLinet1() {
     
  
       ctxgst1.strokeStyle = '#B1008E';
      ctxgst1.lineWidth = 600;
      ctxgst1.beginPath();
      ctxgst1.moveTo(0, posYt1); /*  */
      ctxgst1.lineTo(0, 0);
      ctxgst1.stroke();
    }
  
    function moveLinet1() {
      posYt1 += speedt1;
  
      if (posYt1 < 0 || posYt1 > canvasst1.height) {
        speedt1 = speedt1 * -1;
      }
    }
  
    function loopt1() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLinet1();
      drawLinet1();
      cancelani = requestAnimationFrame(loopt1);
    }
    requestAnimationFrame(loopt1);
  setInterval(tubefillpb, 4000);
        }

        else {
          currenttoppa++; 
          imagepa.style.top = currenttoppa + '%'; 
          
      }
    }

  }

  function tubefillpb(){

    var currenttoppb= 315;
document.getElementById("pbdrop").style.display="block";
    var imagepb = document.getElementById("pbdrop");
    clearInterval(imgobjipsb);
    imgobjipsb = setInterval(framepb, 30);

    function framepb() {
        if (currenttoppb == 380) {
          document.getElementById("pbdrop").style.display="none";
            clearInterval(imgobjipsb);

    //dropproteinb
    document.getElementById("canvastubep1").style.visibility="none";
    document.getElementById("canvascolumnpc").style.zIndex=12;
    canvasst2 = document.getElementById("canvastubep2");
    ctxgst2 = canvasst2.getContext("2d");
    var posYt2 = 0;
    var speedt2 = 0.2;
  
  
  
    function drawLinet2() {
     
  
       ctxgst2.strokeStyle = '#61D9FF';
      ctxgst2.lineWidth = 600;
      ctxgst2.beginPath();
      ctxgst2.moveTo(0, posYt2); /*  */
      ctxgst2.lineTo(0, 0);
      ctxgst2.stroke();
    }
  
    function moveLinet2() {
      posYt2 += speedt2;
  
      if (posYt2 < 0 || posYt2 > canvasst2.height) {
        speedt2 = speedt2 * -1;
      }
    }
  
    function loopt2() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLinet2();
      drawLinet2();
      cancelani = requestAnimationFrame(loopt2);
    }
    requestAnimationFrame(loopt2);
  setInterval(tubefillpc, 4000);
        }

else {
          currenttoppb++; 
          imagepb.style.top = currenttoppb + '%'; 
          
      }
    }
  }

  
  function tubefillpc(){

    var currenttoppc= 315;
document.getElementById("pcdrop").style.display="block";
    var imagepc = document.getElementById("pcdrop");
    clearInterval(imgobjipsc);
    imgobjipsc = setInterval(framepc, 30);

    function framepc() {
        if (currenttoppc == 380) {
          document.getElementById("pcdrop").style.display="none";
            clearInterval(imgobjipsc);

    //dropproteinc
    document.getElementById("canvastubep2").style.visibility="none";
    document.getElementById("canvascolumnpd").style.zIndex=12;
    canvasst3 = document.getElementById("canvastubep3");
    ctxgst3 = canvasst3.getContext("2d");
    var posYt3 = 0;
    var speedt3 = 0.2;
  
  
  
    function drawLinet3() {
     
  
       ctxgst3.strokeStyle = '#73FE32';
      ctxgst3.lineWidth = 600;
      ctxgst3.beginPath();
      ctxgst3.moveTo(0, posYt3); /*  */
      ctxgst3.lineTo(0, 0);
      ctxgst3.stroke();
    }
  
    function moveLinet3() {
      posYt3 += speedt3;
  
      if (posYt3 < 0 || posYt3 > canvasst3.height) {
        speedt3 = speedt3 * -1;
      }
    }
  
    function loopt3() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLinet3();
      drawLinet3();
      cancelani = requestAnimationFrame(loopt3);
    }
    requestAnimationFrame(loopt3);
  setInterval(tubefillpd, 4000);
        }
        else {
          currenttoppc++; 
          imagepc.style.top = currenttoppc + '%'; 
          
      }
}

  }


  function tubefillpd(){
//dropproteind
var currenttoppd= 315;
document.getElementById("pddrop").style.display="block";
    var imagepd = document.getElementById("pddrop");
    clearInterval(imgobjipsd);
    imgobjipsd = setInterval(framepd, 30);

    function framepd() {
        if (currenttoppd == 380) {
          document.getElementById("pddrop").style.display="none";
            clearInterval(imgobjipsd);


    document.getElementById("canvastubep3").style.visibility="none";
   // document.getElementById("canvascolumnpb").style.zIndex=12;
    canvasst4 = document.getElementById("canvastubep4");
    ctxgst4 = canvasst4.getContext("2d");
    var posYt4 = 0;
    var speedt4 = 0.2;
  
  
  
    function drawLinet4() {
     
  
       ctxgst4.strokeStyle = '#FEDC32';
      ctxgst4.lineWidth = 600;
      ctxgst4.beginPath();
      ctxgst4.moveTo(0, posYt4); /*  */
      ctxgst4.lineTo(0, 0);
      ctxgst4.stroke();
    }
  
    function moveLinet4() {
      posYt4 += speedt4;
  
      if (posYt4 < 0 || posYt4 > canvasst4.height) {
        speedt4 = speedt4 * -1;
      }
    }
  
    function loopt4() {
      // clear old frame;
      // ctx.clearRect(0,0,canvas.width, canvas.height);
      moveLinet4();
      drawLinet4();
      cancelani = requestAnimationFrame(loopt4);
    }
    requestAnimationFrame(loopt4);
    setInterval(tubefillpd1, 2000);
  }

else {
          currenttoppd++; 
          imagepd.style.top = currenttoppd + '%'; 
          
      }
}
    
  }

  function tubefillpd1(){
    document.getElementById("canvastubep4").style.visibility="none";
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