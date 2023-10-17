let displayValue = '';

// Function to append values to the display
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(displayValue); // Using eval to calculate the result
        document.getElementById('display').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
