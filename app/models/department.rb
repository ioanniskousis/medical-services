class Department < ApplicationRecord
  has_many :bookings, dependent: :destroy
end
