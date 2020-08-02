class Ball {
  constructor(x, y, radius) {
    var options = {
        'restitution':1.0,
        'friction':0.5,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.width = radius;
    this.height = radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    if(ball.x<225){
      score=score+50
    }
    if(ball.x<450){
      score=score+500
    }

    if(ball.x<600){
      score=score+1000
    }

    if(ball.x<750){
      score=score+5000
    }
    push()
    translate(pos.x, pos.y)
    rotate(angle)
    fill('red')
    ellipseMode(RADIUS)
    ellipse(pos.x, pos.y, this.width, this.height)
    pop();
  }
};
