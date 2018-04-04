'use strict';

$(function() {

  //config
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;

  //caching the DOM
  var $slider =  $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  //setInterval
  setInterval(function() {
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed);
  }, pause);

  //animate margin-left
  //if it's last slide, go to position 1

  //listen for mouseenter and pause
  //resume on mouseleave
});
