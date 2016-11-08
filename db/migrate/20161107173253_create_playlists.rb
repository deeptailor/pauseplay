class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :title, null:false
      t.text :description
      t.integer :owner_id, null:false
      t.boolean :public, null:false, default:false
      t.string :playlist_image_url
      t.timestamps
    end
    add_index :playlists, :owner_id
  end
end
