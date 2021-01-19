class Mango{
    constructor(x, y, radius) {
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = 25;
        this.height = 30;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}