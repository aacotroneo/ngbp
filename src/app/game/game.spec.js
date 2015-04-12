/**
 * Los test se ponen junto al js para que sea mas modular.
 * El grunt no incluye los archivos '.spec.js'.
 */
describe('game section', function() {

  //para probar un controlador generalmente se hace esto
  var $scope, $rootScope, $q,

    mockGameService = {
      startNewGame: function() {},
      isGameOver: function() {}
    };



  beforeEach(module('ui.router'));
  beforeEach(module('app.game'));
  beforeEach(inject(function(_$rootScope_, _$q_, $controller) {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $q = _$q_;
    $controller('GameController as c', {
      $scope: $scope,
      gameService: mockGameService
    });
  }));

  it('should greet the user', inject(function() {
    expect($scope.c.greeting).toBe('hello World!');
  }));

  it('should start with game over state', function() {
    expect($scope.c.gameOver).toBeTruthy();
  });
  describe('new game state', function() {
    beforeEach(function() {
      var deferred = $q.defer();
      spyOn(mockGameService, 'startNewGame').and.returnValue(deferred.promise);
      deferred.resolve([]);
    });

    it('should set game over to false', function() {
      spyOn(mockGameService, 'isGameOver').and.returnValue('whatever');
      $scope.c.newGame();
      $rootScope.$digest();


      expect(mockGameService.startNewGame).toHaveBeenCalled();
      expect($scope.c.gameOver).toBe('whatever');
    });

    // it('should create empty board when init', function() {
    //   $scope.c.newGame();
    //   var board = $scope.c.board;
    //   expect(board.length).toBe(_config.ROWS);
    //   expect(board[0].length).toBe(_config.COLS);
    //
    // });
  });



});
