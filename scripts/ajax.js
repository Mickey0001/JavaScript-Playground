$(function () {

var $orders = $('#orders');
var $name = $('#name');
var $drink = $('#drink');

var orderTemplate = $('#order-template').html();

function addOrder(order){
  $orders.append(Mustache.render(orderTemplate, order));
}

  $.ajax({
    type: 'GET',
    url: 'https://cors-anywhere.herokuapp.com/http://rest.learncode.academy/api/mirza/20180406153205',
    success: function(orders) {
      $.each(orders, function(i, order) {
       addOrder(order);
      });
    },
    error: function() {
      alert('error loading order');
    }
  });
  $('#add-order').on('click', function() {
    var order = {
      name: $name.val(),
      drink: $drink.val(),
    };
    $.ajax({
      type: 'POST',
      url: 'https://cors-anywhere.herokuapp.com/http://rest.learncode.academy/api/orders/mirza/',
      data: order,
      success: function(newOrder) {
        addOrder(newOrder);
      },
      error: function() {
        alert('error posting order');
      }
    });
    $orders.delegate('.remove', 'click', function() {

      var $li = $(this).closest('li');
      var self = this;

      $.ajax({
        type: 'DELETE',
        url: 'http://rest.learncode.academy/api/orders/mirza/' + $(this).attr('data-id'),
        success: function() {
          $(self);
          $li.fadeOut(300, function() {
            $(this).remove();
          });
        }
      });
    });
    $orders.delegate('.editOrder', 'click', function() {
      var $li = $(this).closest('li');
      $li.find('input.name').val( $li.find('span.name').html() );
      $li.find('input.drink').val( $li.find('span.drink').html() );
      $li.addClass('edit');
    });

    $orders.delegate('.cancelEdit', 'click', function() {
       $(this).closest('li').removeClass('edit');
    });

    $orders.delegate('.saveEdit', 'clic', function() {
      var $li = $(this).closest('li');
      var order = {
        name: $li.find('input.name').val(),
        name: $li.find('input.drink').val()
      };
      $.ajax({
        type: 'PUT',
        url: 'http://rest.learncode.academy/api/orders/mirza/' + $li.attr('data-id'),
        data: order,
        success: function(newOrder) {
          $li.find('span.name').html(order.name);
          $li.find('span.drink').html(order.drink);
          $li.removeClass('edit');
        },
        error: function() {
          alert('error updating order');
        }
      });
    });
  });
});
