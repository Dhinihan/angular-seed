"use strict";
angular.module('myApp.score.repository', []).factory('scoreRepository', [
  'data', '$q',
  function(data, $q) {

    function load() {
      var deferred = $q.defer();
      data.getList('score').then(function(data){
        angular.forEach(data, function(score){
          score.points = Math.floor(score.total * score.weight);
          deferred.resolve(data);
        });
      });
      return deferred.promise;
    }

    return {
      load: load
    };
  }
]);
