'use strict';

$(function() {

  //config
  let width = 720;
  let animationSpeed = 1000;
  let pause = 3000;
  let curentSlide = 1;

  //caching the DOM
  let $slider =  $('#slider');
  let $slideContainer = $slider.find('.slides');
  let $slides = $slideContainer.find('.slide');

  let interval;
  
  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
        curentSlide++;
        if(curentSlide === $slides.length) {
          curentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function pauseSlider() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();
});
