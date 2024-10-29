function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  //cambio disegno dopo un intervallo di tempo in automatico
  setInterval(() => {
    location.reload();
  }, 5000);
}

function draw() {
  background("white");
  noFill();
  blendMode(MULTIPLY);
  strokeWeight(3);
  stroke(random(0,255),random(0,255),random(220,255));
  
  //righe di glifi
  for(let i=0;i<20;i++){
    push();
    translate((70*i)+70,70);
    repetition(random(1,3),50, random(3,5));
    pop();
    push();
    translate((70*i)+70,170);
    repetition(random(1,3),50, random(3,5));
    pop();
    push();
    translate((70*i)+70,270);
    repetition(random(1,3),50, random(3,5));
    pop();
    push();
    translate((70*i)+70,370);
    repetition(random(1,3),50, random(3,5));
    pop();
    push();
    translate((70*i)+70,470);
    repetition(random(1,3),50, random(3,5));
    pop();
    push();
    translate((70*i)+70,570);
    repetition(random(1,3),50, random(3,5));
    pop();
  }
}

function repetition(number=3,side=50,points=4){
  for(let n=0;n<number;n++){
    drawWorm(side,points);
  }
}

function drawWorm(side=50,points=7){
  //funzione per disegnare glifi con random  
  beginShape();
  for(let p=0; p<points;p++){
    let x=random(side);
    let y=random(side);
    curveVertex(x,y);
  }
  endShape();
}