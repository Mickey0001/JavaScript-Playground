$(document).ready(function() {

  //Lesson One
  $('#panel1').hide(1000).show(2000).hide(1000).show(2000);
  $('#panel2').fadeOut(1000).slideUp(1000).delay(1000).slideDown(2000).slideUp(1000).slideDown(2000);
  $('#panel3').fadeToggle(1000).fadeToggle(2000).css({color:'red', fontStyle: 'italic'});
  $('#btn1').css({opacity:'0.5'});

  //Lesson Two
  // $('#btn2').html('<strong>Bold</strong>');
  // $('#btn1').on('click', function() {
  //   $('#panel1').fadeToggle();
  // });
  // $('#panel1').on('mouseover', function() {
  //   $('#panel1').fadeToggle();
  // });
  // $('#btn2').on('click', function() {
  //   $('#panel2').fadeToggle();
  // });
  // $('#btn3').on('click', function() {
  //   $('#panel3').fadeToggle();
  // });
  // $('#btn4').on('click', function() {
  //   $('#panel4').fadeToggle();
  // });
  // $('#panel4').on('click', function() {
  //   $('#panel4 .panel-body').html('New content');
  // });

  //Lesson three
  var content = "My new content";

  $('.panel-button').on('click',  function() {
      var panel = $(this).attr('data-panel');
      $('#'+panel).toggle();
      $('#'+panel+'.panel-body').html(content);
  });
  
  //Lesson Four
  // $('li').on('click', function() {
  //   $(this).removeClass('special');
  //   $(this).siblings().addClass('special');
  // });
  // $('.list').on('click', function() {
  //   $(this).find('li').find().filter('.special').addClass('special');
  // });
  // $(function() {
  //   $('li').on('click', function() {
  //     $(this).hide();
  //     if ( $(this)/is('.special') ){
  //       alert('special');
  //     }
  //   });
  // });

  //Lesson Five



});