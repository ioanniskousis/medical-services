class User < ApplicationRecord
  has_many :bookings, dependent: :destroy

  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
  
  def as_json(*)
    {
      id: id,
      username: username,
      password: password,
      fullname: fullname,
      email: email,
      admin: admin
    }
  end
end
