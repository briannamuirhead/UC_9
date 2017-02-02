// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    currentInput = "0";
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    currentInput = "0";
});

// Test changing the sign of a number
QUnit.test( "Change sign test", function( assert ) {
    addDigit('3')
    changeSign();
    assert.equal(document.getElementById("screen").value, "-3", "Passed - Expected -3");
    currentInput = "0";
    addDigit('-4');
    changeSign();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
    currentInput = "0";
});

// Test converting a number into a percentage
QUnit.test( "Percentage test", function( assert ) {
    addDigit('37');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.37", "Passed - Expected 0.37");
    currentInput = "0";
});

// Test the factorial of a number
QUnit.test("Factorial test", function (assert) {
    var result = factorial('5');
    assert.deepEqual(result, 120, "We expect result to be 120");
    var result2 = factorial('6');
    assert.deepEqual(result2, 720, "We expect result to be 720");
    currentInput = "0";
});

// Test the square of a number
QUnit.test( "Square", function( assert ) {
    addDigit('6');
    square();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
    currentInput = "0";
    addDigit('-6');
    square();
     assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
    currentInput = "0";
});

// Test the square root of a number
QUnit.test( "Square root", function( assert ) {
    addDigit('64');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8");
    currentInput = "0";
});

// Test the clear current function
QUnit.test( "Clear current", function( assert ) {
    addDigit('50');
    storeOperator('+');
    addDigit('4');
    clearCurrent();
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "52", "Passed - Expected ");
    currentInput = "0";
});

