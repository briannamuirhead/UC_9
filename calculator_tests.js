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
    var angle1_sinr = Math.pi / 6;
    var result = rsin(angle1_sinr);
    assert.deepEqual(result, .5, "We expect the result to be .5");
    var angle2_sinr = Math.pi;
    var result = rsin(angle2_sinr);
    assert.deepEqual(result, 0, "We expect the result to be 0.");
    var angle3_sinr = 0;
    var result = rsin(angle3_sinr);
    assert.deepEqual(result, 0, "We expect the result to be 0.");
});
QUnit.test("Cos radians test", function (assert) {
    var angle1_cosr = Math.pi / 3;
    var result = rcos(angle1_cosr);
    assert.deepEqual(result, .5, "We expect the result to be .5");
    var angle2_cosr = Math.pi;
    var result = rcos(angle2_cosr);
    assert.deepEqual(result, -1, "We expect the result to be -1.");
    var angle3_cosr = 0;
    var result = rcos(angle3_cosr);
    assert.deepEqual(result, 1, "We expect the result to be 1.");
});
QUnit.test("Tan radians test", function (assert) {
    var angle1_tanr = Math.pi / 4;
    var result = rtan(angle1_tanr);
    assert.deepEqual(result, 1, "We expect the result to be 1");
    var angle2_tanr = Math.pi;
    var result = rtan(angle2_tanr);
    assert.deepEqual(result, 0, "We expect the result to be 0.");
});
