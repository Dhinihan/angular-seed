"use strict";
angular.module('myApp.score', []).factory('Score', [
  function() {

    function load() {
    }

    return {
      copy: function(name, total, weight) {
        return angular.extend({
          name: name,
          total: total,
          weight: weight,
        }, this);
      }
    };
  }
]);
