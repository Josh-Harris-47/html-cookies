var lemon = $('.lemon');
var lemoncount = $('.lemoncount');
var sugar = $('.sugar');
var sugarcount = $('.sugarcount');
var chocolate = $('.chocolate');
var chocolatecount = $('.chocolatecount');
var lemoni = 0;
var sugari = 0;
var chocolatei = 0;

var reset = function(){
  lemoni = 0;
  lemoncount.html(0);
  document.cookie = "lemon=0";
  sugari = 0;
  sugarcount.html(0);
  document.cookie = "sugar=0";
  chocolatei = 0;
  chocolatecount.html(0);
  document.cookie = "chocolate=0";
}

lemon.click(function(){
  lemoni++
  lemoncount.html(lemoni);
  document.cookie = "lemon="+lemoni;
});

sugar.click(function(){
  sugari++
  sugarcount.html(sugari);
  document.cookie = "sugar="+sugari;
});

chocolate.click(function(){
  chocolatei++
  chocolatecount.html(chocolatei);
  document.cookie = "chocolate="+chocolatei;
});