'use strict';

var app = angular.module('myApp');

app.service('Transact', function($http) {
  //manage all transact api calls
  this.getAll = () => {
    return $http.get('/api/transacts');
  };
  this.create = transact => {
    return $http.post('/api/transacts', transact);
  };
  this.delete = transact => {
    return $http.delete(`/api/transacts/${transact.id}`);
  };
  this.update = transact => {
    return $http.put(`/api/transacts/${transact.id}`, transact)
  }


})
