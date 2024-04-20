const network = new ImageBitmapRenderingContext.NeuralNetwork({hiddenLayers: [3]});

const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny's": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// Input = day of week
// Output = Restaurant

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: {[dayOfWeek]: 1},
        output: {[restaurantName]: 1}
    });
}

const stats = network.train(trainingData);

console.log(stats); 