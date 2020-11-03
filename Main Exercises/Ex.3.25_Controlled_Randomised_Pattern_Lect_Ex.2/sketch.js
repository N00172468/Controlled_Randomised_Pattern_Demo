let cWidth = 700;
let numOfSquares = 20;
let squareSize = cWidth/ numOfSquares;

function setup() {
    createCanvas(cWidth, cWidth);

    colorMode(RGB, numOfSquares, numOfSquares, numOfSquares);
    smooth(); // Anti-aliasing
    rectMode(CENTER); // Prevents object from rotating on the top-left corner. Enables rotation within centre of object.
}

function draw() {
    background(0);
    randomSeed(19); // Setting the seed value to return the same pseudo-random numbers every time.
    
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
                translate(-20, -20);
                
                noFill();
                stroke(j, i, numOfSquares - j);

                if (randomNum == 0) {
                    push();
                        stroke(0);
                        fill(j, i, numOfSquares - j);
                        triangle(0, 0, 60, squareSize, squareSize, 60);
                    pop();
                    
                    push();
                        // let col = color(j, i, numOfSquares - j);
                        // let sat = saturation(col);
                        // fill(col);
                        fill(j - 2, i - 2, numOfSquares - j - 2);
                        rotate(PI);
                        triangle(0, 0, 60, squareSize, squareSize, 60);
                    pop();
                } else {
                    line(0, squareSize, squareSize, 0);
                }
            pop();

        }
    }
}
