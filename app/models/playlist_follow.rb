# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ActiveRecord::Base
  validates :playlist_id, :user_id, presence: true
  validates_uniqueness_of :user_id, :scope => [:playlist_id]

  belongs_to :user,
  inverse_of: :playlist_follows

  belongs_to :playlist,
  inverse_of: :playlist_follows
end
