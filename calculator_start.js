/** TODO:
~* 1. Add these new functions: percentage, inverse, factorial, square and square root
* 2. Bootstrap it to make it pretty!
* 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
~* 4. Fix divide by 0 errors!
~* 5. Add the ability to clear the current input, but not memory.
* 6. Challenge: Add trig functions (in radian AND degree mode)
* 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
* 8. Super Challenge: Add ( and ) buttons that work!
* 9. Super Duper Challenge: Add exponents (negatives too!)
*/

var currentInput = "0";
var memory = "0";
var operator = 0;

/**
* This function displays the user's current input in the calculator's text box.
*/
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

/**
 * This function adds a digit to the current input. Calls displayCurrentInput.
 * @param {number} dig The digit clicked on by user
 */
function addDigit(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    } else if (currentInput.length > 29) {
        currentInput = currentInput;
    } else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal to the current input. Calls displayCurrentInput to display user's full input including decimal.
 */
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    } else if (currentInput.length > 29) {
        currentInput = currentInput;
    } else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears the calculator's memory and everything inside the textbox. Calls displayCurrentInput to display nothing.
 */
function allClear() {
    currentInput = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

/**
 * Stores the last operator pushed for multiply, divide, add, subtract, power, or exponent. Calls displayCurrentInput to display operator.
 * @param {string} op The user's choice of operator
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;                       // codes for *
    } if (op.indexOf("/") > -1) {
        operator = 2;                       // slash (divide)
    } if (op.indexOf("+") > -1) {
        operator = 3;                       // sum
    } if (op.indexOf("-") > -1) {
        operator = 4;                       // difference
    } if (op.indexOf("p") > -1) {
        operator = 5;                       // power
    } if (op.indexOf("e") > -1) {
        operator = 6;                       // exponent
    }

    memory = currentInput;                  //store value
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    } if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
    } if (currentInput == memory / 0) {
        currentInput = "ERROR! You can't divide by zero.";
    } if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    } if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    } if (operator == 5) {
        currentInput = Math.pow(memory,currentInput);
    } if (operator == 6) {
        var num = currentInput;
        currentInput = memory * Math.pow(10,currentInput);
        if (num > 15 ) {
            currentInput = memory + "e" + num;
        }
    }

    operator = 0;                // clear operator
    memory = "0";              // clear memory
    displayCurrentInput();
}

/**
 * Changes the sign of the current input when change sign button is clicked
 */
function changeSign() {
    currentInput = currentInput * -1;
    displayCurrentInput();
}

/**
 * Clears the current input back to 0
 */
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Makes the current input a percentage.
 */
function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}

/**
 * Creates a factorial
 * @param   {number} number The user's current input
 * @returns {number} The result of the factorial
 */
function factorial(number) {
    var result = 1;
    for(i = number; i > 0; i--){
        result = result * i;
        console.log(result);
    }
    return result;
}

/**
 * Calculates the square of the current input. Calls displayCurrentInput.
 */
function square() {
    currentInput = currentInput * currentInput;
    displayCurrentInput();
}

/**
 * Calculates the square root of the current input.
 */
function squareRoot() {
    currentInput = Math.sqrt(currentInput);
    displayCurrentInput();
}

/**
 * Calculates the inverse of the current input.
 */
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

/**
 * Makes pi the current input.
 */
function enterPi() {
    currentInput = Math.PI;
    displayCurrentInput();
}

/**
 * Calculates the sine in radians.
 */
function rsin() {
    currentInput = Math.sin(currentInput);
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    }
    displayCurrentInput();
}

/**
 * Calculates the cosine in radians.
 */
function rcos() {
    currentInput = Math.cos(currentInput);
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    }
    displayCurrentInput();
}

/**
 * Calculates the tangent in radians.
 */
function rtan() {
    currentInput = Math.tan(currentInput);
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    } if (currentInput > .999999 && currentInput < 1.000001) {
        currentInput = 1;
    }
    displayCurrentInput();
}

/**
 * Calculates the sine in degrees.
 */
function dsin() {
    currentInput = Math.sin(currentInput * (Math.PI / 180));
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    }
    displayCurrentInput();
}

/**
 * Calculates the cosine in degrees.
 */
function dcos() {
    currentInput = Math.cos(currentInput * (Math.PI / 180));
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    }
    displayCurrentInput();
}

/**
 * Calculates the tangent in degrees.
 */
function dtan() {
    currentInput = Math.tan(currentInput * (Math.PI / 180));
    if (currentInput < .00001 && currentInput > -.00001) {
        currentInput = 0;
    }
    displayCurrentInput();
}
