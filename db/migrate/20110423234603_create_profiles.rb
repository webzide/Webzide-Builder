class CreateProfiles < ActiveRecord::Migration
  def self.up
    create_table :profiles do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.date :birthday
      t.string :gender
      t.string :about
      t.string :interests

      t.timestamps
    end

    add_index :profiles, :user_id
  end

  def self.down
    drop_table :profiles
  end
end
