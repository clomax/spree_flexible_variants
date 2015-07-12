class AddCutFromWholeToSpreeProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :cut_from_whole, :boolean, :default => false
  end
end
