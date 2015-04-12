describe('game board directive', function() {

  var $compile,
    $rootScope;

  // Load the myApp module, which contains the directive
  beforeEach(module('app.game.board'));
  beforeEach(module('game/gameboard.tpl.html'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', function() {
    // Compile a piece of HTML containing the directive

    //2 rows, 3 cols
    $rootScope.board = [
      [0, 0, 0],
      [0, 0, 0]
    ];
    var element = $compile("<lb-gameboard board='board'></lb-gameboard>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toBeTruthy();

    var table = element.find('table');
    expect(table.find('td').length).toBe(6);
    expect(table.find('tr').length).toBe(2 + 1); //1 for header
  });
});
