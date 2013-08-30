class AddTracId < ActiveRecord::Migration
  def change
    add_column :tickets, :trac_id, :integer
  end
end
