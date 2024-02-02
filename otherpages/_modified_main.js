var gameFrame = 0;
function animate() {
    gameFrame++;
    if(gameFrame%1 == 0){
        updateBackground();
    }
    requestAnimationFrame(animate);
}
document.addEventListener('load', animate());