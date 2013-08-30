class CreateDateChoiceChoices < ActiveRecord::Migration
  def change
    create_table :date_choice_choices do |t|
      t.datetime :date

      t.timestamps
    end
  end
end
