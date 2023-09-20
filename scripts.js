let programmer = new Box("programmer", -8.2);
let illustrator = new Box("illustrator", 8.2);

function Box(id, velocity) {
    console.log(id + " online");
    this.element = document.getElementById(id);
    this.velocity = velocity;
    this.acceleration = -0.09;
    this.x = 570;
    this.y = 210; 

    if(this.velocity < 0){
        this.acceleration *= -1;}

    this.done; //boolean
    this.update = function(){
        document.getElementById(id).style.left = this.x + "px";
        document.getElementById(id).style.top = this.y + "px";
        if(Math.floor(this.velocity) != 0){
            console.log(this.velocity);
            //this.x += this.velocity;
            this.x += this.velocity; 
            this.velocity += this.acceleration;
        }
        else {this.done = true;}
    }; 
}

var canvas = document.getElementById("background");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    ctx.width = window.innerWidth; 
    ctx.height = window.innerHeight;
var background = new Image();
    background.src = "foreground.png";
    background.width = canvas.width;
    background.height = canvas.height;
    var bgX = 0;
    var bgY = 0;

var temp = new Image();
    temp.src = "background.png";
    var tempY = 0;

function updateBackground(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //background
    ctx.drawImage(temp, 0, tempY, canvas.width, canvas.height);
    ctx.drawImage(temp, 0, tempY+canvas.height, canvas.width, canvas.height);
    //foreground
    ctx.drawImage(background, bgX, bgY, canvas.width, canvas.height);
    ctx.drawImage(background, bgX, bgY-canvas.height, canvas.width, canvas.height);
    bgY += 0.5;
    tempY -= 0.5;
    if(tempY <= -1*canvas.height){tempY = 0;}
    if(bgY == canvas.height){bgY = 0;}
    console.log(opacity);
    if(opacity < 0.97){
        opacity += 0.008;
        canvas.style.opacity = "" + opacity;
    }
    //if(window.getComputedStyle(canvas).getPropertyValue("opacity") < 1){canvas.style.opacity += 1; console.log("oh my god")}
}

var opacity = 0;

var gameFrame = 0;
function animate(){
    gameFrame++;
    if(gameFrame%80){
            illustrator.update();
            programmer.update();
            updateBackground();
    } 
    requestAnimationFrame(animate);
}
var title = document.getElementById("title");
title.addEventListener('load', animate());

// drawImage(image, dx, dy)
// drawImage(image, dx, dy, dWidth, dHeight)
// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

// putImageData(imageData, dx, dy)
// putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)