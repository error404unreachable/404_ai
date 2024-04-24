const network = new brain.NeuralNetwork();

network.train([
    {input:[0,0], output:{zero:1}},
    {input:[0,1], output:{one:1}},
    {input:[1,0], output:{one:1}},
    {input:[1,1], output:{zero:1}}
]);

result = network.run([1,0]);

document.getElementById("out").innerText = result["one"] + "  " + result["zero"];
