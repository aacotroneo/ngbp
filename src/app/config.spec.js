describe('configuration service', function() {
  beforeEach(module('app.config'));

  it('should return config array', inject(function(configuration) {
    expect(configuration).toBeTruthy();
    expect(configuration.ROWS).toBeDefined();
    expect(configuration.COLS).toBeDefined();
  }));
});
