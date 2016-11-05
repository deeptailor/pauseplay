# == Schema Information
#
# Table name: songs
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  album_id     :integer          not null
#  song_art_url :string
#  audio_url    :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Song < ActiveRecord::Base

  validates :title, :album_id, :audio_url, presence:true

  belongs_to :album
end
