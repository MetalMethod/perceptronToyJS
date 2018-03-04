class Perceptron{

    constructor(input_number){
        this.input_number = input_number
        this.weights = Array(this.input_number)
        this.initWeights()
    }

    initWeights(){
        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] = randomFromInterval(-1,1)
        }
    }

    

}
