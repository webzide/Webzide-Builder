class CreateZides < ActiveRecord::Migration
  def self.up
    create_table :zides do |t|
      t.string :code
      t.integer :user_id

      t.timestamps
    end
    add_index :zides, :user_id
  end

  def self.down
    drop_table :zides
  end
end