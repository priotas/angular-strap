'use strict';

const controller = function($scope, $popover) {
  'ngInject';

  this.$onInit = function() {
    $scope.popover = { title: 'Title', content: 'Hello Popover<br />This is a multiline message!' };

    var asAServiceOptions = {
      title: $scope.popover.title,
      content: $scope.popover.content,
      trigger: 'manual'
    };

    var myPopover = $popover(angular.element(document.querySelector('#popover-as-service')), asAServiceOptions);
    $scope.togglePopover = function() {
      myPopover.$promise.then(myPopover.toggle);
    };
  };
};

export default controller;
