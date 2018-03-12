const controller = function($scope, $http) {
  'ngInject';

  this.$onInit = function() {
    $scope.selectedIcon = '';
    $scope.selectedIcons = ['Globe', 'Heart'];
    $scope.icons = [
      { value: 'Gear', label: '<i class="fas fa-cogs"></i> Gear' },
      { value: 'Globe', label: '<i class="fas fa-globe"></i> Globe' },
      { value: 'Heart', label: '<i class="fas fa-heart"></i> Heart' },
      { value: 'Camera', label: '<i class="fas fa-camera"></i> Camera' }
    ];

    $scope.selectedMonth = 0;
    $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  };
};

export default controller;
