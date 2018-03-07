
// Drawing Functions //

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

function draw_cartesian_axis() {
  //DRAW AXIS
  stroke(200, 150, 0);
  //x axis
  line(0, MAP_HALF, CANVAS_WIDTH, MAP_HALF)
  //y axis
  line(MAP_HALF, CANVAS_WIDTH, MAP_HALF, 0)
}


function drawText(textInput) {
  fill(50);
  textSize(10)
  text("Perceptron", UI_COLUMN*2 - (UI_GRID_SIZE), UI_TOP + 5);
  text(textInput, UI_COLUMN, UI_BOTTOM - UI_GRID_SIZE+10);
}



//// UI DRAWING
function drawUiBG() {
  stroke(190);
  fill(230)
  rect(1, CANVAS_HEIGHT - 4, CANVAS_WIDTH - 2, WINDOW_HEIGHT)
}

function drawUiFisrtInputBlock(){
  let x = UI_COLUMN;
  let y = UI_TOP + (UI_GRID_SIZE*2)
  stroke(100);
  fill(230);
  rect(x, y, UI_GRID_SIZE, UI_GRID_SIZE)
  return [x, y]
}

function drawUiRemainingBlocks(prevBlockXY){
  let blocksCenter = []; 
  blocksCenter.push(prevBlockXY)
  
  let x = UI_COLUMN;
  let y = prevBlockXY[1] ;
  for(let i = 1; i < PERCEPTRON_INPUTS_BIAS; i++){
    y = y + (UI_GRID_SIZE * 2)
    blocksCenter.push([x,y])

    stroke(100);
    fill(230);
    rect(x , y , UI_GRID_SIZE, UI_GRID_SIZE)
  }
  return blocksCenter
}

function drawUiInputColumn() {
  let prevBlockXY = drawUiFisrtInputBlock()
  return drawUiRemainingBlocks(prevBlockXY)
}

function drawUiPerceptronCenter(){
  stroke(100);
  fill(230)
  ellipse(MAP_HALF, UI_HALF_HEIGHT, UI_GRID_SIZE*3, UI_GRID_SIZE*3)
}

function drawUiOutputColumn(){
  stroke(100);
  fill(230)
  rect((UI_COLUMN*3)-(UI_GRID_SIZE), UI_HALF_HEIGHT - UI_GRID_SIZE, UI_GRID_SIZE*2, UI_GRID_SIZE*2) 
}

function drawPerceptronLines(blocksCenters){
  //draw input conections
  blocksCenters.forEach(block => {
    stroke(150, 150, 150);
    let x = block[0] + (UI_GRID_SIZE / 2);
    let y = block[1] + (UI_GRID_SIZE / 2);
    line(x, y, MAP_HALF, UI_HALF_HEIGHT)
  });
  //draw output connection
  line(MAP_HALF, UI_HALF_HEIGHT, (UI_COLUMN *3 ), UI_HALF_HEIGHT)
}


function drawPerceptronLabels(blocksCenters) {
  fill(50);
  textSize(10)
  txt_x = UI_COLUMN - (UI_GRID_SIZE)+3
  txt_y = blocksCenters[0][1] + (UI_GRID_SIZE/2)+3;
  text("x", txt_x, txt_y);
  text("y", txt_x, txt_y + (UI_GRID_SIZE *2));
  text("bias", txt_x - 7, txt_y + (UI_GRID_SIZE *4));
  text("prediction", (UI_COLUMN*3)-UI_GRID_SIZE, UI_HALF_HEIGHT - (UI_GRID_SIZE * 2) +10 );
}


function drawDisplay() {
  drawUiBG();
  let blocksCenters = drawUiInputColumn();
  drawPerceptronLines(blocksCenters);
  drawUiInputColumn(); //call again to draw on top
  drawUiPerceptronCenter();
  drawUiOutputColumn();
  drawPerceptronLabels(blocksCenters);
}

////////////////////////////////
// p5.js required functions:
// setup() runs only once
// draw() is a while true loop
////////////////////////////////
function setup() {
  createCanvas(CANVAS_WIDTH, WINDOW_HEIGHT);
  background(200);


  perceptron = new Perceptron()
  trainingLine = new TrainingLine()
  data_array = create_training_data(trainingLine)
  trainingIndex = -1

  rightPrediction = 0
  wrongPrediction = 0

  draw_point_array(data_array);

}

function draw() {
  frameRate(400);
  draw_cartesian_axis()

  //TRAINING CODE 
  trainingIndex = trainingIndex + 1;
  if (trainingIndex < TRAINING_SIZE) {

    draw_training_line(trainingLine);

    input = [data_array[trainingIndex].x, data_array[trainingIndex].y, data_array[trainingIndex].bias];
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
    var remainingPredictions = TRAINING_SIZE - trainingIndex - 1
    var textInput = "error :" + error.toString() + "%" + "    remaining predictions : " + remainingPredictions

    //draw bottom UI on top of any other drawings
    drawDisplay();
    drawText(textInput)
  }//end of if
}//end of draw
