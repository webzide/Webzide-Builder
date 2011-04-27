class CreateSuggestions < ActiveRecord::Migration
  def self.up
    create_table :suggestions do |t|
      t.string :content
      t.integer :user_id

      t.timestamps
    end
    add_index :suggestions, :user_id
  end

  def self.down
    drop_table :suggestions
  end
end
