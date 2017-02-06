// Test for inputing digits
QUnit.test( "Add digits test", function(assert) {
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
<<<<<<< HEAD
// Testing trig function sin in radians
QUnit.test("Sin radians test", function (assert) {
    enterPi();
    rsin();
    assert.deepEqual(document.getElementById("screen").value, "0", "We expect the result to be 0.");
    enterPi();
    storeOperator("/");
    addDigit("6");
    calculate();
    rsin();
    assert.deepEqual(document.getElementById("screen").value, "0.5", "We expect the result to be 0.5");
    enterPi();
    storeOperator("/");
    addDigit("2");
    calculate();
    rsin();
    assert.deepEqual(document.getElementById("screen").value, "1", "We expect the result to be 1.");

});
QUnit.test("Cos radians test", function (assert) {
    enterPi();
    storeOperator("/");
    addDigit("3");
    calculate();
    rcos();
    assert.deepEqual(document.getElementById("screen").value, "0.5", "We expect the result to be 0.5.");
    enterPi();
    rcos();
    assert.deepEqual(document.getElementById("screen").value, "-1", "We expect the result to be -1.");
});
QUnit.test("Tan radians test", function (assert) {
    enterPi();
    storeOperator("/");
    addDigit("4");
    calculate();
    rtan();
    assert.deepEqual(document.getElementById("screen").value, "1", "We expect the result to be 1.");
    enterPi();
    rtan();
    assert.deepEqual(document.getElementById("screen").value, "0", "We expect the result to be 0.");
});
QUnit.test("Sin degrees test", function (assert) {
    addDigit("3");
    addDigit("0");
    dsin();
    assert.deepEqual(document.getElementById("screen").value, "0.5", "We expect the result to be 0.5");
});
QUnit.test("Cos degrees dest", function(assert) {
    addDigit("6");
    addDigit("0");
    dcos();
    assert.deepEqual(document.getElementById("screen").value, "0.5", "We expect the result to be 0.5");
    addDigit("0");
    dcos();
    assert.deepEqual(document.getElementById("screen").value, "1", "We expect the result to be 1.")
});
QUnit.test("Tan degrees dest", function(assert) {
    addDigit("4");
    addDigit("5");
    dtan();
    assert.deepEqual(document.getElementById("screen").value, "1", "We expect the result to be 1.")
});


=======

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
    assert.equal(document.getElementById("screen").value, "52", "Passed - Expected 52");
    currentInput = "0";
});

// Test the all clear function
QUnit.test( "All clear", function( assert ) {
    addDigit('50');
    storeOperator('+');
    addDigit('4');
    allClear();
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
    currentInput = "0";
});

// Test finding the inverse of a number
QUnit.test( "Inverse test", function( assert ) {
    addDigit('5')
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    currentInput = "0";
    addDigit('0.5');
    inverse();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
    currentInput = "0";
});

// Test the store operator function
QUnit.test( "Store Operator Test", function( assert ) {
    addDigit('6');
    storeOperator('+');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "8", "Passed - Expected 8");
    currentInput = "0";
    addDigit('6');
    storeOperator('-');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
    currentInput = "0";
    addDigit('6');
    storeOperator('*');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    currentInput = "0";
    addDigit('6');
    storeOperator('/');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "3", "Passed - Expected 3");
    currentInput = "0";
    addDigit('6');
    storeOperator('p');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "36", "Passed - Expected 36");
    currentInput = "0";
    addDigit('6');
    storeOperator('e');
    addDigit('2')
    calculate();
    assert.equal(document.getElementById("screen").value, "600", "Passed - Expected 600");
    currentInput = "0";
});
>>>>>>> origin/master
