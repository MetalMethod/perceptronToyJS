///////////////////////
// Drawing Functions //
///////////////////////

function draw_training_line() {
  stroke(255, 100, 100);
  line(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function draw_point_array(data_array) {
  data_array.forEach(element => {
    draw_point(element)
  });
}

function draw_point(dataPoint) {
  stroke(180)
  fill(180)
  ellipse(dataPoint.x, dataPoint.y, 6, 6)
}

function drawText(textInput){
  fill(255, 255, 255)
  rect(5, CANVAS_HEIGHT -20 ,  220, CANVAS_HEIGHT -5)
  fill(50);
  textSize(10)
  text(textInput, 12, CANVAS_HEIGHT -6);
}

function draw_cartesian_axis() {
  //DRAW AXIS
  stroke(80);
  //x axis
  line(0, MAP_HALF, CANVAS_WIDTH, MAP_HALF)
  //y axis
  line(MAP_HALF, CANVAS_WIDTH, MAP_HALF, 0)
}

// function draw_training_line(trainingLine) {
//   stroke(255, 100, 100);
//   line(0, trainingLine.begin_y, CANVAS_WIDTH, trainingLine.begin_y)
// }

// function draw_training_rect(trainingLine) {
//   stroke(150);
//   fill(150)
//   rect(trainingLine.begin_x, trainingLine.begin_y, trainingLine.end_x, trainingLine.end_y)
// }


////////////////////////////////
// p5.js required functions:
// setup() runs only once
// draw() is a while true loop
////////////////////////////////
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(200);

  perceptron = new Perceptron(2, 0.1)
  trainingLine = new TrainingLine()
  data_array = create_training_data(trainingLine)
  trainingIndex = -1

  rightPrediction = 0
  wrongPrediction = 0
  
  draw_point_array(data_array);
}

function draw() {
  frameRate(400);
  //draw_cartesian_axis()

  ////////////////
  //TRAINING CODE 
  ////////////////
  trainingIndex = trainingIndex + 1;
  if (trainingIndex < TRAINING_SIZE) {
    
    draw_training_line(trainingLine);

    input = [data_array[trainingIndex].x, data_array[trainingIndex].y];
    target = data_array[trainingIndex].label;

    prediction = perceptron.predict(input)

    //draw predictions result
    if (prediction == target) {
      fill(0, 180, 0);
      rightPrediction = rightPrediction + 1;
    } else {
      wrongPrediction = wrongPrediction + 1
      fill(180, 0, 0);
    }
    noStroke();
    ellipse(data_array[trainingIndex].x, data_array[trainingIndex].y, 6, 6)

    perceptron.train(input, target)
  
    error = (wrongPrediction / TRAINING_SIZE * 100).toFixed(2)
    var remainingPredictions = TRAINING_SIZE - trainingIndex -1
    var textInput = "error :" + error.toString() + "%" + "    remaining predictions : " + remainingPredictions
    drawText(textInput)
  
  }//end of if
}//end of draw
