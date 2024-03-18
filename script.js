/**
 * Project 1 - Interactive Image
 * Name: Scott Shobayo
 * Comments: 
 * Date: Feb 15, 2024
 */

// Global Variables go here

function setup(){
  // this function will run once
  createCanvas(400, 400); // create a 400x400 pixel drawing canvas
x = width / 2;
y = height / 2;
dx = random(-5, 5);
}


function draw(){
  // this function runs again and again (60x per second)
  background(220);

  // Move the basketball
  x += dx;

  // wall collsion
  if (x- radius < 0 || x + radius >  width) {
    dx *= -1;
  }


  // add your image drawing code here
function drawbasketBall(x, y) {
  translate(x, y);
  // drawbasketBall
  fill(255, 165, 0); // color orange
stroke(0); // black outline
strokeWeight(2); // thin outline
ellipse(0, 0, radius * 2) // basketballs main body
}





/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  if(mouseIsPressed){
    // random velocity when the mouse is pressed
    dx = random(-5, 5);
  }
    //check each frame to see if the mouse is pressed, then do something
    dx
  } else {
    // do something here if the mouse is NOT pressed
  }
}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}