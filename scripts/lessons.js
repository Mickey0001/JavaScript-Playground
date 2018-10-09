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

    /* eq operator */

    // Remember when you had multiple elements with same class in vanilla JS and you wanted to change only one element from that class:

    document.querySelector(".Class")[2].textContent = "Third class in array"; // Filters all elements with class "Class" and changes the third element

    // We can do the same in Jquery using eq operator:
	
    $( ".Class" ).eq( 2 ).text("Third class in array"); // this works the same as vanilla JS example above

    // You can apply the same logic for tags

    $( "li" ).eq( 3 ).css( "background-color", "red" ); // changes fourth li in array of list items 

    // Here is another example of eq operator, this itme with eq opeator being inside the same brackets as element
    // We can also add a variable inside brackets. For this example I'll use ES6 Template Literals

    const counter = 1;

    $(`.Class:eq(${counter})`).css( "background-color", "red" );


    /* trigger child without triggering it's parent */ 

      // What's the difference between recapturing and bubbling in JS? 
      // Don't answer that.

      // Imagine this <div class="outer"> <div class="inner"></div> </div>

      // let's say you add alert whenever clicks on outer or inner div

      // if you click on outer div and alert pops up, it's all good, but if you click on the inner div, it will not only alert you for clicking 
      // inner div, but also alert for clicking outer div, becuase inner div is in outer div

      // There is a time when we don't want that. We want to do different things depending on whether user clicked on inner or outer div.
        // To fix that we'll use *e.stopPropagation()* method for our inner div. 

        $(".outer").click(function() { // don't need event e here
          e.stopPropagation();
         alert("outer Div");
       });
       
       $(".inner").click(function(e) { // when clicked on will trigger only inner div
          e.stopPropagation();
         alert("inner Div");
       });


      // This will work for as many inner divs as you have. Just put e.stopPropagation() in all inner divs and you're good.
      // That essentially is recapturing and bubbling in vanilla JS. Should I trigger both parent and child or just child?


    /* hover */

    // Remember CSS hover? Well Jquery hover doesn't work the same way!

    $("element").hover(function () {
      $(this).css("color", "red");
    });

    // Code above will change color to red when you hover over element, but once you hover off (move mouse cursor away), color won't turn back to original (will stay red)

    // To achieve true CSS hover we use the following functions

    $("element").on('mouseenter',  function () {
      $(this).css("color", "red");
    });

    $("element").on('mouseleave',  function () {
      $(this).css("color", "blue");
    });

    // Yes it's more complicated than in CSS, but it gets the job done