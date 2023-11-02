/* Lab name: Experimental Biochemistry
Exp name: Protein purification by size exclusion chromatography (SEC)
File name: main.js
Developer: Prakriti Dhang */


function start() {
  document.getElementById("step0").disabled = true;
  document.getElementById("step1").disabled = false;
}

function restartexp() {
  location.reload();
}

function proteinsample() {
  document.getElementById("actionid").innerHTML="The sample consists of a mixture of proteins of different molecular weight and size";
  document.getElementById("falcon").setAttribute("onclick", "zoomprotein()");
  document.getElementById("step1").disabled = true;
  document.getElementById("Check1").disabled = false;
}

function zoomprotein() {
  document.getElementById("actionid").innerHTML="The sample consists of a mixture of proteins of different molecular weight and size";
  var image = document.getElementById("falconzoom");

  // Function to increase width

  var currentWidth = image.width;
  var newWidth = currentWidth + 8; // You can adjust the value as needed
  image.style.width = newWidth + "%";
  image.style.top = 1 + "%";
  image.style.left = 7 + "%";


  // Example: Increase width when the image is clicked
  //  image.addEventListener("click", increaseWidth);


}

function showbuffer() {
  //document.getElementById("buffer").style.display = "block";
  document.getElementById("step21").disabled = false;
}

