class AddIndexToZides < ActiveRecord::Migration
  def self.up
    add_index :zides, :user_id
  end

  def self.down
    remove_index :zides, :user_id
  end
end