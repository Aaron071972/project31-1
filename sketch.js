const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var div1;
score=0


function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ball= new Ball(200, 20, 15)


  
div1 = new Divisions(300,635,2,300 )
div2 = new Divisions(5,635,2,300 )
div3 = new Divisions(75,635,2,300 )
div4 = new Divisions(150,635,2,300 )
div5 = new Divisions(225,635,2,300 )
div6 = new Divisions(300,635,2,300 )
div7 = new Divisions(375,635,2,300 )
div8 = new Divisions(450,635,2,300 )
div9 = new Divisions(525,635,2,300 )
div10 = new Divisions(600,635,2,300 )
div11 = new Divisions(675,635,2,300 )
div12 = new Divisions(750,635,2,300 )

plinko = new Plinko(50, 120, 5)
plinko1 = new Plinko(150, 120, 5)
plinko2 = new Plinko(250, 120, 5)
plinko3 = new Plinko(350, 120, 5)
plinko4 = new Plinko(450, 120, 5)
plinko5 = new Plinko(550, 120, 5)
plinko6 = new Plinko(650, 120, 5)
plinko7 = new Plinko(750, 120, 5)

plinko8 = new Plinko(100, 200, 5)
plinko9 = new Plinko(200, 200, 5)
plinko10 = new Plinko(300, 200, 5)
plinko11 = new Plinko(400, 200, 5)
plinko12 = new Plinko(500, 200, 5)
plinko13 = new Plinko(600, 200, 5)
plinko14 = new Plinko(700, 200, 5)

plinko15 = new Plinko(50, 280, 5)
plinko16 = new Plinko(150, 280, 5)
plinko17= new Plinko(250, 280, 5)
plinko18 = new Plinko(350, 280, 5)
plinko19 = new Plinko(450, 280, 5)
plinko20= new Plinko(550, 280, 5)
plinko21 = new Plinko(650, 280, 5)
plinko22 = new Plinko(750, 280, 5)
plinko22 = new Plinko(750, 280, 5)


  ground = new Ground(600, height, 1400, 30)
}

function draw() {
  background("black");  

      
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)


  fill("white")
  textSize(25)
  text("50", 25, 500)
  fill("white")
  textSize(25)
  text("50", 100, 500)
  fill("white")
  textSize(25)
  text("50", 175, 500)

  fill("white")
  textSize(25)
  text("500", 245, 500)
  fill("white")
  textSize(25)
  text("500", 320, 500)
  fill("white")
  textSize(25)
  text("500", 395, 500)

  text("1000", 460, 500)
  fill("white")
  textSize(25)
  text("1000", 535, 500)

  text("5000", 610, 500)
  fill("white")
  textSize(25)
  text("5000", 685, 500)

  

  ground.display()
  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  div8.display();
  div9.display();
  div10.display();
  div11.display();
  div12.display();

  plinko.display()
  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()

  plinko8.display()
  plinko9.display()
  plinko10.display()
  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
 
  plinko15.display()
  plinko16.display()  
  plinko17.display()
  plinko18.display()
  plinko19.display()
  plinko20.display()
  plinko21.display()
  plinko22.display()

  ball.display()


  

}