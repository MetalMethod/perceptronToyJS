
// p5.js required functions:
// setup() runs only once
// draw() is a while true loop
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  perceptron = new Perceptron(2, 0.1)
  trainingLine = new TrainingLine()
  data_array = create_training_data(trainingLine)
  trainingIndex = 0
  background(180);
  //draw_training_rect(trainingLine);
  
}


function draw() {
  frameRate(120);
  //draw_cartesian_axis()
  
  trainingIndex = trainingIndex + 1;
  if(trainingIndex < TRAINING_SIZE){
    //draw_point_array(data_array);
    
    draw_training_line(trainingLine);


    pt = create_point_data(trainingLine)
    draw_point(pt);
    prediction = perceptron.predictSinglePoint(pt)
    target = pt.label


    if(prediction == target){
      fill(0, 255, 0);
    }else{
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(pt.x, pt.y, 4, 4)
  }

  // for (let i = 0; i < data_array.length; i++){

  //   input = [data_array[i].x, data_array[i].y];
  //   target = data_array[i].label;
    
  //   prediction = perceptron.predict(input)
  
  //   //draw predictions
  //   if(prediction == target){
  //     fill(0, 255, 0);
  //   }else{
  //     fill(255, 0, 0);
  //   }
  //   noStroke();
  //   ellipse(data_array[i].x, data_array[i].y, 4, 4)
    
  //   perceptron.train(input, target)

  //}
  
}

//////
//TRAINING
//target is a correct answer, in this caase is the label of the training set
// function train(input, target, error){
  
//   //adjust weights
//   for(i = 0; i < perceptron.weights.length; i++){
//     perceptron.weights[i] += error * input[i] * perceptron.learningRate;
//   }
// }

// function trainArray(data_array){
//   for (let i = 0; i < data_array.length; i++)
//     input = [data_array[i].x, data_array[i].y];
//     target = data_array[i].label;
//     this.trainSinglePoint(input, target)
//   }
  

//////

function draw_cartesian_axis() {
  //DRAW AXIS
  stroke(80);
  //x axis
  line(0, MAP_HALF, CANVAS_WIDTH, MAP_HALF)
  //y axis
  line(MAP_HALF, CANVAS_WIDTH, MAP_HALF, 0)
}

// function draw_training_line() {
//   stroke(255, 100, 100);
//   line(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
// }
function draw_training_line(trainingLine) {
  stroke(255, 100, 100);
  line(0, trainingLine.begin_y, CANVAS_WIDTH, trainingLine.begin_y)
}

function draw_training_rect(trainingLine) {
  stroke(150);
  fill(150)
  rect(trainingLine.begin_x, trainingLine.begin_y, trainingLine.end_x, trainingLine.end_y)
}


function draw_point_array(data_array) {
  data_array.forEach(element => {
    draw_point(element)
  });
}

function draw_point(dataPoint) {
  //draw data points
  stroke(150)
  fill(150)
  ellipse(dataPoint.x, dataPoint.y, 6, 6)
}

function drawPrediction(dataPoint){
    //draw data points
    stroke(100)
    if (dataPoint.label == 1) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(dataPoint.x, dataPoint.y, 8, 8)
}
