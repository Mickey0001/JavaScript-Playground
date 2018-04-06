$(function () {

var $orders = $('#orders');
var $name = $('#name');
var $drink = $('#drink');

var orderTemplate = "<li><strong>Name:</strong> {{name}}, <strong>Drink:</strong> {{drink}} <br> <button data-id='{{id}}' class='remove btn btn-danger'>Remove</button></li>";

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
  })
});