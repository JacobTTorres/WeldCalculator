function calculateWelds() {
    // Get input values
    let totLength = parseFloat(document.getElementById("totalLength").value);
    let widthOfFoot = parseFloat(document.getElementById("widthOfFoot").value);
    let numOfWelds = 2; // Initial number of welds
    let lengthOfWelds;

    // Determine the length of welds
    if (widthOfFoot <= 1.5) {
        lengthOfWelds = 3;
    } else if (widthOfFoot >= 5) {
        lengthOfWelds = 6;
    } else {
        lengthOfWelds = widthOfFoot + 1;
    }

    // Calculate remaining length
    let remainLength = totLength - (lengthOfWelds * numOfWelds);

    // Adjust number of welds based on remaining length
    while (remainLength >= widthOfFoot * 3) {
        numOfWelds += 1;
        remainLength -= lengthOfWelds;
    }

    // Calculate distance between welds
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