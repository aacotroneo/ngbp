angular.module('app.game', [
  'app.config',
  'app.game.board',
  'app.game.datasource'
])

.config(function config($stateProvider) {
  $stateProvider.state('game', {
    url: '/game',
    views: {
      "main": { //nombre de la ui-view del html, donde se reemplaza el controlador y template
        controller: 'GameController as game', //le ponemos un alias para mayor claridad. Se accede con game. en la vista
        templateUrl: 'game/game.tpl.html'
      }
    },
    data: {
      pageTitle: 'Game'
    } //datos adicionales  --state.data.pageTitle
  });
})

.controller('GameController', function(gameService) {

  var m = this;

  m.gameOver = true;
  m.board = [];

  m.greeting = "hello World!";

  m.newGame = newGame;
  m.endGame = endGame;


  function newGame() {
    gameService.startNewGame().then(function (board) {
      m.board = board;
      m.gameOver = gameService.isGameOver();
    });
  }

  function endGame() {
    m.gameOver = true;
  }

});
