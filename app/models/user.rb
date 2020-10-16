class User < ApplicationRecord
  has_many :bookings, dependent: :destroy

  def as_json(options={})
    {
      id: self.id,
      username: self.username,
      password: self.password,
      fullname: self.fullname,
      email: self.email,
      admin: self.admin,
    }
  end
end
