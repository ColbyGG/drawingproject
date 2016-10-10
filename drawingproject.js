var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');
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
/*Letters*/
canvas.fillStyle="rgb(0, 0, 0)"
canvas.fillRect(50, 50, 15, 75);
canvas.fillRect(50, 50, 50 , 15);
canvas.fillRect(100, 65, 15, 15);
canvas.fillRect(100, 95, 15, 30);
canvas.fillRect(50, 80, 50 ,15);
canvas.fillRect(50,125,50,15);
canvas.fillRect(125, 50, 15, 90);
canvas.fillRect(125, 50, 60, 15);
canvas.fillRect(125, 85, 40, 15);
canvas.fillRect(125, 125, 60, 15)
canvas.fillRect(200, 65, 15, 75);
canvas.fillRect(215, 50, 35, 15);
canvas.fillRect(250, 65, 15 ,75);
canvas.fillRect(215, 85, 35, 15);
canvas.fillRect(275, 65, 15 ,60);
canvas.fillRect(290, 50, 40, 15);
canvas.fillRect(290, 125, 40, 15);
canvas.fillRect(340, 50, 15, 90);
canvas.fillRect(340, 80, 50, 15);
canvas.fillRect(390, 50, 15, 90);
canvas.fillRect(500, 50, 15, 90);
canvas.fillRect(500, 50, 50, 15);
canvas.fillRect(500, 125, 50, 15);
canvas.fillRect(550, 65, 15, 60);
canvas.fillRect(580, 65, 15, 75);
canvas.fillRect(595, 50, 35, 15);
canvas.fillRect(630, 65, 15 ,75);
canvas.fillRect(590, 85, 40, 15);
canvas.fillRect(675, 95, 15, 45);
canvas.fillRect(660, 50, 15, 45);
canvas.fillRect(690, 50, 15, 45);
/*Wilson*/
canvas.fillStyle = "rgb(255, 255, 255)";
canvas.beginPath();
canvas.arc(725, 500, 50, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();
canvas.fillStyle = "rgb(205, 40, 24)";
canvas.fillRect(700, 475,50,50);
canvas.fillStyle = "rgb(255,255,255)"
canvas.fillRect(710, 490, 10, 10);
canvas.fillRect(730, 490, 10, 10);
canvas.fillStyle="rgb(205,40,24)"
canvas.fillRect(712.5, 492.5, 5, 5);
canvas.fillRect(732.5, 492.5, 5, 5);
canvas.fillStyle="rgb(255,255,255)"
canvas.fillRect(722.5, 500, 5 ,5)
canvas.fillRect(710, 510, 32.5, 7.5);
canvas.fillStyle="rgb(205,40,24)"
canvas.fillRect(711.5, 512.5, 30, 3);
canvas.fillRect(701, 460, 5, 15);
canvas.fillRect(707,465,5,10);
canvas.fillRect(713,455,5,20);
canvas.fillRect(719,463,5,12);
canvas.fillRect(725,458,5,17)
canvas.fillRect(731,465,5,10);
canvas.fillRect(737,460, 5,15);
canvas.fillRect(743,465,5,10);
canvas.fillStyle="rgb(255,255,255)";
canvas.fillRect(745,520,5,5);
canvas.fillRect(700,520,5,5);
