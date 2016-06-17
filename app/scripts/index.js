//console.log("Hello World!");


var $ = require('jquery');
var _ = require('underscore');

var models = require('./models');
var detailTemplate = require('../templates/fighter-detail.hbs');
var listTemplate = require('../templates/fighter-list.hbs');


//Main Characters
var meats =
[new models.Hero('beef'),
 new models.Hero('turkey'),
 new models.Hero('chicken')
 ];
console.log(meats);
 var veggies = [
   new models.Enemy('tofu'),
   new models.Enemy('soy'),
   new models.Enemy('carrots')
 ];
