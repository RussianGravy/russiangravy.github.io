const maxWidth = screen.width;
console.log(maxWidth);

var pgrBubble = new SiteObject("programmer");
    pgrBubble.setSize((260)*window.innerWidth/maxWidth, 260*window.innerWidth/maxWidth);
    pgrBubble.setPosition(window.innerWidth*0.5-0.5*pgrBubble.width, window.innerHeight*0.5-0.5*pgrBubble.height);
    pgrBubble.setVelocity(-8*window.innerWidth/maxWidth, 0);
    pgrBubble.setAcceleration();
var illBubble = new SiteObject("illustrator");
    illBubble.setSize(260*window.innerWidth/maxWidth, 260*window.innerWidth/maxWidth);
    illBubble.setPosition(window.innerWidth*0.5-0.5*illBubble.width, window.innerHeight*0.5-0.5*illBubble.height);
    illBubble.setVelocity(8*window.innerWidth/maxWidth, 0);
    illBubble.setAcceleration();
var nameBubble = new SiteObject("title");
    nameBubble.setSize(335*window.innerWidth/maxWidth, 335*window.innerWidth/maxWidth);
    nameBubble.setPosition(window.innerWidth*0.5-0.5*nameBubble.width, window.innerHeight*0.5-0.5*nameBubble.height);

    var logo = new SiteObject("logo");
        logo.element.onclick = () => {window.open("otherpages/bio.html");}
    var penButton = new SiteObject("pen");
        penButton.element.onclick = () => {window.open("otherpages/illustrator.html");}
    var compButton = new SiteObject("comp");
        compButton.element.onclick = () => {window.open("otherpages/programmer.html");}
    
    function updateImages(){
        logo.setSize(nameBubble.width, nameBubble.height);
        penButton.setSize(illBubble.width, illBubble.height);
        compButton.setSize(pgrBubble.width, pgrBubble.height);
    }
    updateImages();

    window.onresize = () => {
        console.log("hi");
        updateImages();
    }

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
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // ctx.width = window.innerWidth; 
    // ctx.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //background
    ctx.drawImage(temp, 0, tempY, canvas.width, canvas.height);
    ctx.drawImage(temp, 0, tempY+canvas.height, canvas.width, canvas.height);
    //foreground
    ctx.drawImage(background, bgX, bgY, canvas.width, canvas.height);
    ctx.drawImage(background, bgX, bgY-canvas.height, canvas.width, canvas.height);
    bgY += 0.8;
    tempY -= 0.8;
    if(tempY <= -1*canvas.height){tempY = 0;}
    if(bgY >= canvas.height){bgY = 0;}
    if(opacity < 0.98){
        opacity += 0.015;
        canvas.style.opacity = "" + opacity;
    }
}

var opacity = 0;

