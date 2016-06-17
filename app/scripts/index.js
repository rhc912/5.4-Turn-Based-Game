//console.log("Hello World!");
var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');

/*
Provide instructions for playing the game?

Player chooses a warrior character, to play as, from pull down menu by clicking on warrior name.

Clicking on Warrior causes that warrior to display.
Clicking on Warrior causes warrior health to be displayed.
Clicking on Warrior causes an enemy image to be randomly selected.

clicking on Warrior causes Enemy health to be displayed.

Player begins play by clicking ‘combat’ button.
Clicking combat button causes random number generator to generate a number.
Random number is subtracted from Enemy’s health index.
Decremented Enemy health index is displayed(?)

The random number generator is called again to generate a number.
Random number is subtracted from Warrior health.
Decremented Warrior health is displayed.

Player starts another round of play by clicking button again.

Play ends when either character’s health <= 0.

*/
