module Spree
  ProductsController.class_eval do
    def flexible_units
      @products = Product.where('spree_products.units_on_hand is not null').uniq
    end
  end
end
