$(function () {

var $orders = $('#orders');
var $name = $('#name');
var $drink = $('#drink');

function addOrder(order){
  $orders.append('<li class="list-group-item"><strong>Name: </strong>' + order.name + ' ' + '<strong>Drink: </strong>' + order.drink + '</li>');
}

  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/:user/:collection',
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
      url: 'http://rest.learncode.academy/api/orders/mirza',
      data: order,
      success: function(newOrder) {
        addOrder(newOrder);
      },
      error: function() {
        alert('error posting order');
      }
    });
  })
});