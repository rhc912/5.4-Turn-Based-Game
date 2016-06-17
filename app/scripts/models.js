var $ = require('jquery');

function Fighters(config){
  config = config || {};
  $.extend(this, config);
  this.health = config.health || 60;
  this.name = config.name;
  //this.battleCry = config.battleCry;
}

Fighters.prototype.attack = function(victim) {
  var damage = _.random(20);
  victim.health = victim.health - damage;
};


function Hero(config){
  Fighter.call(this, config);
}

Hero.prototype = new Fighters();

function Enemy(config){
  Fighter.call(this, config);
}

Enemy.prototype = new Fighters();


module.exports = {
  'Hero': Hero,
  'Enemy': Enemy
};
