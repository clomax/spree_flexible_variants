(function() {
  $(function() {
    var number_of_units, quantity, quantity_spinner, radios, selectedRadio, unit_amount;

    unit_amount = 1;
    quantity = 1;

    Spree.updateTotalUnits = function(ua) {
      return unit_amount = ua;
    };

    Spree.updateQuantity = function(n) {
      return quantity = n;
    };

    Spree.checkStock = function () {
      var inStock = (quantity*unit_amount) <= number_of_units;
      var button = document.getElementById('add-to-cart-button');
      if (inStock == true) {
        button.disabled = false;
        button.style.background="#808080";
        button.textContent = "Add To Cart";
      } else {
        button.disabled = true;
        button.style.background="#C00000";
        button.textContent = "Not Enough Stock";
      }
      return inStock;
    };


    var number_of_units = ($('span#number_of_units')).data('num-units');
    var flexible = ($('span#number_of_units')).data('flexible');
      if (flexible === true) {
        radios = $('#product-variants input[type="radio"]');
        if (radios.length > 0) {
          selectedRadio = $('#product-variants input[type="radio"][checked="checked"]');
          Spree.updateTotalUnits(selectedRadio.data('unitAmount'));
        }

        var quantity_spinner = document.getElementById('quantity');
        Spree.updateTotalUnits(unit_amount);
        Spree.updateQuantity(quantity);
        Spree.checkStock();

        quantity_spinner.addEventListener("input", function(e) {
          Spree.updateQuantity(quantity_spinner.valueAsNumber);
          return Spree.checkStock();
        })

        return radios.click(function(event) {
          Spree.updateTotalUnits($(this).data('unitAmount'));
          return Spree.checkStock();
        });
      }
    });
}).call(this);

