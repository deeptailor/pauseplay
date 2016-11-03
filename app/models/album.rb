# == Schema Information
#
# Table name: albums
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  album_art_url :string
#  artist_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Album < ActiveRecord::Base

  validates :name, :artist_id, presence:true

  has_many :songs
  belongs_to :artist

end
