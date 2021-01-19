class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push () // start
      var pos =this.body.position;
      rectMode(CENTER);
      fill(102,52,12);
      rect(pos.x, pos.y, this.width, this.height);
      pop () // end
    }
  };