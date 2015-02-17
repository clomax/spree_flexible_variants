class AddUnitsOnHandsToSpreeProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :units_on_hand, :integer, default: 0
  end
end
