function calculateVolumes() {
    // Fetching input values
    var sphereRadius = parseFloat(document.getElementById("sphereRadius").value);
    var rectLength = parseFloat(document.getElementById("rectLength").value);
    var rectWidth = parseFloat(document.getElementById("rectWidth").value);
    var rectHeight = parseFloat(document.getElementById("rectHeight").value);
    var squareSide = parseFloat(document.getElementById("squareSide").value);

    // Calculating volumes
    var sphereVolume = calculateSphereVolume(sphereRadius);
    var rectVolume = calculateRectVolume(rectLength, rectWidth, rectHeight);
    var squareVolume = calculateSquareVolume(squareSide);

    // Displaying results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h3>Volume Calculations</h3>" +
        "<p>Sphere Volume: " + sphereVolume.toFixed(2) + "</p>" +
        "<p>Rectangle Volume: " + rectVolume.toFixed(2) + "</p>" +
        "<p>Square Volume: " + squareVolume.toFixed(2) + "</p>";
}

function calculateSphereVolume(radius) {
    return (4/3) * Math.PI * Math.pow(radius, 3);
}

function calculateRectVolume(length, width, height) {
    return length * width * height;
}

function calculateSquareVolume(side) {
    return Math.pow(side, 3);
}
