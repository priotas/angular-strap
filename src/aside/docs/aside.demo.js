'use strict';

const controller = function($scope) {
  'ngInject';

  this.$onInit = function() {
    $scope.aside = { title: 'Title', content: 'Hello Aside<br />This is a multiline message!' };
  };
};

export default controller;
