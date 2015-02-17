module Spree
  Order.class_eval do

  state_machine.after_transition from: :payment, do: :update_units_of_products

  def update_units_of_products
    line_items.each do |l|
      product = l.product
      if product.cut_from_whole?
        product.units_on_hand -= l.variant.unit_amount
        product.save!
      end
    end
  end

  end
end
