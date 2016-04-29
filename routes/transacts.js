'use strict';

var express = require('express');
var router = express.Router();

var Transact = require('../model/transact');


router.route('/')
  .get((req, res) => {
    Transact.get((err, transacts) => {
      console.log('Transact.get called');
      if(err) res.status(400).send(err);
      res.send(transacts);
    });
  })
  .post((req, res) => {
    Transact.create(req.body, (err, newTransact) => {
      if(err) res.status(400).send(err);
      res.send(newTransact);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Transact.getById(req.params.id, (err, transact) => {
      if(err) res.status(400).send(err);
      res.send(transact);
    });
  })
  .put((req, res) => {
    Transact.update(req.params.id, req.body, (err, newTransact) => {
      if(err) res.status(400).send(err);
      res.send(newTransact)
    });
  })
  .delete((req, res) => {
    Transact.delete(req.params.id, (err, transact) => {
      if(err) res.status(400).send(err);
      res.send('Transaction deleted.')
    });
  });

  module.exports = router;
