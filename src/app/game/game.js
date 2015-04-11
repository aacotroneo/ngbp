angular.module('app.game',[

])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'game', {
    url: '/game',
    views: {
      "main": { //nombre de la ui-view del html, donde se reemplaza el controlador y template
        controller: 'GameController as game', //le ponemos un alias para mayor claridad. Se accede con game. en la vista
        templateUrl: 'game/game.tpl.html'
      }
    },
    data:{ pageTitle: 'Game' } //datos adicionales  --state.data.pageTitle
  });
})

.controller('gameController', function () {

    var m = this;

    m.greeting = "hello World!";


})
