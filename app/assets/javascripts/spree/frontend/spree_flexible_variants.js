(function() {
  $(function() {
    var number_of_units, quantity, quantity_spinner, radios, selectedRadio, unit_amount;

    unit_amount = 0;
    quantity = 0;

    Spree.updateTotalUnits = function(variant) {
      return unit_amount = variant.data('unitAmount');
    };

    Spree.updateQuantity = function(q_spinner) {
      return quantity = q_spinner.valueAsNumber;
    };

    Spree.checkStock = function () {
      return quantity * unit_amount;
    };

    radios = $('#product-variants input[type="radio"]');
    if (radios.length > 0) {
      selectedRadio = $('#product-variants input[type="radio"][checked="checked"]');
      Spree.updateTotalUnits(selectedRadio);
    }

    var number_of_units = ($('span#number_of_units')).data('num-units');
    //var quantity_spinner = $('input#quantity');
    var quantity_spinner = document.getElementById('quantity');
    quantity_spinner.addEventListener("input", function(e) {
      Spree.updateQuantity(quantity_spinner);
    })

    return radios.click(function(event) {
      Spree.updateTotalUnits($(this));
      Spree.updateQuantity(quantity_spinner);
    });
  });

}).call(this);

