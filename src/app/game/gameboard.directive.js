angular.module('app.game.board', [])

.directive('lbGameboard', function() {

  return {
    restrict: 'E',
    scope: {
      board: '='
    },
    templateUrl: 'game/gameboard.tpl.html',
    link: function(scope, element) {
      scope.name = 'Jeff';
    }
  };

});
