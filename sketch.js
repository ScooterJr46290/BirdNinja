let dead = 0;

function preload() {
  img = loadImage('hehehe.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = 25;
  z = 100;
  ppx = random(0,windowWidth);
  ppy = random(0,windowHeight);
  pvx = random(-6,7);
  pvy = random(-6,7);
  }

function draw() {
  background(100);
  
  //dumb ways to die
  if (z <= 0) {
    die();
  }
  if (y >= windowHeight-25) {
    z = 0;
  } 
  
  dtp = dist(ppx,ppy,x,y);
  if (dtp <= 40) {
    z = 0;
  }
  
  //Trey
  ppx=ppx+pvx;
  ppy=ppy+pvy;
  /*t = */image(img,ppx,ppy);
  
  
  //controls the player left/right
  if (keyIsDown(65)) {
    x -= 6;
  }
  if (keyIsDown(68)) {
    x += 6;
  }
  
  //controls the player jump
  if (keyIsDown(32)) {
    y -= 7;
  }
  if (y >= windowHeight-25) {
  } else {
  if (!keyIsDown(32)) {
    y += 4;
  }
  }
  
  
  //health bar
  push();
  if (dead == 1) {
    clear();
  }
  fill(240);
  rect(0,0,310,40);
  fill(240,0,0);
  rect(5,5,z*3,30);
  pop()
  fill(0);
  textSize(20);
  text(z,8,27);
  
  //makes the player
  push();
  let p = 1;
  if (p == 1) {
    fill(0,150,255);
    ellipse(x,y,50,50);
    fill(255);
    ellipse(x+10,y-5,15,20);
    ellipse(x-10,y-5,15,20);
    fill(0,5,0);
    ellipse(x+10,y-5,5,6);
    ellipse(x-10,y-5,5,6);
    fill(255,150,0);
    triangle(x-25,y,x,y+30,x+25,y);
    fill(50,50,50);
    noStroke();
    ellipse(x,y-20,50,20);
    ellipse(x,y-20,50,20);
    rotate(90);
    //ellipse(x,y,50,20);
    //rect(50,50,50);
    if (dead == 1) {
    clear();
  }
    pop();
  }
  
  function die() {
    dead = 1;
  }
}
