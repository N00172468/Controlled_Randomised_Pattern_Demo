function setup() {
    createCanvas(700, 700);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    smooth(); // Anti-aliasing
    rectMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

function draw() {
    background(0 ,0, 0, 0.5);
    stroke(0, 0, 100);

    // Setting colours for interpolation:
    let fromColour = color(179, 100, 90); // Start of range
    let toColour = color(299, 100, 100); // End of range

    // Trig. Variables:
    let transValX = width/2;
    let transValY = height/2;
    let rotateVal = atan2(mouseY - transValY, mouseX - transValX);
    
    // Loop Variables:
    numOfSquares = 7; 
    squareSize = 100;

    /**
     * LOOPED SQUARES:
     * 
     * - Including:
     *      - Interpolation
     *      - Inverse Tan function for rotation
     */
    for (let j = 0; j < numOfSquares; j++) {
        for (let i = 0; i < numOfSquares; i++) {
            push();
                translate(i * squareSize + squareSize/2, j * squareSize + squareSize/2);
                let rotateVal = atan2(mouseY - j * squareSize, mouseX - i * squareSize);
                rotate(rotateVal);

                // stroke(lerpColor(fromColour, toColour, i * j / 32));
                stroke(0, 0, 0);
                strokeWeight(5);
                fill(lerpColor(fromColour, toColour, i * j / 32));
                rect(0, 0, 100, 100);
            pop();
        }
    }
}
