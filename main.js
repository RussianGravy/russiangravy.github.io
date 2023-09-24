var pgrBubble = new SiteObject("programmer");
    pgrBubble.setSize(260, 260);
    pgrBubble.setPosition(570, 210);
    pgrBubble.setVelocity(-8, 0);
    pgrBubble.setAcceleration();
var illBubble = new SiteObject("illustrator");
    illBubble.setSize(260, 260);
    illBubble.setPosition(570, 210);
    illBubble.setVelocity(8, 0);
    illBubble.setAcceleration();
var nameBubble = new SiteObject("title");
    nameBubble.setSize(335, 335);
    nameBubble.setPosition(532.5, 172.5);

var gameFrame = 0;
function animate() {
    gameFrame++;
    if(gameFrame%2 == 0){
        nameBubble.update();
        pgrBubble.update();
        illBubble.update();
        updateBackground();
    }
    requestAnimationFrame(animate);
}
animate();

//Messy background code below * * * * * * * * * * * * * * * * * |

var canvas = document.getElementById("background");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.width = window.innerWidth; 
    ctx.height = window.innerHeight;
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
    if(opacity < 0.97){
        opacity += 0.008;
        canvas.style.opacity = "" + opacity;
    }
    //if(window.getComputedStyle(canvas).getPropertyValue("opacity") < 1){canvas.style.opacity += 1; console.log("oh my god")}
}

var opacity = 0;

