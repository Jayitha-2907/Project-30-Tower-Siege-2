class Polygon {

    constructor(x,y,r) {
     
     var options = {
       isStatc:false,
       friction:1,
       density: 0.3
     }
   
     this.r = r;
     this.x = x;
     this.y = y;

   
     this.body = Bodies.circle(x,y,r,options);
      World.add(world,this.body);

     
   
    }


     display() {
      var pos = this.body.position;

      rectMode(CENTER);
      
       push();

       fill("white");

       translate(pos.x,pos.y);
       
       
       ellipse(0,0,this.radius);

       push();
     }
   }