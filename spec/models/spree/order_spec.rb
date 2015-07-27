require 'spec_helper'

describe Spree::Order do
  let(:order) { create :order_with_line_items, line_items_count: 1 }
  let(:line_item) { order.line_items.first }

  context "#update_units_of_products" do
    it "should subtract the variant's unit amount from the product" do
      line_item.variant.product.cut_from_whole = true
      line_item.variant.product.units_on_hand = 4
      line_item.variant.unit_amount = 1
      order.update_units_of_products
      expect(line_item.variant.product.units_on_hand).to eq(3)
    end
  end

end
