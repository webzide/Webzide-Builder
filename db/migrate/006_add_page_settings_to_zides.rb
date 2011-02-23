class AddPageSettingsToZides < ActiveRecord::Migration
  def self.up
    add_column :zides, :page_settings, :string
  end

  def self.down
    remove_column :zides, :page_settings
  end
end