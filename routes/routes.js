const path = require('path');
//const data = require('../Data/data.json');
const controller = require('../controllers/controller');
const bodyParser = require('body-parser');
const express = require('express');
const DIR_DIST = path.join(__dirname, '../dist');
const HTML_STATIC = path.join(DIR_DIST, 'index.html');

module.exports = function(app) {
    //
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json())
    //app.use(express.static(DIR_DIST));
    //
    //Enable CORS
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://34.242.105.10:3000"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    //
    app.route('/').get(controller.getdefault);
      //
    app.route('/getweights').get(controller.getweights);
    //
    app.route('/addnewemployee').post(controller.addnewemployee);
    //
    app.route('/addnewweight').put(controller.addnewweight);
};
