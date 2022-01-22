var ppx;
var ppy;
var pvx;
var pvy;


function preload() {
  img2 = loadImage('hehehe.png');
  img = loadImage('eheheh.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth/2;
  y = 25;
  z = 100;
  dead = 0;
  projectdead = 0;
  tc = 0;
  tcgl = 0;
  tcbl = 0;
  }

function draw() {
  background(100);
  
  //Trey
  if (tc == 0) {
    createtrey();
  }
  if (tcbl == 1) { 
    ppx+=pvx;
    ppy+=pvy;
    imageMode(CENTER);
    image(img,ppx,ppy);
  }
  if (tcgl == 1) {
    ppx+=pvx;
    ppy+=pvy;
    imageMode(CENTER);
    image(img2,ppx,ppy);
  }
  if (ppx>=windowWidth) {
    deletetrey();
  }
  if (ppy>=windowHeight) {
    deletetrey();
  }
  if (ppy<=0) {
    deletetrey();
  }
  
  
  //dumb ways to die
  if (z <= 0) {
    die();
  }
  if (x>=windowWidth) {
    z=0;
  }
  if (y>=windowHeight) {
    z=0;
  }
  if (x<=0) {
    z=0;
  }
  if (y<=0) {
    z=0;
  }
  dtp = dist(ppx,ppy,x,y);
  if (dtp <= 75 && tcbl == 1) {
    deletetrey();
    z-=50;
  }
  if (dtp <= 75 && tcgl == 1) {
    deletetrey();
    z+=10;
  }
  
  
  
  //controls the player left/right
  if (keyIsDown(65)) {
    x -= 6;
  }
  if (keyIsDown(68)) {
    x += 6;
  }
  
  //controls the player jump
  if (keyIsDown(32)) {
    y -= 7
  } else {
    y+=5
  }
  /*if (y >= windowHeight-25) {
  } else {
  if (!keyIsDown(32)) {
    y += 4;
  }
  }*/
  
  
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
    dead=1;
  }
  
  function deletetrey() {
    projectdead = 1;
    tc=0;
  }
  
  function createtrey() {
    tc = 1;
    goba = [1,2];
    gb = random(goba);
    if (gb == 1) {
      tcgl = 1;
    }
    if (gb == 2) {
      tcbl = 1;
    }
    ppx = -20;
    ppy = random(0,windowHeight);
    pvx = random(3,9);
    pvy = random(-4,4);
  }
}
