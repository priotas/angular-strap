'use strict';

const controller = function($scope, $alert) {
  'ngInject';
  this.$onInit = function() {
    $scope.dropdown = [
      { text: '<i class="fas fa-download"></i>&nbsp;Another action', href: '#anotherAction', active: true },
      { text: '<i class="fas fa-globe"></i>&nbsp;Display an alert', click: '$alert("Holy guacamole!")' },
      { text: '<i class="fas fa-external-link-alt"></i>&nbsp;External link', href: '/auth/facebook', target: '_self' },
      { divider: true },
      { text: 'Separated link', href: '#separatedLink' }
    ];

    $scope.$alert = function(title) {
      $alert({
        title: title,
        content: "Best check yo self, you're not looking too good.",
        placement: 'top',
        type: 'info',
        keyboard: true,
        show: true
      });
    };
  };
};

export default controller;