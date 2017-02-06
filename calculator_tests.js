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
    addDigit("9");
    addDigit("0");
    dsin();
    assert.deepEqual(document.getElementById("screen").value, "1", "We expect the result to be 1.");
});
QUnit.test("Cos degrees dest", function(assert) {
    addDigit("60");
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