//var imgobj1 = null;
//var imgobj2 = null;
function injectbuffer() {
//document.getElementById("actionid").innerHTML="1 column volume buffer is passed through the column for equilibartion.";


  document.getElementById("step21").disabled = true;
  document.getElementById("buffer").setAttribute("onclick", "injectpush()");
 /* var image = document.getElementById("inject");
  var image1 = document.getElementById("injection");
  var currentleft = 50;
  var currentlefti = 57;
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 30);

  function frame() {
    if (currentleft == 41) {
      clearInterval(imgobj1);
    }
    else {
      currentleft--;
      image.style.left = currentleft + '%';
      imgobj1 = setInterval(framei, 40);
    }
  }

  function framei() {
    if (currentlefti == 48) {
      clearInterval(imgobj2);
      document.getElementById("injection").setAttribute("onclick", "injectpush()");
    }
    else {
      currentlefti--;
      image1.style.left = currentlefti + '%';

    }
  }*/
 
}
var canvass11, ctxgs11;
var imgobj3 = null;
function injectpush() {
  var inputtime=document.getElementById("inpttime").value;
  var inputflowrate=document.getElementById("inptfrate").value;
  
  if((inputtime == "120") && (inputflowrate == "1")){
  

  document.getElementById("step21").disabled = true;
  document.getElementById("Check1").checked = false;
  document.getElementById("actionid").innerHTML="1 column volume buffer is passed through the column for equilibartion.";
  //document.getElementById("buffer").style.display = "none";
 // var currentleft = 48;
 // var image = document.getElementById("inject");
  //var image1 = document.getElementById("injection");
 // clearInterval(imgobj3);
 // imgobj3 = setInterval(frame, 30);

 // function frame() {
  //  if (currentleft == 47) {
  //    clearInterval(imgobj3);
   //   image.style.zIndex = 12;
      document.getElementById("Check2").disabled = false;
      document.getElementById("Check1").disabled = true;
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
    else if(inputtime != "120"){
      alert("Please set the time to 120 mins ");
    }
    else if(inputflowrate != "1"){
      alert("Please set flow rate to 1 ml/min");
    }
    else{
      alert("Please set  the time to 120 mins and flow rate to 1 ml/min");
    }

  //  }
  //  else {
   //   currentleft--;
   //   image1.style.left = currentleft + '%';

   // }
 // }
  /* var image = document.getElementById("inject");
   var image1 = document.getElementById("injection");
   image1.style.left= 46+ "%";
   image.style.zIndex= 12;*/
}
function showprotein() {
  document.getElementById("falconzoom").style.display = "none";
  document.getElementById("step22").disabled = false;
 // document.getElementById("inject").style.display = "none";
 // document.getElementById("injection").style.display = "none";
  document.getElementById("injectps").style.display = "block";
  document.getElementById("injectionps").style.display = "block";
  
}

var imgps = null;
var imgpsi = null;
function injectps() {
  document.getElementById("actionid").innerHTML="Protien is injected in the column.";
  document.getElementById("step22").disabled = true;

  var image = document.getElementById("injectps");
  var image1 = document.getElementById("injectionps");
  var currentleft = 50;
  var currentlefti = 57;
  clearInterval(imgps);
  imgps = setInterval(frame, 30);

  function frame() {
    if (currentleft == 41) {
      clearInterval(imgps);
    }
    else {
      currentleft--;
      image.style.left = currentleft + '%';
      imgps = setInterval(framei, 40);
    }
  }

  function framei() {
    if (currentlefti == 48) {
      clearInterval(imgpsi);
      document.getElementById("injectionps").setAttribute("onclick", "injectpushps()");

    }
    else {
      currentlefti--;
      image1.style.left = currentlefti + '%';

    }
  }
}

var canvasp1, ctxgp1;
var canvasp2, ctxgp2;
var canvasp3, ctxgp3;
var canvasp4, ctxgp4;

var imgobjips = null;
function injectpushps() {

  document.getElementById("Check2").checked = false;
  document.getElementById("canvascolumn").style.top = 50 + "%";
  document.getElementById("canvascolumn").style.height = 15 + "%";
  var currentleft = 48;
  var image = document.getElementById("injectps");
  var image1 = document.getElementById("injectionps");
  clearInterval(imgobjips);
  imgobjips = setInterval(frame, 30);

  function frame() {
    if (currentleft == 47) {
      clearInterval(imgobjips);
      image.style.zIndex = 12;
      document.getElementById("Check2").disabled = true;
      document.getElementById("step3").disabled = false;


      //p1
      canvasp1 = document.getElementById("canvascolumnpa");
      ctxgp1 = canvasp1.getContext("2d");
      var posYp1 = 0;
      var speedp1 = 0.2;



      function drawLinep1() {


        ctxgp1.strokeStyle = '#5D8DFF';
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


        ctxgp2.strokeStyle = '#5D8DFF';
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


        ctxgp3.strokeStyle = '#5D8DFF';
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


        ctxgp4.strokeStyle = ' #5D8DFF ';
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

var canvasstb, ctxgstb;
var canvasst1, ctxgst1;
var canvasst2, ctxgst2;
var canvasst3, ctxgst3;
var canvasst4, ctxgst4;
var imgobjbuffer = null;
var imgobjipsa = null;
var imgobjipsb = null;
var imgobjipsc = null;
var imgobjipsd = null;
var intervalpa;
var intervalpb;
var intervalpc;
var intervalpd;
function elution() {
  document.getElementById("actionid").innerHTML="Elution started.";
  document.getElementById("step3").disabled = true;
  //ctxgs11.clearRect(0,0,canvass11.width, canvass11.height);
 
  document.getElementById("canvascolumnpa").style.zIndex = 12;
  //dropbuffer
  var currenttop = 71;
  document.getElementById("bdrop").style.display = "block";
  var imageb = document.getElementById("bdrop");
  clearInterval(imgobjbuffer);
  imgobjbuffer = setInterval(frame, 30);

  function frame() {
    if (currenttop == 85) {
      document.getElementById("bdrop").style.display = "none";
      document.getElementById("actionid").innerHTML="Elution started: Buffer is collected.";
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
      intervalpa = setInterval(tubefillpa, 4000);

    }
    else {
      currenttop++;
      imageb.style.top = currenttop + '%';

    }
  }


}

function tubefillpa() {
  document.getElementById("canvastube").style.display = "none";
  //document.getElementById("bopt").style.display = "block";
  //dropproteina
  var currenttoppa = 71;
  document.getElementById("padrop").style.display = "block";
  var imagepa = document.getElementById("padrop");
  cancelAnimationFrame(cancelani);
  clearInterval(imgobjipsa);
  imgobjipsa = setInterval(framepa, 30);

  function framepa() {
    if (currenttoppa == 85) {
      document.getElementById("padrop").style.display = "none";
      document.getElementById("actionid").innerHTML="Elution started: Protein A is collected.";

      clearInterval(imgobjipsa);
      clearInterval(intervalpa);


      document.getElementById("canvascolumnpb").style.zIndex = 12;
      canvasst1 = document.getElementById("canvastubep1");
      ctxgst1 = canvasst1.getContext("2d");
      var posYt1 = 0;
      var speedt1 = 0.2;



      function drawLinet1() {


        ctxgst1.strokeStyle = '#5D8DFF '; //B1008E
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

      intervalpb = setInterval(tubefillpb, 4000);
    }

    else {
      currenttoppa++;
      imagepa.style.top = currenttoppa + '%';
      // document.getElementById("bdrop").style.display="none"; 

    }
  }

}

function tubefillpb() {
  document.getElementById("canvastubep1").style.display = "none";
 // document.getElementById("paopt").style.display = "block";
  document.getElementById("padrop").style.display = "none";
  var currenttoppb = 71;
  document.getElementById("pbdrop").style.display = "block";
  var imagepb = document.getElementById("pbdrop");

  clearInterval(imgobjipsb);
  imgobjipsb = setInterval(framepb, 30);

  function framepb() {
    if (currenttoppb == 85) {
      document.getElementById("pbdrop").style.display = "none";
      document.getElementById("actionid").innerHTML="Elution started: Protein B is collected.";

      clearInterval(imgobjipsb);
      clearInterval(intervalpb);

      //dropproteinb

      document.getElementById("canvascolumnpc").style.zIndex = 12;
      canvasst2 = document.getElementById("canvastubep2");
      ctxgst2 = canvasst2.getContext("2d");
      var posYt2 = 0;
      var speedt2 = 0.2;



      function drawLinet2() {


        ctxgst2.strokeStyle = '#5D8DFF '; //61D9FF
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
      intervalpc = setInterval(tubefillpc, 4000);
    }

    else {
      currenttoppb++;
      imagepb.style.top = currenttoppb + '%';
      document.getElementById("padrop").style.display = "none";

    }
  }
}


function tubefillpc() {
  document.getElementById("canvastubep2").style.display = "none";
 // document.getElementById("pbopt").style.display = "block";
  document.getElementById("pbdrop").style.display = "none";
  var currenttoppc = 71;
  document.getElementById("pcdrop").style.display = "block";
  var imagepc = document.getElementById("pcdrop");
  clearInterval(imgobjipsc);
  imgobjipsc = setInterval(framepc, 30);

  function framepc() {
    if (currenttoppc == 85) {
      document.getElementById("pcdrop").style.display = "none";
      document.getElementById("actionid").innerHTML="Elution started: Protein C is collected.";

      clearInterval(imgobjipsc);
      clearInterval(intervalpc);
      //dropproteinc

      document.getElementById("canvascolumnpd").style.zIndex = 12;
      canvasst3 = document.getElementById("canvastubep3");
      ctxgst3 = canvasst3.getContext("2d");
      var posYt3 = 0;
      var speedt3 = 0.2;



      function drawLinet3() {


        ctxgst3.strokeStyle = '#5D8DFF '; //73FE32
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
      intervalpd = setInterval(tubefillpd, 4000);
    }
    else {
      currenttoppc++;
      imagepc.style.top = currenttoppc + '%';
      document.getElementById("pbdrop").style.display = "none";

    }
  }

}


function tubefillpd() {
  document.getElementById("canvastubep3").style.display = "none";
 // document.getElementById("pcopt").style.display = "block";
  document.getElementById("pcdrop").style.display = "none";
  //dropproteind
  var currenttoppd = 71;
  document.getElementById("pddrop").style.display = "block";
  var imagepd = document.getElementById("pddrop");
  clearInterval(imgobjipsd);
  imgobjipsd = setInterval(framepd, 30);

  function framepd() {
    if (currenttoppd == 85) {
      document.getElementById("pddrop").style.display = "none";
      document.getElementById("canvascolumn").style.display = "none";
      document.getElementById("canvascolumnpa").style.display = "none";
      document.getElementById("canvascolumnpb").style.display = "none";
      document.getElementById("canvascolumnpc").style.display = "none";
      document.getElementById("canvascolumnpd").style.display = "none";
      document.getElementById("actionid").innerHTML="Elution started: Protein D is collected.";
      clearInterval(imgobjipsd);
      clearInterval(intervalpd);


      // document.getElementById("canvascolumnpb").style.zIndex=12;
      canvasst4 = document.getElementById("canvastubep4");
      ctxgst4 = canvasst4.getContext("2d");
      var posYt4 = 0;
      var speedt4 = 0.2;



      function drawLinet4() {


        ctxgst4.strokeStyle = '#5D8DFF '; //#FEDC32
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
      setInterval(tubefillpd1, 3000);
    }

    else {
      currenttoppd++;
      imagepd.style.top = currenttoppd + '%';
      document.getElementById("pcdrop").style.display = "none";

    }
  }

}

function tubefillpd1() {
  //document.getElementById("pdopt").style.display = "block";
  document.getElementById("canvascolumn").style.display = "none";
  document.getElementById("canvascolumnpa").style.display = "none";
  document.getElementById("canvascolumnpb").style.display = "none";
  document.getElementById("canvascolumnpc").style.display = "none";
 
  document.getElementById("canvastubep4").style.display = "block";
  document.getElementById("pddrop").style.display = "none";
  document.getElementById("step4").disabled = false;
  
}

//}

window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Absorbance Vs Volume"
    },
    axisY: {
      title: "Absorbance (mAU)",
      minimum: -2,
      maximum: 15,
      gridThickness: 0

    },
    axisX: {
      title: "Volume in mL",
      minimum: 1,
      maximum: 120,
      crosshair: {
        enabled: false
      }



    },
    data: [{

      type: "spline",
      dataPoints: [

      ]
    }]
  });
  chart.render();

}

function analyzed(){
  document.getElementById("actionid").innerHTML="The samples are further analyzed for their purity using SDS-PAGE gel. The proteins have been separated on the basis of their molecular weight";
  document.getElementById("stepgel").style.display="block";
 
}

function showgel(){
  document.getElementById("optgel").style.display="block";
  document.getElementById("ladder").style.display="block";
  window.scrollBy(0,500);
}