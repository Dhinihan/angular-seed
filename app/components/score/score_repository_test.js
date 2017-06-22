'use strict';

describe('myApp.score.repository module', function() {

  var $q;
  var dataMock = {
    getList: jasmine.createSpy()
  };

  beforeEach(function() {
    module('myApp.score.repository');

    module(function($provide) {
      $provide.factory('data', function() {
        return dataMock;
      });
    });

    inject(function(_$q_) {
      $q = _$q_;
    });

  });

  describe('player score repository', function() {

    it('should load persisted scores', function(done) {
      inject(function(scoreRepository, $rootScope) {
        setMockData([{
          nome: 'Trabalho',
        },{
          nome: 'Estudo',
        }]);
        scoreRepository.load().then(function(data) {
          expect(data[0].nome).toEqual('Trabalho');
          expect(data[1].nome).toEqual('Estudo');
          done();
        });
        $rootScope.$digest();
      });
    });

    it('should figure the total points as a integer', function(done) {
      inject(function(scoreRepository, $rootScope) {
        setMockData([{
          total: 21.2,
          weight: 2,
        }]);
        scoreRepository.load().then(function(data) {
          expect(data[0].points).toEqual(42);
          done();
        });
        $rootScope.$digest();
      });
    });

  });

  function setMockData(data) {
    dataMock.getList.and.callFake(function(entity) {
      if (entity !== 'score') {
        throw "should search form score";
      }
      var deferred = $q.defer();
      deferred.resolve(data);
      return deferred.promise;
    });
  }
});
