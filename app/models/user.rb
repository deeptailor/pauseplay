# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  description       :text
#  profile_image_url :string
#  password_digest   :string           not null
#  session_token     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, :password_digest, :session_token, presence:true
  validates :username, uniqueness:true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many :playlists,
  class_name: :Playlist,
  primary_key: :id,
  foreign_key: :owner_id,
  dependent: :destroy

  has_many :playlist_follows,
  dependent: :destroy


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username:username)

    return nil unless user

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end



  private

  def self.generate_session_token
    SecureRandom.base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token:self.session_token)
      self.session_token = User.generate_session_token
    end
  end
end
