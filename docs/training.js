//this module generates the data_set for training

function createTrainingData(trainingLine) {
    dataPointsArray = Array(TRAINING_SIZE);

    for (i = 0; i < dataPointsArray.length; i++) {
        dataPointsArray[i] = new DataPoint(trainingLine);
        dataPointsArray[i].label = classificateDataPoint(dataPointsArray[i]);
        
    }
    return dataPointsArray;
}

function createDataPoint(trainingLine) {
    return new DataPoint(trainingLine);
}

function classificateDataPoint(DataPoint) {
    if (DataPoint.cartesian_x > DataPoint.cartesian_y) {
        return 1;
    } else {
        return -1;
    }
}

// A point of data in space  
// [x, y] that are the inputs of the perceptron.
class DataPoint {
    constructor(trainingLine) {
        this.bias = BIAS;
        this.label = 0;
        this.x = randomPosition();
        this.y = randomPosition();
        //convert canvas cordinates into values from -1 ro 1
        //p5.js map function
        //n_needed = map(n_now,   min_n_nox, max_n_now,  min_n_want, max_n_want)
        this.cartesian_x = map(this.x, 0, CANVAS_WIDTH, MIN_X, MAX_Y);
        this.cartesian_y = map(this.y, 0, CANVAS_HEIGHT, MIN_Y, MAX_Y);
    }
}

//Math function that defines the dataset point labels
//A line that crosses the space 
//and separates points in 2 classes.
class TrainingLine {
    constructor() {
        this.begin_x = map(MIN_X, MIN_X, MAX_X, 0, CANVAS_WIDTH);
        this.begin_y = map(f(MIN_X), MIN_Y, MAX_Y, CANVAS_HEIGHT, 0);
        this.end_x = map(MAX_X, MIN_X, MAX_X, 0, CANVAS_WIDTH);
        this.end_y = map(f(MAX_X), MIN_Y, MAX_Y, CANVAS_HEIGHT, 0);
        
        console.log(this.begin_x.toString() + "    " + this.begin_y.toString())
        console.log(this.end_x.toString() + "    " + this.end_y.toString())
    }
}