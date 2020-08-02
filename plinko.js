 class Plinko {
  constructor(x, y, radius){
  this.smoke = loadImage("smoke.png")
      var options = {
      
    'restitution':0.8,
    'friction':1.0,
    'density':1.0

    }
    
    this.plinkos = [];
    this.radius = 5
    this.body = Bodies.circle(x, y, this.radius, options);
  
World.add(world, this.body);        
  }
display(){

//   for (var i = 0; i<this.plinkos.length; i++){
// image(this.smoke, this.plinkos[i][0], this.plinos[i][1])
//   }
//   if(this.body.position.x==75){
//   var position = [this.body.position.x, this.body.position.y]
//   this.plinkos.push(position)
// }}

var pos =this.body.position;
circle(pos.x, pos.y, this.width, this.height);
}}
