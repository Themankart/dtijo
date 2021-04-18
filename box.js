class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':0.002
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          strokeWeight(2);
          stroke(0);
          rect(0, 0, this.width, this.height);
          pop();
        }
        else{
          World.remove(world,this.body);
        }

      }
}