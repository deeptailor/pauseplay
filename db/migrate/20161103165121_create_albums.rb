class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :name, null:false
      t.string :album_art_url
      t.integer :artist_id, null:false
      t.timestamps
    end
    add_index :albums, :name
  end
end
