let cWidth = 700;
let numOfSquares = 20;
let squareSize = cWidth/ numOfSquares;

// Variables for Animated Colour Loop:
let t = 0;
let reverse = false;

function setup() {
    createCanvas(cWidth, cWidth);

    colorMode(RGB, numOfSquares, numOfSquares, numOfSquares);
    smooth(); // Anti-aliasing
    rectMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

function draw() {
    // background(0);
    background(0, 20);
    randomSeed(99); // Setting the seed value to return the same pseudo-random numbers every time.
    // translate(-20, -20); // Fine-tuning to keep objects as centred as possible.
    /**
     * LOOPED OBJECTS:
     */
    for (let j = 0; j < numOfSquares; j++) {
        for (let i = 0; i < numOfSquares; i++) {
            let transX = i * squareSize + squareSize / 2;
            let transY = j * squareSize + squareSize / 2;
            
            let distance = dist(transX, transY, mouseX, mouseY);
            // let scaleVal = map(distance, 0, cWidth, 15, squareSize * 2);
            let scaleVal = map(distance, 0, cWidth, squareSize, 15);
            
            push();
                let randomNum = round(random(0, 1)); // round(...) = Between Natural numbers of 0 and 1.
                
                translate(transX, transY);
                
                noFill();
                stroke(random(j) * random(t, - 0.09), random(i) * random(t, -0.09), numOfSquares - j);
                
                // Checking how long it would take for the animated color to reach the edge/corner of canvas:
                // console.log('stroke!', t) 

                if (randomNum == 0) {
                    // line(0, 0, squareSize, squareSize);
                    stroke(0);
                    fill(random(j) * random(t, - 0.09), random(i) * random(t, -0.09), numOfSquares - j);
                    rect(0, 0, squareSize, squareSize);
                    
                    // var r1 = 0,r2 = 0, step=1,spiralwidth=squareSize,dw=spiralwidth/250;
                    // beginShape(TRIANGLE_STRIP);
                    //     r1 += step;
                    //     spiralwidth -= dw;
                    //     r2 = r1 + spiralwidth;
                    //     var ang = PI/30;
                    //     var r1x = r1*sin(ang*j);
                    //     var r1y = r1*cos(ang*j);
                    //     var r2x = r2*sin(ang*j);
                    //     var r2y = r2*cos(ang*j);
                    //     vertex(r1x,r2y);
                    //     vertex(r2x,r1y);
                    // endShape();
                } else {
                    // strokeWeight(t);
                    // line(0, squareSize, squareSize, 0);
                    ellipse(0, 0, squareSize, squareSize);
                    strokeWeight(t);
                    // ellipse(0, 0, 15, 15);
                    ellipse(0, 0,squareSize / 2,squareSize / 2);

                    // var r1 = 0,r2 = 0, step=1,spiralwidth=squareSize,dw=spiralwidth/cWidth;
                    // beginShape(TRIANGLE_STRIP);
                    //     r1 += step;
                    //     spiralwidth -= dw;
                    //     r2 = r1 + spiralwidth;
                    //     var ang = PI/squareSize;
                    //     var r1x = r1*sin(ang*j);
                    //     var r1y = r1*cos(ang*j);
                    //     var r2x = r2*sin(ang*j);
                    //     var r2y = r2*cos(ang*j);
                    //     vertex(r1x,r2y);
                    //     vertex(r2x,r1y);
                    // endShape();
                }
            pop();

        }
    }
    
    /**
     * "PULSATING" COLOUR ANIMATION LOOP
     * 
     * - If colour animates more than 20 milliseconds, reverse back to starting position.
     * - Once it reverses back, start animation again.
     * 
     * - A collaboration with Eoan O Dea. 
     */

    // If reversing, set speed to -0.5 milliseconds. Else, set speed to 0.1 milliseconds.
    t = t + ( reverse ? -0.5 : 0.1); // "Ease in - fast out" effect.
    
    // Animation Loop:
    if(t > 20) { // If time lapse hits 20 milliseconds
        reverse = true
    }
    if(t < 0.05) { // If time lapse hits 0.05 milliseconds
        reverse = false
    }
}
