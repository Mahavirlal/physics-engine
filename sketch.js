// Step 1 : Using properties of Physics Engine in our code
const Engine = Matter.Engine; //Universe
const World = Matter.World; //Earth
const Bodies = Matter.Bodies; //Humans, Trees, Animals or insects

// Step 2: creating engine and world for our game
var myEngine, myWorld;

// Step 1 for body
var object1;
var ground;
var ball;

function setup() {
  createCanvas(800, 800);

  //Step 3: Assign properties of physics engine to my game engine
  myEngine = Engine.create(); // myEngine has its own world
  myWorld = myEngine.world;

  //Step 2 for body : Creating a rectangular body
  object1 = Bodies.rectangle(400, 400, 50, 50)

  // Intermediate step as per the requirement
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400, 780, 800, 20, ground_options);

  var ball_options = {
    restitution: 0.8,
    density: 1.0,
    friction: 0.4
  }
  ball = Bodies.circle(200, 10, 20, ball_options);

  //Step 3 for body: Add the body to the world
  World.add(myWorld, object1)
  World.add(myWorld, ground)
  World.add(myWorld, ball)

  console.log(ball)
}

function draw() {
  //Step 4: Engine will update myEngine
  Engine.update(myEngine);

  background("lightblue");

  rectMode(CENTER) // mode of the rectangular object
  ellipseMode(RADIUS) // mode of the circular object

  //Step 4 for body: Display the body
  rect(object1.position.x, object1.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 800, 20)

  ellipse(ball.position.x, ball.position.y, 20, 20);

}