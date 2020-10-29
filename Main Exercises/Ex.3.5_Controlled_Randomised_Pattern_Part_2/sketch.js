let cWidth = 700;
let numOfSquares = 20;
let squareSize = cWidth/ numOfSquares;

// Variables for Animated Colour Loop:
let t = 0;
let reverse = false;

function setup() {
    // createCanvas(cWidth, cWidth);
    createCanvas(windowWidth, windowHeight);

    colorMode(RGB, numOfSquares, numOfSquares, numOfSquares);
    smooth(); // Anti-aliasing
    rectMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

function draw() {
    background(0);
    randomSeed(99); // Setting the seed value to return the same pseudo-random numbers every time.
    
    /**  
     * USED ONLY FOR FULL-WINDOWED CANVAS. 
     * MUST COMMENT OUT translate() IF USING cWidth CANVAS!
     * 
     * - Fine-tuning to keep objects as centred as possible.
    */
    // translate(-20, -20); // For cWidth Canvas along with Interactive feature. 
    // translate(width / 3.5, 0); // For Common Laptop Resolutions.
    translate(width / 3.5, 80); // For Common Desktop Resolutions.

    /**
     * LOOPED OBJECTS:
     */
    for (let j = 0; j < numOfSquares; j++) {
        for (let i = 0; i < numOfSquares; i++) {
            let transX = i * squareSize + squareSize / 2;
            let transY = j * squareSize + squareSize / 2;
            
            let distance = dist(transX, transY, mouseX, mouseY);
            let scaleVal = map(distance, 0, cWidth, squareSize, 0);
            
            push();
                let randomNum = round(random(0, 1)); // round(...) = Between Natural numbers of 0 and 1.
                
                translate(transX, transY);
                
                // Checking how long it would take for the animated color to reach the edge/corner of canvas:
                // console.log('stroke!', t) 

                if (randomNum == 0) {
                    stroke(0);
                    fill(random(j) * random(t, - 0.09), random(i) * random(t, -0.09), numOfSquares - j);
                    rect(scaleVal, scaleVal, squareSize, squareSize);
                } else {
                    noFill();
                    stroke(random(j) * random(t, - 0.09), random(i) * random(t, -0.09), numOfSquares - j);
                    ellipse(scaleVal, scaleVal, squareSize, squareSize);
                    
                    strokeWeight(t);
                    ellipse(scaleVal, scaleVal,squareSize / 2,squareSize / 2);
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
    t = t + ( reverse ? -0.75 : 0.2); // "Ease in - fast out" effect.
    
    // Animation Loop:
    if(t > 16) { // If time lapse hits 16 milliseconds
        reverse = true
    }
    if(t < 0.05) { // If time lapse hits 0.05 milliseconds
        reverse = false
    }
}
