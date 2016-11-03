# == Schema Information
#
# Table name: artists
#
#  id                :integer          not null, primary key
#  name              :string           not null
#  profile_image_url :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence:true

  has_many :albums
  has_many :songs, through: :albums, source: :songs


end
