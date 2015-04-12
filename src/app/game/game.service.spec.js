describe('game service', function() {

  var configuration, gameService;
  beforeEach(module('app.config'));
  beforeEach(module('app.game.datasource'));
  beforeEach(inject(function(_gameService_, _configuration_) {
    gameService = _gameService_;
    configuration = _configuration_;

    // inject(function($injector) {
    //   gameService = $injector.get('gameService');
    // });
  }));
  describe('start new game', function() {
    it('should return empty board', inject(function() {
      gameService.startNewGame();
      var board = gameService.getBoard();

      expect(board.length).toBe(configuration.ROWS);
      expect(board[0].length).toBe(configuration.COLS);
    }));

    it('should start with game over state', function() {
      expect(gameService.isGameOver()).toBeTruthy();
    });

    it('should set game over to false', function() {
      gameService.startNewGame();
      expect(gameService.isGameOver()).toBe(false);
    });

  });
});
