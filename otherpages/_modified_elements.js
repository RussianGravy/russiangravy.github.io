var aspectratio = 2560/1600;

const canvas = document.getElementById("background");
    canvas.width = window.innerWidth*0.80;
    canvas.height = window.innerWidth*0.20;
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
    // ctx.width = window.innerWidth;
    // ctx.height = window.innerHeight;
    ctx.width = canvas.width;
    ctx.height = canvas.height;

const bg = new Image();
    bg.src = "../images/background.png";
    bg.width = canvas.width;
    bg.height = bg.width/aspectratio;

const fg = new Image();
    fg.src = "../images/foreground.png";
    fg.width = canvas.width;
    fg.height = fg.width/aspectratio;

var drawBackground = (y) => {
    for(var i = 0; i  < Math.floor(canvas.height/bg.height)+2; i++){
        ctx.drawImage(bg, 0, y-bg.height*i, bg.width, bg.height);
    }
}

var drawForeground = (y) => {
    for(var i = 0; i  < Math.floor(canvas.height/fg.height)+2; i++){
        ctx.drawImage(fg, 0, y+fg.height*i, fg.width, fg.height);
    }
}

window.onresize = () => {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // ctx.width = window.innerWidth;
    // ctx.height = window.innerHeight;
    // bg.width = window.innerWidth;
    // bg.height = bg.width/aspectratio;
    // fg.width = window.innerWidth;
    // fg.height = fg.width/aspectratio;
    canvas.width = window.innerWidth*0.80;
    canvas.height = window.innerWidth*0.20;
    ctx.width = canvas.width;
    ctx.height = canvas.height;
    bg.width = canvas.width;
    bg.height = bg.width/aspectratio;
    fg.width = canvas.width;
    fg.height = fg.width/aspectratio;
    console.log(canvas.width);
}

const speed = 0.6;
var cur_y = 0
function updateBackground(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground(-cur_y+(canvas.height-bg.height));
    drawForeground(cur_y);
    cur_y -= speed;
    if(Math.abs(cur_y) >= fg.height){
        cur_y = 0;
    }
}

// drawImage(image, dx, dy)
// drawImage(image, dx, dy, dWidth, dHeight)
// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

// putImageData(imageData, dx, dy)
// putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
