class LinkPollAndParticipant < ActiveRecord::Migration
  def change
    create_table :participants_polls do |t|
      t.belongs_to :poll
      t.belongs_to :participant
    end
  end
end
