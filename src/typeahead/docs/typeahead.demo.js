'use strict';

const controller = function($scope, $http) {
  'ngInject';

  $scope.selectedState = '';
  $scope.states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];

  $scope.selectedIcon = '';
  $scope.icons = [
    { value: 'Gear', label: '<i class="fas fa-cogs"></i> Gear' },
    { value: 'Globe', label: '<i class="fas fa-globe"></i> Globe' },
    { value: 'Heart', label: '<i class="fas fa-heart"></i> Heart' },
    { value: 'Camera', label: '<i class="fas fa-camera"></i> Camera' }
  ];

  $scope.selectedAddress = '';
  $scope.getAddress = function(viewValue) {
    var params = { address: viewValue, sensor: false };
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', { params: params }).then(function(res) {
      return res.data.results;
    });
  };
};

export default controller;
