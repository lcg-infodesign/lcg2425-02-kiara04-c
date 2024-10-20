function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background("white");
  //quantità, lunghezza e forma
  noFill();
  blendMode(MULTIPLY);
  strokeWeight(3);
  stroke(random(0,255),random(0,255),random(220,255));
  
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
  //ogni volta che richiamo la funzione si prendono
  //punti casuali nello spazio e li unisco con una linea
  //let side=40;
  //let points=7;
  
  beginShape();
  for(let p=0; p<points;p++){
    let x=random(side);
    let y=random(side);
    curveVertex(x,y);
  }
  endShape();
}