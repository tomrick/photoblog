class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name
      t.references :photo

      t.timestamps
    end
    add_index :tags, :photo_id
  end
end
