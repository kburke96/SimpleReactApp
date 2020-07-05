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
    app.route('/').get(controller.getdefault);
      //
    app.route('/getweights').get(controller.getweights);
    //
    app.route('/addnewemployee').post(controller.addnewemployee);
    //
    app.route('/addnewweight').put(controller.addnewweight);
};
