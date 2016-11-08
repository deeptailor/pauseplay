# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  description        :text
#  owner_id           :integer          not null
#  public             :boolean          default(FALSE), not null
#  playlist_image_url :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :title, :owner_id, :public, presence:true

  belongs_to :owner,
  inverse_of: :playlists,
  class_name: :User,
  primary_key: :id,
  foreign_key: :owner_id

  has_many :playlist_songs, dependent: :destroy

  has_many :songs, through: :playlist_songs, source: :song

  has_many :playlist_follows, dependent: :destroy

end
