class Cannon extends BaseClass{
  constructor(_x, _y, _width,_height,_angle) {
    super(_x,_y,_width,_height);  
    this.angle=_angle;
  
    Matter.Body.setAngle(this.body, this.angle);
  }
 
   display(){
   var pos=this.body.position;
      var angle=this.angle;
      push();
        fill("purple");
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CORNER);
      //  image(this.image, 0, 0, this.width, this.height);
        rect(0,0,this.width,this.height);
       pop();
  }
}