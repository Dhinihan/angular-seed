"use strict";
angular.module('myApp.time.decimalTime_filter', [])

.filter('decimalTime', [function() {
  return function(hours) {

    if (hours === null) return null;

    var n = new Date(0, 0);
    n.setSeconds(+hours * 60 * 60);
    return Math.floor(hours) + n.toTimeString().slice(2, 8);
  };
}]);
