'use strict';

var db = require('../config/db');
var moment = require('moment');


db.query(`CREATE TABLE IF NOT EXISTS transacts (
          id INTEGER PRIMARY KEY AUTO_INCREMENT,
          date BIGINT,
          description TEXT,
          memo TEXT,
          amount NUMERIC
        )`);


exports.create = function(body, cb) {
  if(!body.date || !body.description || !body.memo || !body.amount) return cb('You need a transaction date, description, memo, and amount.');

  // var date = moment().format('YYYY-MM-DD HH:mm:ss');
  // var date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  // date = date.toString();
  //var date = moment().valueOf();

  db.query('INSERT INTO transacts (date, description, memo, amount) VALUES (?)',
          [[body.date, body.description, body.memo, Number(body.amount)]],

    function(err, res) {
      if(err) return cb(err);
      db.query('SELECT * FROM transacts WHERE id=?', res.insertId, cb);
    });
};

exports.get = function(cb) {
  db.query('SELECT * FROM transacts', cb);
};

exports.getById = function(itemId, cb) {
  if(!itemId) return cb('You need a transaction id.');
  db.query('SELECT * FROM transacts WHERE id=?', itemId, cb);
};

exports.update = function(id, body, cb) {
  if(!id) return cb('You need a transaction id');
  db.query('UPDATE transacts SET date=?, description=?, memo=?, amount=?',
          [body.date, body.description, body.memo, Number(body.amount)],

    function(err, res) {
      if(err) return cb(err);
      db.query('SELECT * FROM transacts WHERE id=?', res.insertId, cb);
    });
};

exports.delete = function(id, cb) {
  if(!id) return cb('You need a transaction id.');
  db.query('DELETE FROM transacts WHERE id=?', id, cb);
}
