$(function () {

var $orders = $('#orders');

  $.ajax({
    type: 'GET',
    url: 'http://rest.learncode.academy/api/Mirza/5ab288d22bfd57010088a9b8',
    success: function(orders) {
      $.each(orders, function(i, order) {
        $orders.append('<li>Name:' + order.name + ', Drink' + order.drink + '</li>');
      });
    }
  });
});