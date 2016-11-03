class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.integer :album_id, null:false
      t.string :song_art_url
      t.string :audio_url,  null:false
      t.timestamps
    end
    add_index :songs, :title
  end
end
