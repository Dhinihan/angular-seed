'use strict';

angular.module('myApp.game_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/game', {
    templateUrl: 'game_view/game.html',
    controller: 'GameCtrl',
    controllerAs: '$game'
  });
}])

.controller('GameCtrl', [function() {

  this.dados = [];
  this.dados[0] = {
    nome: 'Trabalho',
    total: 13.84,
    peso: 1
  };
  this.dados[1] = {
    nome: 'Estudo',
    total: 7.12,
    peso: 3
  };

}]);