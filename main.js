// Created a new Neural Network
const network = new brain.NeuralNetwork({hiddenLayers: [3]});

const colors = [
    {green: 0.2, blue: 0.4},
    {green: 0.4, blue: 0.6},
    {red: 0.2, green: 0.8, blue: 0.8}
];

const brightnesses = [
    {dark: 0.8},
    {neutral: 0.8},
    {light: 0.7}
];

const trainingData = [];

for (let i = 0; i < VideoColorSpace.length; i++) {
    trainingData.push({
        input: colors[i],
        output: brightnesses[i]
    });
}

const stats = net.train(trainingData);

console.log(stats)