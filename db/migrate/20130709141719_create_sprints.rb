class CreateSprints < ActiveRecord::Migration
  def change
    create_table :sprints do |t|
      t.string :nom
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
