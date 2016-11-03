class CreateArtists < ActiveRecord::Migration[5.0]
  def change
    create_table :artists do |t|
      t.string :name, null:false
      t.string :profile_image_url
      t.timestamps
    end
    add_index :artists, :name
  end
end
