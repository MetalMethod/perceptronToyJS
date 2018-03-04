//this class generates the data_set for training

function create_training_data(){

    data_array = Array(100);
    
    for(i = 0; i < data_array.length; i++) {
        data_array[i] = new DataPoint()
    }
    return data_array;
}





class DataPoint {
   
    constructor(){
        this.y = randomFromInterval(0, CANVAS_HEIGHT);
        this.x = randomFromInterval(0, CANVAS_WIDTH);
        this.label = this.init_label(this.x, this.y);
        // this.cartesian_x
        // this.cartesian_y
    }
    
    init_label(x, y){
        if(x > y){
            return 1;
        }else{
            return -1;
        }
    }

    
}