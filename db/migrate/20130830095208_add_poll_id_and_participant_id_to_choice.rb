class AddPollIdAndParticipantIdToChoice < ActiveRecord::Migration
  def change
    add_column :choices, :poll_id, :integer
    add_index :choices, :poll_id
    add_column :choices, :participant_id, :integer
    add_index :choices, :participant_id
  end
end
