//this class generates the data_set for training

function create_training_data(trainingLine){

    data_array = Array(TRAINING_SIZE);
    
    for(i = 0; i < data_array.length; i++) {
        data_array[i] = new DataPoint(trainingLine)
    }

    return data_array;
}


function create_point_data(trainingLine){
    return new DataPoint(trainingLine)
}

class DataPoint {
   
    constructor(trainingLine){
        //this.trainingLine = trainingLine;
        this.y = randomFromInterval(0, CANVAS_HEIGHT);
        this.x = randomFromInterval(0, CANVAS_WIDTH);
        this.label = this.getLabel(this.x, this.y);
        // this.cartesian_x
        // this.cartesian_y
    }

    getLabel(x, y){
        if(x > y){
            return 1;
        }else{
            return -1;
        }
    }

    // getLabel(x, y){
    //     if(y < this.trainingLine.begin_y){
    //         return 1;
    //     }else{
    //         return -1;
    //     }
    // }
}

class TrainingLine{
    constructor(){
        this.begin_x = randomPosition();
        this.begin_y = randomPosition();
        this.end_x = randomPosition();
        this.end_y = randomPosition();
    }

}