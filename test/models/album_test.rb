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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
