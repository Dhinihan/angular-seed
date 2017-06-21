'use strict';

describe('myApp.time.decimalTime_filter module', function() {

  beforeEach(module('myApp.time.decimalTime_filter'));

  describe('filter decimal hour', function() {

    it('should filter decimal value', inject(function(decimalTimeFilter) {
      expect(decimalTimeFilter(2.5)).toEqual('2:30:00');
    }));
    it('should accept null value', inject(function(decimalTimeFilter) {
      expect(decimalTimeFilter(null)).toBeNull();
    }));
    it('should accept string', inject(function(decimalTimeFilter) {
      expect(decimalTimeFilter("2.345678")).toEqual('2:20:44');
    }));
    it('should accept big number', inject(function(decimalTimeFilter) {
      expect(decimalTimeFilter("200.345678")).toEqual('200:20:44');
    }));

  });
});
