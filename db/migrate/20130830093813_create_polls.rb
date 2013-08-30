class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.boolean :open
      t.datetime :open_date
      t.datetime :close_date

      t.timestamps
    end
  end
end
