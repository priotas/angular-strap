const controller = function($scope, $location) {
  'ngInject';
  this.$onInit = function() {
    $scope.$location = $location;
  };
};

export default controller;