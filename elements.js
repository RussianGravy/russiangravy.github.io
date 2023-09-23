//PART ONE
//important classes and method declarations

function SiteObject(id){
    console.log(id + " online");
    //instance variables
    this.element = document.getElementById(id);
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
    this.velocity = new Vector2(0, 0);
    this.acceleration = new Vector2(0, 0);
    this.done;
    //methods
    this.update = function(){
        console.log("position: " + this.x + ", " + this.y);
        console.log("velocity: " + this.velocity.getxComp() + ", " + this.velocity.getyComp());
        console.log("acceleration: " + this.acceleration.getxComp() + ", " + this.acceleration.getyComp());
        //updating element
            this.x = window.innerWidth/2-this.height/2;
            this.y = window.innerHeight/2-this.width/2;
            this.setSize(335*window.innerWidth/1440, 335*window.innerWidth/1440);
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        //applying velocity and acceleration
        this.x += this.velocity.getxComp();
        this.y += this.velocity.getyComp();
        //stopping when velocity is 0
        if(this.velocity.getMagnitude() > 0.09){
            this.velocity.add(this.acceleration);}
        else{
            this.velocity.zero();}
    };
    this.setPosition = function(x, y){
        this.x = x;
        this.y = y;
        console.log(this.x + ", " + this.y);
    };
    this.setVelocity = function(x, y){
        this.velocity = new Vector2(x, y);
    };
    this.setAcceleration = function(){
        this.acceleration = new Vector2(-1*this.velocity.getxComp()/20, -1*this.velocity.getyComp()/20);
        // TIME = 40;
        // xRatio = Math.abs( this.velocity.getxComp() / this.velocity.getMagnitude() );
        // yRatio = Math.abs( this.velocity.getyComp() / this.velocity.getMagnitude() );
        // x = 2*(100*xRatio - this.velocity.getxComp())/(TIME*TIME);
        // y = 2*(100*yRatio - this.velocity.getyComp())/(TIME*TIME);
        // this.acceleration = new Vector2(x, y);
    };
    this.setSize = (w, h) => {
        this.width = w; 
        this.height = h;
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
    }
}

function Vector2(x, y){
    //instance variables
    this.xComp = x;
    this.yComp = y;
    //methods
    this.getxComp = function(){
        return this.xComp;
    };
    this.getyComp = function(){
        return this.yComp;
    };
    this.getMagnitude = function(){
        return Math.sqrt(this.xComp*this.xComp + this.yComp*this.yComp);
    };
    this.getAngle = function(){};
    this.add = function(vector){
        this.xComp += vector.getxComp();
        this.yComp += vector.getyComp();
    };
    this.zero = function(){
        this.xComp = 0;
        this.yComp = 0;
    };
    toString = function(){
        return ("(" + this.xComp + ", " + this.yComp + ")");
    };
}