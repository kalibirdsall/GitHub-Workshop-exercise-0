function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);  
}

function draw() {
  background(0);

  let s = second();
  
  fill(149, 0, 255)
  text(second(), 20, 20);
  
  translate(width/2, height/2);
  noStroke()
  fill(255, 0, 0) //red
  arc(0,0,400,300,0,s*6);
  
  fill(255, 128, 0) //orange
  arc(0,0,375,275,0,s*6);
  
  fill(251, 255, 0) //yellow
  arc(0,0,350,250,0,s*6);
  
  fill(0, 255, 89) //green
  arc(0,0,325,225,0,s*6);
  
  fill(0, 76, 255) //blue
  arc(0,0,300,200,0,s*6);
  
  fill(149, 0, 255) //purple
  arc(0,0,275,175,0,s*6);
  
  fill(0) //black
  arc(0,0,250,150,0,s*6);
  
}