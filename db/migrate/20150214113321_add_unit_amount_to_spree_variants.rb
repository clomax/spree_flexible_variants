class AddUnitAmountToSpreeVariants < ActiveRecord::Migration
  def change
    add_column :spree_variants, :unit_amount, :integer, default: 0
  end
end
