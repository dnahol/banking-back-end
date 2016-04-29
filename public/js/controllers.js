'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, Transact) {
  console.log('mainCtrl');



  Transact.getAll()
  .then(res => {
    $scope.transacts = res.data;
    var amounts = res.data.map((t)=>{return t.amount});
    $scope.total = amounts.reduce(function(acc,curr) {return acc + curr;}, 0);
    $scope.credits = amounts.filter((a)=>{return a < 0}).reduce(function(acc,curr) {return acc + curr;}, 0);
    $scope.debits = amounts.filter((a)=>{return a > 0}).reduce(function(acc,curr) {return acc + curr;}, 0);
  })

  .catch(err => {
    console.error(err);
  });

  $scope.createTransact = () => {
    Transact.create($scope.newTransact)
    .then(res => {
      var transact = res.data;
      console.log('transact:', transact);
      $scope.transacts.push(transact);
      $scope.newTransact = null;
    })
    .catch(err => {
      console.error(err);
    });
  };

  $scope.deleteTransact = transact => {
    Transact.delete(transact)
    .then(() => {
      var index = $scope.transacts.indexOf(transact);
      $scope.transacts.splice(index, 1);
    })
    .catch(err => {
      console.error(err);
    });
  };

  $scope.updateTransact = replaceTransact => {
    console.log('replaceTransact: ', replaceTransact);
    Transact.update(transact)
    .then(() => {

    })
    .catch(err => {
      console.error(err);
    });
  };
  // console.log('$scope.transacts outside:', $scope.transacts)
  // $scope.total = $scope.transacts.map((t)=>{return t.amount})
  // console.log('$scope.total:',$scope.total);

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
