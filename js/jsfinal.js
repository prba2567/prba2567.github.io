// let particles = [];
// const num = 3000; 
// const noiseScale = 0.01;

// function setup() {
//   createCanvas(700, 700, WEBGL);
//   colorMode(HSB);
//   angleMode(DEGREES);
//   stroke(205, 50, 100);
//   strokeWeight(3);
  
  
//   for(let i =0 ; i < num; i++)
//     {
//       particles.push(createVector(random(width), random(height)));
//     }
//   stroke(300);
 
  
// }

// function draw() {
  
  
//   background(21,50, 15);
//   orbitControl(4,4);
  
//   rotateX(-20);
  
//   for( r = 0; r <= 1; r+= 0.03 ){
//   beginShape(POINTS)
//   {
//     for(let theta = 0; theta <= 180* 15; theta += 3)
//       {
//         let phi = 15*Math.exp(theta/1500);
//         let pX = 250* r* sin(phi) * sin(theta);
//         let pY = -250* r *cos(phi);
//         let pZ = 250* r *  sin(phi) * cos(theta);
//         vertex(pX, pY, pZ);
//       }
//     endShape();
//   }
//   }
//   for(let i =0; i < num; i++)
//     {
//       let p = particles[i];
//       point(p.x,p.y);
//       let n = noise(p.x * noiseScale, p.y * noiseScale);
//       let a = TAU * n;
//       p.x += cos(a);
//       p.y += sin(a);
//       if(!onScreen(p))
//         {
//           p.x = random(width);
//           p.y = random(height);
          
//         }
//     }
  
  
  
// }

// function onScreen(v)
// {
//  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  
// }

// function mouseReleased()
// {
//   noise(millis());
// }

