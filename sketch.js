function setup() {
  createCanvas(400, 400); //creo un canvas de 400x400
}

function draw() {
  rectMode(CENTER); 
  for(let i = width; i > 0; i-=1) { 
  stroke(frameCount%i,frameCount%4,i/4); 
  rect(width/2, height/2, i, i); 
}
}
