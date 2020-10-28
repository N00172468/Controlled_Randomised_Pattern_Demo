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
                
                let rotateVal = atan2(mouseY - transY, mouseX - transX);
                rotate(rotateVal);

                // noStroke();
                fill(j, i, numOfSquares - j);
                ellipse(0, 0, scaleVal, scaleVal);
                // noStroke();
                stroke(180);
                ellipse(10, 0, squareSize / 4, squareSize / 4);
            pop();
        }
    }
}
