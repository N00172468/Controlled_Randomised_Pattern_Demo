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

    randomSeed(99); // Setting the seed value to return the same pseudo-random numbers every time.
    
    /**
     * LOOPED ELLIPSES:
     */
    for (let j = 0; j < numOfSquares; j++) {
        for (let i = 0; i < numOfSquares; i++) {
            let transX = i * squareSize + squareSize / 2;
            let transY = j * squareSize + squareSize / 2;
            
            let distance = dist(transX, transY, mouseX, mouseY);
            // let scaleVal = map(distance, 0, cWidth, 15, squareSize * 2);
            let scaleVal = map(distance, 0, cWidth, squareSize, 15);
            
            push();
            translate(transX, transY);
            
            let randomNum = round(random(0, 1)); // Between Natural numbers of 0 and 1.
            
            noFill();
            stroke(j, i, numOfSquares - j);
            
            if (randomNum == 0) {
                line(0, 0, squareSize, squareSize);
            } else {
                line(0, squareSize, squareSize, 0);
            }
            pop();
        }
    }
}
