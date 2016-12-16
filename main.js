var canvas;

var t;
var circles = [];

var maxPoints = 100000;

var centerPoint;


function setup(){
    
    canvas = createCanvas(600,600);
    
    circles[0] = new Point(0, 600);
    circles[1] = new Point(300, 0);
    circles[2] = new Point(600, 600);
    
    centerPoint = new Point(0,0);
    
    centerPoint.x = (circles[0].x + circles[1].x) / 2;
    centerPoint.y = (circles[0].y + circles[1].y) / 2;
    
    for(var i = 3; i < maxPoints; i++){
        
        var rand = random(0,3);
        rand = floor(rand);
        //console.log(rand);
        centerPoint.x = (centerPoint.x + circles[rand].x) / 2;
        centerPoint.y = (centerPoint.y + circles[rand].y) / 2;

        circles.push(new Point(centerPoint.x, centerPoint.y));
        
    }
    
    frameRate(10);
}

function draw(){
    background(51);
    
    //drawPoint();
    
    for(var i = 0; i < maxPoints; i++){
        circles[i].show();
    }
    
}

function drawPoint(){
    
}

function Point(x, y){
    this.x = x;
    this.y = y;
    
    this.show = function(){
        noStroke();
        fill(255, 255, 255);
        ellipse(this.x, this.y, 5,5);
    }
}

