'use strict';

const controller = function($scope) {
  'ngInject';

  this.$onInit = function() {
    $scope.button = {
      toggle: false,
      checkbox: { left: false, middle: true, right: false },
      radio: 'left'
    };
  };
};

export default controller;
