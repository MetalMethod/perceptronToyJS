
// p5.js required functions:
// setup() runs only once
// draw() is a while true loop
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  data_array = create_training_data()

}


function draw() {
  background(180);
  //draw_cartesian_axis()

  draw_training_line()
  draw_point_array(data_array)

}

//////

function draw_cartesian_axis() {
  //DRAW AXIS
  stroke(80);
  //x axis
  line(0, MAP_HALF, CANVAS_WIDTH, MAP_HALF)
  //y axis
  line(MAP_HALF, CANVAS_WIDTH, MAP_HALF, 0)
}

function draw_training_line() {
  stroke(255, 100, 100);
  line(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}


function draw_point_array(data_array) {
  data_array.forEach(element => {
    draw_point(element)
  });
}

function draw_point(data_point) {
  //draw data points
  stroke(100)
  if (data_point.label == 1) {
    fill(255)
  } else {
    fill(0)
  }
  ellipse(data_point.x, data_point.y, 8, 8)
}


