class AddProjectIdToTickets < ActiveRecord::Migration
  def change
	add_column :tickets, :projet_id, :integer
	add_index :tickets, :projet_id
  end
end
