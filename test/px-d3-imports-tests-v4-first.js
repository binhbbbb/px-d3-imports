document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {
  suite('Check px.d3 exists', function() {
    test('Px.d3 exists', function() {
      assert.isDefined(Px.d3);
    });

    test('Px.d3 is v5', function() {
      assert.equal(Px.d3.version[0], '5');
    });

    test('d3 exists', function() {
      assert.isDefined(d3);
    });

    test('d3 is v3', function() {
      assert.equal(d3.version[0], '3');
    });
  });
}
