# == Schema Information
#
# Table name: playlist_songs
#
#  id          :integer          not null, primary key
#  song_id     :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistSong < ActiveRecord::Base
  validates :song_id, :playlist_id, presence:true
  validates_uniqueness_of :playlist_id, :scope => [:song_id]

  belongs_to :song,
  inverse_of: :playlist_songs

  belongs_to :playlist,
  inverse_of: :playlist_songs
end
