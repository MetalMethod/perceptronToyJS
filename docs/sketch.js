
//TRAINING DATA Drawing Functions //

function drawTrainingLine(trainingLine) {
    push()
    stroke(100, 100, 100);
    strokeWeight(5)
    line(trainingLine.begin_x, trainingLine.begin_y, trainingLine.end_x, trainingLine.end_y)
    pop()
}

function drawPredictionLine() {
    var weights = []
    weights = perceptron.weights;
    
    var x1 = MIN_X;
    var y1 = (-weights[2] - weights[0] * x1) / weights[1];
    var x2 = MAX_X;
    var y2 = (-weights[2] - weights[0] * x2) / weights[1];
    
    var x1_map = map(x1, MIN_X, MAX_X, 0, width);
    var y1_map = map(y1, MIN_Y, MAX_Y, height, 0);
    var x2_map = map(x2, MIN_X, MAX_X, 0, width);
    var y2_map = map(y2, MIN_Y, MAX_Y, height, 0);
    
    // if (dataPointsArray.length < 2) {
        //     strokeWeight(9)
        //     stroke(255, 255, 100);
        // }
        
        push()
        stroke(100, 100, 255);
        strokeWeight(0.1)
        line(x1_map, y1_map, x2_map, y2_map);
        //     line(x1, y1, x2, y2);
        //line(0, 0, windowWidth, windowHeight)
    pop()

}



function drawDataPointArray(dataPointsArray) {
    dataPointsArray.forEach(element => {
        drawDataPoint(element)
    });
}

function drawDataPoint(dataPoint) {
    stroke(170)
    fill(170)
    ellipse(dataPoint.x, dataPoint.y, 6, 6)
}

function drawCartesianAxis() {
    push()
    //DRAW AXIS
    strokeWeight(1)
    stroke(200, 150, 0);
    //x axis
    line(0, MAP_HALF, windowWidth, MAP_HALF)
    //y axis
    line(MAP_HALF, windowWidth, MAP_HALF, 0)
    pop()
}

//// UI DRAWING
function drawUiBG() {
    stroke(190);
    fill(230)
    rect(0, 380 - 4, 400, WINDOW_HEIGHT)
}

function drawUiFisrtInputBlock() {
    let x = UI_COLUMN;
    let y = UI_TOP + (UI_GRID_SIZE * 2)
    stroke(100);
    fill(230);
    rect(x, y, UI_GRID_SIZE, UI_GRID_SIZE)
    return [x, y]
}

function drawUiRemainingBlocks(prevBlockXY) {
    let blocksCenter = [];
    blocksCenter.push(prevBlockXY)

    let x = UI_COLUMN;
    let y = prevBlockXY[1];
    for (let i = 1; i < PERCEPTRON_INPUTS_BIAS; i++) {
        y = y + (UI_GRID_SIZE * 2)
        blocksCenter.push([x, y])

        stroke(100);
        fill(230);
        rect(x, y, UI_GRID_SIZE, UI_GRID_SIZE)
    }
    return blocksCenter
}

function drawUiInputColumn() {
    let prevBlockXY = drawUiFisrtInputBlock()
    return drawUiRemainingBlocks(prevBlockXY)
}

function drawUiPerceptronCenter() {
    stroke(100);
    fill(230)
    ellipse(MAP_HALF, UI_HALF_HEIGHT, UI_GRID_SIZE * 3 + 10, UI_GRID_SIZE * 3 + 10)
}

function drawUiOutputColumn() {
    stroke(100);
    fill(230)
    rect((UI_COLUMN * 3) - (UI_GRID_SIZE), UI_HALF_HEIGHT - UI_GRID_SIZE, UI_GRID_SIZE * 2, UI_GRID_SIZE * 2)
}

function drawPerceptronLines(blocksCenters) {
    //draw input conections
    blocksCenters.forEach(block => {
        stroke(100, 100, 100);
        let x = block[0] + (UI_GRID_SIZE / 2);
        let y = block[1] + (UI_GRID_SIZE / 2);
        line(x, y, MAP_HALF, UI_HALF_HEIGHT)
    });
    //draw output connection
    line(MAP_HALF, UI_HALF_HEIGHT, (UI_COLUMN * 3), UI_HALF_HEIGHT)
}

function drawPerceptronLabels(blocksCenters) {
    fill(50);
    textSize(10);
    textAlign(LEFT);
    txt_x = UI_COLUMN - (UI_GRID_SIZE) + 3
    txt_y = blocksCenters[0][1] + (UI_GRID_SIZE / 2) + 3;
    text("x", txt_x, txt_y);
    text("y", txt_x, txt_y + (UI_GRID_SIZE * 2));
    text("bias", txt_x - 7, txt_y + (UI_GRID_SIZE * 4));
    text("prediction", (UI_COLUMN * 3) - UI_GRID_SIZE - 3, UI_HALF_HEIGHT - (UI_GRID_SIZE * 2) + 10);
    text("activation ∑ W", (UI_COLUMN * 2) - UI_GRID_SIZE - 10, UI_HALF_HEIGHT - (UI_GRID_SIZE * 2) - 4);
}

function drawPredictionValue(prediction) {
    fill(50);
    textSize(10);
    textAlign(RIGHT);
    text(prediction, (UI_COLUMN * 3) + 5, UI_HALF_HEIGHT + 35);
}

function drawPredictionBoxValues(prediction, target) {
    if (prediction == target) {
        fill(0, 180, 0);
        rightPredictionCount = rightPredictionCount + 1;
    } else {
        wrongPredictionCount = wrongPredictionCount + 1
        fill(180, 0, 0);
    }
    if (dataPointsArray.length === 0) {
        fill(190);
    }
    noStroke();
    rect((UI_COLUMN * 3) - (UI_GRID_SIZE) + 1, UI_HALF_HEIGHT - UI_GRID_SIZE + 1, UI_GRID_SIZE * 2 - 1, UI_GRID_SIZE * 2 - 1)
}

