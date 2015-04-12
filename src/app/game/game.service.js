// dataservice factory
angular
  .module('app.game.datasource', [])

.factory('gameService', function dataservice($q, configuration) {

  var currentBoard;
  var gameOver = true;

  return {
    startNewGame: startNewGame,
    isGameOver: isGameOver,
    getBoard: getBoard
  };

  function startNewGame() {
    var deferred = $q.defer();

    currentBoard = getEmptyBoard();
    gameOver = false;

    deferred.resolve(currentBoard);
    return deferred.promise;
  }

  function isGameOver() {
    return gameOver;
  }

  function getBoard(){
    return currentBoard;
  }


  function getEmptyBoard() {
    var matrix = [];
    for (var i = 0; i < configuration.ROWS; i++) {
      matrix.push(generateRow(configuration.COLS));
    }
    return matrix;

    function generateRow(len) {
      var row = [];
      for (var i = 0; i < len; i++) {
        row.push('0');
      }
      return row;
    }
  }




});
