class User < ApplicationRecord
  has_many :bookings, dependent: :destroy

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
