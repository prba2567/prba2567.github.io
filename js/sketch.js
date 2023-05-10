

function setup() {
  createCanvas(1000, 600, WEBGL);
  colorMode(HSB,200);
  angleMode(DEGREES);
  stroke(205, 40, 100);
  strokeWeight(3);
}

function draw() {
  background(100,20, 15);
  orbitControl(4,4);
  rotateX(-20);
  for( r = 0; r <= 1; r+= 0.03 ){
  beginShape(POINTS)
  {
    for(let theta = 0; theta <= 180* 15; theta += 3)
      {
        let phi = 15*Math.exp(theta/1500);
        let pX = 250* r* sin(phi) * sin(theta);
        let pY = -250* r *cos(phi);
        let pZ = 250* r *  sin(phi) * cos(theta);
        vertex(pX, pY, pZ);
      }
    endShape();
  }
  }
  
  
}
