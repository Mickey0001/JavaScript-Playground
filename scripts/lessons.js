  //Lesson 1
  // $('#panel1').hide(1000).show(2000).hide(1000).show(2000);
  // $('#panel2').fadeOut(1000).slideUp(1000).delay(1000).slideDown(2000).slideUp(1000).slideDown(2000);
  // $('#panel3').fadeToggle(1000).fadeToggle(2000).css({color:'red', fontStyle: 'italic'});
  // $('#btn1').css({opacity:'0.5'});

  //Lesson 2
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

  //Lesson 3
  // var content = "My new content";

  // $('.panel-button').on('click',  function() {
  //     var panel = $(this).attr('data-panel');
  //     $('#'+panel).toggle();
  //     $('#'+panel+'.panel-body').html(content);
  // });
  
  // //Lesson 4
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

  //Lesson 5
  $(function() {

    $('.tab-panels .tabs li').on('click', function() {

      var $panel = $(this).closest('.tab-panels');

      $panel.find('.tabs li.active').removeClass('active');
      $(this).addClass('active');

      //Figure out which panel to show
      var panelToShow = $(this).attr('rel');

      //Hide current panel
      $panel.find('.panel.active').toggle(300, showNextPanel);

      //Show next panel
      function showNextPanel() {
        $(this).removeClass('active');

        $('#'+panelToShow).toggle(300, function() {
          $(this).addClass('active');
        });
      }
    });
  });

  //Lesson 6