function drawPredictionsText(textInput) {
    fill(50);
    textSize(10);
    textAlign(LEFT)
    text(textInput, UI_COLUMN - (UI_GRID_SIZE * 3), UI_BOTTOM - UI_GRID_SIZE + 10);
    text("Perceptron", UI_COLUMN * 2 - (UI_GRID_SIZE), UI_TOP + 5);
}

function drawErrorsText(textInput) {
    fill(50);
    textSize(10);
    textAlign(LEFT)
    text(textInput, (UI_COLUMN * 3) - 10 - (UI_GRID_SIZE * 3) + 10, UI_BOTTOM - UI_GRID_SIZE + 10);
}

function drawXYvalues(x, y) {
    fill(50);
    textSize(14);
    textAlign(RIGHT);
    txt_x = 103;
    txt_y = UI_HALF_HEIGHT;

    text(x.toFixed(0), txt_x + 13, txt_y - (UI_GRID_SIZE * 2) + 6);
    text(y.toFixed(0), txt_x + 13, txt_y + 6);
    text(BIAS, txt_x + 10, txt_y + (UI_GRID_SIZE * 2) + 6);
}

function drawWeights() {
    fill(50);
    textSize(10);
    textAlign(LEFT);
    text("W x : " + perceptron.weights[0].toFixed(0), (UI_COLUMN * 2) - UI_GRID_SIZE, UI_HALF_HEIGHT - 10);
    text("W y : " + perceptron.weights[1].toFixed(0), (UI_COLUMN * 2) - UI_GRID_SIZE, UI_HALF_HEIGHT + 5);
    text("W b : " + perceptron.weights[2].toFixed(0), (UI_COLUMN * 2) - UI_GRID_SIZE - 1, UI_HALF_HEIGHT + 20);
}

function drawUI() {
    drawUiBG();
    let blocksCenters = drawUiInputColumn();
    drawPerceptronLines(blocksCenters);
    drawUiInputColumn(); //call again to draw on top
    drawUiPerceptronCenter();
    drawUiOutputColumn();
    drawPerceptronLabels(blocksCenters);
}


function drawClassificationShape(trainingLine) {
    fill(230)
    beginShape()
    vertex(trainingLine.begin_x, trainingLine.begin_y)
    vertex(0, windowHeight)
    vertex(windowWidth, windowHeight)
    vertex(trainingLine.end_x, trainingLine.end_y)
    endShape()
}

////////////////////////////////
// p5.js required functions:
// setup() runs only once
// draw() is a while true loop
////////////////////////////////
function setup() {
    

    createCanvas(windowWidth, windowHeight);
    background(210);

    //store f(x) values
    var a = randomFromInterval(-1,1)
    var b = randomFromInterval(-1, 1)

    perceptron = new Perceptron();
    trainingLine = new TrainingLine(a, b);
    
    dataPointsArray = createTrainingData(trainingLine);
    wrongPredictedDataPointsArray = [];
    wrongPredictedDataPointsArray.push(new DataPoint())
    
    trainingIndex = -1;
    
    rightPredictionCount = 0;
    wrongPredictionCount = 0;
    
    drawClassificationShape(trainingLine);
    drawDataPointArray(dataPointsArray);
    drawTrainingLine(trainingLine);
}

function draw() {
    frameRate(400);
    //drawCartesianAxis()

    //TRAINING CODE 
    trainingIndex = trainingIndex + 1;
    
    //this if makes a cycle of one epoch (or running all the trainingset once.)
    if (trainingIndex < dataPointsArray.length) {

        drawTrainingLine(trainingLine);
        
        input = [dataPointsArray[trainingIndex].x, dataPointsArray[trainingIndex].y, dataPointsArray[trainingIndex].bias];
        target = dataPointsArray[trainingIndex].label;
        
        prediction = perceptron.predict(input);
        drawPredictionLine();

        //paint predictions result points
        //add wrong prediction point to a list
        if (prediction === target) {
            rightPredictionCount = rightPredictionCount + 1;

            fill(30, 220, 30);
            noStroke();
            ellipse(dataPointsArray[trainingIndex].x, dataPointsArray[trainingIndex].y, 6, 6);

            //remove the point from the dataPointArray
            dataPointsArray.splice(trainingIndex, 1);

        } else {
            wrongPredictionCount = wrongPredictionCount + 1;
            fill(180, 0, 0);
            noStroke();
            ellipse(dataPointsArray[trainingIndex].x, dataPointsArray[trainingIndex].y, 6, 6);
        }
        // TRAINING
        perceptron.train(input, target);

        //Info for UI
        var remainingPredictions = dataPointsArray.length;
        error = (wrongPredictionCount / rightPredictionCount * 100).toFixed(2);

        var predictionsTextInput = "remaining predictions : " + remainingPredictions;
        var errorsTextInput = "errors in predictions: " + error + " %";

        //draw bottom UI on top of any other drawings
        drawUI();
        drawPredictionsText(predictionsTextInput);
        drawErrorsText(errorsTextInput)
        //drawPredictionValue(prediction);
        drawPredictionBoxValues(prediction, target);
        drawWeights();
        if (dataPointsArray[trainingIndex]) {
            drawXYvalues(dataPointsArray[trainingIndex].cartesian_x, dataPointsArray[trainingIndex].cartesian_y);
        }

    } else {
        trainingIndex = -1;
    }


}//end of draw
