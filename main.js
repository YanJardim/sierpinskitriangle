var canvas;

var t;
var circles = [];

var maxPoints = 200;

function setup(){
    
    canvas = createCanvas(600,600);
    
    circles[0] = new Point(0, 600);
    circles[1] = new Point(300, 0);
    circles[2] = new Point(600, 600);
    
    for(var i = 3; i < 200; i++){
        circles[i] = new Point(random(0, 600), random(0, 600));
    }
    
    frameRate(10);
}

function draw(){
    background(51);
    
    for(var i = 0; i < 200; i++){
        circles[i].show();
    }
    
}


function Point(x, y){
    this.x = x;
    this.y = y;
    
    this.show = function(){
        fill(100, 0, 200);
        ellipse(this.x, this.y, 5,5);
    }
}

