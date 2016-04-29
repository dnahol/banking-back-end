'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Transact) {
  console.log('mainCtrl');

Transact.getAll()
.then(res => {
  $scope.transacts = res.data;
  console.log( '$scope.transacts', $scope.transacts );
})





});



// $scope.transacts = [
//   { id: '1',
//     date: '1/1/16',
//     desc: "BenJerry's",
//     memo: 'treated myself after exam',
//     debit: '',
//     credit: '10'
//   },
//   { id: '2',
//     date: '2/4/16',
//     desc: "Pay Day",
//     memo: '',
//     debit: '2000',
//     credit: ''
//   },
//   { id: '3',
//     date: '4/5/16',
//     desc: "Spotify",
//     memo: 'switching to Tidal soon',
//     debit: '',
//     credit: '9.99'
//   }
// ];
