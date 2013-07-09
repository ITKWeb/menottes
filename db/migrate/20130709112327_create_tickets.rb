class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :titre
      t.string :description
      t.integer :importance
      t.integer :poids
      t.datetime :tempsPris

      t.timestamps
    end
  end
end
