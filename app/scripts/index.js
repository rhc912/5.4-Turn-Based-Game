//console.log("Hello World!");
var $ = require('jquery');
var _ = require('underscore');
var models = require('./models');
var detailTemplate = require('../templates/fighter-detail.hbs');
var listTemplate = require('../templates/fighter-list.hbs');

$(function(){

//Main Characters
  var meats = [
    new models.Hero({
      name: 'beef',
      image: 'http://wallpoper.com/images/00/44/25/81/piece-of-meat-cartoon_00442581.jpg'
    }),
    new models.Hero({
      name: 'turkey',
      image: 'http://i.istockimg.com/file_thumbview_approve/7594193/3/stock-illustration-7594193-cartoon-roast-turkey.jp'
    }),
    new models.Hero({
      name: 'chicken',
      image: 'http://www.clipartbest.com/cliparts/LcK/k4M/LcKk4M8ki.jpeg'
    })
  ];

  console.log(meats);
  var veggies = [
    new models.Enemy({
      name: 'broccoli',
      image: 'http://previews.123rf.com/images/yeletkeshet/yeletkeshet1211/yeletkeshet121100243/16563356-happy-cartoon-broccoli-Stock-Vector-vegetable.jpg'
    }),
    new models.Enemy({
      name: 'brussel sprouts',
      image: 'http://blog.nativefoods.com/.a/6a0112796f38d028a40154377029c8970c-pi '}),
    new models.Enemy({
      name: 'carrots',
      image:'http://preview.turbosquid.com/Preview/2014/05/19__04_29_47/main.png4c16aac7-fba7-4011-9a59-179fec27ffddOriginal.jpg'})
  ];

  /* Character vars */

  var selectedHero;
  var selectedEnemy;

  var context = {'meats': meats};
  $('.hero-select').html(listTemplate(context));

  $('.heros-selection').on('change', function(event){
    event.preventDefault();

    var heroCharacter = $(this);
    var characterIndex = heroCharacter.val();

    selectedHero = meats[characterIndex];
    selectedEnemy = selectEnemy();

    $('.js-fight')
      .html(detailTemplate(selectedHero))
      .append(detailTemplate(selectedEnemy));
  });

  function selectEnemy(){
    var randomEnemyIndex = Math.floor(Math.random() * 3);
    return veggies[randomEnemyIndex];
  }

});


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
