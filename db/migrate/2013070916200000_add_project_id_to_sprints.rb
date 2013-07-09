class AddProjectIdToSprints < ActiveRecord::Migration
  def change
	add_column :sprints, :projet_id, :integer
	add_index :sprints, :projet_id
  end
end
