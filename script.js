function calculateWelds() {
    // Get input values
    let totLength = parseFloat(document.getElementById("totalLength").value);
    let widthOfFoot = parseFloat(document.getElementById("widthOfFoot").value);
    let numOfWelds = 2; // Start with 2 welds
    let lengthOfWelds;

    // Determine weld length (constrained between 3 and 6 inches)
    lengthOfWelds = Math.min(Math.max(widthOfFoot + 1, 3), 6);

    // Calculate remaining length after initial welds
    let remainLength = totLength - (lengthOfWelds * numOfWelds);

    // Adjust number of welds dynamically based on spacing constraint
    while ((remainLength / (numOfWelds - 1)) > widthOfFoot * 3) {
        numOfWelds += 1;
        remainLength -= lengthOfWelds;
    }

    // Calculate final distance between welds
    let spaceTotInside = numOfWelds - 1;
    let distDeci = remainLength / spaceTotInside;
    let distBetweenWelds = distDeci.toFixed(4);

    // Display results
    document.getElementById("results").innerHTML = `
        <p><strong>Length of Welds:</strong> ${lengthOfWelds} inches</p>
        <p><strong>Number of Welds:</strong> ${numOfWelds}</p>
        <p><strong>Distance Between Welds:</strong> ${distBetweenWelds} inches</p>
    `;
}