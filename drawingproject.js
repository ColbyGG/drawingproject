var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
/*Sky*/
canvas.fillStyle = "rgb(10, 207, 233)"
canvas.fillRect(0, 0, 800, 400);
/*Sun*/
canvas.fillStyle = "rgb(214, 132, 7)";
canvas.beginPath();
canvas.arc(400, 400, 100, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
/*Ground*/
canvas.fillStyle = "rgb(228, 219, 0)";
canvas.fillRect(0,400,800,400);
/*Umbrella*/
canvas.fillStyle = "rgb(214, 214, 214)";
canvas.fillRect(100,350,10,100);
canvas.fillStyle = "rgb(147, 27, 184)"
canvas.beginPath();
canvas.arc(105, 350, 60, 0, Math.PI, true);
canvas.closePath();
canvas.fill();
canvas.stroke();
/*Towel*/
canvas.fillStyle = "rgb(35, 191, 11)"
canvas.fillRect(150,430,75,10);
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.fillRect(150,440,75,10);
canvas.fillStyle = "rgb(35, 191, 11)"
canvas.fillRect(150,450,75,10);
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.fillRect(150,460,75,10);
canvas.fillStyle = "rgb(35, 191, 11)"
canvas.fillRect(150,470,75,10);
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.fillRect(150,480,75,10);
canvas.fillStyle = "rgb(35, 191, 11)"
canvas.fillRect(150,490,75,10);
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.fillRect(150,500,75,10);
canvas.fillStyle = "rgb(35, 191, 11)"
canvas.fillRect(150,510,75,10);
canvas.fillStyle = "rgb(255, 255, 255)"
canvas.fillRect(150,520,75,10);
/*Umbrella 2*/
canvas.fillStyle ="rgb(214, 214, 214)"
canvas.fillRect(600,375,10,100);
canvas.fillStyle ="rgb(147, 27, 184)"
canvas.beginPath();
canvas.moveTo(615,310);
canvas.lineTo(500,360);
canvas.lineTo(700,390);
canvas.fill();
/*Towel 2*/
canvas.fillStyle ="rgb(228, 165, 1)"
canvas.fillRect(575,500,75,10);
canvas.fillStyle ="rgb(255, 255, 255)"
canvas.fillRect(575,510,75,10);
canvas.fillStyle ="rgb(228, 165, 1)"
canvas.fillRect(575,520,75,10);
canvas.fillStyle ="rgb(255, 255, 255)"
canvas.fillRect(575,530,75,10);
canvas.fillStyle ="rgb(228, 165, 1)"
canvas.fillRect(575,540,75,10);
canvas.fillStyle ="rgb(255, 255, 255)"
canvas.fillRect(575,550,75,10);
canvas.fillStyle ="rgb(228, 165, 1)"
canvas.fillRect(575,560,75,10);
canvas.fillStyle ="rgb(255, 255, 255)"
canvas.fillRect(575,570,75,10);
canvas.fillStyle ="rgb(228, 165, 1)"
canvas.fillRect(575,580,75,10);
canvas.fillStyle ="rgb(255, 255, 255)"
canvas.fillRect(575,590,75,10);
/*Sand Castle*/
canvas.fillStyle ="rgb(212, 191, 4)"
canvas.fillRect(300,550,220,100);
canvas.fillRect(300,525,20, 40);
canvas.fillRect(340,525,20,40);
canvas.fillRect(380,500,20,80);
canvas.fillRect(400,475,20,80);
canvas.fillRect(420,500,20,80);
canvas.fillRect(460,525,20,40);
canvas.fillRect(500,525,20,40);
canvas.fillStyle="rgb(228, 219, 0)"
canvas.fillRect(400,625, 25, 50);
canvas.fillRect(450, 575, 25 , 25);
canvas.fillRect(350, 575, 25, 25);
