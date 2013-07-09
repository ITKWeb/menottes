class CreateProjets < ActiveRecord::Migration
  def change
    create_table :projets do |t|
      t.string :nom

      t.timestamps
    end
  end
end
