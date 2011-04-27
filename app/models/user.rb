require 'digest'

class User < ActiveRecord::Base
  attr_accessor :password

  has_one :profile

  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  has_one :zide

  has_many :suggestions, :dependent => :destroy

  validates :name, :presence => true, :uniqueness =>true, :length => {:maximum => 30}
  validates :email, :presence => true, :uniqueness =>{ :case_sensitive => false}, :format => { :with => email_regex}

  validates :password, :presence => true, :confirmation => true, :length => {:within => 6..40}

  before_save :encrypt_password

  def has_password?(submitted_password)
    encrypted_password == encrypt(submitted_password)
  end

  def self.authenticate(username, submitted_password)
    user=find_by_name(username)
    return nil if user.nil?
    return user if user.has_password?(submitted_password)
  end

  def self.authenticate_with_salt(id, cookie_salt)
    user= find_by_id(id)
    (user && user.salt == cookie_salt) ? user : nil
  end

  private
    def encrypt_password
      self.encrypted_password=encrypt(password)
    end

    def encrypt(string)
      secure_hash("#{salt}--#{string}")
    end

    def make_salt
      secure_hash("#{Time.now.utc}--#{password}")
    end

    def secure_hash(string)
      Digest::SHA2.hexdigest(string)
    end

end
