$ ->
  Spree.updateTotalUnits = (variant) ->
    unit_amount = variant.data('unit_amount')
    console.log(unit_amount)

  radios.click (event) ->
    Spree.updateTotalUnits ($ this)
