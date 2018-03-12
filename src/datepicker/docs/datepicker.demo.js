'use strict';

const controller = function($scope) {
  'ngInject';

  this.$onInit = function() {
    $scope.selectedDate = new Date();
    $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
    // $scope.fromDate = new Date();
    // $scope.untilDate = new Date();
    $scope.getType = function(key) {
      return Object.prototype.toString.call($scope[key]);
    };

    $scope.clearDates = function() {
      $scope.selectedDate = null;
    };
  };
};

export default controller;